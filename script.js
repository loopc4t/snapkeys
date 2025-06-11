document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");
  const seeResultButton = document.getElementById("see-result-btn");
  const startButton = document.getElementById("start-quiz-btn");

  const staticTimerDiv = document.querySelector(".timer-display");
  const timerSpan = document.getElementById("timer");

  let currentQuestionIndex = -1;
  let score = 0;
  let answeredQuestions = 0;
  let usedQuestions = new Set();
  let wrongQuestionsQueue = [];
  const RETRY_AFTER = 5;

  const QUIZ_TIME = 20 * 60;
  let timeRemaining = QUIZ_TIME;
  let timerInterval;
  let isQuestionActive = false;

  // Initialize button visibility on load
  nextButton.style.display = "none"; // Hide Next button initially
  seeResultButton.style.display = "none"; // Hide See Result button initially

  // Show welcome message on load
  function showWelcomeMessage() {
    const welcomeMessage = `
      <div class="instructions-box">
        <h2><i class="fas fa-info-circle"></i> Welcome to SnapKeys. Learning what really matters.

</h2>
        <p>This app can help you improve your English grammar and build your vocabulary with useful collocations. However, it shouldn't be the main focus of your studies.</p>
        
        <p>The most important thing to understand when learning a second language is that language is a way to access information such as news, entertainment, and general knowledge. Your main goal should be to get that information, not just study grammar or vocabulary on their own.</p>
        
        <p>You should feel encouraged to absorb the language through modern English from TV shows, movies, podcasts, YouTube, books, or even by chatting with a chatbot. The key is to stay engaged with content that truly interests you.</p>
        
        <p>That's why I recommend using this app once or maybe twice a day as a way to reinforce what you're already learning through real-life content.</p>
        
        <div class="instruction-highlight">
          <i class="fas fa-rocket"></i>
          Ready to test your English skills? Click "Start Quiz" when you're ready!
        </div>
      </div>
    `;
    quizForm.innerHTML = welcomeMessage;
  }

  // Function to generate stars dynamically
  function createStarfield() {
    const starfield = document.querySelector(".starfield");
    starfield.innerHTML = ""; // Clear existing stars
    const baseStars = 50; // Increased star count
    const numStars = Math.floor(baseStars * (window.innerWidth / 1920) * 1.5); // Scale with screen width (e.g., ~50 on 1920px, ~25 on 960px)
    const colors = ["#ffffff", "#add8e6", "#ffeb3b", "#e6e6fa"]; // White, light blue, yellow, lavender
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      const size = Math.random() * 1.5 + 0.5; // 0.5-2px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${Math.random() * 6 + 8}s, ${
        Math.random() * 0.8 + 1.2
      }s`; // Movement: 8-14s, Twinkle: 1.2-2s
      star.style.animationDelay = `${Math.random() * 5}s, ${
        Math.random() * 1
      }s`;
      star.style.background = colors[Math.floor(Math.random() * colors.length)]; // Random color
      starfield.appendChild(star);
    }
  }

  // Initialize starfield and welcome message on page load
  createStarfield();
  showWelcomeMessage();

  // Re-generate starfield on window resize for responsiveness
  window.addEventListener("resize", createStarfield);

  function initializeTimer() {
    staticTimerDiv.style.display = "block";
    updateTimerDisplay();

    timerInterval = setInterval(function () {
      timeRemaining--;
      updateTimerDisplay();

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        endQuiz("timeout");
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerSpan.textContent = `Time Remaining: ${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    if (timeRemaining <= 60) {
      staticTimerDiv.classList.add("timer-warning");
    } else {
      staticTimerDiv.classList.remove("timer-warning");
    }
  }

  function getProficiencyLevel(percentage) {
    if (percentage >= 95) return "C2 - Proficient Level";
    else if (percentage >= 90) return "C1 - Advanced Level";
    else if (percentage >= 80) return "B2 - Upper-Intermediate Level";
    else if (percentage >= 70) return "B1 - Intermediate Level";
    else if (percentage >= 60) return "A2 - Pre-Intermediate Level";
    else return "A1 - Beginners Level";
  }

  function showFeedback(isCorrect, correctAnswer) {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = isCorrect
      ? "feedback-correct"
      : "feedback-incorrect";
    feedbackDiv.textContent = isCorrect
      ? "Correct! ✓"
      : `Incorrect. The correct answer was: ${correctAnswer}`;
    resultDiv.innerHTML = "";
    resultDiv.appendChild(feedbackDiv);
  }

  function getNextQuestionIndex() {
    if (wrongQuestionsQueue.length > 0) {
      const nextWrongQuestion = wrongQuestionsQueue[0];
      if (nextWrongQuestion.retriesAfter <= answeredQuestions) {
        wrongQuestionsQueue.shift();
        return nextWrongQuestion.questionIndex;
      }
    }

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quizData.length);
    } while (usedQuestions.has(newIndex));

    return newIndex;
  }

  function handleAnswerSelection(selectedOption, optionIndex) {
    const question = quizData[currentQuestionIndex];
    const isCorrect = selectedOption === question.answer;

    if (isCorrect) {
      score++;
      usedQuestions.add(currentQuestionIndex);
    } else {
      wrongQuestionsQueue.push({
        questionIndex: currentQuestionIndex,
        retriesAfter: answeredQuestions + RETRY_AFTER,
      });
    }

    answeredQuestions++;
    showFeedback(isCorrect, question.answer);
    nextButton.disabled = false;
    isQuestionActive = false;

    document.querySelectorAll('input[type="radio"]').forEach((radio, index) => {
      radio.disabled = true;
      if (index === optionIndex) {
        radio.parentElement.style.backgroundColor = isCorrect
          ? "rgba(152, 195, 121, 0.3)"
          : "rgba(224, 108, 117, 0.3)";
      }
    });

    if (
      usedQuestions.size === quizData.length &&
      wrongQuestionsQueue.length === 0
    ) {
      nextButton.style.display = "none";
      seeResultButton.style.display = "inline-block";
    }
  }

  function displayRandomQuestion() {
    quizForm.innerHTML = "";
    resultDiv.innerHTML = "";

    if (
      usedQuestions.size === quizData.length &&
      wrongQuestionsQueue.length === 0
    ) {
      usedQuestions.clear();
    }

    currentQuestionIndex = getNextQuestionIndex();
    const question = quizData[currentQuestionIndex];

    const questionText = document.createElement("p");
    questionText.className = "question";
    questionText.textContent = `Question ${answeredQuestions + 1}: ${
      question.question
    }`;
    quizForm.appendChild(questionText);

    const shortcutHint = document.createElement("div");
    shortcutHint.className = "keyboard-hint";
    shortcutHint.innerHTML = `<i class="fas fa-keyboard"></i> Use keys 1-${question.options.length} to select, Enter to proceed`;
    quizForm.appendChild(shortcutHint);

    question.options.forEach((option, index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "question";
      input.value = option;

      const numberSpan = document.createElement("span");
      numberSpan.className = "option-number";
      numberSpan.textContent = `${index + 1}`;

      input.addEventListener("change", () => {
        handleAnswerSelection(option, index);
      });

      label.appendChild(numberSpan);
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      quizForm.appendChild(label);
    });

    nextButton.style.display = "inline-block";
    seeResultButton.style.display = "none";
    nextButton.disabled = true;
    isQuestionActive = true;
  }

  document.addEventListener("keydown", function (event) {
    if (
      startButton.style.display !== "none" &&
      startButton.style.display !== ""
    ) {
      return;
    }

    if (event.key >= "1" && event.key <= "9" && isQuestionActive) {
      const optionIndex = parseInt(event.key) - 1;
      const radioButtons = document.querySelectorAll('input[type="radio"]');

      if (
        optionIndex < radioButtons.length &&
        !radioButtons[optionIndex].disabled
      ) {
        event.preventDefault();
        radioButtons[optionIndex].checked = true;
        radioButtons[optionIndex].dispatchEvent(new Event("change"));
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();

      if (!nextButton.disabled && nextButton.style.display !== "none") {
        nextButton.click();
      } else if (seeResultButton.style.display !== "none") {
        seeResultButton.click();
      }
    }

    if (
      event.key === " " &&
      startButton.style.display !== "none" &&
      startButton.style.display !== ""
    ) {
      event.preventDefault();
      startButton.click();
    }
  });

  function endQuiz(reason) {
    quizForm.innerHTML = "";
    nextButton.style.display = "none";
    seeResultButton.style.display = "none";
    staticTimerDiv.style.display = "none";
    clearInterval(timerInterval);
    isQuestionActive = false;

    const percentageScore =
      answeredQuestions > 0 ? Math.round((score / answeredQuestions) * 100) : 0;
    const proficiencyLevel = getProficiencyLevel(percentageScore);
    const MIN_QUESTIONS_REQUIRED = 50;

    let resultsContent = `
      <div class="final-result">
        ${reason === "timeout" ? "Time's Up!" : "Quiz Completed!"}<br>
        Final Score: ${score} out of ${answeredQuestions}!<br>
        ${answeredQuestions > 0 ? `(${percentageScore}%)<br>` : ""}
    `;

    if (answeredQuestions >= MIN_QUESTIONS_REQUIRED) {
      resultsContent += `<div class="proficiency-level">Your Proficiency Level: ${proficiencyLevel}</div>`;
    } else {
      resultsContent += `<div class="insufficient-questions">You need to answer at least ${MIN_QUESTIONS_REQUIRED} questions to receive a proficiency level assessment.<br>You answered ${answeredQuestions} questions.</div>`;
    }

    resultsContent += `</div>`;
    resultDiv.innerHTML = resultsContent;

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", function () {
      resetQuiz();
    });
    resultDiv.appendChild(restartButton);
  }

  function resetQuiz() {
    score = 0;
    answeredQuestions = 0;
    usedQuestions.clear();
    wrongQuestionsQueue = [];
    timeRemaining = QUIZ_TIME;
    clearInterval(timerInterval);
    resultDiv.textContent = "";
    quizForm.textContent = "";
    staticTimerDiv.style.display = "none";
    isQuestionActive = false;
    startButton.style.display = "inline-block";
    // Ensure Next and See Result buttons are hidden on reset
    nextButton.style.display = "none";
    seeResultButton.style.display = "none";
    createStarfield();
    showWelcomeMessage(); // Show welcome message again after reset
  }

  startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    initializeTimer();
    displayRandomQuestion();
    // nextButton.style.display = "inline-block"; // This is now handled by displayRandomQuestion
  });

  nextButton.addEventListener("click", function () {
    displayRandomQuestion();
  });

  seeResultButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    endQuiz("completed");
  });
});
