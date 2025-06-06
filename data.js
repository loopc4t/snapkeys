const quizData = [
  {
    question:
      "A friend of mine _____ birth to her son at home with the help of a nurse.",
    options: ["gave", "taken", "went"],
    answer: "gave",
  },
  {
    question: "A number of the kids in my classroom come from _____ homes.",
    options: ["damaged", "broken", "hurt"],
    answer: "broken",
  },
  {
    question:
      "After a _____ divorce from his wife of 20 years, the actor married a woman young enough to be his daughter.",
    options: ["bitter", "cruel", "hostile"],
    answer: "bitter",
  },
  {
    question:
      "I see my _____ family once a year, during our annual family vacation.",
    options: ["excepted", "expanded", "extended"],
    answer: "extended",
  },
  {
    question:
      "I was raised in a very _____ family, in which everyone helped each other.",
    options: ["joyful", "loving", "tender"],
    answer: "loving",
  },
  {
    question: "I was _____ by my grandparents after my parents passed away.",
    options: ["created", "grown", "raised"],
    answer: "raised",
  },
  {
    question: "I'm on good _____ with all my former boyfriends.",
    options: ["friends", "relations", "terms"],
    answer: "terms",
  },
  {
    question:
      "John had a _____ childhood, growing up with happily married parents and three brothers.",
    options: ["careful", "carefree", "careless"],
    answer: "carefree",
  },
  {
    question: "Many women regret _____ an abortion years afterwards.",
    options: ["giving", "having", "taking"],
    answer: "having",
  },
  {
    question:
      "My aunt's going through a _____ divorce; she's paying a fortune in legal fees.",
    options: ["messy", "sloppy", "untidy"],
    answer: "messy",
  },
  {
    question: "My husband doesn't get along with a few of my family _____ .",
    options: ["people", "individuals", "members"],
    answer: "members",
  },
  {
    question:
      "Although my salary is low, I get child _____ from my ex-husband.",
    options: ["assistance", "provision", "support"],
    answer: "support",
  },
  {
    question: "My sister _____ pregnant immediately after she got married.",
    options: ["got", "had", "made"],
    answer: "got",
  },
  {
    question:
      "My son is making a diagram of our family _____ for a school project.",
    options: ["roots", "tree", "web"],
    answer: "tree",
  },
  {
    question: "My wife is pregnant with twins. They're _____ in February.",
    options: ["come", "due", "here"],
    answer: "due",
  },
  {
    question:
      "Sally was granted sole _____ of the children from her first marriage.",
    options: ["custody", "guardian", "keeping"],
    answer: "custody",
  },
  {
    question:
      "Teenagers who had a _____ childhood often have behavior problems in school.",
    options: ["distressed", "troubled", "worsened"],
    answer: "troubled",
  },
  {
    question: "The celebrity wrote a book about his _____ family.",
    options: ["debilitated", "defective", "dysfunctional"],
    answer: "dysfunctional",
  },
  {
    question: "The divorce _____ awarded the wife $500,000.",
    options: ["contract", "reimbursement", "settlement"],
    answer: "settlement",
  },
  {
    question: "There are four people in my _____ family.",
    options: ["close", "immediate", "neighboring"],
    answer: "immediate",
  },
  {
    question: "They have three biological children and two _____ children.",
    options: ["adopted", "adoptive", "adopting"],
    answer: "adopted",
  },
  {
    question: "The process of creating friendships is called...",
    options: ["earning friends", "getting friends", "making friends"],
    answer: "making friends",
  },
  {
    question: 'A "close friend" is someone...',
    options: [
      "who is similar to you",
      "who lives near you",
      "with whom you have a strong friendship",
    ],
    answer: "with whom you have a strong friendship",
  },
  {
    question:
      "When you develop romantic feelings for another person, you're...",
    options: ["becoming passionate", "falling in love", "giving your heart"],
    answer: "falling in love",
  },
  {
    question:
      "If only one of the two people has romantic feelings, we say the feeling is not...",
    options: ["mutual", "returned", "together"],
    answer: "mutual",
  },
  {
    question:
      "A polite way to say you're not attracted to someone is: \"He/she's not my...\"",
    options: ["kind", "style", "type"],
    answer: "type",
  },
  {
    question:
      "A man who marries a woman who he met when both were very young, has married his childhood...",
    options: ["darling", "lover", "sweetheart"],
    answer: "sweetheart",
  },
  {
    question:
      "When two people get married, they make a ___________ to each other.",
    options: ["commitment", "compromise", "guarantee"],
    answer: "commitment",
  },
  {
    question:
      "Many men try to find a creative and romantic way to __________ to their girlfriends.",
    options: ["propose", "proposition", "purpose"],
    answer: "propose",
  },
  {
    question: "A lot of marriages end when one member of the couple has an...",
    options: ["affair", "experience", "intimacy"],
    answer: "affair",
  },
  {
    question:
      "If you catch your significant other in bed with another person, then he/she is _________ on you.",
    options: ["betraying", "cheating", "deceiving"],
    answer: "cheating",
  },
  {
    question:
      "A lot of successful entrepreneurs have not only a ______ imagination, but also the willingness to work hard.",
    options: ["bright", "lucid", "vivid"],
    answer: "vivid",
  },
  {
    question: "He really hurt my ______ when he called me an idiot.",
    options: ["emotions", "feelings", "senses"],
    answer: "feelings",
  },
  {
    question:
      "His superiority ______ makes him impossible to work with because he won't listen to suggestions.",
    options: ["belief", "complex", "tendency"],
    answer: "complex",
  },
  {
    question:
      "I had to ______ my pride and apologize to Janet for overreacting to her criticism.",
    options: ["chew", "eat", "swallow"],
    answer: "swallow",
  },
  {
    question: "I like to date men with a great ______ of humor.",
    options: ["feel", "sense", "touch"],
    answer: "sense",
  },
  {
    question:
      "In some cultures, it's considered very rude to ______ your mind.",
    options: ["say", "speak", "talk"],
    answer: "speak",
  },
  {
    question:
      "It's good to ______ others first, but not at the expense of your own well-being.",
    options: ["get", "put", "set"],
    answer: "put",
  },
  {
    question:
      "Most people who work as comedians have very ______ personalities.",
    options: ["outgoing", "tendency", "upcoming"],
    answer: "outgoing",
  },
  {
    question:
      "My brother is ______ shy, but I'm trying to encourage him to come out of his ______.",
    options: ["brutally / case", "carefully / skin", "painfully / shell"],
    answer: "painfully / shell",
  },
  {
    question:
      "My daughter gets along with her classmates, but she has a competitive ______ when it comes to academics.",
    options: ["spot", "streak", "strip"],
    answer: "streak",
  },
  {
    question:
      "My husband forgives other people very easily; he's not one to ______ a grudge.",
    options: ["bear", "hurt", "swallow"],
    answer: "bear",
  },
  {
    question:
      "She would never cheat on her husband; she's ______ loyal to him.",
    options: ["angrily", "brutally", "fiercely"],
    answer: "fiercely",
  },
  {
    question:
      "The kids were suspended for playing a ______ on the teacher - they put a live snake inside her desk.",
    options: ["grudge", "prank", "streak"],
    answer: "prank",
  },
  {
    question:
      "Working with a therapist has helped me overcome my problems with ______ self-esteem.",
    options: ["deep", "low", "small"],
    answer: "low",
  },
  {
    question:
      "You need to develop a ______ skin; you can't let every little comment upset you.",
    options: ["fatter", "harder", "thicker"],
    answer: "thicker",
  },
  {
    question:
      "At his mother's funeral, he was so ______ with emotion that he couldn't finish his speech.",
    options: ["incapacitated", "overwhelmed", "seething"],
    answer: "overwhelmed",
  },
  {
    question:
      "I was ______ surprised by the excellent customer service - that company really cares about its customers.",
    options: ["deeply", "pleasantly", "significantly"],
    answer: "pleasantly",
  },
  {
    question:
      "I'm sorry I ______ my temper with you yesterday. It was a really stressful day at work.",
    options: ["forgot", "lost", "wrecked"],
    answer: "lost",
  },
  {
    question:
      "Instead of confronting his issues, he ______ up his emotions and tries to pretend everything's OK.",
    options: ["bottles", "guards", "rolls up"],
    answer: "bottles",
  },
  {
    question:
      "It's normal to go through a ______ of emotions after the end of a long-term relationship.",
    options: ["helicopter", "roller coaster", "ocean wave"],
    answer: "roller coaster",
  },
  {
    question:
      "My mother was worried ______ when it passed midnight and my brother still hadn't come home.",
    options: ["bad", "ill", "sick"],
    answer: "sick",
  },
  {
    question:
      "The boss was ______ annoyed when the employees told him about the problems.",
    options: ["pleasantly", "sickly", "visibly"],
    answer: "visibly",
  },
  {
    question:
      "The fans were seething with ______ when the team lost the game in the last 5 minutes.",
    options: ["anger", "disappointment", "temper"],
    answer: "anger",
  },
  {
    question:
      "We're ______ sorry, but we won't be able to go to your graduation.",
    options: ["badly", "horribly", "terribly"],
    answer: "terribly",
  },
  {
    question:
      "We're ______ grateful for all the help you've given us in this project.",
    options: ["blissfully", "immensely", "largely"],
    answer: "immensely",
  },
  {
    question: "Her father paid the ______ payment on her apartment.",
    options: ["affordable", "down", "studio"],
    answer: "down",
  },
  {
    question:
      "I can't stand living with my parents; I need a place of my ______.",
    options: ["independent", "own", "short-term"],
    answer: "own",
  },
  {
    question:
      "I hope the apartment is ______, because I can't afford to buy appliances.",
    options: ["decorated", "furnished", "upscale"],
    answer: "furnished",
  },
  {
    question:
      "I was having so much fun during my semester abroad that I didn't feel ______ at all.",
    options: ["cramped", "homesick", "housewarm"],
    answer: "homesick",
  },
  {
    question: "It's a ten- ______ building with two elevators.",
    options: ["level", "room", "story"],
    answer: "story",
  },
  {
    question: "My bedroom window ______ the mountains.",
    options: ["overlooks", "oversees", "overviews"],
    answer: "overlooks",
  },
  {
    question: "My parents finished paying off their ______ after 25 years.",
    options: ["borrow", "budget", "mortgage"],
    answer: "mortgage",
  },
  {
    question: "This weekend I'm helping my cousin ______ into his new place.",
    options: ["change", "move", "turn into"],
    answer: "move",
  },
  {
    question:
      "We're going to need a more ______ apartment now that we're going to have a baby.",
    options: ["short-term", "spacious", "widespread"],
    answer: "spacious",
  },
  {
    question:
      "We're ______ the bathroom, so you'll have to use the one on the second floor.",
    options: ["regenerating", "rejuvenating", "remodeling"],
    answer: "remodeling",
  },
  {
    question:
      "A movie from an amateur filmmaker was ______ for three awards at an international film festival.",
    options: ["based", "nominated", "presented"],
    answer: "nominated",
  },
  {
    question:
      "Did you see the ______ for the new Star Wars movie? It looks like it'll be awesome!",
    options: ["trailer", "trilogy", "theater"],
    answer: "trailer",
  },
  {
    question: "The opening ______ of the movie is very violent.",
    options: ["chapter", "genre", "scene"],
    answer: "scene",
  },
  {
    question:
      "I didn't like the ______ of the movie; it just didn't seem believable.",
    options: ["close", "end", "finish"],
    answer: "end",
  },
  {
    question:
      "I enjoyed the book because I could really identify with the main ______.",
    options: ["character", "role", "star"],
    answer: "character",
  },
  {
    question: "It was a very moving film - and it was based on a ______ story.",
    options: ["factual", "real", "true"],
    answer: "true",
  },
  {
    question:
      "It's an enjoyable ______, written in a humorous and relatable style.",
    options: ["page", "read", "scene"],
    answer: "read",
  },
  {
    question: "Oh no! I lost a book that I ______ from the library.",
    options: ["borrowed", "loaned", "returned"],
    answer: "borrowed",
  },
  {
    question: "The documentary deals with a number of ______ topics.",
    options: ["controversial", "debatable", "polemic"],
    answer: "controversial",
  },
  {
    question:
      "The first movie was excellent, but the sequel got mediocre ______.",
    options: ["analyses", "critics", "reviews"],
    answer: "reviews",
  },
  {
    question: "The movie Titanic ______ Leonardo DiCaprio and Kate Winslet.",
    options: ["hits", "shoots", "stars"],
    answer: "stars",
  },
  {
    question:
      "We couldn't get a ticket for ______ night - they were all sold out.",
    options: ["initial", "opening", "beginning"],
    answer: "opening",
  },
  {
    question:
      "Barbara has ______ a new world record, with 5 consecutive Olympic gold medals in judo.",
    options: ["made", "put", "set"],
    answer: "set",
  },
  {
    question: "Do you want to ______ hiking with us this weekend?",
    options: ["do", "go", "play"],
    answer: "go",
  },
  {
    question: "How long have you been ______ football?",
    options: ["doing", "going", "playing"],
    answer: "playing",
  },
  {
    question: "I ______ volleyball in college.",
    options: ["did", "played", "went"],
    answer: "played",
  },
  {
    question:
      "If a soccer game is ______, they do penalty kicks to determine the winner.",
    options: ["failed", "led", "tied"],
    answer: "tied",
  },
  {
    question: "Jeff and Diana ______ rock climbing in the mountains.",
    options: ["did", "played", "went"],
    answer: "went",
  },
  {
    question: "My son wants to ______ karate.",
    options: ["do", "go", "play"],
    answer: "do",
  },
  {
    question: "Our team won third ______ in the basketball tournament.",
    options: ["lead", "place", "record"],
    answer: "place",
  },
  {
    question: "She's been ______ gymnastics since she was 5 years old.",
    options: ["doing", "going", "playing"],
    answer: "doing",
  },
  {
    question:
      "The baseball team was unable to make a ______ and lost the game 5-2.",
    options: ["comeback", "setback", "takeback"],
    answer: "comeback",
  },
  {
    question:
      "The biker from Australia currently has the ______, but the bikers from Russia and Peru are close behind.",
    options: ["best", "first", "lead"],
    answer: "lead",
  },
  {
    question:
      "The ice skater ______ from the competition due to a knee injury.",
    options: ["broke", "removed", "withdrew"],
    answer: "withdrew",
  },
  {
    question: "The runners were stretching before the ______ began.",
    options: ["match", "race", "test"],
    answer: "race",
  },
  {
    question:
      "Tim Randall has ______ a personal best with his time of 23.04 seconds.",
    options: ["achieved", "enhanced", "won"],
    answer: "achieved",
  },
  {
    question: "What was the final ______ of the baseball game?",
    options: ["place", "record", "score"],
    answer: "score",
  },
  {
    question:
      "After my computer was stolen, I was so glad I had ______ all my data on an external hard drive.",
    options: ["backed up", "locked up", "started up"],
    answer: "backed up",
  },
  {
    question:
      "Could I use your computer for a minute? I'd like to ______ my e-mail.",
    options: ["check", "look", "verify"],
    answer: "check",
  },
  {
    question:
      "Do I need to ______ a special program to be able to view this video?",
    options: ["attach", "implement", "install"],
    answer: "install",
  },
  {
    question: "I ______ you a CD of some of my favorite music.",
    options: ["burned", "locked", "scanned"],
    answer: "burned",
  },
  {
    question:
      "I can't check the event schedule online because the conference website seems to be ______.",
    options: ["off", "down", "frozen"],
    answer: "down",
  },
  {
    question:
      "If you want more space on your hard drive, you should ______ old files that you no longer need.",
    options: ["crash", "delete", "shut down"],
    answer: "delete",
  },
  {
    question:
      "I'm trying to ______ my account, but I can't remember the password.",
    options: ["log into", "start up", "reboot"],
    answer: "log into",
  },
  {
    question:
      "More and more people are ______ the web on their cell phones nowadays.",
    options: ["getting", "scanning", "surfing"],
    answer: "surfing",
  },
  {
    question:
      "My computer ______ when I have too many programs open at the same time.",
    options: ["down", "freezes", "infected"],
    answer: "freezes",
  },
  {
    question:
      "Never open attachments from people you don't know - they could ______ your computer with a virus.",
    options: ["disease", "infect", "lock up"],
    answer: "infect",
  },
  {
    question:
      "The boss wants everyone to ______ their computers before leaving work.",
    options: ["close", "shut down", "turn out"],
    answer: "shut down",
  },
  {
    question: "You forgot to ______ the file to your message.",
    options: ["add", "annex", "attach"],
    answer: "attach",
  },
  {
    question: "Christine has been a _____ school teacher for many years.",
    options: ["central", "medium", "middle"],
    answer: "middle",
  },
  {
    question:
      "Could you give me some _____ on my presentation? I'd like to know how to improve it.",
    options: ["concentration", "degree", "feedback"],
    answer: "feedback",
  },
  {
    question: "He's _____ to all the best universities in the country.",
    options: ["applying", "submitting", "trying"],
    answer: "applying",
  },
  {
    question:
      "I think I got every question on the exam wrong - I have no doubt that I _____.",
    options: ["dropped", "failed", "lost"],
    answer: "failed",
  },
  {
    question: "I'm _____ a course on Latin American politics.",
    options: ["having", "taking", "going"],
    answer: "taking",
  },
  {
    question: "My daughter's 12 - she's in sixth _____ .",
    options: ["class", "grade", "level"],
    answer: "grade",
  },
  {
    question:
      "My father promised he'd buy me a car if I _____ good grades in my final year of high school.",
    options: ["got", "made", "took"],
    answer: "got",
  },
  {
    question:
      "No, my son hasn't chosen a _____ yet. He's debating between sociology and anthropology.",
    options: ["degree", "major", "series"],
    answer: "major",
  },
  {
    question: "She _____ from the University of California in 1999.",
    options: ["awarded", "formed", "graduated"],
    answer: "graduated",
  },
  {
    question:
      "The professor took ten points off my test because I _____ a few minutes late.",
    options: ["gave it up", "handed it in", "passed it"],
    answer: "handed it in",
  },
  {
    question:
      "The top five students in the class were _____ a scholarship to a local college.",
    options: ["awarded", "submitted", "withdrawn"],
    answer: "awarded",
  },
  {
    question:
      "This topic will be on the test - make sure to take detailed _____ .",
    options: ["lectures", "notes", "writings"],
    answer: "notes",
  },
  {
    question:
      "I wasn't convinced by the article; I didn't think the author adequately _____ his claims.",
    options: ["helped", "provided", "supported"],
    answer: "supported",
  },
  {
    question:
      "In her book, Clara Jones aims to _____ the dominant theory using five main counter-arguments.",
    options: ["refuse", "revise", "refute"],
    answer: "refute",
  },
  {
    question: "Steve Jobs' leadership was a _____ factor in Apple's success.",
    options: ["brief", "perfect", "key"],
    answer: "key",
  },
  {
    question: "The first _____ of his report was full of factual errors.",
    options: ["case", "draft", "try"],
    answer: "draft",
  },
  {
    question:
      "The reasons for the war fall into two main _____: political reasons and economic reasons.",
    options: ["categories", "summaries", "theories"],
    answer: "categories",
  },
  {
    question:
      "The trajectory of the country after 1930 is a clear _____ of Smith's theory in action.",
    options: ["clear", "obvious", "illustration"],
    answer: "illustration",
  },
  {
    question:
      "These thought-provoking poems _____ questions about what it means to love unconditionally.",
    options: ["draw", "make", "raise"],
    answer: "raise",
  },
  {
    question:
      "This essay _____ parallels between the main character in the novel and the author's life.",
    options: ["draws", "goes", "proves"],
    answer: "draws",
  },
  {
    question:
      "This paragraph has nothing to do with any of your main _____, you should get rid of it.",
    options: ["cases", "outlines", "points"],
    answer: "points",
  },
  {
    question: "We'd like to _____ on several issues in today's meeting.",
    options: ["carry out", "fall into", "touch on"],
    answer: "touch on",
  },
  {
    question: "Are you _____ any bags today?",
    options: ["adding", "bumping", "checking"],
    answer: "checking",
  },
  {
    question: "Hello, I need to change the dates of my hotel _____.",
    options: ["district", "layover", "reservation"],
    answer: "reservation",
  },
  {
    question: "I always try to get a window _____ on long flights.",
    options: ["chair", "seat", "spot"],
    answer: "seat",
  },
  {
    question:
      "I won't be in the office next week - I'll be on a business _____.",
    options: ["flight", "travel", "trip"],
    answer: "trip",
  },
  {
    question:
      "On their honeymoon, Will and Cassie spent a week at a _____ hotel.",
    options: ["five-star", "ten-point", "gold-star"],
    answer: "five-star",
  },
  {
    question: "Sorry, sir, but your _____ bag is too heavy.",
    options: ["bring-in", "carry-on", "take-up"],
    answer: "carry-on",
  },
  {
    question: "The gate number is printed on your _____ pass.",
    options: ["boarding", "checking", "entering"],
    answer: "boarding",
  },
  {
    question:
      "The rooms of the hotel were nice, but the fitness center was rather _____.",
    options: ["dingy", "red-light", "one-star"],
    answer: "dingy",
  },
  {
    question: "The _____ is offering a great deal on a 5-day package in Miami.",
    options: ["travel agency", "organization", "department"],
    answer: "travel agency",
  },
  {
    question: "We felt sick on the plane because the flight was really _____.",
    options: ["bumpy", "seedy", "messy"],
    answer: "bumpy",
  },
  {
    question: "You should _____ your flight now, before prices go up.",
    options: ["book", "make", "set"],
    answer: "book",
  },
  {
    question:
      "Don't bother going to the village - it's not _____ the trip, there's really nothing to see.",
    options: ["merit", "value", "worth"],
    answer: "worth",
  },
  {
    question:
      "From our window, we had an unobstructed _____ of the castle up on the mountain.",
    options: ["look", "sight", "view"],
    answer: "view",
  },
  {
    question:
      "If you want more privacy, there's a _____ beach an hour's drive outside the city.",
    options: ["secluded", "unobstructed", "winding"],
    answer: "secluded",
  },
  {
    question:
      "Moving from New York City to a small farm in the midwest was quite a dramatic change of _____ .",
    options: ["face", "scenery", "view"],
    answer: "scenery",
  },
  {
    question:
      "The all-day _____ trip leaves at 7 AM every morning and takes you to 5 different islands.",
    options: ["boat", "sailor", "ship"],
    answer: "boat",
  },
  {
    question: "The hikers tried to find the trail through the _____ forest.",
    options: ["dense", "heavy", "jagged"],
    answer: "dense",
  },
  {
    question:
      "The stream is quite _____ - the water only comes up to your ankles.",
    options: ["gentle", "lush", "shallow"],
    answer: "shallow",
  },
  {
    question: "This mountain _____ extends north to Canada.",
    options: ["range", "scenery", "span"],
    answer: "range",
  },
  {
    question: "We went bird-watching in the _____ preserve.",
    options: ["countryside", "fauna", "wildlife"],
    answer: "wildlife",
  },
  {
    question: "You can't get there by car; you have to take the _____ .",
    options: ["footpath", "footroad", "footstreet"],
    answer: "footpath",
  },
  {
    question: "After being _____ from prison, Jim found it hard to get a job.",
    options: ["evacuated", "left", "released"],
    answer: "released",
  },
  {
    question:
      "Although everyone believes she's guilty, the evidence was too _____ for a conviction.",
    options: ["appealed", "inconclusive", "refutable"],
    answer: "inconclusive",
  },
  {
    question:
      "Due to his links to terrorist groups, Mr. Smith represents a _____ to society.",
    options: ["battle", "death", "threat"],
    answer: "threat",
  },
  {
    question: "He was declared innocent by a _____ jury.",
    options: ["unanimous", "uniform", "universal"],
    answer: "unanimous",
  },
  {
    question:
      "I couldn't believe what a light _____ she got - a mere 30 days in jail!",
    options: ["conviction", "sentence", "threat"],
    answer: "sentence",
  },
  {
    question:
      "I don't support the death _____ - I think everyone deserves a chance to change.",
    options: ["pain", "penalty", "punishment"],
    answer: "penalty",
  },
  {
    question:
      "Patty and her ex-husband are involved in a prolonged _____ battle over the ownership of their house.",
    options: ["lawful", "legal", "trial"],
    answer: "legal",
  },
  {
    question:
      "Ron will stand _____ for an assault charge after hitting his girlfriend.",
    options: ["court", "jury", "trial"],
    answer: "trial",
  },
  {
    question: "The banking executive was _____ with fraud.",
    options: ["charged", "stood", "upheld"],
    answer: "charged",
  },
  {
    question: "The U.S. government just _____ a new law about immigration.",
    options: ["hung", "passed", "served"],
    answer: "passed",
  },
  {
    question:
      "There was _____ evidence that the doctor had falsified the records.",
    options: ["concrete", "enforced", "harsh"],
    answer: "concrete",
  },
  {
    question: "They haven't yet reached a _____ in the kidnapping case.",
    options: ["court", "parole", "verdict"],
    answer: "verdict",
  },
  {
    question:
      "He worked on fixing the computer for two _____ hours before giving up and calling tech support.",
    options: ["compact", "solid", "tight"],
    answer: "solid",
  },
  {
    question: "He's always in a _____; he never has time to chat.",
    options: ["press", "quick", "rush"],
    answer: "rush",
  },
  {
    question:
      "I have a _____ schedule this semester - classes from Monday to Friday, 7 AM to 7 PM!",
    options: ["consuming", "grueling", "ungodly"],
    answer: "grueling",
  },
  {
    question:
      "I _____ the assignment to the last minute and then stayed up all night to write it.",
    options: ["left", "spent", "took"],
    answer: "left",
  },
  {
    question: "In my _____ time, I like to read.",
    options: ["rush", "spare", "stick"],
    answer: "spare",
  },
  {
    question:
      "Organizing all these files is very time-_____; I wish I had someone to help me.",
    options: ["consuming", "pressing", "falling"],
    answer: "consuming",
  },
  {
    question: "She's a fitness nut; she _____ ten hours a week at the gym.",
    options: ["passes", "runs", "spends"],
    answer: "spends",
  },
  {
    question:
      "_____ as much time as you need to review this information - we don't need a response right away.",
    options: ["Leave", "Take", "Waste"],
    answer: "Take",
  },
  {
    question:
      "The _____ of time my daughter spends on her cell phone is unbelievable.",
    options: ["amount", "quantity", "portion"],
    answer: "amount",
  },
  {
    question:
      "The company is offering training in time _____ to improve the efficiency of its staff.",
    options: ["administration", "commitment", "management"],
    answer: "management",
  },
  {
    question:
      "There is a strict _____ for the delivery of this shipment - it must arrive by January 1, otherwise we'll lose the contract.",
    options: ["deadline", "limit", "period"],
    answer: "deadline",
  },
  {
    question: "There's a slowdown on highway I-84 due to _____ traffic.",
    options: ["rush hour", "time", "span"],
    answer: "rush hour",
  },
  {
    question:
      "We've fallen _____ on our English lessons; the class is on Lesson 10 but we're on Lesson 6.",
    options: ["back", "before", "behind"],
    answer: "behind",
  },
  {
    question: "You need to schedule your dentist appointment two weeks _____ .",
    options: ["in advance", "ahead", "forward"],
    answer: "in advance",
  },
  {
    question:
      "I ___________ my last girlfriend because she wanted kids and I didn't.",
    options: ["broke up with", "fell for", "put up with"],
    answer: "broke up with",
  },
  {
    question:
      "My best friend really ____________ my cousin - after I introduced them, they spent hours and hours talking.",
    options: ["cheated on", "drifted apart", "hit it off with"],
    answer: "hit it off with",
  },
  {
    question:
      "My husband and I always __________ pretty fast after an argument - we don't stay angry at each other for very long.",
    options: ["jerk around", "lead on", "make up"],
    answer: "make up",
  },
  {
    question:
      "I think I'm ____________ my co-worker - what should I do? Should I tell him how I feel, or just keep quiet?",
    options: ["asking out", "falling for", "hooking up with"],
    answer: "falling for",
  },
  {
    question:
      "My girlfriend is constantly late - it's annoying, but I love her so I _______________ it.",
    options: ["hit on", "make out with", "put up with"],
    answer: "put up with",
  },
  {
    question:
      "Vanessa was furious when she found out that her husband had been ______________ her with her sister.",
    options: ["cheating on", "going out with", "settling down"],
    answer: "cheating on",
  },
  {
    question:
      "Barbara and I __________ a few times, but it never really went anywhere - we're just not very compatible.",
    options: ["asked out", "broke up", "went out"],
    answer: "went out",
  },
  {
    question:
      "I was very uncomfortable when my friend's father started _________________. He's 30 years older than me - and married.",
    options: ["hitting on me", "jerking me around", "putting up with me"],
    answer: "hitting on me",
  },
  {
    question: "Samuel likes to brag about how many women he's _____________.",
    options: ["asked out", "hooked up with", "hit off"],
    answer: "hooked up with",
  },
  {
    question:
      "I've been traveling around the world for the past few years, but I'm starting to think about ____________ in one place.",
    options: ["drifting apart", "making out", "settling down"],
    answer: "settling down",
  },
  {
    question:
      "The whole class __________ when the teacher spilled coffee all over her desk.",
    options: ["calmed down", "cracked up", "fretted about it"],
    answer: "cracked up",
  },
  {
    question:
      "My parents expected me to be a doctor or lawyer. When I chose a career in writing, I felt like I had ____________.",
    options: ["gotten over them", "let them down", "shaken them up"],
    answer: "let them down",
  },
  {
    question:
      "I don't need a lot of money to be happy, but constantly wondering if we're going to have enough to pay the bills is starting to __________.",
    options: ["blow up at me", "cope with me", "get to me"],
    answer: "get to me",
  },
  {
    question:
      "My teenage daughter always spends an hour ____________ her clothes and makeup in the morning. It's a challenge to get her to school on time!",
    options: ["craving about", "fretting about", "flipping out"],
    answer: "fretting about",
  },
  {
    question:
      "He doesn't handle criticism very well. All I did was make one small suggestion about how his work could be improved, and he _________ me.",
    options: ["fumed about", "lashed out at", "shaken up"],
    answer: "lashed out at",
  },
  {
    question:
      "A drunk driver lost control of his car and crashed into a tree right in front of our house. Luckily no one was hurt, but we were all pretty ____________.",
    options: ["blown up", "cracked up", "shaken up"],
    answer: "shaken up",
  },
  {
    question:
      "After our family dog died, it took my kids a long time to __________ it.",
    options: ["fret about", "get over", "tick off"],
    answer: "get over",
  },
  {
    question:
      "Joanna was upset that she didn't get into the university she wanted, but she __________ when she received a full scholarship to another excellent school.",
    options: ["cheered up", "freaked out", "let down"],
    answer: "cheered up",
  },
  {
    question:
      "He joined a support group to help him _________ his cancer diagnosis.",
    options: ["cope with", "feel for", "lash out at"],
    answer: "cope with",
  },
  {
    question:
      "Playing classical music helps my baby __________ when he's crying.",
    options: ["calm down", "get over", "get to him"],
    answer: "calm down",
  },
  {
    question:
      "Mike and I agreed to meet at the cafe at 7 o'clock, but he never ____________. I waited for an hour and then went home.",
    options: ["headed out", "showed up", "tagged along"],
    answer: "showed up",
  },
  {
    question:
      "I ____________ really well with my dad. I feel like I can talk to him about anything.",
    options: ["fit in", "get along", "pass for"],
    answer: "get along",
  },
  {
    question:
      "Hold on a minute - I want to say goodbye to Wanda before we __________.",
    options: ["blow off", "come across", "take off"],
    answer: "take off",
  },
  {
    question:
      "She's so confident that she sometimes ____________ a little arrogant.",
    options: ["comes across as", "looks up to", "passes for"],
    answer: "comes across as",
  },
  {
    question: "I'm __________ cooking tonight. I'd rather just order a pizza.",
    options: ["not cut out for", "not going to live down", "not up for"],
    answer: "not up for",
  },
  {
    question: "He ____________ the meeting to take a phone call.",
    options: ["ordered around", "slipped out of", "stopped by"],
    answer: "slipped out of",
  },
  {
    question:
      "We're going to drop by the hospital to see how Sheila's doing after her surgery. Would you like to ___________?",
    options: ["come across", "come along", "get along"],
    answer: "come along",
  },
  {
    question:
      "I tried to apologize to him for losing the book he lent me, but he just ____________. I think he's still mad about it.",
    options: ["blew me off", "bumped into me", "ragged on me"],
    answer: "blew me off",
  },
  {
    question:
      "On Saturday I _____________ friends for a barbecue at the beach.",
    options: ["fit in with", "met up with", "missed out on"],
    answer: "met up with",
  },
  {
    question:
      "My daughter is very tall for her age. She's 8, but she could ___________ 12.",
    options: ["be up for", "live down", "pass for"],
    answer: "pass for",
  },
  {
    question: "Please ___________ after you're finished using them.",
    options: [
      "look after the scissors",
      "pick the scissors up",
      "put the scissors away",
    ],
    answer: "put the scissors away",
  },
  {
    question:
      "No, I didn't stay in a hotel. A friend of mine ____________ for the night.",
    options: ["put me up", "slept in", "went ahead"],
    answer: "put me up",
  },
  {
    question:
      "You should get some rest. We have a long trip tomorrow and you don't want to __________ while driving.",
    options: ["nod off", "sleep over", "wake up"],
    answer: "nod off",
  },
  {
    question:
      "I let my kids ____________ until midnight so they could see the fireworks on New Year's.",
    options: ["get up", "hang up", "stay up"],
    answer: "stay up",
  },
  {
    question:
      "I can't find anyone to ___________ my dogs while I'm on vacation.",
    options: ["lock out", "look after", "put away"],
    answer: "look after",
  },
  {
    question:
      "I just spilled some soda on the table - can you hand me a paper towel to ____________?",
    options: ["chop it up", "heat it up", "wipe it up"],
    answer: "wipe it up",
  },
  {
    question: "The eggs that were in the fridge went bad, so I ____________.",
    options: ["boiled them over", "crashed with them", "threw them away"],
    answer: "threw them away",
  },
  {
    question:
      "My early-morning yoga class was cancelled, so I'm planning to __________ tomorrow.",
    options: ["doze off", "sleep in", "stay up"],
    answer: "sleep in",
  },
  {
    question:
      "_____________ and eat the last piece of pizza - I don't want it.",
    options: ["Get up", "Go ahead", "Warm up"],
    answer: "Go ahead",
  },
  {
    question:
      "Last Saturday I had to finish up some work. I don't have a key to the office, but the security guard ___________.",
    options: ["let me in", "locked me out", "put me up"],
    answer: "let me in",
  },
  {
    question:
      "My daughter is planning to ___________ a very competitive gymnastics team.",
    options: ["bulk up", "come down with", "try out for"],
    answer: "try out for",
  },
  {
    question:
      "I'm not a fitness fanatic, but I do try to ___________ three times a week.",
    options: ["pay off", "take up", "work out"],
    answer: "work out",
  },
  {
    question:
      "If you don't __________ before lifting weights, you could end up hurting yourself.",
    options: ["give up", "stick with", "warm up"],
    answer: "warm up",
  },
  {
    question:
      "We had to get our car professionally cleaned after my son ___________ all over the back seat.",
    options: ["passed out", "threw up", "stuffed up"],
    answer: "threw up",
  },
  {
    question:
      "My weight has gone up and down for years. I just can't seem to __________ a diet.",
    options: ["stick to", "feel up to", "cut down on"],
    answer: "stick to",
  },
  {
    question:
      "You shouldn't go to work if you're ____________ a cold - you'll probably give it to your coworkers.",
    options: ["coming down with", "passing out", "stuffing up"],
    answer: "coming down with",
  },
  {
    question:
      "If you exercise hard but don't drink enough water, you might ____________.",
    options: ["bulk up", "pass out", "take up"],
    answer: "pass out",
  },
  {
    question:
      "Do you ____________ going for a walk, or is your stomach still hurting?",
    options: ["feel up to", "try out for", "warm up"],
    answer: "feel up to",
  },
  {
    question:
      "I could never be a vegetarian. It'd be impossible for me to __________ hamburgers.",
    options: ["come down with", "give up", "throw up"],
    answer: "give up",
  },
  {
    question:
      "My daily stretching routine is ___________ - I'm definitely more flexible now.",
    options: ["knocking out", "paying off", "resting up"],
    answer: "paying off",
  },
  {
    question:
      "I'm ____________ Indian culture because I'll be spending a month in Mumbai this year.",
    options: ["flipping through", "reading up on", "signing up for"],
    answer: "reading up on",
  },
  {
    question:
      "Many founders of successful companies have ___________ of college to work on their businesses.",
    options: ["dropped out", "gotten ahead", "jotted down"],
    answer: "dropped out",
  },
  {
    question:
      "If you can't go to the meeting, I'll send you an e-mail _________ the main points afterwards.",
    options: ["cramming for", "giving out", "summing up"],
    answer: "summing up",
  },
  {
    question:
      "I have plenty of time to finish writing this article. I don't have to ___________ until the end of the month.",
    options: ["catch up with it", "look it over", "turn it in"],
    answer: "turn it in",
  },
  {
    question:
      "I don't know what page the homework is on. I forgot to ___________.",
    options: ["blank out", "brush up on it", "write it down"],
    answer: "write it down",
  },
  {
    question:
      "That new restaurant is _____________ free samples of their food to help attract customers.",
    options: ["dropping out", "giving out", "kicking out"],
    answer: "giving out",
  },
  {
    question:
      "I thought the president was going to talk about the economy during his speech, but he didn't ____________ at all.",
    options: ["read up on it", "slack off", "touch on it"],
    answer: "touch on it",
  },
  {
    question:
      "We need to get a tutor for our son. He's finding it hard to _________ with his math class.",
    options: ["keep up", "look over", "sum up"],
    answer: "keep up",
  },
  {
    question:
      "A lot of people _________ at work on Friday afternoons, so nothing productive gets done.",
    options: ["cram for", "fill in", "slack off"],
    answer: "slack off",
  },
  {
    question:
      "Before you rent a car, you need to ____________ to make sure there's no existing damage.",
    options: ["brush up on it", "catch up with it", "check it over"],
    answer: "check it over",
  },
  {
    question:
      "It sounds like something's wrong with the engine. We should probably __________ and take a look.",
    options: ["pull over", "break down", "speed up"],
    answer: "pull over",
  },
  {
    question:
      "You missed the exit - you need to __________ and drive back about 2 miles.",
    options: ["flag down", "set off", "turn around"],
    answer: "turn around",
  },
  {
    question:
      "When driving in the snow, you can't make any sudden movements or you might ___________.",
    options: ["slow down", "run over", "spin out"],
    answer: "spin out",
  },
  {
    question:
      "I've got a lot of work to do right now, but I might be able to __________ for a few days next month.",
    options: ["cut off", "get away", "speed up"],
    answer: "get away",
  },
  {
    question:
      "When I need some peace and quiet, I ___________ at my mom's house for a few hours.",
    options: ["check my kids in", "drop my kids off", "head for my kids"],
    answer: "drop my kids off",
  },
  {
    question:
      "__________ - the speed limit here is 55 miles an hour, and you're pushing 70.",
    options: ["Buckle up", "Set off", "Slow down"],
    answer: "Slow down",
  },
  {
    question:
      "I was so upset when I ___________ a cat while driving home from work.",
    options: ["chilled out", "ran over", "sped up"],
    answer: "ran over",
  },
  {
    question: "___________ the window, it's starting to rain.",
    options: ["Fog up", "Roll up", "Pick up"],
    answer: "Roll up",
  },
  {
    question:
      "We're __________ the mall right now - we should be there in about half an hour.",
    options: ["getting away", "heading to", "turning around"],
    answer: "heading to",
  },
  {
    question: "I had to pay $2000 to fix my car after it __________.",
    options: ["broke down", "rolled down", "slowed down"],
    answer: "broke down",
  },
  {
    question:
      "I always bring my own snacks on a trip so that I don't have to _________ $10 for a tiny sandwich at the airport.",
    options: ["come to", "scrape by", "shell out"],
    answer: "shell out",
  },
  {
    question:
      "Don't just buy the first computer you see - if you __________ you might be able to find a better price on the same model.",
    options: ["rip off", "save up", "shop around"],
    answer: "shop around",
  },
  {
    question: "Could you lend me $20 for lunch? I'll ___________ tomorrow.",
    options: ["cough up the money", "pay you back", "splurge on you"],
    answer: "pay you back",
  },
  {
    question:
      "When I first started my freelance writing career, I didn't make much - but it was enough to ___________.",
    options: ["dip into", "give away", "scrape by"],
    answer: "scrape by",
  },
  {
    question:
      "My teenage daughter talks on the phone so much that our last cell phone bill ________ $250 - I made her pay half of it!",
    options: ["came to", "sold out", "snapped up"],
    answer: "came to",
  },
  {
    question:
      "I got a bonus at work this month, so I __________ a new pair of designer shoes.",
    options: ["skimped on", "splurged on", "stocked up on"],
    answer: "splurged on",
  },
  {
    question:
      "We're teaching our son financial responsibility early - if he wants a video game, he has to _________ his allowance to buy it himself.",
    options: ["add up", "save up", "sell out"],
    answer: "save up",
  },
  {
    question:
      "Everyone in the family ___________ to buy Grandma a new television.",
    options: ["chipped in", "paid off", "shopped around"],
    answer: "chipped in",
  },
  {
    question:
      "I had to ___________ $200 to change my flight when I decided to delay my trip for a day.",
    options: ["cough up", "pay back", "set aside"],
    answer: "cough up",
  },
  {
    question:
      "I'm not willing to __________ decorations for the wedding - I want it to be beautiful, and I don't care how much it costs.",
    options: ["pay for", "rip off", "skimp on"],
    answer: "skimp on",
  },
  {
    question:
      "Most of the candidates didn't ___________ - they didn't have the experience or qualifications needed for the job.",
    options: ["measure up", "report back", "slave away"],
    answer: "measure up",
  },
  {
    question:
      "Our plan to build a new factory ___________ because the property was in an environmentally-protected area.",
    options: ["burned out", "fell through", "shot down"],
    answer: "fell through",
  },
  {
    question:
      "I was __________ three months ago, and I haven't been able to find work since.",
    options: ["laid off", "nailed down", "tied up"],
    answer: "laid off",
  },
  {
    question:
      "Gina ___________ a great idea for motivating our employees - they can earn extra vacation days if they meet certain targets.",
    options: ["came up with", "stepped up", "took on"],
    answer: "came up with",
  },
  {
    question:
      "I joined the company as an intern and ____________ for a whole year before being promoted.",
    options: ["carried out", "didn't measure up", "slaved away"],
    answer: "slaved away",
  },
  {
    question:
      "Frank is still out of town, but I'll send him an e-mail to ___________ on what's been happening.",
    options: ["fill him in", "pick him up", "run it by him"],
    answer: "fill him in",
  },
  {
    question:
      "We work with a lot of German clients, so I've ____________ a few basic phrases of the language.",
    options: ["drawn up", "picked up", "taken on"],
    answer: "picked up",
  },
  {
    question:
      "I'd like you to analyze our competitors' latest marketing strategies and ___________ to me next week.",
    options: ["come up with", "fall through", "report back"],
    answer: "report back",
  },
  {
    question:
      "Our next conference might be in Israel, Russia, or France. It's not ____________ yet.",
    options: ["nailed down", "penciled in", "shot down"],
    answer: "nailed down",
  },
  {
    question:
      "I'll have my lawyer __________ a contract and send it to you for review.",
    options: ["carry out", "draw up", "run by"],
    answer: "draw up",
  },
  {
    question:
      "After you finish your online banking, you should always __________ of your account for security reasons.",
    options: ["lock up", "log out", "shut down"],
    answer: "log out",
  },
  {
    question: "I have an old computer. It takes forever to __________.",
    options: ["boot up", "scroll down", "type in"],
    answer: "boot up",
  },
  {
    question:
      "My internet provider has excellent customer service. You can always __________ them to solve the problem.",
    options: ["count on", "hook up to", "set up"],
    answer: "count on",
  },
  {
    question: "If your computer __________ frequently, it might have a virus.",
    options: ["locks up", "prints out", "zooms in"],
    answer: "locks up",
  },
  {
    question:
      "I need a place to _________ my laptop - I only have 10 minutes of battery life left.",
    options: ["log on", "plug in", "screw up"],
    answer: "plug in",
  },
  {
    question: "Can we _________ these photos in color?",
    options: ["print out", "scroll up", "zoom out"],
    answer: "print out",
  },
  {
    question:
      "My dad's good with computers. He'll help you __________ your wireless network.",
    options: ["check out", "count on", "set up"],
    answer: "set up",
  },
  {
    question:
      "Oops - I must have _________ during the installation, because the program won't open.",
    options: ["booted up", "messed up", "popped up"],
    answer: "messed up",
  },
  {
    question:
      "Make sure the Caps Lock is off when you _________ your password.",
    options: ["print out", "scroll down", "type in"],
    answer: "type in",
  },
  {
    question:
      "___________ to the top of the page - I want to read the first paragraph of this article again.",
    options: ["Hook up", "Lock up", "Scroll up"],
    answer: "Scroll up",
  },
  {
    question: "You should ___________ that beach - the water's polluted.",
    options: ["hold up", "stay away from", "wander around"],
    answer: "stay away from",
  },
  {
    question:
      "I ________ the bus at the wrong stop and had to ask for directions.",
    options: ["got off", "took off", "turned out"],
    answer: "got off",
  },
  {
    question: "Wow, you're all __________. Are you going somewhere special?",
    options: ["checked out", "dressed up", "tried on"],
    answer: "dressed up",
  },
  {
    question:
      "When I was in college, I ___________ to pursue my dream of bicycling across Europe.",
    options: [
      "got out of a semester",
      "took a semester off",
      "wandered around a semester",
    ],
    answer: "took a semester off",
  },
  {
    question:
      "If you like hiking, you might want to __________ the National Park - it has miles and miles of great trails.",
    options: ["check out", "get into", "show around"],
    answer: "check out",
  },
  {
    question:
      "When I _________ the temple, they told me I couldn't go in because I was wearing shorts.",
    options: ["dressed up", "got to", "stayed away from"],
    answer: "got to",
  },
  {
    question:
      "I only wanted to buy a small present for my mother, but everything in the store was so beautiful that I _________ getting gifts for my entire family.",
    options: ["checked out", "ended up", "saw off"],
    answer: "ended up",
  },
  {
    question:
      "The trip took twice as long as usual - we were _________ by heavy traffic.",
    options: ["held up", "hung out", "taken off"],
    answer: "held up",
  },
  {
    question:
      "When I moved in, my new neighbors offered to ____________ the area.",
    options: ["get me on", "see me off", "show me around"],
    answer: "show me around",
  },
  {
    question:
      "When I'm traveling, I prefer to __________ with locals rather than with other tourists.",
    options: ["get off", "hang out", "turn out"],
    answer: "hang out",
  },
  {
    question:
      "I knew my boss was lying to the client, but I didn't ___________ because I was afraid of losing my job.",
    options: ["speak up", "stand up for him", "tune out"],
    answer: "speak up",
  },
  {
    question:
      "It's annoying when people ___________ because they don't think I understand English.",
    options: ["cut me off", "harp on me", "talk down to me"],
    answer: "talk down to me",
  },
  {
    question:
      "The gym teacher ___________ the rules of the game so that all the kids would know how to play it.",
    options: ["blurted out", "spelled out", "pointed out"],
    answer: "spelled out",
  },
  {
    question:
      "Steve is really into astronomy - if you can ask him, he can __________ the names of all the constellations.",
    options: ["bring up", "rant about", "rattle off"],
    answer: "rattle off",
  },
  {
    question:
      "When my doctor told me my cholesterol levels were high, I __________ and admitted I hadn't stuck to my diet.",
    options: ["butted in", "fessed up", "spoke out"],
    answer: "fessed up",
  },
  {
    question:
      "I can't stand people who are always __________ problems, but never offer any solutions.",
    options: ["harping on", "opening up to", "tuning out"],
    answer: "harping on",
  },
  {
    question:
      "We work for an organization that ____________ the rights of indigenous people to stay on their ancestral land.",
    options: ["brings up", "calls out", "stands up for"],
    answer: "stands up for",
  },
  {
    question:
      "Here comes Sophia - don't _______ that you know about her pregnancy; I don't think it's public knowledge yet.",
    options: ["call out", "let on", "speak up"],
    answer: "let on",
  },
  {
    question:
      "When I was debating whether or not to buy the product, the salesperson ___________ that it would actually save me money in the long run.",
    options: ["backed me up", "pointed out", "talked down to me"],
    answer: "pointed out",
  },
  {
    question:
      "I can't concentrate on my work with the noise of the construction outside - it's impossible to _____________.",
    options: ["cut it off", "rant about it", "tune it out"],
    answer: "tune it out",
  },
  {
    question: "My son wants to be a fireman when he __________.",
    options: ["brings up", "grows up", "hurries up"],
    answer: "grows up",
  },
  {
    question:
      "If you _________ for a few minutes after class, I'll answer your question in more detail.",
    options: ["drag on", "put off", "stick around"],
    answer: "stick around",
  },
  {
    question:
      "The product launch didn't go as planned. We had to __________ three months because of last-minute problems in the manufacturing.",
    options: ["move it back", "squeeze it in", "think back on it"],
    answer: "move it back",
  },
  {
    question:
      "I drank a cup of coffee after dinner, and then I couldn't get to sleep until the caffeine high __________.",
    options: ["called off", "moved up", "wore off"],
    answer: "wore off",
  },
  {
    question:
      "You should always set a time limit for meetings, otherwise they tend to __________.",
    options: ["drag on", "keep on", "hang on"],
    answer: "drag on",
  },
  {
    question:
      "This project isn't very high priority - just do it whenever you can _____________ it.",
    options: ["get around to", "look forward to", "take after"],
    answer: "get around to",
  },
  {
    question:
      "My ex-girlfriend ____________ calling me and begging for another chance, so I finally blocked her number.",
    options: ["grew up", "kept on", "put off"],
    answer: "kept on",
  },
  {
    question:
      "__________ and finish packing - we need to leave for the airport in ten minutes!",
    options: ["Come up", "Hold on", "Hurry up"],
    answer: "Hurry up",
  },
  {
    question:
      "Brenda won't be at work today - her father ___________ just last night and she's taking care of the funeral arrangements.",
    options: ["moved back", "passed away", "took after"],
    answer: "passed away",
  },
  {
    question: "Few people signed up for the workshop, so they ____________.",
    options: ["called it off", "looked back on it", "stuck around it"],
    answer: "called it off",
  },
  {
    question:
      "My proposal ___________ really well at the meeting - everyone said it was a brilliant idea.",
    options: ["phased in", "pulled off", "went over"],
    answer: "went over",
  },
  {
    question:
      "Rebecca went through a painful divorce, and it took her several years to __________.",
    options: ["back out", "bounce back", "hold back"],
    answer: "bounce back",
  },
  {
    question:
      "Jim's life started to ___________ after he stopped drinking so much and got a decent job.",
    options: ["pick up", "plow through", "turn around"],
    answer: "turn around",
  },
  {
    question:
      "I tried using a Samsung Galaxy phone for a few months, but I didn't like it so I ___________ to the iPhone.",
    options: ["phased out", "switched back", "took over"],
    answer: "switched back",
  },
  {
    question:
      "Rob and Janet had promised to help me paint the house, but then they __________ so I ended up doing it all myself.",
    options: ["backed out", "held back", "went under"],
    answer: "backed out",
  },
  {
    question:
      "I've been working 12 hours a day - my job is ___________ my life!",
    options: ["catching on", "looking up", "taking over"],
    answer: "taking over",
  },
  {
    question:
      "I don't like to multitask - I prefer to take a single project and ____________ it until it's done.",
    options: ["plow through", "pull off", "turn around"],
    answer: "plow through",
  },
  {
    question:
      "I'd thought my grandfather would have a hard time learning how to use a computer, but he actually __________ very quickly.",
    options: ["caught on", "phased in", "worked out"],
    answer: "caught on",
  },
  {
    question:
      "I don't know how I ___________ such a good grade on that test - I didn't have time to study for it at all!",
    options: ["bounced back", "pulled off", "went over"],
    answer: "pulled off",
  },
  {
    question:
      "The negotiations took a long time and there were a few miscommunications during the process, but everything eventually ____________ and we all agreed to the partnership.",
    options: ["looked up", "switched back", "worked out"],
    answer: "worked out",
  },
  {
    question:
      "I was thinking of getting a tattoo on my arm, but my friend _____ it by saying it could hurt my job prospects.",
    options: ["roped me into", "talked me out of", "went along with"],
    answer: "talked me out of",
  },
  {
    question:
      "We can _____ these three consultants - they're far too expensive for us to work with.",
    options: ["hold off", "rule out", "toy with"],
    answer: "rule out",
  },
  {
    question:
      "After visiting a dozen colleges, Linda _____ attending the state university.",
    options: ["came around", "settled on", "thought through"],
    answer: "settled on",
  },
  {
    question:
      "We're going to adopt a dog - we'll _____ from the animal shelter next week.",
    options: ["pick one out", "see one through", "side with one"],
    answer: "pick one out",
  },
  {
    question: "Let's _____ on making this decision until we get more data.",
    options: ["hold off", "settle for", "stress out"],
    answer: "hold off",
  },
  {
    question:
      "The environmental groups are _____ stricter anti-pollution laws.",
    options: ["asking around", "pressing for", "ruling out"],
    answer: "pressing for",
  },
  {
    question: "I asked my boss if I could work from home, and he _____ it.",
    options: ["sided with", "talked me into", "went along with"],
    answer: "went along with",
  },
  {
    question:
      "Sarah has won two Olympic silver medals; she's _____ her first gold this year.",
    options: ["picking out", "seeing through", "shooting for"],
    answer: "shooting for",
  },
  {
    question:
      "At first my mother hated the idea of having a cell phone, but she eventually _____.",
    options: ["came around", "stressed out", "thought it over"],
    answer: "came around",
  },
  {
    question:
      "Gary always _____ the boss during discussions to improve his promotion chances.",
    options: ["presses for", "settles on", "sides with"],
    answer: "sides with",
  },
  {
    question:
      "I hope this rain lets _____ before the weekend - I'm planning a camping trip.",
    options: ["away", "off", "up"],
    answer: "up",
  },
  {
    question: "In September, the weather starts to cool _____.",
    options: ["down", "out", "up"],
    answer: "down",
  },
  {
    question:
      "It's cloudy right now, but the forecast says it'll clear _____ by noon.",
    options: ["back", "off", "up"],
    answer: "up",
  },
  {
    question: "She wolfed _____ her breakfast and ran out the door.",
    options: ["away", "down", "over"],
    answer: "down",
  },
  {
    question: "The flood wiped _____ all the houses near the river.",
    options: ["back", "on", "out"],
    answer: "out",
  },
  {
    question:
      "I went to the beach, but it clouded _____, so I didn't get a tan.",
    options: ["around", "in", "over"],
    answer: "over",
  },
  {
    question: "The last day of the music festival was rained _____.",
    options: ["down", "off", "out"],
    answer: "out",
  },
  {
    question: "I need to get rid _____ all the junk in my garage.",
    options: ["at", "for", "of"],
    answer: "of",
  },
  {
    question:
      "Two children were _____ during a shoot-out between gangs last night.",
    options: ["blown up", "gunned down", "mixed up in"],
    answer: "gunned down",
  },
  {
    question:
      "Someone _____ the media that a well-known celebrity was committing tax fraud.",
    options: ["accounted for", "tipped off", "was charged with"],
    answer: "tipped off",
  },
  {
    question:
      "My son said it wasn't his idea to put the frog in the teacher's desk; he claims his friend _____ it.",
    options: ["covered up", "put him up to", "ran for"],
    answer: "put him up to",
  },
  {
    question:
      "She _____ the charges because there wasn't enough evidence to convict her.",
    options: ["bought off", "cracked down on", "was cleared of"],
    answer: "was cleared of",
  },
  {
    question:
      "I started learning martial arts as a kid to defend myself from the bullies who always _____ after school.",
    options: ["beat me up", "broke into me", "leaked out"],
    answer: "beat me up",
  },
  {
    question:
      "I'm not sure who I'm going to vote for; I don't like any of the candidates _____ president this year.",
    options: ["buying off", "getting away with", "running for"],
    answer: "running for",
  },
  {
    question:
      "The CEO tried to _____ the fact that the company was failing so that the employees wouldn't panic.",
    options: ["be charged with", "cover up", "tip off"],
    answer: "cover up",
  },
  {
    question:
      "DNA testing and other modern technologies make it more difficult to _____ a crime.",
    options: ["be mixed up in", "get away with", "let off"],
    answer: "get away with",
  },
  {
    question:
      "You say things are going well in this country, but how do you _____ the 20% unemployment rate?",
    options: ["account for", "follow up", "leak out"],
    answer: "account for",
  },
  {
    question:
      "Our alarm system automatically calls the police if anyone tries to _____ the building.",
    options: ["blow up", "break into", "lock up"],
    answer: "break into",
  },
  {
    question: "Henry told the kids to _____ while he lit the campfire.",
    options: ["bolt away", "sit up", "stand up"],
    answer: "stand up",
  },
  {
    question: "Tons of people _____ Tom Cruise, asking for an autograph.",
    options: ["barged into", "crouched down", "crowded around"],
    answer: "crowded around",
  },
  {
    question: "I'm not feeling very well. I'm going to go _____.",
    options: ["bend down", "climb down", "lie down"],
    answer: "lie down",
  },
  {
    question:
      "The first time I tried ice skating, I _____ ten times in the first ten minutes!",
    options: ["fell down", "lucked out", "sat down"],
    answer: "fell down",
  },
  {
    question: "I hate it when people _____ my office without knocking.",
    options: ["barge into", "bolt away", "sneak up on"],
    answer: "barge into",
  },
  {
    question: "He _____ to inspect the car's tires.",
    options: ["crouched down", "crowded around", "stood back"],
    answer: "crouched down",
  },
  {
    question: "Tom _____ his towel and left the beach.",
    options: ["crept up", "picked up", "sat up"],
    answer: "picked up",
  },
  {
    question:
      "The teacher asked the students to _____ because the class was about to start.",
    options: ["climb down", "lie down", "sit down"],
    answer: "sit down",
  },
  {
    question:
      "We got the last four tickets to the show before it sold out - we really _____!",
    options: ["bolted away", "lucked out", "picked up"],
    answer: "lucked out",
  },
  {
    question:
      "Everyone in the audience _____ and cheered at the end of the performance.",
    options: ["bent down", "snuck up", "stood up"],
    answer: "stood up",
  },
  {
    question:
      "I need the phone number for the restaurant. Could you _____ online?",
    options: ["cross it out", "look it up", "pore over it"],
    answer: "look it up",
  },
  {
    question:
      "I don't know if I've been accepted into the program yet - I should _____ in the next few days.",
    options: ["find out", "gloss over", "hang up"],
    answer: "find out",
  },
  {
    question:
      "I think he's lying to me. What he says just doesn't _____ the evidence.",
    options: ["boil down to", "figure out", "match up with"],
    answer: "match up with",
  },
  {
    question:
      "We need some information from the December 2009 issue of the newsletter - I'll _____ a copy in the archives.",
    options: ["dawn on", "feel out", "track down"],
    answer: "track down",
  },
  {
    question:
      "In his speech, the president spoke with an optimistic tone, _____ the fact that the economy hasn't improved.",
    options: ["adding up", "glossing over", "puzzling over"],
    answer: "glossing over",
  },
  {
    question:
      "After I thought about it for a while, it finally _____ that taking this job wouldn't really be the best move for my career.",
    options: ["dawned on me", "felt me out", "tracked me down"],
    answer: "dawned on me",
  },
  {
    question:
      "I've been _____ this message my friend sent me - from what she wrote, I don't understand if she's still angry at me or not.",
    options: ["boiling down to", "picking up", "puzzling over"],
    answer: "puzzling over",
  },
  {
    question:
      "I couldn't _____ the difference between the present perfect and the past perfect, so I had to ask my teacher.",
    options: ["cross out", "figure out", "pore over"],
    answer: "figure out",
  },
  {
    question:
      "After I _____, I realized I'd forgotten to ask the travel agent an important question, so I called him back.",
    options: ["dawned on", "hung up", "looked up"],
    answer: "hung up",
  },
  {
    question:
      "I'd like to take my family to live in another country for a year, but first I need to _____ my kids to see if they'd be interested in the possibility.",
    options: ["feel out", "match up", "pick up"],
    answer: "feel out",
  },
  {
    question:
      "The next conference session starts in just a few minutes, so we need to _____ this workshop.",
    options: ["kick off", "stand out", "wrap up"],
    answer: "wrap up",
  },
  {
    question:
      "I know this brochure isn't very well-designed; it's just something I _____ because we needed it urgently.",
    options: ["didn't live up to", "fizzled out", "threw together"],
    answer: "threw together",
  },
  {
    question:
      "The gift I bought for my mother cost less than I expected, so I bought something for my sister with the money that was _____.",
    options: ["left over", "lined up", "wound down"],
    answer: "left over",
  },
  {
    question:
      "I can't wait for the sequel to this movie - I hear it's _____ next June.",
    options: ["coming out", "giving in", "singing along"],
    answer: "coming out",
  },
  {
    question:
      "He had a great idea for a new business, but he didn't really put in much work and it _____.",
    options: ["fizzled out", "livened up", "was left over"],
    answer: "fizzled out",
  },
  {
    question:
      "Sandy's really confident; in fact, sometimes she _____ a bit arrogant.",
    options: ["comes off as", "lives up to", "roots for"],
    answer: "comes off as",
  },
  {
    question:
      "The singer _____ her 2013 tour with a performance in New York City.",
    options: ["kicked off", "stood out", "threw together"],
    answer: "kicked off",
  },
  {
    question: "All the kids _____ to wait for their turn to see Santa Claus.",
    options: ["fizzled out", "lined up", "sang along"],
    answer: "lined up",
  },
  {
    question:
      "The high season for tourism in Brazil starts to _____ after Carnaval.",
    options: ["come out", "kick off", "wind down"],
    answer: "wind down",
  },
  {
    question: "I don't like conflict. I usually _____ rather than arguing.",
    options: ["give in", "root for", "wrap up"],
    answer: "give in",
  },
  {
    question: "When I was little, the other kids _____ me because I was fat.",
    options: ["dealt with", "laughed off", "picked on"],
    answer: "picked on",
  },
  {
    question:
      "If you don't like the new policy, you need to _____ Peter, not me. He's the one who made the decision.",
    options: ["brace for", "get through to", "take it up with"],
    answer: "take it up with",
  },
  {
    question:
      "People who are offended by comedy movies need to _____. It's not worth getting so upset over a film.",
    options: ["back off", "joke around", "lighten up"],
    answer: "lighten up",
  },
  {
    question:
      "My son is lazy. I try to teach him about the importance of hard work, but I can't seem to _____ him.",
    options: ["get through to", "grate on", "take it out on"],
    answer: "get through to",
  },
  {
    question:
      "When I apologized to Diane for ignoring her phone calls, she _____ and said it was no big deal.",
    options: ["knocked it off", "laughed it off", "rubbed it in"],
    answer: "laughed it off",
  },
  {
    question:
      "My roommate smokes cigarette after cigarette inside our apartment, and it's really _____ me.",
    options: ["grating on", "holding against", "showing off"],
    answer: "grating on",
  },
  {
    question:
      "When my boss called me into her office for a serious talk, I _____ the possibility that I might lose my job.",
    options: ["bordered on", "braced myself for", "took it up with"],
    answer: "braced myself for",
  },
  {
    question:
      "During the party, my friend _____ and told me I had some food stuck in my teeth. How embarrassing!",
    options: ["got through to me", "put me down", "took me aside"],
    answer: "took me aside",
  },
  {
    question:
      "This problem is top priority. I really need you to _____ it as soon as possible.",
    options: ["back off", "border on", "deal with"],
    answer: "deal with",
  },
  {
    question:
      "My uncle is always _____ - it's hard to tell when he's being serious.",
    options: ["joking around", "knocking it off", "lightening up"],
    answer: "joking around",
  },
  {
    question:
      "Let's donate some of these clothes to _____ space in the closet.",
    options: ["free up", "put out", "spruce up"],
    answer: "free up",
  },
  {
    question:
      "The two companies _____ a deal to exchange some of their products and services.",
    options: ["fixed up", "hashed out", "slept on"],
    answer: "hashed out",
  },
  {
    question:
      "They're _____ those apartment buildings to make room for the new highway.",
    options: ["caving in", "rallying around", "tearing down"],
    answer: "tearing down",
  },
  {
    question: "Dan _____ his old bicycle and gave it to his son.",
    options: ["fell apart", "fixed up", "ran down"],
    answer: "fixed up",
  },
  {
    question:
      "That hospital looks a little _____, but it actually has excellent doctors.",
    options: ["hashed out", "mixed up", "run-down"],
    answer: "run-down",
  },
  {
    question: "Don't forget to _____ that candle before you go to sleep.",
    options: ["bargain for", "burn down", "put out"],
    answer: "put out",
  },
  {
    question: "Please be careful with that old book - it's _____.",
    options: ["falling apart", "freeing up", "tearing down"],
    answer: "falling apart",
  },
  {
    question:
      "I wasn't completely satisfied with her proposal, so I told her I'd _____.",
    options: ["rally around it", "sleep on it", "spruce it up"],
    answer: "sleep on it",
  },
  {
    question: "My cousins are identical twins, and people always _____.",
    options: ["hash them out", "mix them up", "put them out"],
    answer: "mix them up",
  },
  {
    question:
      "Everyone _____ the community leader to defend him from the accusations of corruption.",
    options: ["bargained for", "fell apart", "rallied around"],
    answer: "rallied around",
  },
  {
    question:
      "The security guards _____ the president away to a safe place after hearing about an assassination plot.",
    options: ["edged", "stashed", "whisked"],
    answer: "whisked",
  },
  {
    question: "Going to the beach seems to make all my worries _____ away.",
    options: ["blow", "chip", "fade"],
    answer: "fade",
  },
  {
    question:
      "I got all the hotel arrangements _____ away - we can check that off the to-do list.",
    options: ["faded", "plugged", "squared"],
    answer: "squared",
  },
  {
    question:
      "When I read that book for the first time, it really _____ me away - it completely changed my thinking.",
    options: ["blew", "edged", "shied"],
    answer: "blew",
  },
  {
    question:
      "I'll be home late tonight - I'm still _____ away at this complicated website design project.",
    options: ["plugging", "tearing", "whisking"],
    answer: "plugging",
  },
  {
    question:
      "We try to _____ away a couple hundred dollars a month in a savings account to help send our kids to college someday.",
    options: ["blow", "square", "stash"],
    answer: "stash",
  },
  {
    question: "The tour guide _____ away from the sleeping tiger.",
    options: ["chipped", "edged", "faded"],
    answer: "edged",
  },
  {
    question:
      "I _____ away from posting too much personal information on the internet - you never know who could be reading it.",
    options: ["plug", "shy", "tear"],
    answer: "shy",
  },
  {
    question:
      "I just discovered a great new blog - I read it every day; I can't _____ myself away.",
    options: ["blow", "whisk", "tear"],
    answer: "tear",
  },
  {
    question:
      "The government keeps _____ away at benefits for veterans - we need to protest this!",
    options: ["chipping", "fading", "squaring"],
    answer: "chipping",
  },
  {
    question:
      "I've read all the job applications and _____ it down to the 5 most promising candidates for this position.",
    options: ["bogged", "turned", "narrowed"],
    answer: "narrowed",
  },
  {
    question:
      "The pastor _____ down a glass of water and continued his sermon.",
    options: ["gulped", "knocked", "toned"],
    answer: "gulped",
  },
  {
    question:
      "I'm going to _____ down as volunteer coordinator - it's just too much work for me to do in my spare time.",
    options: ["dumb", "play", "step"],
    answer: "step",
  },
  {
    question:
      "Sarah's 9 months pregnant - she's _____ down the days until the baby arrives.",
    options: ["counting", "knocking", "narrowing"],
    answer: "counting",
  },
  {
    question:
      "Dave asked Rachel out to dinner, but she _____ him down, saying he wasn't her type.",
    options: ["guzzled", "stepped", "turned"],
    answer: "turned",
  },
  {
    question:
      "Every time I come home, my dog jumps on me and almost _____ me down.",
    options: ["bogs", "tones", "knocks"],
    answer: "knocks",
  },
  {
    question:
      "Sorry - I still don't understand your article about quantum physics. You're going to have to _____ it down even further for me.",
    options: ["dumb", "play", "turn"],
    answer: "dumb",
  },
  {
    question:
      "That politician has very strong views on abortion, but he _____ it down when talking to the media.",
    options: ["counts", "gulps", "tones"],
    answer: "tones",
  },
  {
    question:
      "I can't get any of my own work done, because I keep getting _____ down with requests from my colleagues.",
    options: ["bogged", "dumbed", "knocked"],
    answer: "bogged",
  },
  {
    question:
      "I tried to _____ down the fact that I'd gotten a tattoo, but my mother still wasn't happy about it.",
    options: ["play", "step", "tone"],
    answer: "play",
  },
  {
    question:
      "All our friends _____ to help throw Rob and Susan a surprise anniversary party.",
    options: ["begged on", "chimed in", "pitched in"],
    answer: "pitched in",
  },
  {
    question:
      "My mother _____ parents who let their kids play video games all day.",
    options: ["frowns on", "preys on", "reins in"],
    answer: "frowns on",
  },
  {
    question: "You should _____ your shirt - it looks more professional.",
    options: ["hone in on", "sink in", "tuck in"],
    answer: "tuck in",
  },
  {
    question:
      "Brad has gotten a lot more organized since he got married. His wife must be _____ him.",
    options: ["pitching in", "rubbing off on", "zeroing in on"],
    answer: "rubbing off on",
  },
  {
    question:
      "I couldn't believe I'd gotten the promotion. It only started to _____ when I was given the best office in the building.",
    options: ["chime in", "egg on", "sink in"],
    answer: "sink in",
  },
  {
    question:
      "This fitness program _____ belly fat and will help you get a flat stomach in just 6 weeks.",
    options: ["frowns on", "preys on", "zeroes in on"],
    answer: "zeroes in on",
  },
  {
    question:
      "My father got really angry at the travel agent when our flight was canceled. I had to _____ to stop him from making a scene.",
    options: ["egg on", "rub off on", "rein in"],
    answer: "rein in",
  },
  {
    question:
      "My wife and I were discussing where to go out for dinner, and our son _____ and said he'd like to have Chinese food.",
    options: ["chimed in", "honed in", "tucked in"],
    answer: "chimed in",
  },
  {
    question:
      "Our teenage daughter dyed her hair purple because all of her friends were _____ her.",
    options: ["egging on", "pitching in", "reining in"],
    answer: "egging on",
  },
  {
    question:
      "Bullies often _____ kids who are shy or who have low self-esteem.",
    options: ["prey on", "rub off on", "sink in"],
    answer: "prey on",
  },
  {
    question: "I _____ out on the couch and missed the end of the movie.",
    options: ["conked", "counted", "kicked"],
    answer: "conked",
  },
  {
    question:
      "He _____ out his camera to take a picture of the parrot before it flew away.",
    options: ["branched", "jumped", "whipped"],
    answer: "whipped",
  },
  {
    question:
      "We need to test all these devices and _____ out the ones that are defective.",
    options: ["crank", "zone", "weed"],
    answer: "weed",
  },
  {
    question:
      "If you're all going to go surfing, _____ me out - I'm not into water sports.",
    options: ["count", "kick", "ride"],
    answer: "count",
  },
  {
    question:
      "It was a great book all around, but what really _____ out at me was the character development.",
    options: ["branched", "leapt", "toughed"],
    answer: "leapt",
  },
  {
    question:
      "This area is getting more and more expensive to live in, but I'll need to _____ it out for another 6 months until I finish school.",
    options: ["conk", "tough", "weed"],
    answer: "tough",
  },
  {
    question:
      "My daughter talks about nothing but clothes and boys. I wish she'd _____ out a little bit.",
    options: ["branch", "count", "zone"],
    answer: "branch",
  },
  {
    question:
      "That singer is very successful - she's been _____ out hit after hit.",
    options: ["cranking", "kicking", "riding"],
    answer: "cranking",
  },
  {
    question:
      "William was _____ out of the martial arts school after they caught him stealing gear and equipment.",
    options: ["jumped", "kicked", "whipped"],
    answer: "kicked",
  },
  {
    question:
      "I was so embarrassed when I _____ out in class and the teacher asked me a question three times before I heard her.",
    options: ["branched", "cranked", "zoned"],
    answer: "zoned",
  },
  {
    question:
      "My best friend is really beautiful. Whenever she goes to a club, she has to ________ off dozens of men.",
    options: ["fend", "put", "throw"],
    answer: "fend",
  },
  {
    question:
      "The two finalists will ________ off on Saturday in the last round of the dance competition.",
    options: ["brush", "face", "polish"],
    answer: "face",
  },
  {
    question:
      "I was _______ off by the terrible customer service in that store. I don't think I'll shop there again.",
    options: ["goofed", "put", "topped"],
    answer: "put",
  },
  {
    question:
      "My son _________ off to his room after I took away his video game as punishment for not doing his homework.",
    options: ["polished", "brushed", "stomped"],
    answer: "stomped",
  },
  {
    question:
      "It _________ me off when someone asked me a random question in the middle of my presentation.",
    options: ["goofed", "dashed", "threw"],
    answer: "threw",
  },
  {
    question:
      "He ________ off as soon as the party ended; he didn't even say goodbye.",
    options: ["brushed", "faced", "crushed"],
    answer: "crushed",
  },
  {
    question:
      "Our vacation was a disaster. The flights were delayed, the kids got sick, and to _______ it off, it rained the entire week.",
    options: ["put", "storm", "top"],
    answer: "top",
  },
  {
    question:
      "My friends and I _________ off three bottles of wine during dinner.",
    options: ["fended", "polished", "threw"],
    answer: "polished",
  },
  {
    question:
      "I couldn't enjoy the movie because the teenagers sitting behind me were _________ off the entire time.",
    options: ["facing", "goofing", "topping"],
    answer: "goofing",
  },
  {
    question:
      "I feel bad that I _________ Carla off when she wanted to talk to me, but I just didn't have time to listen.",
    options: ["brushed", "put", "stomped"],
    answer: "brushed",
  },
  {
    question:
      "I completely forgot to call Rachel on her birthday – I'll offer to take her out to dinner to ________ it.",
    options: ["gear up for", "make up for", "stack up against"],
    answer: "make up for",
  },
  {
    question:
      "I got a really high score the first time I ever went bowling – but I think we can __________ to beginner's luck!",
    options: ["be cooped up", "chalk it up", "psych myself up"],
    answer: "chalk it up",
  },
  {
    question:
      "We need to decide how to _________ the project tasks among the team members.",
    options: ["divvy up", "rack up", "shape up"],
    answer: "divvy up",
  },
  {
    question: "The president is _________ for a long trip to Europe and Asia.",
    options: ["chalking up", "gearing up", "turning up"],
    answer: "gearing up",
  },
  {
    question:
      "My dog likes to run around; he hates being ___________ inside the apartment.",
    options: ["cooped up", "made up", "shaped up"],
    answer: "cooped up",
  },
  {
    question:
      "A lot of college students __________ thousands of dollars in credit card debt by the time they graduate.",
    options: ["divvy up", "rack up", "turn up"],
    answer: "rack up",
  },
  {
    question:
      "Fred is ____________ to ask the most beautiful girl at the party to dance.",
    options: ["cooping up", "making up for", "psyching himself up"],
    answer: "psyching himself up",
  },
  {
    question:
      "A surprising number of people __________ at our ten-year high school reunion – it was great to see all my old friends.",
    options: ["geared up", "stacked up", "turned up"],
    answer: "turned up",
  },
  {
    question:
      "She told her boyfriend that if he didn't ___________ and start looking for a job, their relationship was over.",
    options: ["psych up", "rack up", "shape up"],
    answer: "shape up",
  },
  {
    question: "How does London __________ New York in terms of cost of living?",
    options: ["chalk up to", "divvy up", "stack up against"],
    answer: "stack up against",
  },
  {
    question:
      "I'll need directions to the restaurant. Let me grab a pen and paper to ____________.",
    options: ["write them down", "write them up"],
    answer: "write them down",
  },
  {
    question:
      "I ________ a few times while giving the presentation – there were one or two ideas I didn't explain well, and a few things I forgot to mention.",
    options: ["messed up", "mixed up"],
    answer: "messed up",
  },
  {
    question:
      "If you give me a map, I should be able to _________ the area without any help.",
    options: ["get along", "get around"],
    answer: "get around",
  },
  {
    question:
      "You can't depend on Jerry for anything. He always says he's definitely going to things... and then ________.",
    options: ["backs down", "backs off", "backs out"],
    answer: "backs out",
  },
  {
    question:
      "I ________ in Russia, but I've been living in Canada since I was 20.",
    options: ["brought up", "grew up"],
    answer: "grew up",
  },
  {
    question:
      "To mail this package internationally, you'll need to ________ a customs form.",
    options: ["fill in", "fill out", "fill up"],
    answer: "fill out",
  },
  {
    question:
      "We should _________ on buying food for the party until we know how many people are coming.",
    options: ["hold off", "put off"],
    answer: "hold off",
  },
  {
    question:
      "That bridge is unsafe, so they're going to __________ and build a new one.",
    options: ["tear it down", "tear it up"],
    answer: "tear it down",
  },
  {
    question:
      "Please take those books _________ of the boxes and put them on the shelf.",
    options: ["off", "out"],
    answer: "out",
  },
  {
    question: "My father remarried ten years after my mother __________.",
    options: ["passed away", "passed out"],
    answer: "passed away",
  },
  {
    question: "A ______ noise woke me up from my nap.",
    options: ["high", "loud", "strong"],
    answer: "loud",
  },
  {
    question:
      "His cell phone makes an ______ noise every time he gets a text message.",
    options: ["angering", "annoying", "incessant"],
    answer: "annoying",
  },
  {
    question:
      "I could tell Dan was still mad, as he glared at me in ______ silence.",
    options: ["stony", "strange", "stunned"],
    answer: "stony",
  },
  {
    question:
      "I wasn't able to relax on the beach because some teenagers had a stereo with music ______.",
    options: ["blaring", "crashing", "deafening"],
    answer: "blaring",
  },
  {
    question: "It was ______ silent inside the old, abandoned house.",
    options: ["extremely", "hardly", "perfectly"],
    answer: "perfectly",
  },
  {
    question:
      "It's ______ quiet in that classroom – are the students taking a test?",
    options: ["eerily", "oddly", "sullen"],
    answer: "oddly",
  },
  {
    question:
      "My neighbor's dogs start ______ whenever someone walks past their house.",
    options: ["barking", "chirping", "whistling"],
    answer: "barking",
  },
  {
    question: "She sang a lullaby ______ to help put the baby to sleep.",
    options: ["lightly", "muffled", "softly"],
    answer: "softly",
  },
  {
    question:
      "The ______ noise in the office makes it difficult to concentrate.",
    options: ["complete", "constant", "long"],
    answer: "constant",
  },
  {
    question:
      "The conversation on their first date was full of ______ silences.",
    options: ["awkward", "ominous", "uncharacteristic"],
    answer: "awkward",
  },
  {
    question: "A ______ percentage of the human body is made up of water.",
    options: ["big", "large"],
    answer: "large",
  },
  {
    question: "Choosing whether or not to have children is a ______ decision.",
    options: ["big", "large"],
    answer: "big",
  },
  {
    question: "I'll have a hamburger and a ______ milkshake.",
    options: ["big", "large"],
    answer: "large",
  },
  {
    question: "My wedding ring has tiny ______ diamonds embedded in it.",
    options: ["little", "small"],
    answer: "little",
  },
  {
    question:
      "The ______ challenge in losing weight is changing your eating habits.",
    options: ["biggest", "largest"],
    answer: "biggest",
  },
  {
    question:
      "The number of people buying CDs is getting ______ every year as MP3s become more popular.",
    options: ["littler", "smaller"],
    answer: "smaller",
  },
  {
    question: "The police have released ______ information about the case.",
    options: ["little", "small"],
    answer: "little",
  },
  {
    question:
      "There was a ______ mistake in the report; we'll have to print a revised copy.",
    options: ["big", "large"],
    answer: "big",
  },
  {
    question: "These jeans are too ______ for me.",
    options: ["little", "small"],
    answer: "small",
  },
  {
    question:
      "This foundation provides grants for ______ businesses in developing countries.",
    options: ["little", "small"],
    answer: "small",
  },
  {
    question: "This new policy will affect a ______ number of our employees.",
    options: ["big", "large"],
    answer: "large",
  },
  {
    question: "We had a lovely ______ picnic by the lake.",
    options: ["little", "small"],
    answer: "little",
  },
  {
    question: "I can't stand the ______ odor of smoke in that bar.",
    options: ["extensive", "pervasive", "prevalent"],
    answer: "pervasive",
  },
  {
    question: "I love the ______ smell of my grandmother's chicken soup.",
    options: ["familiar", "pungent", "revolting"],
    answer: "familiar",
  },
  {
    question: "I sensed the ______ smell of frying onions.",
    options: ["differential", "distinctive", "distinguished"],
    answer: "distinctive",
  },
  {
    question: "She breathed in the ______ fragrance of the forest.",
    options: ["earthy", "metallic", "putrid"],
    answer: "earthy",
  },
  {
    question: "Something in the fridge smells ______ - like rotting meat.",
    options: ["damp", "rancid", "stink"],
    answer: "rancid",
  },
  {
    question: "The bathroom smells so ______ right after it's been cleaned!",
    options: ["fresh", "frisky", "foul"],
    answer: "fresh",
  },
  {
    question: "The smell of vomit ______ in the hospital room.",
    options: ["continued", "lasted", "lingered"],
    answer: "lingered",
  },
  {
    question: "There was a ______ smell of alcohol on his breath.",
    options: ["faint", "small", "mild"],
    answer: "faint",
  },
  {
    question: "This wine has a light fruity ______.",
    options: ["aroma", "odor", "stench"],
    answer: "aroma",
  },
  {
    question: "Your sweaty gym clothes smell ______.",
    options: ["faint", "nasty", "spicy"],
    answer: "nasty",
  },
  {
    question:
      "As the concert ______ to a close, the lead singer thanked the fans for their support.",
    options: ["drew", "took", "went"],
    answer: "drew",
  },
  {
    question:
      "I like moving to a new city because you can make a ______ start.",
    options: ["fresh", "pure", "nice"],
    answer: "fresh",
  },
  {
    question:
      "It rained continuously for the first three days we were in Miami - a bit of a ______ start to our vacation.",
    options: ["deadly", "disappointing", "disbelieving"],
    answer: "disappointing",
  },
  {
    question:
      "My son got a job working directly under a prominent businessman. It's a very ______ start to his career.",
    options: ["complimentary", "excellent", "promising"],
    answer: "promising",
  },
  {
    question:
      "Our kids are sad that their summer vacation is ______ to an end.",
    options: ["being", "coming", "running"],
    answer: "coming",
  },
  {
    question: "The artist put the ______ touches on her painting.",
    options: ["completing", "finishing", "finalizing"],
    answer: "finishing",
  },
  {
    question: "The back injury put a ______ end to his tennis career.",
    options: ["direct", "rushed", "sudden"],
    answer: "sudden",
  },
  {
    question:
      "The famous athlete talked about his ______ beginnings on his town's local basketball team.",
    options: ["humble", "lowly", "simple"],
    answer: "humble",
  },
  {
    question:
      "The negotiations got off to a ______ start, as neither side was willing to even consider the other's proposal.",
    options: ["scary", "shaky", "steady"],
    answer: "shaky",
  },
  {
    question:
      "There seems to be no end in ______ to the country's political conflicts.",
    options: ["sight", "view", "watch"],
    answer: "sight",
  },
  {
    question:
      "Edward certainly ______ my respect when he turned down an unethical business deal.",
    options: ["bet", "took", "won"],
    answer: "won",
  },
  {
    question:
      "Efforts to reduce teen pregnancy through better sex education have seen ______ success.",
    options: ["average", "modest", "ordinary"],
    answer: "modest",
  },
  {
    question:
      "Getting a new haircut has made a ______ improvement in his overall appearance.",
    options: ["crowning", "dramatic", "theatrical"],
    answer: "dramatic",
  },
  {
    question:
      "I made a real ______ in my English when I started practicing listening more often.",
    options: ["breakdown", "breakover", "breakthrough"],
    answer: "breakthrough",
  },
  {
    question:
      "I wanted to try waterskiing, but I lost my ______ and ended up staying inside the boat.",
    options: ["heart", "nerve", "spirit"],
    answer: "nerve",
  },
  {
    question:
      "I'm not a complete pacifist; I just believe war should be the last ______.",
    options: ["option", "prospect", "resort"],
    answer: "resort",
  },
  {
    question:
      "Immigration reform was the ______ achievement of the president's term in office.",
    options: ["championing", "charming", "crowning"],
    answer: "crowning",
  },
  {
    question:
      "My attempts at losing weight have failed ______ - in fact, I've gained a few pounds!",
    options: ["inadequately", "miserably", "strongly"],
    answer: "miserably",
  },
  {
    question:
      "My girlfriend really ______ the best in me - I'm a better person thanks to our relationship.",
    options: ["brings", "gets", "helps out"],
    answer: "brings",
  },
  {
    question:
      "Putting inexperienced teachers into the country's worst schools is a ______ for disaster.",
    options: ["method", "program", "recipe"],
    answer: "recipe",
  },
  {
    question:
      "Researchers have invented a new, ______ effective treatment for leukemia.",
    options: ["highly", "richly", "sharply"],
    answer: "highly",
  },
  {
    question:
      "The company's advertising campaign was a ______ failure - it didn't attract a single new customer.",
    options: ["miraculous", "spectacular", "wonderful"],
    answer: "spectacular",
  },
  {
    question:
      "The new movie has been a ______ success, with billions of dollars in ticket sales.",
    options: ["mediocre", "phenomenal", "supernatural"],
    answer: "phenomenal",
  },
  {
    question: "There's a lot of ______ for improvement in his writing skills.",
    options: ["area", "room", "space"],
    answer: "room",
  },
  {
    question:
      "We thought the repairs on the car would cost about $500, but our estimate was way off the ______ - it was $4000.",
    options: ["mark", "point", "spot"],
    answer: "mark",
  },
  {
    question: "There is always the _______ that the plane will be early.",
    options: ["opportunity", "chance", "possibility"],
    answer: "possibility",
  },
  {
    question: "My grandfather gave me a very useful piece of _______.",
    options: ["advise", "advice"],
    answer: "advice",
  },
  {
    question: "The strike will _______ all trains in the London area.",
    options: ["effect", "affect"],
    answer: "affect",
  },
  {
    question: "The police will _______ anyone from leaving the building.",
    options: ["avoid", "prevent"],
    answer: "prevent",
  },
  {
    question: "Come and sit down _______ me.",
    options: ["beside", "besides"],
    answer: "beside",
  },
  {
    question: "_______ managing the shop, he teaches in the evening.",
    options: ["beside", "besides"],
    answer: "besides",
  },
  {
    question: "Can you switch to _______ 4 for the news?",
    options: ["channel", "canal"],
    answer: "channel",
  },
  {
    question: "Our team has a good _______ of winning.",
    options: ["opportunity", "chance", "possibility"],
    answer: "chance",
  },
  {
    question: "You should travel early to _______ traffic jams.",
    options: ["prevent", "avoid"],
    answer: "avoid",
  },
  {
    question: "I am getting fed up with her _______ complaints.",
    options: ["continuous", "continual"],
    answer: "continual",
  },
  {
    question: "It took two policemen to _______ the traffic.",
    options: ["direct", "conduct"],
    answer: "direct",
  },
  {
    question: "I _______ you to put all your money into a savings account.",
    options: ["advice", "advise"],
    answer: "advise",
  },
  {
    question: "I didn’t have much _______ on my birthday.",
    options: ["fun", "funny"],
    answer: "fun",
  },
  {
    question: "Don’t _______ my sunglasses if you borrow them.",
    options: ["damage", "harm"],
    answer: "damage",
  },
  {
    question: "The English _______ is beautiful in spring.",
    options: ["nature", "countryside"],
    answer: "countryside",
  },
  {
    question: "He didn’t mean to _______ the girl.",
    options: ["damage", "harm"],
    answer: "harm",
  },
  {
    question: "You can get a good _______ of the sea from the church tower.",
    options: ["view", "scenery"],
    answer: "view",
  },
  {
    question: "Her jewels were all imitations; they are quite _______.",
    options: ["priceless", "worthless"],
    answer: "worthless",
  },
  {
    question: "You can take a boat trip around the _______ of Amsterdam.",
    options: ["channel", "canal"],
    answer: "canal",
  },
  {
    question: "Von Karajan will _______ the orchestra at the concert.",
    options: ["direct", "conduct"],
    answer: "conduct",
  },
  {
    question: "Did Alexander Fleming _______ penicillin?",
    options: ["invent", "discover"],
    answer: "discover",
  },
  {
    question:
      "The cuts in spending will have a serious _______ on the educational system.",
    options: ["effect", "affect"],
    answer: "effect",
  },
  {
    question:
      "Staying indoors was a _______ thing to do in this kind of weather.",
    options: ["sensitive", "sensible"],
    answer: "sensible",
  },
  {
    question: "You should always be _______ to children.",
    options: ["sympathetic", "kind"],
    answer: "kind",
  },
  {
    question: "He made _______ faces and made the children laugh.",
    options: ["fun", "funny"],
    answer: "funny",
  },
  {
    question:
      "I am very tired; I’ll just go and _______ down for a few minutes.",
    options: ["lie", "lay"],
    answer: "lie",
  },
  {
    question: "She has been in _______ pain for over three days.",
    options: ["continual", "continuous"],
    answer: "continuous",
  },
  {
    question: "He asked me if I would _______ him some money until Monday.",
    options: ["lend", "borrow"],
    answer: "lend",
  },
  {
    question: "The _______ wants to see you in his office.",
    options: ["principle", "principal"],
    answer: "principal",
  },
  {
    question: "We must try to protect _______ and the environment.",
    options: ["nature", "countryside"],
    answer: "nature",
  },
  {
    question: "Goods cannot be exchanged unless a sales _______ can be shown.",
    options: ["recipe", "receipt"],
    answer: "receipt",
  },
  {
    question: "I am very _______ to her problems.",
    options: ["sympathetic", "kind"],
    answer: "sympathetic",
  },
  {
    question: "Be very careful with that painting; it’s _______.",
    options: ["priceless", "worthless"],
    answer: "priceless",
  },
  {
    question: "The airlines are going to _______ their fares again.",
    options: ["raise", "rise"],
    answer: "raise",
  },
  {
    question: "Can I _______ your car to go to the supermarket?",
    options: ["lend", "borrow"],
    answer: "borrow",
  },
  {
    question: "I gave her an Italian _______ book for her birthday.",
    options: ["recipe", "receipt"],
    answer: "recipe",
  },
  {
    question: "My father is going to _______ a new carpet in the dining room.",
    options: ["lie", "lay"],
    answer: "lay",
  },
  {
    question: "Did you _______ to switch off the kitchen light?",
    options: ["remind", "remember"],
    answer: "remember",
  },
  {
    question: "When did she _______ the new computer terminal?",
    options: ["invent", "discover"],
    answer: "invent",
  },
  {
    question: "I adore the beautiful _______ in the Lake District.",
    options: ["view", "scenery"],
    answer: "scenery",
  },
  {
    question: "She is very _______ and is easily upset.",
    options: ["sensible", "sensitive"],
    answer: "sensitive",
  },
  {
    question: "Does the sun _______ in the east or in the west?",
    options: ["raise", "rise"],
    answer: "rise",
  },
  {
    question: "Would you _______ me to finish early tonight?",
    options: ["remind", "remember"],
    answer: "remind",
  },
  {
    question:
      "She _______ attention to what I told her and started working harder.",
    options: ["had", "paid", "took"],
    answer: "paid",
  },
  {
    question: "I _______ over a hundred photographs on my trip to Antarctica.",
    options: ["had", "made", "took"],
    answer: "took",
  },
  {
    question: "She _______ me a nice compliment yesterday.",
    options: ["brought", "made", "paid"],
    answer: "paid",
  },
  {
    question: "I _______ a bad dream last night and woke up sweating.",
    options: ["got", "had", "made"],
    answer: "had",
  },
  {
    question:
      "The President _______ tribute to all the people who had supported him.",
    options: ["gave", "made", "paid"],
    answer: "paid",
  },
  {
    question: "I _______ a liking to my new doctor the moment I met her.",
    options: ["got", "had", "took"],
    answer: "took",
  },
  {
    question:
      "I _______ a feeling I had met Richard before, but I couldn’t remember where.",
    options: ["gave", "had", "made"],
    answer: "had",
  },
  {
    question:
      "I went to Douglas Farnham’s funeral to _______ my last respects to a fine man.",
    options: ["give", "pay", "take"],
    answer: "pay",
  },
  {
    question:
      "I think I’ll _______ a chance and leave my flight booking till the last minute.",
    options: ["do", "make", "take"],
    answer: "take",
  },
  {
    question:
      "Shall we _______ a party for Ruby? She’s moving to Manchester next week.",
    options: ["get", "have", "make"],
    answer: "have",
  },
  {
    question: "We need to _______ action immediately!",
    options: ["get", "make", "take"],
    answer: "take",
  },
  {
    question:
      "I _______ a feeling that he was trying to hide something from me.",
    options: ["got", "had", "took"],
    answer: "had",
  },
  {
    question: "The dentist told me to _______ my mouth.",
    options: ["shut", "close"],
    answer: "close",
  },
  {
    question:
      "I didn’t know what to do when I got into my car and couldn’t _______ the engine.",
    options: ["start", "begin"],
    answer: "start",
  },
  {
    question:
      "I want to buy a sweater for my dad. He needs one in a _______ size.",
    options: ["big", "large"],
    answer: "large",
  },
  {
    question: "At what time do you plan to _______ the conference?",
    options: ["shut", "close"],
    answer: "close",
  },
  {
    question:
      "All societies develop their own stories about how the world _______.",
    options: ["started", "began"],
    answer: "began",
  },
  {
    question: "It’s far too _______ a problem for you to solve on your own.",
    options: ["big", "large"],
    answer: "big",
  },
  {
    question: "It’s never easy to _______ a relationship.",
    options: ["finish", "end"],
    answer: "end",
  },
  {
    question: "Someone _______ into my computer and changed my passwords.",
    options: ["crashed", "hacked", "backed"],
    answer: "hacked",
  },
  {
    question:
      "This new software is really effective at _______ spam from my email account. I hardly ever get junk emails anymore!",
    options: ["crashing", "sending", "blocking"],
    answer: "blocking",
  },
  {
    question: "Poor Lorna. Her computer _______ and she lost all her work!",
    options: ["crashed", "hacked", "blocked"],
    answer: "crashed",
  },
  {
    question: "Be sure you _______ your files, so you don’t lose anything.",
    options: ["storage", "back up", "link"],
    answer: "back up",
  },
  {
    question:
      "Every time I _______ on the link you sent me, my browser crashes.",
    options: ["put", "switch", "click"],
    answer: "click",
  },
  {
    question:
      "I wanted to _______ a vocab app, but there’s not enough space on my phone.",
    options: ["upload", "backup", "download"],
    answer: "download",
  },
  {
    question: "I’m happy to say that you have _______ your maths test.",
    options: ["passed", "sat", "taken"],
    answer: "passed",
  },
  {
    question: "Will the teacher _______ us some feedback on our essays?",
    options: ["give", "make", "provide"],
    answer: "give",
  },
  {
    question:
      "The university _______ the school-leaving exams of most other countries.",
    options: ["agrees", "recognises", "takes"],
    answer: "recognises",
  },
  {
    question:
      "It isn’t compulsory to _______ all the lectures at this university.",
    options: ["assist", "attend", "listen"],
    answer: "attend",
  },
  {
    question: "How long will it take you to _______ your degree?",
    options: ["carry out", "complete", "fulfil"],
    answer: "complete",
  },
  {
    question: "You must _______ your application in before the end of June.",
    options: ["send", "submit", "write"],
    answer: "send",
  },
  {
    question: "Several students have decided to _______ the course this year.",
    options: ["go", "leave", "withdraw"],
    answer: "leave",
  },
  {
    question: "I want you all to _______ a vocabulary notebook.",
    options: ["hold", "keep", "write"],
    answer: "keep",
  },
  {
    question:
      "This paper _______ the case for the complete revision of the theory.",
    options: ["proposes", "presents", "offers"],
    answer: "presents",
  },
  {
    question:
      "Recent research _______ that Jackson’s theory of economic development is flawed.",
    options: ["hints", "explains", "suggests"],
    answer: "suggests",
  },
  {
    question:
      "The author of the book _______ an unusual position on the topic.",
    options: ["adopts", "adapts", "affects"],
    answer: "adopts",
  },
  {
    question: "The writer of the article _______ his opinion very clearly.",
    options: ["explains", "states", "declares"],
    answer: "states",
  },
  {
    question:
      "The article concludes by _______ summarising the main points that the author wishes to put across.",
    options: ["briefly", "shortly", "precisely"],
    answer: "briefly",
  },
  {
    question:
      "The writer _______ some interesting parallels between life now and life in the Middle Ages.",
    options: ["does", "draws", "creates"],
    answer: "draws",
  },
  {
    question:
      "I _______ firmly to my belief in the importance of basic human rights.",
    options: ["keep", "take", "hold"],
    answer: "hold",
  },
  {
    question:
      "The book _______ some key questions but fails to deal with them in a satisfactory manner.",
    options: ["rises", "arises", "raises"],
    answer: "raises",
  },
  {
    question: "An earthquake has caused extensive _____ in the countryside.",
    options: ["damage", "defects", "uproar"],
    answer: "damage",
  },
  {
    question:
      "Everyone was surprised by the _____ outcome of the presidential election.",
    options: ["unexpected", "understated", "unimpressive"],
    answer: "unexpected",
  },
  {
    question:
      "Food additives may be one of the _____ causes of the rising incidence of cancer.",
    options: ["critical", "elementary", "underlying"],
    answer: "underlying",
  },
  {
    question:
      "I'd like to see some _____ results from your work — so far, all you've presented are theories.",
    options: ["concrete", "material", "stable"],
    answer: "concrete",
  },
  {
    question:
      "New regulations on pollution have unfortunately had a _____ effect on water contamination levels.",
    options: ["negligible", "preliminary", "tangible"],
    answer: "negligible",
  },
  {
    question:
      "Parents are concerned about the _____ effects of kids playing violent video games.",
    options: ["long-span", "long-term", "long-time"],
    answer: "long-term",
  },
  {
    question: "Paulo Coelho's books have had a _____ impact on my life.",
    options: ["profound", "reflective", "thorough"],
    answer: "profound",
  },
  {
    question:
      "The company's financial problems are the _____ result of years of poor management.",
    options: ["inevitable", "inflexible", "irresistible"],
    answer: "inevitable",
  },
  {
    question:
      "The increase in gang violence in the neighborhood is cause for _____.",
    options: ["alarm", "alert", "injury"],
    answer: "alarm",
  },
  {
    question: "The medication I'm taking has a few unpleasant _____ effects.",
    options: ["border", "lateral", "side"],
    answer: "side",
  },
  {
    question:
      "The singer caused a huge _____ when he announced he was leaving the band.",
    options: ["unhappiness", "uproar", "upset"],
    answer: "uproar",
  },
  {
    question:
      "We need to find the _____ cause of our employees' lack of motivation.",
    options: ["base", "origin", "root"],
    answer: "root",
  },
  {
    question:
      "I agree in _____ that we need to spend less time on our iPhones... but I can't seem to stop using mine!",
    options: ["basis", "foundation", "principle"],
    answer: "principle",
  },
  {
    question:
      "I am worlds _____ from my parents when it comes to our religious views.",
    options: ["along", "apart", "away"],
    answer: "apart",
  },
  {
    question:
      "I _____ agree with the company's decision to relax the dress code for employees.",
    options: ["highly", "totally", "very"],
    answer: "totally",
  },
  {
    question:
      "I'm _____ I disagree with your analysis; I think you've overlooked some important points.",
    options: ["afraid", "fearful", "scared"],
    answer: "afraid",
  },
  {
    question:
      "My best friend and I have always been able to _____ our disagreements without fighting.",
    options: ["conclude", "satisfy", "settle"],
    answer: "settle",
  },
  {
    question:
      "My roommates and I _____ a compromise about cleaning the apartment.",
    options: ["arrived", "entered", "reached"],
    answer: "reached",
  },
  {
    question: "She agreed _____ with my suggested changes to the design.",
    options: ["comprehensively", "generously", "wholeheartedly"],
    answer: "wholeheartedly",
  },
  {
    question:
      "Some people prefer to argue indefinitely rather than trying to _____ the conflict.",
    options: ["answer", "resolve", "resume"],
    answer: "resolve",
  },
  {
    question:
      "The other students _____ my opinion that the teacher is not very knowledgeable.",
    options: ["combine", "divide", "share"],
    answer: "share",
  },
  {
    question: "The soccer players had a _____ disagreement with the referee.",
    options: ["large-scale", "major", "principal"],
    answer: "major",
  },
  {
    question:
      "Those two countries have a long-running _____ over that particular territory.",
    options: ["dispel", "dispute", "disturbance"],
    answer: "dispute",
  },
  {
    question:
      "Tom and Larry had a _____ disagreement about where to park the car.",
    options: ["slight", "slim", "weak"],
    answer: "slight",
  },
  {
    question:
      "We agree with your plans up to a _____, but we think you should reconsider a few aspects.",
    options: ["limit", "place", "point"],
    answer: "point",
  },
  {
    question:
      "Aaron is so arrogant; he seems to have an _____ belief in his own superiority.",
    options: ["unfeasible", "unlikeable", "unshakable"],
    answer: "unshakable",
  },
  {
    question:
      "After _____ consideration, we decided to buy a van rather than a car.",
    options: ["another", "further", "supplemental"],
    answer: "further",
  },
  {
    question:
      "Although I was hired for the job, I still have a _____ doubt about whether or not I'm truly qualified for it.",
    options: ["bothering", "nagging", "staying"],
    answer: "nagging",
  },
  {
    question:
      "Bill Clinton's affair _____ doubt on his honesty as a president.",
    options: ["cast", "put", "thrust"],
    answer: "cast",
  },
  {
    question:
      "_____ to popular belief, blonde and blue-eyed Brazilians do exist.",
    options: ["Against", "Contrary", "Opposite"],
    answer: "Contrary",
  },
  {
    question: "Don't let your fears _____ your judgment.",
    options: ["color", "light", "sound"],
    answer: "color",
  },
  {
    question:
      "I hate it when people make _____ about me based on my skin color.",
    options: ["assumptions", "inferences", "suspicions"],
    answer: "assumptions",
  },
  {
    question:
      "I have a _____ suspicion that my friends are planning a surprise birthday party for me.",
    options: ["cunning", "sneaking", "tricky"],
    answer: "sneaking",
  },
  {
    question: "I _____ believe that everything happens for a reason.",
    options: ["heavily", "securely", "strongly"],
    answer: "strongly",
  },
  {
    question:
      "If you have a _____ belief that you don't deserve success, then you'll probably never attain it.",
    options: ["psychic", "subconscious", "unaware"],
    answer: "subconscious",
  },
  {
    question:
      "Meeting an 80-year-old professional athlete _____ my belief that age is no limit!",
    options: ["enlarged", "hardened", "strengthened"],
    answer: "strengthened",
  },
  {
    question:
      "The evidence proved, _____ a shadow of a doubt, that Carson was guilty of the crime.",
    options: ["before", "beside", "beyond"],
    answer: "beyond",
  },
  {
    question:
      "The results of the customer satisfaction survey _____ us to the conclusion that our service needs to be improved.",
    options: ["lead", "put", "take"],
    answer: "lead",
  },
  {
    question:
      "There's a common _____ that tomatoes are vegetables - but they're technically fruits.",
    options: ["misconception", "misconstruction", "misunderstanding"],
    answer: "misconception",
  },
  {
    question:
      "We _____ doubts about the feasibility of the plan, but our colleagues said we were worrying too much.",
    options: ["sounded", "told", "voiced"],
    answer: "voiced",
  },
  {
    question:
      "A _____ document shows that the U.S. is planning to build additional military bases in Central America.",
    options: ["disclosed", "escaped", "leaked"],
    answer: "leaked",
  },
  {
    question:
      "A lot of people believe the completely _____ claims they read on the internet, and never actually research the issue.",
    options: ["impossible", "malicious", "unfounded"],
    answer: "unfounded",
  },
  {
    question:
      "In the interview, the director heavily _____ that there would be a sequel to the film.",
    options: ["implied", "included", "intended"],
    answer: "implied",
  },
  {
    question:
      "My cousin wanted to give me a job at his restaurant, but I _____ the offer.",
    options: ["denied", "refused", "repelled"],
    answer: "refused",
  },
  {
    question:
      "Some parents are _____ accusing the teacher of favoritism in the classroom.",
    options: ["honestly", "openly", "transparently"],
    answer: "openly",
  },
  {
    question:
      "That university is _____ acknowledged to be the best place in the world to study law.",
    options: ["hugely", "unjustly", "widely"],
    answer: "widely",
  },
  {
    question:
      "The corporation laid off 10,000 workers, _____ speculation that it is close to bankruptcy.",
    options: ["firing", "fueling", "inflaming"],
    answer: "fueling",
  },
  {
    question:
      "The human resources manager _____ the allegations that the company hired illegal immigrants.",
    options: ["defends", "denies", "denounces"],
    answer: "denies",
  },
  {
    question:
      "The police are _____ accusations of using excessive violence to arrest a teenager, after some witnesses filmed the situation on their cell phones.",
    options: ["claiming", "facing", "implying"],
    answer: "facing",
  },
  {
    question:
      "The sports team _____ a statement apologizing for the athlete's offensive behavior.",
    options: ["declared", "issued", "transmitted"],
    answer: "issued",
  },
  {
    question:
      "The tabloid magazines are _____ the rumor that the actress is pregnant.",
    options: ["divulging", "growing", "spreading"],
    answer: "spreading",
  },
  {
    question:
      "Whenever my brother calls me 'just to say hi,' there's always an _____ motive - usually he needs to borrow some money.",
    options: ["ulterior", "ultimate", "undercover"],
    answer: "ulterior",
  },
  {
    question: "Brian _____ an instant dislike to his father's new girlfriend.",
    options: ["caught", "got", "took"],
    answer: "took",
  },
  {
    question:
      "I hate soap operas with a _____; I don't understand why anyone would watch that trash.",
    options: ["frenzy", "passion", "rage"],
    answer: "passion",
  },
  {
    question:
      "I have nothing but _____ for parents who abandon their children.",
    options: ["aversion", "condemn", "contempt"],
    answer: "contempt",
  },
  {
    question:
      "I was sad when my parents gave away my childhood toys; I had _____ quite attached to them.",
    options: ["brought", "come", "grown"],
    answer: "grown",
  },
  {
    question: "I'm a _____ admirer of your poetry – it's really inspiring.",
    options: ["big", "great", "large"],
    answer: "great",
  },
  {
    question: "Life is Beautiful is my _____ favorite movie.",
    options: ["all-time", "everlasting", "long-term"],
    answer: "all-time",
  },
  {
    question:
      "My grandfather is a _____ fan of his old college basketball team.",
    options: ["forever", "lifelong", "permanent"],
    answer: "lifelong",
  },
  {
    question: "My husband has an _____ hatred of cats.",
    options: ["impossible", "incoherent", "irrational"],
    answer: "irrational",
  },
  {
    question:
      "Some people don't like their parents, but I hold mine in the highest _____.",
    options: ["regard", "reserve", "value"],
    answer: "regard",
  },
  {
    question: "The customers have a _____ preference for inexpensive products.",
    options: ["clear", "fair", "light"],
    answer: "clear",
  },
  {
    question:
      "Her parents refused to give their _____ to her marriage to a man from a different culture.",
    options: ["blessing", "grace", "thanksgiving"],
    answer: "blessing",
  },
  {
    question:
      "I _____ support the campaign for humane treatment of farm animals.",
    options: ["animatedly", "enthusiastically", "forcefully"],
    answer: "enthusiastically",
  },
  {
    question:
      "My son is my parents’ only grandchild, so of course they think the _____ of him.",
    options: ["globe", "earth", "world"],
    answer: "world",
  },
  {
    question:
      "Some men will do anything to _____ the approval of the woman they love.",
    options: ["catch", "stand", "win"],
    answer: "win",
  },
  {
    question:
      "That course seems excellent – everyone who takes it speaks very _____ of it.",
    options: ["deeply", "greatly", "highly"],
    answer: "highly",
  },
  {
    question: "The actress' _____ performance in the film won her an Oscar.",
    options: ["distinguished", "outstanding", "warm"],
    answer: "outstanding",
  },
  {
    question:
      "The article made some _____ criticisms of the corruption in the country's political system.",
    options: ["burning", "grudging", "scathing"],
    answer: "scathing",
  },
  {
    question:
      "The author's new book received a _____ of criticism from people who disagree with her philosophy.",
    options: ["barrage", "barricade", "blast"],
    answer: "barrage",
  },
  {
    question:
      "The manager _____ criticism that he was overspending by showing how the investments would grow the business' profit in the future.",
    options: ["attacked", "countered", "defended"],
    answer: "countered",
  },
  {
    question: "We _____ approve of your proposal.",
    options: ["emotionally", "heartily", "politely"],
    answer: "heartily",
  },
  {
    question:
      "A new TV show has sparked _____ by showing the positive side of dropping out of college.",
    options: ["argument", "contention", "controversy"],
    answer: "controversy",
  },
  {
    question:
      "A _____ of disappointment came over me when I heard that the show had been canceled.",
    options: ["flood", "roll", "wave"],
    answer: "wave",
  },
  {
    question:
      "Having lots of pets as I was growing up _____ my interest in studying veterinary medicine.",
    options: ["ignited", "kindled", "started"],
    answer: "kindled",
  },
  {
    question:
      "Her face _____ up when I asked her about the award she'd recently won.",
    options: ["lit", "shone", "turned"],
    answer: "lit",
  },
  {
    question:
      "I was thrilled to see a romance _____ between two of my best friends.",
    options: ["blossoming", "rooting", "shining"],
    answer: "blossoming",
  },
  {
    question: "My grandmother remembers the _____ days of the civil war.",
    options: ["black", "dark", "shady"],
    answer: "dark",
  },
  {
    question:
      "The boxer dodged his opponent's punch and threw a _____ fast counterattack.",
    options: ["lightning", "streaming", "thunder"],
    answer: "lightning",
  },
  {
    question:
      "The city's efforts to cut down on pollution are finally _____ fruit.",
    options: ["bearing", "growing", "producing"],
    answer: "bearing",
  },
  {
    question:
      "The legality of abortion is a _____ issue involving questions of human life, women's rights, and societal responsibility.",
    options: ["flowing", "sharp", "thorny"],
    answer: "thorny",
  },
  {
    question:
      "Hundreds of people _____ into the store the moment the doors opened.",
    options: ["dripped", "trickled", "poured"],
    answer: "poured",
  },
  {
    question:
      "When the police investigate a crime, they _____ evidence such as fingerprints, hair, or clothing.",
    options: ["look after", "look for", "look into", "look up to"],
    answer: "look for",
  },
  {
    question: "Do you _____ your new roommate, or do you two argue?",
    options: [
      "get along with",
      "get used to",
      "keep in touch with",
      "on good terms with",
    ],
    answer: "get along with",
  },
  {
    question:
      "After months of testing, the Russian space scientists _____ a space suit that works better than any other in history.",
    options: ["came out with", "came to", "came up to", "came up with"],
    answer: "came up with",
  },
  {
    question: "Let’s check our hotel room _____ before we pay for it.",
    options: ["away", "off", "out", "up"],
    answer: "out",
  },
  {
    question: "He lost the tennis match, so we will try to cheer him _____.",
    options: ["away", "off", "on", "up"],
    answer: "up",
  },
  {
    question: "The mechanic broke the engine _____ its many components.",
    options: ["down into", "into", "off into", "up into"],
    answer: "down into",
  },
  {
    question:
      "The couple broke _____ their engagement after they had a huge argument.",
    options: ["away", "in", "off", "over"],
    answer: "off",
  },
  {
    question:
      "The new mayor will bring _____ a change in local government policies.",
    options: ["about", "out", "up", "with"],
    answer: "about",
  },
  {
    question:
      "Try _____ this bicycle to determine if you feel comfortable on it.",
    options: ["at", "off", "on", "out"],
    answer: "out",
  },
  {
    question:
      "She turned the first offer _____ because she wanted more money for her house.",
    options: ["away", "down", "off", "out"],
    answer: "down",
  },
  {
    question: "They decided to name the new baby boy _____ Grandpa.",
    options: ["after", "as", "of", "with"],
    answer: "after",
  },
  {
    question:
      "Mom told her little boy to put all his toys _____ before coming to dinner.",
    options: ["away", "in", "off", "out"],
    answer: "away",
  },
  {
    question: "The couple put their wedding _____ until next year.",
    options: ["away", "off", "on", "up"],
    answer: "off",
  },
  {
    question: "The gunman told the victim to hand _____ all his money.",
    options: ["in", "off", "out", "over"],
    answer: "over",
  },
  {
    question: "Don’t throw your jacket on the bed. Hang it _____.",
    options: ["in", "on", "over", "up"],
    answer: "up",
  },
  {
    question: "The supervisor told her to keep _____ the good work.",
    options: ["away", "off", "out", "up"],
    answer: "up",
  },
  {
    question: "Man is killing _____ all the fish in the sea.",
    options: ["away", "off", "out", "up"],
    answer: "off",
  },
  {
    question:
      "If you leave _____ any information, the form will be returned to you.",
    options: ["away", "down", "out", "up"],
    answer: "out",
  },
  {
    question:
      "Security is very important in this building. Don’t let anyone _____ unless they show you proper identification.",
    options: ["in", "off", "on", "out"],
    answer: "in",
  },
  {
    question: "Look this document _____ carefully before you sign it.",
    options: ["at", "on", "over", "up"],
    answer: "over",
  },
  {
    question:
      "If you don’t know what a word means, look it _____ in the dictionary.",
    options: ["at", "on", "over", "up"],
    answer: "up",
  },
  {
    question:
      "I couldn’t make _____ all the words on the sign because my glasses were dirty.",
    options: ["clear", "out", "up", "up with"],
    answer: "out",
  },
  {
    question:
      "Tony and Nancy always kiss and make _____ after their arguments.",
    options: ["off", "up", "up with", "with"],
    answer: "up",
  },
  {
    question: "Cross _____ my name because I won’t be able to attend.",
    options: ["away", "down", "out", "up"],
    answer: "out",
  },
  {
    question: "She will cut _____ the number of cigarettes she smokes.",
    options: ["down", "in", "off", "up"],
    answer: "down",
  },
  {
    question: "Have you figured _____ how to solve the problem yet?",
    options: ["in", "of", "on", "out"],
    answer: "out",
  },
  {
    question: "After you fill the application form _____, sign it and date it.",
    options: ["off", "on", "out", "with"],
    answer: "out",
  },
  {
    question:
      "You should always fill _____ your tank when it gets down to a quarter full.",
    options: ["in", "off", "out", "up"],
    answer: "up",
  },
  {
    question:
      "All students must hand _____ their homework the day after it is assigned.",
    options: ["in", "on", "out", "to"],
    answer: "in",
  },
  {
    question:
      "The daughter looked _____ her mother after her mom was sent home from the hospital with a broken hip.",
    options: ["after", "at", "on", "upon"],
    answer: "after",
  },
  {
    question:
      "Why don’t you look _____ this situation and see if you can figure out a way to fix it without spending too much money?",
    options: ["into", "on", "out", "up"],
    answer: "into",
  },
  {
    question:
      "My grandfather passed _____ when I was only six years old. He had lung cancer.",
    options: ["away", "off", "out", "over"],
    answer: "away",
  },
  {
    question:
      "Every day many of us have to put _____ people that we don’t like.",
    options: ["off with", "on with", "up", "up with"],
    answer: "up with",
  },
  {
    question:
      "Nancy ran _____ Bob while both were shopping at the supermarket.",
    options: ["across", "Do", "onto", "over"],
    answer: "across",
  },
  {
    question:
      "If you go hiking, you should watch _____ for poison oak and snakes. Both can cause you problems.",
    options: ["on", "out", "over", "up"],
    answer: "out",
  },
  {
    question:
      "Let’s get _____ the bus at the next stop. We can visit the museum and catch another bus in a couple of hours.",
    options: ["in", "off", "onto", "out"],
    answer: "off",
  },
  {
    question: "When the student got _____ the test, he gave it to the teacher.",
    options: ["over", "over with", "through at", "through with"],
    answer: "through with",
  },
  {
    question:
      "If you’re going to give _____ smoking, you must have a lot of will power.",
    options: ["away", "into", "off", "up"],
    answer: "up",
  },
  {
    question:
      "After you write your report, give it to your boss. He will go _____ it and make any necessary changes.",
    options: ["over", "through with", "upon", "with"],
    answer: "over",
  },
  {
    question:
      "She kept _________ taking the real estate exam until she finally passed it and got her license.",
    options: ["on", "onto", "in", "at"],
    answer: "on",
  },
  {
    question:
      "Kids have to walk fast if they want to _______ their parents on a stroll through the park.",
    options: ["keep with", "keep up with", "keep on to", "keep over with"],
    answer: "keep up with",
  },
  {
    question:
      "You’d better cut _____ animal fat if you want to lower your cholesterol level.",
    options: ["down with", "off with", "out in", "down on"],
    answer: "down on",
  },
  {
    question: "I wish my friends would call me first before they drop ____.",
    options: ["in", "out", "at", "off"],
    answer: "in",
  },
  {
    question:
      "Sales of the toy dropped ____ sharply when the TV news reported that a child had swallowed part of the toy and almost died.",
    options: ["out", "over", "away", "off"],
    answer: "off",
  },
  {
    question:
      "People who don’t get _____ their coworkers sometimes don’t last long at their jobs.",
    options: ["up with", "along with", "on to", "by with"],
    answer: "along with",
  },
  {
    question:
      "At a crime scene, the police will tell you to get back. They don’t want civilians to interfere ________ the investigation.",
    options: ["at", "on", "with", "into"],
    answer: "with",
  },
  {
    question:
      "The boy was always getting ______ trouble as a youth. Then, to everyone's surprise, he became a policeman.",
    options: ["into", "onto", "on", "with"],
    answer: "into",
  },
  {
    question: "Mankind has managed to wipe ____ many kinds of animals.",
    options: ["away", "off", "out", "over"],
    answer: "out",
  },
  {
    question:
      "My car broke _______ on the way to work. I had to call a tow truck.",
    options: ["down", "up", "off", "away"],
    answer: "down",
  },
  {
    question:
      "Before you finish this project, check _____ your supervisor for further instructions.",
    options: ["on", "on with", "back with", "up"],
    answer: "back with",
  },
  {
    question: "As soon as we got to the motel, we checked ______.",
    options: ["at", "in", "on", "off"],
    answer: "in",
  },
  {
    question:
      "While looking for my nail clipper, I came _____ a knife that I thought I had lost.",
    options: ["at", "with", "up", "across"],
    answer: "across",
  },
  {
    question:
      "We’ve _______ out of milk. You’ll have to drink your tea without it.",
    options: ["come", "taken", "gone", "run"],
    answer: "run",
  },
  {
    question:
      "It’s difficult to _______ luxuries when you’re used to having them.",
    options: ["cut down on", "cut down at", "cut off on", "cutdown into"],
    answer: "cut down on",
  },
  {
    question:
      "I missed the seven o’clock news on the radio this morning. I _____ up too late.",
    options: ["came", "turned", "grew", "woke"],
    answer: "woke",
  },
  {
    question: "Governments should ______ international laws against terrorism.",
    options: ["bring up", "bring about", "bring in", "bring back"],
    answer: "bring in",
  },
  {
    question:
      "You can’t possibly say no to such a wonderful job offer. It’s too good to ______.",
    options: ["turn it up", "turn it down", "put it up", "put it down"],
    answer: "turn it down",
  },
  {
    question: "Eva was born in the South, but she grew _____ in the North.",
    options: ["up", "on", "about", "at"],
    answer: "up",
  },
  {
    question:
      "“What _______ your flight?” “There was a big snowstorm in Denver that delayed a lot of flights.”",
    options: ["delayed up", "postponed up", "held up", "hung up"],
    answer: "held up",
  },
  {
    question:
      "“Can you read that sign?” “Just a minute. Let me ______ my glasses.”",
    options: ["put off", "put on", "put with", "put away"],
    answer: "put on",
  },
  {
    question:
      "This is Bob speaking. I need my pocket calculator. Can I have it back tomorrow? I can’t ______ it.",
    options: ["do with", "do without", "deal with", "deal without"],
    answer: "do without",
  },
  {
    question:
      "“That old paint that you have stored in your garage is a fire hazard.” “You’re right. I should ______ it.”",
    options: [
      "get away from",
      "get rid of",
      "get through with",
      "get along with",
    ],
    answer: "get rid of",
  },
  {
    question:
      "“You must be anxious to go on your vacation.” “I certainly am. I’m really ______ this trip.”",
    options: [
      "looking for",
      "looking forward",
      "looking forward to",
      "looking up to",
    ],
    answer: "looking forward to",
  },
  {
    question: "“Who _____ out that tie for you?” “No one. I chose it myself.”",
    options: ["bought", "brought", "turned", "picked"],
    answer: "picked",
  },
  {
    question:
      "We didn’t like John when we first met him, but he has turned _____ to be a good friend to us.",
    options: ["down", "up", "on", "out"],
    answer: "out",
  },
  {
    question:
      "“Have you _____ this contract yet?” “Not yet. I’ll try to read it this weekend.”",
    options: ["looked over", "looked into", "looked up", "looked out"],
    answer: "looked over",
  },
  {
    question:
      "After ten minutes, the students ___ in their quizzes to the instructor.",
    options: ["gave", "had", "held", "handed"],
    answer: "handed",
  },
  {
    question: "“Hello, is Bill there?” “Yes, ___ a minute, and I’ll get him.”",
    options: ["hang on", "hang up", "hold on", "A and C are correct"],
    answer: "A and C are correct",
  },
  {
    question:
      "I was talking to my aunt when suddenly my cousin George ____ in on our conversation.",
    options: ["interrupted", "broke", "went", "intervened"],
    answer: "broke",
  },
  {
    question: "The building work has been _____ by bad weather.",
    options: ["given up", "held up", "lain down", "turned off"],
    answer: "held up",
  },
  {
    question: "Michael could hardly wait to _______ his new bicycle.",
    options: ["sit down", "turn back", "try out", "put on"],
    answer: "try out",
  },
  {
    question: "You should look _______ the word in the dictionary.",
    options: ["after", "up", "into", "at"],
    answer: "up",
  },
  {
    question:
      "John takes other children’s toys and doesn’t want to give them _____.",
    options: ["to", "in", "away", "back"],
    answer: "back",
  },
  {
    question:
      "With that bad temper, he certainly _____ after his father. He is exactly the same.",
    options: ["takes", "looks", "goes", "puts"],
    answer: "takes",
  },
  {
    question: "I seem to spend all my time _____ forms.",
    options: ["going away", "trying out", "filling in", "lying down"],
    answer: "filling in",
  },
  {
    question: "That’s him _______ off that bus over there!",
    options: ["dropping", "taking", "going", "getting"],
    answer: "getting",
  },
  {
    question: "There you are at last! I was wondering when you’d _______ up.",
    options: ["look", "turn", "hold", "give"],
    answer: "turn",
  },
  {
    question:
      "This hike is pretty exhausting. I don’t think I can go _______ any further. I need to rest.",
    options: ["on", "out", "in", "to"],
    answer: "on",
  },
  {
    question:
      "This cold has lasted too long. I feel like I’ll never get _______ it.",
    options: ["away", "back", "over", "with"],
    answer: "over",
  },
  {
    question: `"You enjoy old movies, don't you?" "__________________, I'd rather not stay up late to watch one tonight."`,
    options: [
      "All the same",
      "Even though",
      "On the contrary",
      "On the other hand",
    ],
    answer: "All the same",
  },
  {
    question:
      "Everyone has to hand in their assignments by noon but__________________ Sam, I'll make an exception.",
    options: [
      "in any case for",
      "in case of",
      "in the case of",
      "the case being",
    ],
    answer: "in the case of",
  },
  {
    question:
      "Improving public transportation __________________ the mayor’s plans for the city.",
    options: [
      "centrally of",
      "is central to",
      "is the center to",
      "so central that",
    ],
    answer: "is central to",
  },
  {
    question: `"Bill is going through a difficult time." "But in spite __________________ so many problems, he still remains cheerful."`,
    options: ["having", "of having", "that he has", "the fact he has"],
    answer: "of having",
  },
  {
    question: "__________________ that no one on the committee supported it.",
    options: [
      "Being such a ridiculous proposal",
      "So ridiculous proposal it was",
      "So ridiculous was the proposal",
      "The proposal was such ridiculous",
    ],
    answer: "So ridiculous was the proposal",
  },
  {
    question:
      "The accident happened __________________ the bus not having been properly serviced.",
    options: ["in consequence", "on account", "owing to", "because"],
    answer: "owing to",
  },
  {
    question:
      "Only __________________ students have their own cars - most use bicycles.",
    options: ["a minority of", "minority", "of a minority", "the minority"],
    answer: "a minority of",
  },
  {
    question: `"I'm afraid there's no coffee left." "No problem. I'll have tea__________________"`,
    options: ["as well", "insteadd", "rather", "still"],
    answer: "as well",
  },
  {
    question:
      "__________________ Vicky goes, she takes her favorite bag with her.",
    options: ["However", "No matter where", "Nevertheless", "Whereas"],
    answer: "No matter where",
  },
  {
    question:
      "Anna has been deaf since birth, __________________ she has managed to learn to play the piano beautifully.",
    options: [
      "although still",
      "but although",
      "but despite this",
      "despite but this",
    ],
    answer: "but despite this",
  },
  {
    question:
      "With so many affordable computers on the market, consumers are really __________________ for choice.",
    options: ["offered", "opted", "rich", "spoilt"],
    answer: "spoilt",
  },
  {
    question:
      "The police officer described the crime without a __________________ of emotion in his voice.",
    options: ["grain", "pinch", "speck", "trace"],
    answer: "trace",
  },
  {
    question:
      "The teacher praised the boy's __________________ to tidy up the classroom.",
    options: ["appetite", "eagerness", "effectiveness", "likeness"],
    answer: "eagerness",
  },
  {
    question:
      "This pizza would taste better if you used fresh rather than __________________ cheese.",
    options: ["conservative", "developed", "meagre", "processed"],
    answer: "processed",
  },
  {
    question: "Sarah __________________ $2,000 in a new computer company.",
    options: ["indulged", "ingested", "involved", "invested"],
    answer: "invested",
  },
  {
    question:
      "__________________ the fish with salt before you put it in the oven.",
    options: ["Sliced", "Spread", "Sprinkle", "Squeeze"],
    answer: "Sprinkle",
  },
  {
    question:
      "The city zoo is __________________ and houses thousands of animals.",
    options: ["abundant", "countless", "immense", "minute"],
    answer: "immense",
  },
  {
    question:
      "In his first session with the therapist, Bill __________________ out his feelings.",
    options: ["broke", "flooded", "poured", "stirred"],
    answer: "poured",
  },
  {
    question:
      "There was a wonderful __________________ of summer fruits at the local market.",
    options: ["array", "crop", "handful", "portion"],
    answer: "array",
  },
  {
    question:
      "From the way she's __________________ at that sandwich, I'd say she doesn't like it.",
    options: ["chewing", "consuming", "devouring", "nibbling"],
    answer: "nibbling",
  },
  {
    question:
      "Some managers are supposed to meet each other at the end of the month to talk _____ their monthly performance reviews.",
    options: ["about", "along", "into", "under"],
    answer: "about",
  },
  {
    question: "I can’t walk in these high-heeled boots. I keep ______.",
    options: ["falling back", "falling off", "falling out", "falling over"],
    answer: "falling over",
  },
  {
    question:
      "Old people are often looked _____ by their children when they get older.",
    options: ["after", "for", "into", "up"],
    answer: "after",
  },
  {
    question:
      "Don't worry about trying to catch the last train home, as we can easily ____ you up for the night.",
    options: ["keep", "put", "set", "take"],
    answer: "put",
  },
  {
    question:
      "The meeting has been put ____ to Friday as many people have got flu.",
    options: ["in", "out", "up", "off"],
    answer: "off",
  },
  {
    question: "She kept her son _____ because he had a high temperature.",
    options: ["in", "off", "on", "out"],
    answer: "in",
  },
  {
    question: "Learning English isn’t so difficult once you _______.",
    options: ["get down to it", "get down with it", "get off it", "get on it"],
    answer: "get down to it",
  },
  {
    question:
      "Mr. Chan’s main role in the company for the next two weeks is to look ____ the right person to take over Mr. Shaw’s position when he leaves at the end of the month.",
    options: ["for", "from", "in", "over"],
    answer: "for",
  },
  {
    question:
      "People unanimously agreed that John would have performed a great deal better under more _________ circumstances.",
    options: ["favourable", "favour", "favourite", "favourably"],
    answer: "favourable",
  },
  {
    question: "Quite soon, the world is going to ______ energy resources.",
    options: ["come up against", "get into", "keep up with", "run out of"],
    answer: "run out of",
  },
  {
    question:
      "Deborah is going to take extra lessons to _______ what she missed while she was away.",
    options: ["catch up on", "cut down on", "put up with", "take up"],
    answer: "catch up on",
  },
  {
    question:
      "The meeting has been brought ____ to Monday due to the seriousness of the situation.",
    options: ["down", "forward", "on", "out"],
    answer: "forward",
  },
  {
    question:
      "People are always advised to _______ smoking because of its harm to their health.",
    options: ["cut down", "cut down on", "cut in", "cut off"],
    answer: "cut down on",
  },
  {
    question:
      "It took Ted a long time to get _______ the breakup of his marriage.",
    options: ["across", "along with", "over", "through"],
    answer: "over",
  },
  {
    question: "Please ______ and see us some time. You’re always welcome.",
    options: ["come about", "come around", "come away", "come to"],
    answer: "come around",
  },
  {
    question:
      "She never says anything good about me. She is forever running me _____.",
    options: ["down", "off", "out", "over"],
    answer: "down",
  },
  {
    question:
      "The teacher asked a difficult question, but finally Ted _____ a good answer.",
    options: ["came out at", "came out for", "came up to", "came up with"],
    answer: "came up with",
  },
  {
    question:
      "We intend to _______ the old system as soon as we have developed a better one.",
    options: ["do away with", "do down", "do in", "do up"],
    answer: "do away with",
  },
  {
    question: "The concert was _______ because of the heavy rain.",
    options: ["called off", "put out", "run out", "set off"],
    answer: "called off",
  },
  {
    question: "Nothing can _______ the loss of the child.",
    options: ["come up with", "do with", "make up for", "make up with"],
    answer: "make up for",
  },

  {
    question:
      "He ________ extra hours to ensure the project was completed on time.",
    options: ["came up", "got ahead", "put in"],
    answer: "put in",
  },
  {
    question:
      "The manager asked the team to _______ the issue and report back.",
    options: ["come up with", "look into", "take on"],
    answer: "look into",
  },
  {
    question: "I’ll _______ you as soon as I have more information.",
    options: ["knuckle down", "look into", "get back to"],
    answer: "get back to",
  },
  {
    question:
      "I was so tired that I ________ the entire alarm and missed my appointment.",
    options: ["crashed out", "slept on", "slept through"],
    answer: "slept through",
  },
  {
    question:
      "He _______ late to finish the project, even though he was exhausted.",
    options: ["dozed off", "lay down", "stayed up"],
    answer: "stayed up",
  },
  {
    question:
      "She started to slowly ________ during the meeting because she hadn’t slept well the night before.",
    options: ["crash out", "doze off", "nod away"],
    answer: "doze off",
  },
  {
    question:
      "She tends to ________ her emotions and doesn't talk about what's bothering her.",
    options: ["blow up", "bottle up", "open up"],
    answer: "bottle up",
  },
  {
    question:
      "You need to ________ and stop worrying so much about the little things.",
    options: ["break down", "chill out", "hold back"],
    answer: "chill out",
  },
  {
    question:
      "After hearing the sad news, she couldn’t help but _______ and cry.",
    options: ["blow up", "break down", "hold back"],
    answer: "break down",
  },
  {
    question:
      "The plane was delayed. We were on it for two hours before it _______.",
    options: ["got away", "picked us up", "took off"],
    answer: "took off",
  },
  {
    question: "The car was too hot, so I was looking forward to _______.",
    options: ["getting in", "getting off", "getting out"],
    answer: "getting out",
  },
  {
    question: "Which is correct?",
    options: [
      "His train was cancelled, so I had to pick him up in the car.",
      "His train was cancelled, so I had to pick up him in the car.",
    ],
    answer: "His train was cancelled, so I had to pick him up in the car.",
  },
  {
    question:
      "He spent the afternoon _______ the computer and printer in his office.",
    options: ["setting up", "signing in", "signing up"],
    answer: "setting up",
  },
  {
    question: "The music is too quiet. Can you _______ it _______ a bit?",
    options: ["turn on", "turn up", "switch up"],
    answer: "turn up",
  },
  {
    question: "Which is correct?",
    options: [
      "I need to spend less time scrolling social media through before bed.",
      "I need to spend less time scrolling through social media before bed.",
    ],
    answer:
      "I need to spend less time scrolling through social media before bed.",
  },
  {
    question: "After exercise, it’s a good idea to _______ to avoid injury.",
    options: ["cool down", "warm up", "work out"],
    answer: "cool down",
  },
  {
    question:
      "My nutritionist told me to _______ sugar _______ of my diet completely.",
    options: ["cut down", "cut out", "give up"],
    answer: "cut out",
  },
  {
    question: "Which is correct?",
    options: [
      "Even though his training plan was tough, he managed to stick it to.",
      "Even though his training plan was tough, he managed to stick to it.",
    ],
    answer:
      "Even though his training plan was tough, he managed to stick to it.",
  },
  {
    question:
      "I’m living pay cheque to pay cheque, but I’m just about _______.",
    options: ["getting by", "living on", "running out of"],
    answer: "getting by",
  },
  {
    question:
      "We _______ on front row tickets at the concert because we really wanted to see the band up close.",
    options: ["forked out", "saved up", "splashed out"],
    answer: "splashed out",
  },
  {
    question: "Which is correct?",
    options: [
      "Dad lent me some money last year, but I’ll pay him back soon.",
      "Dad lent me some money last year, but I’ll pay back him soon.",
    ],
    answer: "Dad lent me some money last year, but I’ll pay him back soon.",
  },
  {
    question:
      "If you want to learn about business, you should read _______ it first.",
    options: ["around in", "on at", "up on"],
    answer: "up on",
  },
  {
    question: "I need to work hard this weekend so that I don’t _______.",
    options: ["brush up", "catch up", "fall behind"],
    answer: "fall behind",
  },
  {
    question: "Which is correct?",
    options: [
      "When the project is finished, I’ll hand it in.",
      "When the project is finished, I’ll hand it on.",
    ],
    answer: "When the project is finished, I’ll hand it in.",
  },
  {
    question: "I love sleeping _______ at the weekends.",
    options: ["in", "on", "up"],
    answer: "in",
  },
  {
    question: "I hate it when the alarm _______ in the morning.",
    options: ["comes off", "goes off", "sounds in"],
    answer: "goes off",
  },
  {
    question: "Which is correct?",
    options: [
      "We need to start working on that project that’s due next month.",
      "We need to start working that project on that’s due next month.",
    ],
    answer: "We need to start working on that project that’s due next month.",
  },
  {
    question:
      "After going to the zoo, the mall, and the movies, Cassie was sick of bending over backwards to entertain her nieces.",
    options: [
      "Cassie was doing very little to entertain her nieces.",
      "Cassie was making small efforts to entertain her nieces.",
      "Cassie was trying very hard to entertain her nieces.",
      "Cassie was not trying at all to entertain her nieces.",
    ],
    answer: "Cassie was trying very hard to entertain her nieces.",
  },
  {
    question:
      "Bobby would have been playing ball until the cows came home if it hadn’t been for Suzie dragging him home for dinner.",
    options: [
      "Bobby was just about to stop playing ball.",
      "Bobby didn’t even want to play ball to begin with.",
      "Bobby prefers nature to athletics.",
      "Bobby would have continued playing ball for a long time.",
    ],
    answer: "Bobby would have continued playing ball for a long time.",
  },
  {
    question:
      "You might think that Billy Parker is the kid who has everything, but if you saw the list of chores his parents give him, I guarantee that you wouldn’t want to be in his shoes.",
    options: [
      "You wouldn’t want your shoes to get as dirty as Billy’s when he’s doing his chores.",
      "If you have to do as many chores as Billy, you’ll want a pair of comfortable shoes.",
      "Billy shoes are so uncomfortable that doing his chores is really unpleasant.",
      "Billy has so many chores to do that it is unpleasant to imagine doing them all.",
    ],
    answer:
      "Billy has so many chores to do that it is unpleasant to imagine doing them all.",
  },
  {
    question:
      "Eric wanted to fix his cousin’s computer, but he was already having problems setting up his Aunt’s Wi-Fi network and he didn’t want to open a whole new can of worms.",
    options: [
      "Eric was sick of spending his time helping his family.",
      "Eric wanted to go fishing instead of working on computers.",
      "Eric was having difficulties untangling the computer wires.",
      "Eric was not ready to begin working on a complicated new problem.",
    ],
    answer: "Eric was not ready to begin working on a complicated new problem.",
  },
  {
    question:
      "Even though Candace already had a new job, she submitted her two-week notice and conducted herself in a professional way at her old job because she didn’t want to burn bridges.",
    options: [
      "Candace didn’t want to ruin her positive relationship with her old employer.",
      "Candace wasn’t ready to start her new job.",
      "Candace was really going to miss her old job.",
      "Candace was waiting until her last day to rub it in everyone’s face that she was leaving.",
    ],
    answer:
      "Candace didn’t want to ruin her positive relationship with her old employer.",
  },
  {
    question:
      "World renowned country western super group The Mountain Boys can sell out an arena at the drop of a hat.",
    options: [
      "The Mountain Boys may be able to sell out an arena, but it will take a long time.",
      "The Mountain Boys can sell out an arena very quickly.",
      "The Mountain Boys are always willing to perform at charity events.",
      "The Mountain Boys enforce a dress code at all of their shows.",
    ],
    answer: "The Mountain Boys can sell out an arena very quickly.",
  },
  {
    question:
      "Vivian expected Craig to sob uncontrollably when she broke up with him; however, Craig kept a stiff upper lip.",
    options: [
      "Craig cried even more than Vivian had expected.",
      "Craig cried about as much as Vivian had expected.",
      "Craig cried a little less than Vivian had expected.",
      "Craig did not cry.",
    ],
    answer: "Craig did not cry.",
  },
  {
    question:
      "Mrs. Robinson expects Cassie and my presentation to be good, but we have been working on it every night for the last week, so we are really going to knock her socks off.",
    options: [
      "Cassie and the speaker are not prepared to give a good presentation.",
      "Cassie and the speaker intend on hitting Mrs. Robinson rather than presenting.",
      "Cassie and the speaker’s presentation will far exceed Mrs. Robinson’s expectations.",
      "Cassie and the speaker’s presentation will meet Mrs. Robison’s expectations.",
    ],
    answer:
      "Cassie and the speaker’s presentation will far exceed Mrs. Robinson’s expectations.",
  },
  {
    question:
      "Over the summer Brian was really excited about being placed in the advanced math class, but after getting his syllabus on the first day and seeing the workload, he was ready to jump ship.",
    options: [
      "Brian was even more excited about the math class than he was over the summer.",
      "Brian wanted to start working on his math assignments right away.",
      "Brian did not want to be in the advance math class anymore.",
      "Brian wanted to cause some trouble in the advanced math class.",
    ],
    answer: "Brian did not want to be in the advance math class anymore.",
  },
  {
    question:
      "Brad was accusing us of stealing his phone until he found it, and now he’s trying to sweep it under the rug.",
    options: [
      "Brad thinks that his phone will be safer if he hides it under the rug.",
      "Brad wants to do something to make up for his mistake.",
      "Brad is trying to locate a signal for his phone so that he can use it.",
      "Brad wants to pretend that the incident never happened.",
    ],
    answer: "Brad wants to pretend that the incident never happened.",
  },
  {
    question:
      "When Brian felt pretty good about getting a pair of roller-skates for his birthday, until he saw his twin brother Ryan open up his GameBox X-9000, and then Brian felt like he got the short end of the stick.",
    options: [
      "Brian felt like Ryan received a better gift than he.",
      "Brian was quite pleased with his roller skates.",
      "Brian wanted a long stick that he could use to support himself on hikes.",
      "Brian feels bad for Ryan because Ryan wanted roller-skates.",
    ],
    answer: "Brian felt like Ryan received a better gift than he.",
  },
  {
    question:
      "After Ms. Smith caught Darnisha chewing gum for the third time, Ms. Smith scheduled a parent teacher conference with Darnisha’s mother. When Darnisha’s mother came into Ms. Smith’s classroom, she was chewing gum. Ms. Smith thought to herself, “the apple doesn’t fall far from the tree.”",
    options: [
      "Ms. Smith thinks that Darnisha dresses like her mother.",
      "Ms. Smith thinks that Darnisha acts a lot like her mother.",
      "Ms. Smith is surprised to see that Darnisha’s mother came.",
      "Ms. Smith thinks that Darnisha’s mother lives very close to the school.",
    ],
    answer: "Ms. Smith thinks that Darnisha acts a lot like her mother.",
  },

  {
    question:
      "He cranked out three novels last year. What does 'crank out' mean?",
    options: [
      "to produce children or baby animals",
      "to produce a lot of something very quickly",
      "to produce a record, book etc again, after it has not been available for some time",
    ],
    answer: "to produce a lot of something very quickly",
  },
  {
    question:
      "Make a phrasal verb that means 'to make progress, especially quickly'. Complete: forge _____",
    options: ["above", "across", "ahead"],
    answer: "ahead",
  },
  {
    question:
      "Make a phrasal verb that means 'to make a mistake, or to force someone to make a mistake by tricking them'. Complete: trip _____",
    options: ["across", "after", "up"],
    answer: "up",
  },
  {
    question:
      "Make a phrasal verb that means 'to give particular attention to something because you think it is important or interesting'. Complete: fasten _____",
    options: ["across", "after", "on/upon"],
    answer: "on/upon",
  },
  {
    question:
      "Make a phrasal verb that means 'to stop someone from winning in a sport or from increasing the amount by which they are winning'. Complete: peg _____",
    options: ["against", "ahead", "back"],
    answer: "back",
  },
  {
    question:
      "Make a phrasal verb that means 'to play a tune or song loudly and badly on a piano'. Complete: bang _____",
    options: ["across", "after", "out"],
    answer: "out",
  },
  {
    question:
      "Make a phrasal verb that means 'to look at a book, magazine, set of photographs etc quickly'. Complete: flick _____",
    options: ["behind", "between", "through"],
    answer: "through",
  },
  {
    question:
      "Make a phrasal verb that means 'to be very close to a harmful or extreme state'. Complete: verge _____",
    options: ["against", "ahead", "on/upon"],
    answer: "on/upon",
  },
  {
    question:
      "Make a phrasal verb that means 'to force someone to decide to do something, especially without giving them time to consider it carefully'. Complete: bounce _____",
    options: ["in", "into", "towards"],
    answer: "into",
  },
  {
    question:
      "The advert puts over the message clearly and simply: nuclear power is clean. What does 'put over' mean?",
    options: [
      "to succeed in achieving something after trying for a long time",
      "to succeed in doing something, especially after trying very hard",
      "to succeed in telling other people your ideas, opinions, feelings etc",
    ],
    answer:
      "to succeed in telling other people your ideas, opinions, feelings etc",
  },
  {
    question:
      "Make a phrasal verb that means 'to criticize or speak to someone in a very angry way'. Complete: go _____",
    options: ["across", "after", "off on"],
    answer: "off on",
  },
  {
    question:
      "Children pick up on our worries and anxieties. What does 'pick up on' mean?",
    options: [
      "to notice or discover something, especially something that is not easy to see, hear etc",
      "to notice or understand something by thinking about it carefully",
      "to notice something about the way someone is behaving or feeling, even though they are trying not to show it",
    ],
    answer:
      "to notice something about the way someone is behaving or feeling, even though they are trying not to show it",
  },
  {
    question:
      "Make a phrasal verb that means 'to no longer try to stop yourself from doing something you want to do'. Complete: give _____",
    options: ["across", "after", "in to"],
    answer: "in to",
  },
  {
    question: "He had his best suit on. What does 'have on' mean?",
    options: [
      "to be more concerned with making money from something than about its quality – used to show disapproval",
      "to be unable to breathe properly because something is in your throat or there is not enough air",
      "to be wearing a piece of clothing or type of clothing",
    ],
    answer: "to be wearing a piece of clothing or type of clothing",
  },
  {
    question:
      "His secretary cocked up his travelling schedule and he’s furious about it. What does 'cock up' mean?",
    options: [
      "to spoil something by changing its good parts",
      "to spoil something by making a stupid mistake or doing it badly",
      "to spoil the good opinion that people have of someone",
    ],
    answer: "to spoil something by making a stupid mistake or doing it badly",
  },
  {
    question:
      "The emergency aid programme has now been scaled down. What does 'scale down/back' mean?",
    options: [
      "to reduce or destroy someone’s courage or confidence",
      "to reduce or limit something",
      "to reduce the amount or size of something",
    ],
    answer: "to reduce the amount or size of something",
  },
  {
    question:
      "Make a phrasal verb that means 'to waste time doing unimportant things'. Complete: fiddle _____",
    options: ["around", "behind", "towards"],
    answer: "around",
  },
  {
    question:
      "Jody has invested Alan with great power over her career. What does 'invest with' mean?",
    options: [
      "to officially give someone power to do something",
      "to officially judge how successful, effective, or valuable something is",
      "to officially state that a marriage or legal agreement no longer exists",
    ],
    answer: "to officially give someone power to do something",
  },
  {
    question:
      "Make a phrasal verb that means 'to wrongly think that one person or thing is someone or something else'. Complete: mistake _____",
    options: ["for", "over", "about"],
    answer: "for",
  },
  {
    question:
      "Music that harks back to the early age of jazz. What does 'hark back to' mean?",
    options: [
      "to be based on or depend on something",
      "to be formed from a number of substances, parts, or people",
      "to be similar to something in the past",
    ],
    answer: "to be similar to something in the past",
  },
  {
    question:
      "After cooking the meat, drain off the excess fat. What does 'drain off' mean?",
    options: [
      "to make water or a liquid flow off something, leaving it dry",
      "to make an electrical system or chemical process start working",
      "to make yourself or another person become used to a situation or place",
    ],
    answer: "to make water or a liquid flow off something, leaving it dry",
  },
  {
    question:
      "We were jogging along comfortably and enjoying our work. What does 'jog along' mean?",
    options: [
      "to continue for a longer period of time, or to make something last longer",
      "to continue in the same way as usual",
      "to continue to change your opinions, decisions, ideas etc",
    ],
    answer: "to continue in the same way as usual",
  },
  {
    question: "He revelled in his new-found fame. What does 'revel in' mean?",
    options: [
      "to enjoy sitting or lying in the heat of the sun or a fire",
      "to enjoy yourself eating and drinking at Christmas",
      "to enjoy something very much",
    ],
    answer: "to enjoy something very much",
  },
  {
    question:
      "Make a phrasal verb that means 'to shout encouragement at a person or team to help them do well in a race or competition'. Complete: cheer _____",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question:
      "We crammed in as much sightseeing as possible during our stay in New York. What does 'cram in' mean?",
    options: [
      "to do a lot of activities in a short period of time",
      "to do something that makes someone unfriendly or unwilling to support you",
      "to do something to show that you are sorry for having done something wrong",
    ],
    answer: "to do a lot of activities in a short period of time",
  },
  {
    question:
      "We spent the afternoon just goofing around on our bikes. What does 'goof around' mean?",
    options: [
      "to spend time doing silly things or not doing very much",
      "to spend time talking to people who are in a higher social position than you",
      "to spend more money than another person or organization",
    ],
    answer: "to spend time doing silly things or not doing very much",
  },
  {
    question:
      "Make a phrasal verb that means 'to talk continuously about something in a boring way'. Complete: bang _____",
    options: ["at", "on", "in"],
    answer: "on",
  },
  {
    question:
      "Make a phrasal verb that means 'to say several pieces of information or a list quickly and easily from memory'. Complete: rattle _____",
    options: ["on", "off", "from"],
    answer: "off",
  },
  {
    question:
      "Make a phrasal verb that means 'to keep giving someone large quantities of food or drink'. Complete: ply _____",
    options: ["over", "with", "about"],
    answer: "with",
  },
  {
    question:
      "Make a phrasal verb that means 'to do something very badly or unsuccessfully'. Complete: balls _____",
    options: ["up", "around", "as"],
    answer: "up",
  },
  {
    question:
      "Make a phrasal verb that means 'to go out and enjoy yourself, going to many different places, especially when you should be doing something else'. Complete: gad _____",
    options: ["along", "about/around", "apart"],
    answer: "about/around",
  },
  {
    question:
      "Make a phrasal verb that means 'to improve your behaviour or work'. Complete: shape _____",
    options: ["apart", "up", "along"],
    answer: "up",
  },
  {
    question:
      "Make a phrasal verb that means 'to spend time with someone that other people do not approve of'. Complete: consort _____",
    options: ["with", "about", "over"],
    answer: "with",
  },
  {
    question: "Cool off with an iced drink. What does 'cool off' mean?",
    options: [
      "to accidentally hear what other people are saying, when they do not know that you have heard",
      "to return to a normal temperature after being hot",
      "to accidentally fall, face first",
    ],
    answer: "to return to a normal temperature after being hot",
  },
  {
    question:
      "If we can’t blast them out, we’ll starve them out! What does 'starve out' mean?",
    options: [
      "to force someone to walk somewhere by holding their arms very tightly by their side or behind their back",
      "to force someone to leave a place by preventing them from getting food",
      "to force people to live in a ghetto",
    ],
    answer:
      "to force someone to leave a place by preventing them from getting food",
  },
  {
    question:
      "Make a phrasal verb that means 'to talk to someone in a way that shows you are sexually attracted to them'. Complete: chat _____",
    options: ["across", "up", "after"],
    answer: "up",
  },
  {
    question:
      "Make a phrasal verb that means 'to say that someone or something is similar to another person or thing'. Complete: liken _____",
    options: ["at", "to", "in"],
    answer: "to",
  },
  {
    question:
      "My sister called and said she wanted to talk, but really she wanted to criticize my career choices. She knows how to _____________________! Next time, I won't answer the phone.",
    options: [
      "Face the music",
      "Hang in there",
      "Leave well enough alone",
      "Push my buttons",
    ],
    answer: "Push my buttons",
  },
  {
    question:
      "Don't talk about our project so loudly! It's so quiet in here ________________________ and _____________________.",
    options: [
      "Face the music … jump the gun",
      "Put it lightly … wear many hats",
      "You could hear a pin drop … the walls have ears",
      "You could put your foot in your mouth … draw a blank",
    ],
    answer: "You could hear a pin drop … the walls have ears",
  },
  {
    question:
      "This is a great car, but it _______________________. We need to buy something more economical.",
    options: [
      "Comes out of thin air",
      "Costs an arm and a leg",
      "Is born ready",
      "Is this, that and the other",
    ],
    answer: "Costs an arm and a leg",
  },
  {
    question:
      "The immigration official seemed sympathetic, but he said that his ____________________. He could not help us.",
    options: [
      "Arm was twisted",
      "Foot was down",
      "Hands were tied",
      "Leg was broken",
    ],
    answer: "Hands were tied",
  },
  {
    question:
      "I believe I can meet with you on Wednesday. I have another appointment, but it's not",
    options: [
      "Bells and whistles",
      "Down to earth",
      "Second nature",
      "Set in stone",
    ],
    answer: "Set in stone",
  },
  {
    question:
      "________________________________, the kitchen is a mess. I try to get my daughter to clean up after herself, but it ________________________.",
    options: [
      "Every time I turn around … feels like pulling teeth",
      "It's the light at the end of the tunnel … takes all kinds",
      "Just what the doctor ordered … costs an arm and a leg",
      "You hit the nail on the head … water under the bridge",
    ],
    answer: "Every time I turn around … feels like pulling teeth",
  },
  {
    question:
      "I do have time to work on this software project. You can ___________________, and please _________________ about all the new developments.",
    options: [
      "Count me in … keep me posted",
      "Count on me … break the ice",
      "Dive in … agree to disagree",
      "Think outside the box … don't break a sweat",
    ],
    answer: "Count me in … keep me posted",
  },
  {
    question:
      "I saw my old friend the other day. It was awkward because we got into a big argument the last time I saw her five years ago. But everything worked out. She said the old issues are ___________________ and she has ___________________ about anything I said.",
    options: [
      "Born ready … thought kept her head above water",
      "Broken ice … read my mind",
      "The straw that broke the camel's back … a blank slate",
      "Water under the bridge … no hard feelings",
    ],
    answer: "Water under the bridge … no hard feelings",
  },
  {
    question:
      "The technology companies have to _____________________ in order to create new, __________________ devices that people will appreciate. Then, they have to create updates to __________________.",
    options: [
      "Go the extra mile … out of the question … wine and dine",
      "Hang in there … get ahead … leave well enough alone",
      "Make a bundle … blank slate … take off",
      "Think outside the box … state of the art … work out the kinks",
    ],
    answer: "Think outside the box … state of the art … work out the kinks",
  },
  {
    question:
      "My best friend almost became a state representative. It was ______________________________. He lost by 500 votes.",
    options: [
      "Burnt bridges",
      "Close, but no cigar",
      "No hard feelings",
      "Waiting for the other shoe to drop",
    ],
    answer: "Close, but no cigar",
  },
  {
    question:
      "I know you are worried about your public presentation, but stay positive and _____________________. Oh and by the way, _______________!",
    options: [
      "Be a martyr … count me in",
      "Break a sweat … put your foot down",
      "Keep your chin up … break a leg",
      "Wear many hats … fall asleep at the wheel",
    ],
    answer: "Keep your chin up … break a leg",
  },
  {
    question:
      "I cannot believe that your husband is having an affair for the third time since you married. _____________________! Tell him that this is ___________________ and you're leaving him.",
    options: [
      "Don't be a martyr … the last straw",
      "It takes all kinds … in the doghouse",
      "Take it with a grain of salt … a blank slate",
      "Think outside the box … the extra mile",
    ],
    answer: "Don't be a martyr … the last straw",
  },
  {
    question:
      "My sister is starting her third year of college, but her future plans are still _____________________. She is not a practical person. She always has her ____________________.",
    options: [
      "A blank slate … arm twisted",
      "Off track … foot in her mouth",
      "Second nature … feet wet",
      "Up in the air … head in the clouds",
    ],
    answer: "Up in the air … head in the clouds",
  },
  {
    question:
      "You should not complain to the director about our work team issues. If you do that, you're _________________________ because the director doesn't like to get involved in coworker complaints.",
    options: [
      "Barking up the wrong tree",
      "Going the extra mile",
      "Waiting for the other shoe to drop",
      "Wearing many hats",
    ],
    answer: "Barking up the wrong tree",
  },
  {
    question:
      "Please don't ______________________ at the family reunion. My parents don't need to know about your alcohol problem or the fact that I lost my job.",
    options: [
      "Air our dirty laundry",
      "Bark up the wrong tree",
      "Be asleep at the wheel",
      "Put it lightly",
    ],
    answer: "Air our dirty laundry",
  },
  {
    question:
      "My friend can teach you how to play tennis. It's _________________ to him, and he's a pleasant person, very ___________________ and agreeable.",
    options: [
      "A quick study … one track mind",
      "A silver bullet … born ready",
      "In a nutshell … just what the doctor ordered",
      "Second nature … down to earth",
    ],
    answer: "Second nature … down to earth",
  },
  {
    question:
      "I know you are depressed after losing in the competition, but __________________. You should ______________________ and start training for a new competition.",
    options: [
      "Don't be a martyr … wait for the other shoe to drop",
      "Don't break a sweat … make a bundle",
      "Face the music … bark up the wrong tree",
      "Lighten up … get back to the trenches",
    ],
    answer: "Lighten up … get back to the trenches",
  },
  {
    question:
      "I cannot grant your request. It's ________________________. There is no point in talking about it anymore. We have to _______________________",
    options: [
      "Out of the question … agree to disagree",
      "The short end of the stick … go the extra mile",
      "This, that and the other … fall asleep at the wheel",
      "Water under the bridge … make a bundle",
    ],
    answer: "Out of the question … agree to disagree",
  },
  {
    question:
      "If you want to be a great athlete, remember there's ______________________. It _______________________________ to become better than everyone else.",
    options: [
      "A blank slate … takes a grain of salt",
      "A one track mind … takes all kinds",
      "No silver bullet … takes blood, sweat and tears",
      "Water under the bridge … takes working out the kinks",
    ],
    answer: "No silver bullet … takes blood, sweat and tears",
  },
  {
    question:
      "He is a great athlete, but if you ask him a question about anything besides soccer, it's as if ________________________________.",
    options: [
      "He's back to the trenches",
      "He's waiting for the other shoe to drop",
      "His head is above water",
      "The lights are on, but nobody's home",
    ],
    answer: "The lights are on, but nobody's home",
  },
  {
    question:
      "She is a very good worker. She arrives every day at 9:00am ___________________ and she will always ____________________ if she is not sure of how to do something.",
    options: [
      "Born ready … have a clue",
      "On the dot … put her foot in her mouth",
      "On the dot … touch base with me",
      "Up in the air … jump the gun",
    ],
    answer: "On the dot … touch base with me",
  },
  {
    question:
      "His wife is angry that he was ____________________________. He is really ____________________.",
    options: [
      "Dragging his feet … up in the air",
      "Reading her mind … delivering the goods",
      "Talking behind her back … in the doghouse",
      "Wearing many hats … burning bridges",
    ],
    answer: "Talking behind her back … in the doghouse",
  },
  {
    question:
      "When the teacher asked me the question, I ________________________. I had studied and should have known the answer, but I just forgot.",
    options: ["Drew a blank", "Faced the music", "Got off track", "Had a clue"],
    answer: "Drew a blank",
  },
  {
    question:
      "He's a great mechanic. He can fix any type of engine because he's such a __________________. But he has a ____________________. He ______________________ about anything besides cars.",
    options: [
      "Blank slate … short end of the stick … doesn't break a sweat",
      "Born ready … straw that breaks the camel's back … takes off",
      "Light at the end of the tunnel … state of the art … drowns out",
      "Quick study … one track mind … doesn't have a clue",
    ],
    answer: "Quick study … one track mind … doesn't have a clue",
  },
  {
    question:
      "My friend has a big ________________________. He is angry because his father will not pay his college tuition.",
    options: [
      "Chip on his shoulder",
      "Foot in his mouth",
      "Last straw",
      "Silver bullet",
    ],
    answer: "Chip on his shoulder",
  },
  {
    question:
      "I was depressed about my new job as manager because it was so hard. But my mother came to visit and that was ________________________. She cheered me up and helped me to gain confidence.",
    options: [
      "In a nutshell",
      "Just what the doctor ordered",
      "The straw that broke the camel's back",
      "This, that and the other",
    ],
    answer: "Just what the doctor ordered",
  },
  {
    question:
      '"Wow, Jim really __________________ when he started talking about cell phone technology. The meeting was supposed to be about customer service."    "Yeah, ___________________________! The way he was talking, you would think he didn\'t know what human beings are!"',
    options: [
      "Faced the music … lighten up",
      "Got off track … that's putting it lightly",
      "This, that and the other … that's taking something the wrong way",
      "Took off … that's the short end of the stick",
    ],
    answer: "Got off track … that's putting it lightly",
  },
  {
    question:
      "As your friend, I have to _________________. Your hair and your clothes are a mess. No one will hire you when you look like this. If you want to __________________, you need to ______________________.",
    options: [
      "Hit the nail on the head …break the ice … wait for the other shoe to drop",
      "Keep your chin up …hang in there … get in over your head",
      "Level with you … get ahead … get your act together",
      "Twist your arm … burn bridges … do this, that and the other",
    ],
    answer: "Level with you … get ahead … get your act together",
  },
  {
    question:
      "Never mind. I was being sarcastic. Please take what I said __________________________.",
    options: [
      "In a nutshell",
      "Out of the question",
      "Out of thin air",
      "With a grain of salt",
    ],
    answer: "With a grain of salt",
  },
  {
    question:
      "The district manager is coming into town next week. Do you think we need to _____________________ her?",
    options: ["Bells and whistles", "Count on", "Lighten up", "Wine and dine"],
    answer: "Wine and dine",
  },
  {
    question:
      "Let's get together next Friday. Maybe we can go to a park, but it depends on the weather. Let's _______________________.",
    options: [
      "Face the music",
      "Get off track",
      "Have a clue",
      "Play it by ear",
    ],
    answer: "Play it by ear",
  },
  {
    question:
      "I think that new employee is annoying. She either _________________ or ________________ on her work projects. I never know what will happen.",
    options: [
      "Drags her feet … jumps the gun",
      "Falls asleep at the wheel … hits the sack",
      "Has a clue … faces the music",
      "Reads my mind … goes the extra mile",
    ],
    answer: "Drags her feet … jumps the gun",
  },
  {
    question:
      "I was offered a job, but the salary is not very high. I'm tired now, so I'm going to _________________ and _________________. Maybe I will know what to do in the morning.",
    options: [
      "Break a leg … think outside the box",
      "Hit the sack … sleep on it",
      "Think outside the box … hit the sack",
      "Work out the kinks … break the ice",
    ],
    answer: "Hit the sack … sleep on it",
  },
  {
    question:
      "I know you cannot find a job, but don't get discouraged. You have to ________________________ in this __________________________.",
    options: [
      "Be born ready … blank slate",
      "Jump the gun … dog eat dog world",
      "Put it lightly … doghouse",
      "Roll with the punches … dog eat dog world",
    ],
    answer: "Roll with the punches … dog eat dog world",
  },
  {
    question:
      "This work project will take all week! But let's _________________ and ________________ so we can ____________________ on time.",
    options: [
      "Bite the bullet … get cracking … deliver the goods",
      "Break the ice … take off … hit the nail on the head",
      "Read someone's mind … face the music … jump the gun",
      "Talk over … take off … on the dot",
    ],
    answer: "Bite the bullet … get cracking … deliver the goods",
  },
  {
    question:
      "I know you love to create animation and interactive forms, but if our website has too many ___________________, the site might become annoying to some users. Let's _______________ each feature and choose the ones we need carefully.",
    options: [
      "Bells and whistles … talk over",
      "Blank slates … lighten up",
      "Hats … quick study",
      "Silver bullets … dive into",
    ],
    answer: "Bells and whistles … talk over",
  },
  {
    question:
      "If you need some ___________________, you should go to the beach. That's the best place to relax.",
    options: [
      "Blank slates",
      "Head in the clouds",
      "R and R",
      "Silver bullets",
    ],
    answer: "R and R",
  },
  {
    question:
      "He would have applied at Microsoft, but he worked there five years ago, and he _____________________. They will see the bad reports in his file and __________________.",
    options: [
      "Broke the ice … take off",
      "Burnt his bridges … leave well enough alone",
      "Didn't break a sweat … agree to disagree",
      "Got his feet wet … keep their heads above water",
    ],
    answer: "Burnt his bridges … leave well enough alone",
  },
  {
    question:
      "I know you're busy, but I really need your help with the new project. What can I say to ___________________?",
    options: [
      "Agree to disagree",
      "Break the ice",
      "Burn bridges",
      "Twist your arm",
    ],
    answer: "Twist your arm",
  },
  {
    question:
      "Mary is so difficult to work with. She's always late, and when she wants to explain something, she takes all day. I can't believe they won't fire her, but I suppose ________________________.",
    options: [
      "It takes all kinds",
      "She breaks a sweat",
      "She was born ready",
      "The pin has dropped",
    ],
    answer: "It takes all kinds",
  },
  {
    question: "Brenda can swim ____________________ for over one minute.",
    options: ["Underwear", "Underwater", "Misbehave", "Untied"],
    answer: "Underwater",
  },
  {
    question: "Thailand is a ________ country for rice, corn, and cassava.",
    options: ["Fame", "Famous", "Famously"],
    answer: "Famous",
  },
  {
    question:
      "Ashton was sad because she was  _________ to get ticket for the concert.",
    options: ["Return", "Untied", "Unwrap", "Unable"],
    answer: "Unable",
  },
  {
    question: "It took Alan a year to learn all the ______ of his job.",
    options: [
      "ins and outs",
      "pain; pain in the neck",
      "grey area; gray area",
      "in the same boat",
    ],
    answer: "ins and outs",
  },
  {
    question:
      "I don't ______ to help my sister anymore. The last time I made an effort to help her, she didn't even say 'thank you.'",
    options: [
      "jump the gun",
      "go out of my way",
      "get a kick out of",
      "cross my mind",
    ],
    answer: "go out of my way",
  },
  {
    question:
      "My grandfather likes to ______ about his school days. He tells the same stories again and again.",
    options: [
      "catch my eye",
      "give it my all; give my all",
      "keep in mind; bear in mind",
      "go on",
    ],
    answer: "go on",
  },
  {
    question:
      "Mark's comment was ______. He shouldn't have said that to a client.",
    options: ["fed up", "on my back", "first-hand; first hand", "out of line"],
    answer: "out of line",
  },
  {
    question:
      "The apple pie at this restaurant is ______ . I order it every time.",
    options: ["on the ball", "safe and sound", "second to none", "man enough"],
    answer: "second to none",
  },
  {
    question:
      "A bird was on a tree in front of me, but it didn't ______ because it wasn't moving. I finally saw it when it started singing.",
    options: ["get out of hand", "go on", "catch my eye", "learn your lesson"],
    answer: "catch my eye",
  },
  {
    question:
      "I have been teaching Spanish for 30 years, so when it comes to Spanish grammar, I ______.",
    options: [
      "speak my mind",
      "cut a long story short",
      "make my day",
      "know my stuff",
    ],
    answer: "know my stuff",
  },
  {
    question:
      "If you don't take care of your body when you are young, you'll ______ when you're older.",
    options: [
      "have a shot",
      "pay the price",
      "see eye to eye",
      "put all my eggs in one basket; put all my eggs into one basket",
    ],
    answer: "pay the price",
  },
  {
    question:
      "A: Daddy, can I have anything on the menu? B: Sure. ______, you got it.",
    options: [
      "There's nothing to it",
      "You name it",
      "The ball is in your court",
      "Just my luck",
    ],
    answer: "You name it",
  },
  {
    question:
      "Environmentalists argue that there's a(n) .... the pipeline could burst and spill oil everywhere.",
    options: ["risk", "glance", "source", "alert"],
    answer: "risk",
  },
  {
    question:
      "Even though I heard the man speak, I couldn't .... if he was Australian or from New Zealand.",
    options: ["count on", "think over", "figure out", "break up"],
    answer: "figure out",
  },
  {
    question: "Graham's monitor was too dark so he .... its brightness.",
    options: ["innovated", "adjusted", "classified", "concealed"],
    answer: "adjusted",
  },
  {
    question:
      "Last summer, someone .... Cheryl's apartment while she was on holiday and stole her TV.",
    options: ["made up", "broke into", "switched off", "checked out"],
    answer: "broke into",
  },
  {
    question:
      "My father is so tired since he … our garden all day for planting vegetables.",
    options: ["has prepared", "has been preparing"],
    answer: "has been preparing",
  },
  {
    question: "At this time yesterday Reny and I … our classmate.",
    options: ["were paying a call", "are paying a call"],
    answer: "were paying a call",
  },
  {
    question: "He … the community college this night.",
    options: ["wouldn’t be attending", "won’t be attending"],
    answer: "won’t be attending",
  },
  {
    question: "We sometimes … by chance in the convenience store.",
    options: ["meets", "meet"],
    answer: "meet",
  },
  {
    question: "I had slept when you … last night.",
    options: ["call", "called"],
    answer: "called",
  },
  {
    question: "Never … such a funny joke.",
    options: ["had I heard", "I had heard"],
    answer: "had I heard",
  },
  {
    question: "The class … the documentary film next Monday.",
    options: ["will have watched", "would have watched"],
    answer: "will have watched",
  },
  {
    question: "… the scholarship application?",
    options: ["Have you completed", "Have you complete"],
    answer: "Have you completed",
  },
  {
    question:
      "My brother … English course for six months by the end of this year.",
    options: ["will have been taking", "will have taken"],
    answer: "will have been taking",
  },
  {
    question: "They … for an hour before the doctor came.",
    options: ["had been waiting", "waited"],
    answer: "had been waiting",
  },
  {
    question: "The policeman _________________ the thief red-handed.",
    options: ["Catch", "Caught", "Is caught", "Catching"],
    answer: "Caught",
  },
  {
    question:
      "Students at a number of schools _________________ from their classes in protest against the high-handedness of the administrative staff.",
    options: ["Stay away", "Stayed away", "Has stay away", "Had stay away"],
    answer: "Stayed away",
  },
  {
    question:
      "The whole day yesterday the boys _________________ to the cricket commentary.",
    options: ["Listen", "Will listen", "Has listened", "Listened"],
    answer: "Listened",
  },
  {
    question: "A bomb scare _________________ a delay of the flight.",
    options: ["Caused", "Cause", "Was caused", "Had caused"],
    answer: "Caused",
  },
  {
    question:
      "The stadium _________________ with dance, music and song as troupes from across the country presented a panorama of colors and costumes.",
    options: [
      "Had reverberated",
      "Would reverberate",
      "Reverberate",
      "Reverberated",
    ],
    answer: "Reverberated",
  },
  {
    question:
      "Jim Corbett _________________ animals, but he _________________ several man-eaters.",
    options: [
      "Loved, would kill",
      "Loved, killed",
      "Loved, had killed",
      "Love, kill",
    ],
    answer: "Loved, killed",
  },
  {
    question: "Last year they _________________ a high wall around the house.",
    options: ["Build", "Built", "Was building", "Had build"],
    answer: "Built",
  },
  {
    question:
      "I _________________ a number of detective novels when I was a child.",
    options: ["Read", "Was read", "Had read", "Have read"],
    answer: "Read",
  },
  {
    question:
      "Last week some wicked people _________________ brown sugar into the town but they were arrested.",
    options: ["Smuggle", "Smuggled", "Have smuggled", "Are smuggling"],
    answer: "Smuggled",
  },
  {
    question:
      "In the morning, he _________________ a torn shirt but in the evening he changed it.",
    options: ["Is put on", "Had put on", "Has put on", "Was put on"],
    answer: "Had put on",
  },
  {
    question:
      "When I _________________ to the hospital, the doctor _________________ the operation.",
    options: [
      "Went , had performed",
      "Had gone, performed",
      "Went, performed",
      "Go, performed",
    ],
    answer: "Went , had performed",
  },
  {
    question:
      "After _________________ into the bus we discovered that we _________________ the wrong one.",
    options: [
      "Got, boarded",
      "Get, boarded",
      "Getting, had boarded",
      "Getting, board",
    ],
    answer: "Getting, had boarded",
  },
  {
    question:
      "I _________________ the assignment before the bell _________________",
    options: [
      "Had finished, had rung",
      "Finished, had rung",
      "Had finished, rang",
      "Finish, will ring",
    ],
    answer: "Had finished, rang",
  },
  {
    question: "I _________________ the examination last year.",
    options: ["Take", "Took", "Had taken", "Have taken"],
    answer: "Took",
  },
  {
    question: "It _________________ two _________________ a quarrel.",
    options: ["Take, make", "Takes, to make", "Took, to make", "Took, made"],
    answer: "Takes, to make",
  },
  {
    question:
      "When Nancy came to the hall, her classmates _______________ the chairs.",
    options: ["had arrange", "have arrange", "has arranged", "had arranged"],
    answer: "had arranged",
  },
  {
    question: "The aeroplane ______________ ! Roslan is late again.",
    options: [
      "has take off",
      "had took off",
      "has taken off",
      "have taken off",
    ],
    answer: "has taken off",
  },
  {
    question:
      "Mrs Thompson ________________ with the company for many years. She still has a few more years to go.",
    options: ["has worked", "have work", "had worked", "has work"],
    answer: "has worked",
  },
  {
    question: "Great! Betty ____________ the story telling competition.",
    options: ["has win", "has won", "have win", "had won"],
    answer: "has won",
  },
  {
    question:
      "Last week, Mr. and Mrs. David ______________ to visit their parents in the village",
    options: ["go", "went", "have gone", "had gone"],
    answer: "went",
  },
  {
    question: "Jackie ______________ a few songs. Now, he is resting.",
    options: ["has sing", "have sung", "had sang", "has sung"],
    answer: "has sung",
  },
  {
    question: "Oh, no! Mr Patrick _______________ his old house.",
    options: ["has sold", "have sold", "had selled", "has sell"],
    answer: "has sold",
  },
  {
    question: "The naughty boy ______________ the expensive vase. It is awful.",
    options: ["have break", "had break", "have broken", "has broken"],
    answer: "has broken",
  },
  {
    question: "If the temperature falls, _______ to turn up the heating.",
    options: ["forget", "didn’t forget", "don’t forget", "won’t forget"],
    answer: "don’t forget",
  },
  {
    question:
      "If I _______ you were going to be late, I would have saved food for you.",
    options: ["had known", "knew", "know", "will know"],
    answer: "had known",
  },
  {
    question:
      "What shall we do tomorrow? Well, if it ___________ a nice day, we can go to the beach.",
    options: ["is", "were", "will be", "would be"],
    answer: "is",
  },
  {
    question: "If I were a millionaire, I _____ go everywhere.",
    options: ["would", "could", "will", "have"],
    answer: "would",
  },
  {
    question:
      "Tina can’t decide what to do. What would you do if you ________ in her position?",
    options: ["will be", "are", "had been", "were"],
    answer: "were",
  },
  {
    question: "What would you have done if he _____ got hurt?",
    options: ["has", "will", "had", "have"],
    answer: "had",
  },
  {
    question:
      "If you ________ a wallet full of money, what would you do with it?",
    options: ["found", "founded", "had founded", "find"],
    answer: "found",
  },
  {
    question:
      "He booked it to school because the bell was about to ring. What does 'booked it' mean in this context?",
    options: ["ran quickly", "took a shower", "organized his books"],
    answer: "ran quickly",
  },
  {
    question:
      "The students began to mill around the hallway after the fire alarm went off. What does 'mill around' mean in this context?",
    options: ["clean up", "walk aimlessly", "shout loudly"],
    answer: "walk aimlessly",
  },
  {
    question:
      "He read the letter silently, his hands crumpling the paper as he got more upset. What does 'crumpling' mean in this context?",
    options: ["folding neatly", "burning it", "squeezing it"],
    answer: "squeezing it",
  },
  {
    question:
      "After her long speech, all she offered were empty platitudes like 'everything happens for a reason.' What does 'platitudes' mean in this context?",
    options: ["overused phrases", "serious advice", "honest opinions"],
    answer: "overused phrases",
  },
  {
    question:
      "It’s a classic rags to riches story—he went from living in his car to owning five restaurants. What does 'rags to riches' mean in this context?",
    options: ["fashion style", "story of failure", "sudden success"],
    answer: "sudden success",
  },
  {
    question:
      "I was just talking about him, and lo and behold, he walked into the room! What does 'lo and behold' mean in this context?",
    options: ["surprisingly", "slowly", "regretfully"],
    answer: "surprisingly",
  },
  {
    question:
      "Even after all these years, he still pines for his childhood sweetheart. What does 'pine for' mean in this context?",
    options: ["wait for", "long for deeply", "forget about"],
    answer: "long for deeply",
  },
  {
    question:
      "They used a spoon to hollow out the pumpkin before carving it. What does 'hollow out' mean in this context?",
    options: ["cut open", "decorate", "remove the inside"],
    answer: "remove the inside",
  },
  {
    question:
      "She truly relishes every moment she gets to spend with her grandchildren. What does 'relish' mean in this context?",
    options: ["enjoy a lot", "remember sadly", "avoid carefully"],
    answer: "enjoy a lot",
  },
  {
    question:
      "His face lit up with pure elation when he got the job offer. What does 'elation' mean in this context?",
    options: ["confusion", "extreme joy", "nervousness"],
    answer: "extreme joy",
  },
  {
    question:
      "The corrupt officer tried to shake him down for money. What does 'shake [somebody] down' mean in this context?",
    options: [
      "accuse unfairly",
      "steal something",
      "demand money with threats",
    ],
    answer: "demand money with threats",
  },
  {
    question:
      "Experts foresee major changes in the job market over the next decade. What does 'foresee' mean in this context?",
    options: ["ignore", "predict", "stop"],
    answer: "predict",
  },
  {
    question:
      "He had so much potential, but he completely flamed out after just one season. What does 'flame out' mean in this context?",
    options: ["succeed greatly", "quit calmly", "fail suddenly"],
    answer: "fail suddenly",
  },
  {
    question:
      "Under pressure from the protesters, the mayor finally yielded to their demands. What does 'yield' mean in this context?",
    options: ["resist", "give in", "explain"],
    answer: "give in",
  },
  {
    question:
      "The volcano has been quiescent for over a century. What does 'quiescent' mean in this context?",
    options: ["active", "silent", "inactive"],
    answer: "inactive",
  },
  {
    question:
      "He was totally gung-ho about starting the new project. What does 'gung-ho' mean in this context?",
    options: ["very enthusiastic", "confused and worried", "uninterested"],
    answer: "very enthusiastic",
  },
  {
    question:
      "There was an implicit agreement between them—they didn’t need to say anything out loud. What does 'implicit' mean in this context?",
    options: ["clearly stated", "silently understood", "completely false"],
    answer: "silently understood",
  },
  {
    question:
      "The coach chastised the player for not following instructions. What does 'chastise' mean in this context?",
    options: ["praise", "ignore", "scold"],
    answer: "scold",
  },
  {
    question:
      "Ever since he started his new job, he’s been acting a bit sniffy toward his old friends. What does 'sniffy' mean in this context?",
    options: ["uninterested", "happy and friendly", "superior or disapproving"],
    answer: "superior or disapproving",
  },
  {
    question:
      "The prince was banished from the kingdom after breaking the royal law. What does 'banished' mean in this context?",
    options: [
      "promoted to a higher rank",
      "forced to do community service",
      "sent away and forbidden to return",
    ],
    answer: "sent away and forbidden to return",
  },
  {
    question:
      "I really dig this band—they’ve got a cool vintage sound. What does 'dig' mean in this context?",
    options: ["like or enjoy", "bury underground", "investigate deeply"],
    answer: "like or enjoy",
  },
  {
    question:
      "During the debate, she put forth several strong arguments. What does 'put forth' mean in this context?",
    options: ["rejected", "presented", "dismissed"],
    answer: "presented",
  },
  {
    question:
      "The kids were warned not to loiter outside the store after school. What does 'loiter' mean in this context?",
    options: [
      "to quickly purchase items and depart from the premises without delay",
      "to actively seek or perform temporary work assignments for money",
      "to hang around without a clear purpose",
    ],
    answer: "to hang around without a clear purpose",
  },
  {
    question:
      "The hospital hallway was quiet and orderly, even though it was a busy night. What does 'orderly' mean in this context?",
    options: [
      "messy and loud",
      "organized and calm",
      "full of orders and commands",
    ],
    answer: "organized and calm",
  },
  {
    question:
      "The soup had a weird stringy texture that made it hard to eat. What does 'stringy' mean in this context?",
    options: [
      "thick and smooth",
      "made of thin, tough strands",
      "liquid and watery",
    ],
    answer: "made of thin, tough strands",
  },
  {
    question:
      "When I asked about his new job, he just said, 'Mind your own beeswax!' What does 'mind your own beeswax' mean in this context?",
    options: [
      "share information openly",
      "keep out of someone else’s business",
      "offer advice",
    ],
    answer: "keep out of someone else’s business",
  },
  {
    question:
      "She said she’d finish the project come hell or high water. What does 'come hell or high water' mean here?",
    options: [
      "only if it's easy",
      "unless something better comes up",
      "no matter what happens",
    ],
    answer: "no matter what happens",
  },
  {
    question:
      "The millionaire was known for being munificent, donating huge sums to charity. What does 'munificent' mean in this context?",
    options: ["extremely generous", "very organized", "somewhat cautious"],
    answer: "extremely generous",
  },
  {
    question:
      "I was ready for anything, but then she threw me a real curveball during the meeting. What does 'threw me a real curveball' mean here?",
    options: [
      "gave me a compliment",
      "repeated something boring",
      "surprised me with something unexpected",
    ],
    answer: "surprised me with something unexpected",
  },
  {
    question:
      "The firefighters arrived in the nick of time to save the house. What does 'in the nick of time' mean in this context?",
    options: [
      "arriving considerably past the point where any effective action could be taken",
      "proceeding with extreme caution and a deliberately unhurried pace",
      "at the last possible moment",
    ],
    answer: "at the last possible moment",
  },
  {
    question:
      "Please keep this under wraps until we’re ready to announce it. What does 'keep this under wraps' mean here?",
    options: ["make it look nice", "hide it physically", "keep it secret"],
    answer: "keep it secret",
  },
  {
    question:
      "The speech was going well until a strange clunk came from the sound system. What does 'clunk' mean in this context?",
    options: [
      "a soft whisper",
      "a dull, heavy sound",
      "a sharp, high-pitched noise",
    ],
    answer: "a dull, heavy sound",
  },
  {
    question:
      "He called the client and followed up with an email the next day. What does 'followed up' mean here?",
    options: [
      "ignored the situation",
      "ended communication",
      "checked back or continued action",
    ],
    answer: "checked back or continued action",
  },
  {
    question:
      "The child responded petulantly, pouting and crossing his arms. What does 'petulantly' mean in this context?",
    options: [
      "cheerfully",
      "in a childish or irritable way",
      "politely and calmly",
    ],
    answer: "in a childish or irritable way",
  },
  {
    question:
      "Someone swiped my lunch from the office fridge again! What does 'swiped' mean here?",
    options: ["stole", "threw away", "traded"],
    answer: "stole",
  },
  {
    question:
      "She didn’t say her name, but I knew her on sight from an old photo. What does 'knew her on sight' mean in this context?",
    options: [
      "recognized immediately",
      "didn’t recognize her",
      "forgot about her",
    ],
    answer: "recognized immediately",
  },
  {
    question:
      "His idea about turning food waste into fuel gave me some serious food for thought. What does 'food for thought' mean here?",
    options: ["a snack", "something funny", "something worth thinking about"],
    answer: "something worth thinking about",
  },
  {
    question:
      "That new intern acts like a real hotshot, even though it’s his first week. What does 'hotshot' mean in this context?",
    options: [
      "a quiet person",
      "someone who thinks they’re very skilled or important",
      "someone unsure of themselves",
    ],
    answer: "someone who thinks they’re very skilled or important",
  },
  {
    question:
      "They had to toil in the hot sun for hours to finish the fieldwork. What does 'toil' mean in this sentence?",
    options: ["relax", "work very hard", "take a break"],
    answer: "work very hard",
  },
  {
    question:
      "He only got a slap on the wrist for cheating on the test—just a warning. What does 'slap on the wrist' mean in this context?",
    options: ["a serious punishment", "a light punishment", "a physical fight"],
    answer: "a light punishment",
  },
  {
    question:
      "Her argument was based on a fallacious assumption that everyone agrees. What does 'fallacious' mean in this context?",
    options: ["correct", "dishonest", "misleading or wrong"],
    answer: "misleading or wrong",
  },
  {
    question:
      "Everything he touches turns into profit—he’s got the Midas touch. What does 'Midas touch' mean here?",
    options: [
      "ability to ruin things",
      "skill in fixing problems",
      "ability to make money easily",
    ],
    answer: "ability to make money easily",
  },
  {
    question:
      "You could see her anger simmering just under the surface. What does 'simmering' mean in this context?",
    options: ["being calmly resolved", "slowly building up", "fading away"],
    answer: "slowly building up",
  },
  {
    question:
      "He’s sailing close to the wind by posting those jokes online—they could get him in trouble. What does 'sailing close to the wind' mean here?",
    options: [
      "staying out of trouble",
      "being extremely cautious",
      "taking risky or bold actions",
    ],
    answer: "taking risky or bold actions",
  },
  {
    question:
      "The boat pulled up next to the wharf to unload the crates. What does 'wharf' mean in this context?",
    options: [
      "a small island",
      "a structure where ships load and unload",
      "a part of the boat",
    ],
    answer: "a structure where ships load and unload",
  },
  {
    question:
      "She figured out the puzzle in seconds—she’s a smart cookie. What does 'smart cookie' mean here?",
    options: [
      "someone who eats a lot",
      "someone clever or capable",
      "someone shy and quiet",
    ],
    answer: "someone clever or capable",
  },
  {
    question:
      "He doesn’t like asking for help—he prefers to paddle his own canoe. What does 'to paddle his own canoe' mean in this context?",
    options: ["travel a lot", "be independent", "take long breaks"],
    answer: "be independent",
  },
  {
    question:
      "The long and short of it is that we missed our flight. What does 'the long and short of it' mean here?",
    options: [
      "every single detail",
      "the basic summary",
      "a confusing explanation",
    ],
    answer: "the basic summary",
  },
  {
    question:
      "The stage lights made her costume look absolutely dazzling. What does 'dazzling' mean in this context?",
    options: [
      "very bright or impressive",
      "completely hidden",
      "hard to understand",
    ],
    answer: "very bright or impressive",
  },
  {
    question:
      "He lives a sybaritic lifestyle, full of luxury and indulgence. What does 'sybaritic' mean in this context?",
    options: [
      "leading a life that is plain, modest, and without extravagance",
      "being diligent and careful with money, avoiding waste",
      "pleasure-loving and luxurious",
    ],
    answer: "pleasure-loving and luxurious",
  },
  {
    question:
      "The movie’s ending was so gloomy that it left me feeling down. What does 'gloomy' mean in this context?",
    options: ["cheerful and fun", "sad or depressing", "fast-paced"],
    answer: "sad or depressing",
  },
  {
    question:
      "His sudden outbursts during the meeting made everyone uncomfortable. What does 'outbursts' mean here?",
    options: [
      "calm discussions",
      "unexpected strong reactions",
      "planned responses",
    ],
    answer: "unexpected strong reactions",
  },
  {
    question:
      "He’s an inveterate gambler who can't go a week without betting on something. What does 'inveterate' mean in this context?",
    options: ["occasional", "deeply habitual", "reluctant"],
    answer: "deeply habitual",
  },
  {
    question:
      "That weird product made her millions—she’s laughing all the way to the bank. What does 'laughing all the way to the bank' mean here?",
    options: [
      "embarrassed by her success",
      "earning money unexpectedly and happily",
      "hiding her profits",
    ],
    answer: "earning money unexpectedly and happily",
  },
  {
    question:
      "He surreptitiously checked his phone under the table during the meeting. What does 'surreptitiously' mean in this context?",
    options: ["secretly", "angrily", "politely"],
    answer: "secretly",
  },
  {
    question:
      "The journalist was accused of impugning the scientist’s reputation without proof. What does 'impugning' mean here?",
    options: ["praising", "questioning or attacking", "copying"],
    answer: "questioning or attacking",
  },
  {
    question:
      "After everything he did, I’d say he had it coming. What does 'had it coming' mean in this context?",
    options: [
      "didn’t deserve punishment",
      "was lucky to escape",
      "deserved what happened",
    ],
    answer: "deserved what happened",
  },
  {
    question:
      "The ailing company struggled to stay open after months of losses. What does 'ailing' mean here?",
    options: ["growing rapidly", "sick or struggling", "hiring new staff"],
    answer: "sick or struggling",
  },
  {
    question:
      "Stop dragging your feet and make a decision already. What does 'dragging your feet' mean in this context?",
    options: ["acting quickly", "delaying on purpose", "running away"],
    answer: "delaying on purpose",
  },
  {
    question:
      "He was treated like a nonentity at the party—no one even noticed him. What does 'nonentity' mean here?",
    options: [
      "someone unknown or unimportant",
      "someone who stands out and is respected",
      "someone who seems secretive or hard to understand",
    ],
    answer: "someone unknown or unimportant",
  },
  {
    question:
      "She squandered all her savings on designer clothes she never wore. What does 'squandered' mean in this context?",
    options: ["saved wisely", "gave to charity", "wasted carelessly"],
    answer: "wasted carelessly",
  },
  {
    question:
      "The coach kept hammering home the importance of practice. What does 'hammering home' mean here?",
    options: [
      "avoiding a topic",
      "repeating something to make it clear",
      "building something quickly",
    ],
    answer: "repeating something to make it clear",
  },
  {
    question:
      "We’ll finish this by hook or by crook—one way or another. What does 'by hook or by crook' mean in this context?",
    options: ["illegally", "using tools", "by any means necessary"],
    answer: "by any means necessary",
  },
  {
    question:
      "It goes without saying that you should be respectful during the ceremony. What does 'goes without saying' mean here?",
    options: ["should be said", "is very obvious", "is open to debate"],
    answer: "is very obvious",
  },
  {
    question:
      "His idea of using forks as hairbrushes was totally ludicrous. What does 'ludicrous' mean in this context?",
    options: ["funny but brilliant", "reasonable", "absurd or ridiculous"],
    answer: "absurd or ridiculous",
  },
  {
    question:
      "He stood there irresolute, unable to decide which way to go. What does 'irresolute' mean here?",
    options: [
      "uncertain or indecisive",
      "confident and bold",
      "already committed",
    ],
    answer: "uncertain or indecisive",
  },
  {
    question:
      "The sheriff deputizes a few locals to help with the search. What does 'deputizes' mean in this context?",
    options: [
      "gives temporary authority",
      "takes people into custody for breaking the law",
      "gets rid of or hides important evidence",
    ],
    answer: "gives temporary authority",
  },
  {
    question:
      "He was accosted by reporters as soon as he stepped outside. What does 'accosted' mean here?",
    options: [
      "greeted gently",
      "approached aggressively",
      "completely ignored",
    ],
    answer: "approached aggressively",
  },
  {
    question:
      "The town saw a burgeoning art scene, with new galleries opening every month. What does 'burgeoning' mean in this context?",
    options: ["disappearing", "rapidly growing", "staying the same"],
    answer: "rapidly growing",
  },
  {
    question:
      "He gave a glib response to the serious question, and it annoyed everyone in the room. What does 'glib' mean in this context?",
    options: [
      "Genuinely honest and deeply thoughtful",
      "Hesitant and noticeably unsure",
      "Smooth but lacking sincerity",
    ],
    answer: "Smooth but lacking sincerity",
  },
  {
    question:
      "Let’s go halves on the pizza—I'll pay for half, and you pay the rest. What does 'go halves' mean here?",
    options: [
      "Share the cost equally",
      "Purchase two separate pizzas",
      "Defer payment until later",
    ],
    answer: "Share the cost equally",
  },
  {
    question:
      "He got in trouble for skipping class all week. What does 'skipping class' mean here?",
    options: [
      "Completing class earlier than expected",
      "Missing class on purpose",
      "Studying ahead of the schedule",
    ],
    answer: "Missing class on purpose",
  },
  {
    question:
      "The meeting was full of sales pitches, not real discussion. What does 'sales pitches' mean in this context?",
    options: [
      "Aggressive selling attempts",
      "Relaxed and casual conversations",
      "Frequent complaints about issues",
    ],
    answer: "Aggressive selling attempts",
  },
  {
    question:
      "Sorry, I called you by the wrong name—it was just a slip of the tongue. What does 'slip of the tongue' mean here?",
    options: ["intentional insult", "lie", "accidental mistake in speaking"],
    answer: "accidental mistake in speaking",
  },
  {
    question:
      "After months of losses, the business is finally in the black again. What does 'in the black' mean in this context?",
    options: ["losing money", "making a profit", "closed permanently"],
    answer: "making a profit",
  },
  {
    question:
      "She’s so fastidious about cleanliness that she wipes her desk every hour. What does 'fastidious' mean here?",
    options: [
      "Not paying much attention to details or hygiene",
      "Very attentive to detail, especially about cleanliness",
      "Avoiding effort and showing a strong tendency to procrastinate",
    ],
    answer: "Very attentive to detail, especially about cleanliness",
  },
  {
    question:
      "The old tree had been hollowed out by insects over the years. What does 'hollowed out' mean in this context?",
    options: ["filled with roots", "made empty inside", "grown thicker"],
    answer: "made empty inside",
  },
  {
    question:
      "He’s been feeling a bit blue lately and doesn’t want to go out. What does 'feeling a bit blue' mean here?",
    options: ["feeling sick", "feeling sad", "feeling excited"],
    answer: "feeling sad",
  },
  {
    question:
      "She keeps dredging up old arguments from years ago. What does 'dredging up' mean here?",
    options: [
      "trying to fix old conflicts peacefully",
      "choosing to forget past problems",
      "bringing up old problems",
    ],
    answer: "bringing up old problems",
  },
  {
    question:
      "The accountant was arrested for embezzling thousands from the company. What does 'embezzling' mean in this context?",
    options: [
      "investing",
      "stealing money one is trusted with",
      "making a donation",
    ],
    answer: "stealing money one is trusted with",
  },
  {
    question:
      "He’s always knuckling under to his boss, even when she’s wrong. What does 'knuckling under' mean here?",
    options: [
      "standing up for himself",
      "making a deal",
      "giving in or surrendering",
    ],
    answer: "giving in or surrendering",
  },
  {
    question:
      "Her calm countenance hid the nervousness she felt inside. What does 'countenance' mean here?",
    options: ["facial expression", "body language", "clothing"],
    answer: "facial expression",
  },
  {
    question:
      "I’m bearing up okay after the surgery—just a bit tired. What does 'bearing up' mean in this context?",
    options: ["losing hope", "recovering slowly", "coping well"],
    answer: "coping well",
  },
  {
    question:
      "The market was a cornucopia of colors, smells, and sounds. What does 'cornucopia' mean here?",
    options: ["a small supply", "a confusing mix", "an abundance"],
    answer: "an abundance",
  },
  {
    question:
      "His name was inscribed on the trophy in gold letters. What does 'inscribed' mean in this context?",
    options: ["written or carved", "erased", "placed inside"],
    answer: "written or carved",
  },
  {
    question:
      "You can’t trust someone who constantly lies. What does 'trust' mean here?",
    options: [
      "try something out to see if it works or is true, like an experiment or test",
      "choose to not pay attention to something or someone, treating it as unimportant",
      "depend on someone with confidence, believing they are honest and reliable",
    ],
    answer:
      "depend on someone with confidence, believing they are honest and reliable",
  },
  {
    question:
      "His boorish behavior at the dinner table embarrassed everyone. What does 'boorish' mean in this context?",
    options: ["extremely polite", "too quiet", "loud and rude"],
    answer: "loud and rude",
  },
  {
    question:
      "The show was debased by cheap humor and bad acting. What does 'debased' mean here?",
    options: [
      "made less valuable or lower in quality",
      "improved",
      "made more expensive",
    ],
    answer: "made less valuable or lower in quality",
  },
  {
    question:
      "Their house is adjacent to the school, so they walk there. What does 'adjacent' mean in this context?",
    options: ["far from", "across town from", "next to"],
    answer: "next to",
  },
  {
    question:
      "Thank you for your forbearance during this long delay. What does 'forbearance' mean here?",
    options: ["anger", "patience", "confusion"],
    answer: "patience",
  },
  {
    question:
      "She got very cross when he forgot her birthday. What does 'got very cross' mean in this context?",
    options: ["became angry", "left the house", "laughed"],
    answer: "became angry",
  },
  {
    question:
      "He played hardball during negotiations and didn’t give an inch. What does 'played hardball' mean here?",
    options: ["acted unfairly", "negotiated aggressively", "quit early"],
    answer: "negotiated aggressively",
  },
  {
    question:
      "She really carried the ball for the whole team during that project. What does 'carried the ball' mean in this context?",
    options: [
      "took the lead or main responsibility",
      "scored points in a game",
      "avoided doing the work",
    ],
    answer: "took the lead or main responsibility",
  },
  {
    question:
      "After selling out in one day, he was making out like a bandit. What does 'making out like a bandit' mean here?",
    options: ["losing money", "earning a lot quickly", "hiding from taxes"],
    answer: "earning a lot quickly",
  },
  {
    question:
      "We’ve been working for hours—let’s call it a day. What does 'call it a day' mean in this context?",
    options: ["start again", "take a break", "stop working"],
    answer: "stop working",
  },
  {
    question:
      "They were hoodwinked into buying a fake antique. What does 'hoodwinked' mean here?",
    options: ["tricked or deceived", "warned", "guided"],
    answer: "tricked or deceived",
  },
  {
    question:
      "They were shooting hoops at the park all afternoon. What does 'shooting hoops' mean in this context?",
    options: ["playing basketball", "throwing garbage", "practicing archery"],
    answer: "playing basketball",
  },
  {
    question:
      "The workers relaid the tiles after noticing they were uneven. What does 'relaid' mean here?",
    options: ["took photos", "painted over", "put down again"],
    answer: "put down again",
  },
  {
    question:
      "That hairstyle is back in vogue this year. What does 'vogue' mean in this context?",
    options: ["danger", "confusion", "popularity"],
    answer: "popularity",
  },
  {
    question:
      "He slumped onto the couch, completely exhausted. What does 'slumped' mean here?",
    options: ["stood up straight", "lay down gently", "sat or fell heavily"],
    answer: "sat or fell heavily",
  },
  {
    question:
      "The professor’s voice drones on for hours without pause. What does 'drones' mean here?",
    options: [
      "sings beautifully",
      "moves quickly",
      "speaks in a dull, boring way",
    ],
    answer: "speaks in a dull, boring way",
  },
  {
    question:
      "To understand the scandal, we need to follow the money. What does 'follow the money' mean in this context?",
    options: ["pay attention to finances", "invest in a bank", "spend more"],
    answer: "pay attention to finances",
  },
  {
    question:
      "His point was germane to the topic we were discussing. What does 'germane' mean here?",
    options: ["confusing", "offensive", "relevant"],
    answer: "relevant",
  },
  {
    question:
      "I don’t need an exact number—just a ballpark figure. What does 'a ballpark figure' mean in this context?",
    options: ["a made-up number", "a sports score", "a general estimate"],
    answer: "a general estimate",
  },
  {
    question:
      "I asked if I could borrow the car, but it was no dice. What does 'no dice' mean here?",
    options: ["they agreed", "no decision was made", "they refused"],
    answer: "they refused",
  },
  {
    question:
      "That was an asinine thing to say during the meeting. What does 'asinine' mean in this context?",
    options: ["clever", "foolish", "unexpected"],
    answer: "foolish",
  },
  {
    question:
      "He chose to cleave to his beliefs, even under pressure. What does 'cleave' mean here?",
    options: ["break apart from", "analyze deeply", "stick closely to"],
    answer: "stick closely to",
  },
  {
    question:
      "I won’t give up—you’ll have to make me say uncle. What does 'say uncle' mean in this context?",
    options: ["tell a secret", "ask for help", "admit defeat"],
    answer: "admit defeat",
  },
  {
    question:
      "She really pulled a rabbit out of her hat with that last-minute fix. What does 'pulled a rabbit out of her hat' mean here?",
    options: [
      "performed a magic trick",
      "panicked under pressure",
      "found an unexpected solution",
    ],
    answer: "found an unexpected solution",
  },
  {
    question:
      "Snap out of it, we’re running late! What does 'snap out of it' mean in this context?",
    options: [
      "stop being distracted or emotionally overwhelmed and regain focus",
      "move more quickly or with greater urgency because time is short",
      "begin laughing or finding something funny, possibly at an inappropriate time",
    ],
    answer: "stop being distracted or emotionally overwhelmed and regain focus",
  },
  {
    question:
      "That plan sounds a bit dicey—are you sure it’s safe? What does 'dicey' mean here?",
    options: ["fun", "risky", "detailed"],
    answer: "risky",
  },
  {
    question:
      "She’s amenable to trying new things. What does 'amenable' mean in this context?",
    options: ["unwilling", "uninterested", "open and willing"],
    answer: "open and willing",
  },
  {
    question:
      "The new rules were officially promulgated by the government. What does 'promulgated' mean here?",
    options: ["delayed", "removed", "announced publicly"],
    answer: "announced publicly",
  },
  {
    question:
      "Everything was finally settled after the long debate. What does 'settled' mean in this context?",
    options: ["left unresolved", "ignored", "agreed upon"],
    answer: "agreed upon",
  },
  {
    question:
      "She enjoys jogging in the mornings to clear her head. What does 'jogging' mean here?",
    options: [
      "walking slowly and casually without any intention of exercising",
      "running at a steady, moderate pace for exercise or relaxation",
      "running very fast for a short distance, usually in a race or when in a hurry",
    ],
    answer: "running at a steady, moderate pace for exercise or relaxation",
  },
  {
    question:
      "She gave an unflinching account of the accident, despite how painful it was. What does 'unflinching' mean in this context?",
    options: ["hesitant and fearful", "careless and vague", "honest and firm"],
    answer: "honest and firm",
  },
  {
    question:
      "The wound festered because it wasn’t properly cleaned. What does 'festered' mean here?",
    options: ["healed slowly", "improved quickly", "became worse and infected"],
    answer: "became worse and infected",
  },
  {
    question:
      "There was a sudden exacerbation of her symptoms overnight. What does 'exacerbation' mean in this context?",
    options: ["worsening", "improvement", "disappearance"],
    answer: "worsening",
  },
  {
    question:
      "The seam on my shirt ripped after just one wash. What does 'seam' mean here?",
    options: ["pattern", "color", "stitched edge"],
    answer: "stitched edge",
  },
  {
    question:
      "He’s a bit of a hypochondriac—he always thinks he’s seriously ill. What does 'hypochondriac' mean in this context?",
    options: [
      "someone who avoids doctors",
      "someone who works in medicine",
      "someone who fears illness constantly",
    ],
    answer: "someone who fears illness constantly",
  },
  {
    question:
      "She was blubbering so much I could hardly understand her words. What does 'blubbering' mean here?",
    options: ["crying noisily", "laughing loudly", "mumbling quietly"],
    answer: "crying noisily",
  },
  {
    question:
      "Anger smoldered in his eyes, though he stayed silent. What does 'smoldered' mean in this context?",
    options: ["burned brightly", "vanished quickly", "burned slowly"],
    answer: "burned slowly",
  },
  {
    question:
      "He was so absorbed in the book, he didn’t hear me call him. What does 'absorbed' mean here?",
    options: ["distracted", "irritated", "fully focused"],
    answer: "fully focused",
  },
  {
    question:
      "I appreciate her honesty—she’s not afraid to call a spade a spade. What does 'call a spade a spade' mean in this context?",
    options: ["use slang", "avoid conflict", "speak plainly"],
    answer: "speak plainly",
  },
  {
    question:
      "She was at the end of her rope after dealing with the problem for so long. What does 'at the end of her rope' mean here?",
    options: [
      "out of options or patience",
      "just starting out",
      "physically exhausted",
    ],
    answer: "out of options or patience",
  },
  {
    question:
      "He slung his backpack over one shoulder and left. What does 'slung' mean in this context?",
    options: ["neatly placed", "threw loosely or casually", "hid carefully"],
    answer: "threw loosely or casually",
  },
  {
    question:
      "That idea didn’t work—let’s go back to the drawing board. What does 'go back to the drawing board' mean here?",
    options: ["try a new approach", "give up", "continue as planned"],
    answer: "try a new approach",
  },
  {
    question:
      "There’s a temporary moratorium on construction in that area. What does 'moratorium' mean in this context?",
    options: ["celebration", "tax increase", "delay or suspension"],
    answer: "delay or suspension",
  },
  {
    question:
      "From the outset, the plan had serious flaws. What does 'outset' mean here?",
    options: ["middle", "result", "beginning"],
    answer: "beginning",
  },
  {
    question:
      "He behaved decorously at the formal dinner. What does 'decorously' mean in this context?",
    options: [
      "politely and with good manners",
      "carelessly and with loud behavior",
      "slowly and with awkward movements",
    ],
    answer: "politely and with good manners",
  },
  {
    question:
      "Her sister was like her alter ego—they did everything together. What does 'alter ego' mean here?",
    options: ["rival", "opposite personality", "close friend or second self"],
    answer: "close friend or second self",
  },
  {
    question:
      "His shirt was so rumpled after the long flight that he looked like he’d slept in it. What does rumpled mean in this context?",
    options: ["clean", "ironed", "wrinkled"],
    answer: "wrinkled",
  },
  {
    question:
      "The team was stymied by the puzzle, unable to find the final clue. What does stymied mean in this context?",
    options: ["blocked", "encouraged", "solved"],
    answer: "blocked",
  },
  {
    question:
      "The company bigwig arrived in a fancy car, drawing everyone’s attention. What does bigwig mean in this context?",
    options: ["leader", "visitor", "worker"],
    answer: "leader",
  },
  {
    question:
      "He strung her along for months, promising a promotion that never came. What does strung her along mean in this context?",
    options: ["misled her", "supported her", "trained her"],
    answer: "misled her",
  },
  {
    question:
      "She carefully edged along the narrow ledge to reach the window. What does edged mean in this context?",
    options: ["jumped", "ran", "moved slowly"],
    answer: "moved slowly",
  },
  {
    question:
      "The benevolent donor gave money to rebuild the community center. What does benevolent mean in this context?",
    options: ["generous", "cautious", "selfish"],
    answer: "generous",
  },
  {
    question:
      "The salesman pulled the wool over my eyes with his fake discount offer. What does pulled the wool over my eyes mean in this context?",
    options: ["deceived me", "helped me", "surprised me"],
    answer: "deceived me",
  },
  {
    question:
      "The camper set up a simple cot to sleep on during the trip. What does cot mean in this context?",
    options: ["bed", "chair", "tent"],
    answer: "bed",
  },
  {
    question:
      "The painting was so evocative that it brought back memories of her childhood. What does evocative mean in this context?",
    options: ["confusing", "emotional", "plain"],
    answer: "emotional",
  },
  {
    question:
      "They had to squeeze up on the bench to make room for one more person. What does squeeze up mean in this context?",
    options: ["leave quickly", "stand up", "move closer"],
    answer: "move closer",
  },
  {
    question:
      "The politician was execrated by the crowd for his dishonest actions. What does execrated mean in this context?",
    options: ["cursed", "ignored", "praised"],
    answer: "cursed",
  },
  {
    question:
      "The church bells let out a joyful peal during the festival. What does peal mean in this context?",
    options: ["ringing", "silence", "whisper"],
    answer: "ringing",
  },
  {
    question:
      "Her sudden resignation was a bolt from the blue for the entire team. What does bolt from the blue mean in this context?",
    options: ["expected event", "planned decision", "sudden surprise"],
    answer: "sudden surprise",
  },
  {
    question:
      "The quislings were criticized for betraying their country during the war. What does quislings mean in this context?",
    options: ["heroes", "leaders", "traitors"],
    answer: "traitors",
  },
  {
    question:
      "It took her a week to learn the ropes of her new job at the bakery. What does learn the ropes mean in this context?",
    options: ["avoid work", "make mistakes", "master skills"],
    answer: "master skills",
  },
  {
    question:
      "The ancient citadel stood proudly atop the hill, guarding the town. What does citadel mean in this context?",
    options: ["fortress", "market", "temple"],
    answer: "fortress",
  },
  {
    question:
      "She focused on the minutiae of the project, ensuring every detail was perfect. What does minutiae mean in this context?",
    options: ["big issues", "main goals", "small details"],
    answer: "small details",
  },
  {
    question:
      "After a few days on the boat, he finally got his sea legs and stopped feeling dizzy. What does sea legs mean in this context?",
    options: ["balance at sea", "fishing skill", "swimming ability"],
    answer: "balance at sea",
  },
  {
    question:
      "The tension in the room was so palpable you could feel it in the air. What does palpable mean in this context?",
    options: ["noticeable", "invisible", "calm"],
    answer: "noticeable",
  },
  {
    question:
      "Her retiring personality made her avoid large social gatherings. What does retiring mean in this context?",
    options: ["outgoing", "shy", "confident"],
    answer: "shy",
  },
  {
    question:
      "The concert was the apotheosis of her career, showcasing her greatest talents. What does apotheosis of mean in this context?",
    options: ["decline of", "peak of", "beginning of"],
    answer: "peak of",
  },
  {
    question:
      "He constantly denigrates his coworkers, making the workplace unpleasant. What does denigrates mean in this context?",
    options: ["praises", "supports", "criticizes"],
    answer: "criticizes",
  },
  {
    question:
      "Her ebullient energy lit up the party, making everyone smile. What does ebullient mean in this context?",
    options: ["reserved", "tired", "cheerful"],
    answer: "cheerful",
  },
  {
    question:
      "The factory was pumping out toys at an incredible rate before the holidays. What does pumping out mean in this context?",
    options: ["repairing", "storing", "producing"],
    answer: "producing",
  },
  {
    question:
      "The group published a manifesto outlining their plans for change. What does manifesto mean in this context?",
    options: ["public statement", "secret plan", "private letter"],
    answer: "public statement",
  },
  {
    question:
      "Sharing her best ideas with the uninterested group felt like casting pearls before swine. What does casting pearls before swine mean in this context?",
    options: ["sharing wisely", "teaching eagerly", "wasting value"],
    answer: "wasting value",
  },
  {
    question:
      "At only 16, she had an old head on young shoulders, making wise decisions. What does an old head on young shoulders mean in this context?",
    options: ["youthful energy", "reckless behavior", "mature wisdom"],
    answer: "mature wisdom",
  },
  {
    question:
      "The team worked to harness solar energy for the new project. What does harness mean in this context?",
    options: ["utilize", "ignore", "destroy"],
    answer: "utilize",
  },
  {
    question:
      "The professor’s abstruse lecture left the students confused. What does abstruse mean in this context?",
    options: ["clear", "simple", "complex"],
    answer: "complex",
  },
  {
    question:
      "She used the remote to zap through the TV channels quickly. What does zap mean in this context?",
    options: ["watch slowly", "turn off", "change rapidly"],
    answer: "change rapidly",
  },
  {
    question:
      "He was burning the candle at both ends with work and late-night studying. What does burning the candle at both ends mean in this context?",
    options: ["relaxing often", "saving energy", "overworking"],
    answer: "overworking",
  },
  {
    question:
      "You can bet your boots she’ll win the race; she’s been training for months. What does you can bet your boots mean in this context?",
    options: ["doubt it", "take a risk", "be certain"],
    answer: "be certain",
  },
  {
    question:
      "The choir performed a medley of popular songs from the musical. What does medley mean in this context?",
    options: ["single song", "mixed collection", "loud performance"],
    answer: "mixed collection",
  },
  {
    question:
      "His silence was tantamount to agreeing with the decision. What does tantamount mean in this context?",
    options: ["unrelated", "opposed", "equivalent"],
    answer: "equivalent",
  },
  {
    question:
      "She tendered her resignation after five years at the company. What does tendered mean in this context?",
    options: ["offered", "accepted", "delayed"],
    answer: "offered",
  },
  {
    question:
      "They were in cahoots to plan a surprise party for their friend. What does cahoots mean in this context?",
    options: ["competition", "disagreement", "partnership"],
    answer: "partnership",
  },
  {
    question:
      "The old car languished in the garage, unused for years. What does languished in mean in this context?",
    options: ["remained neglected", "thrived actively", "was repaired"],
    answer: "remained neglected",
  },
  {
    question:
      "She wore a stylish beret to complete her artistic look. What does beret mean in this context?",
    options: ["scarf", "hat", "jacket"],
    answer: "hat",
  },
  {
    question:
      "Losing his job and getting sick was a double whammy for him. What does double whammy mean in this context?",
    options: ["single problem", "great success", "two setbacks"],
    answer: "two setbacks",
  },
  {
    question:
      "She rattled off the list of ingredients without looking at the recipe. What does rattled something off mean in this context?",
    options: ["forgot slowly", "wrote carefully", "recited quickly"],
    answer: "recited quickly",
  },
  {
    question:
      "He was scrupulous about checking every detail of the contract. What does scrupulous mean in this context?",
    options: ["careless", "dishonest", "thorough"],
    answer: "thorough",
  },
  {
    question:
      "Her busy schedule precludes her from joining the book club. What does precludes mean in this context?",
    options: ["allows", "encourages", "prevents"],
    answer: "prevents",
  },
  {
    question:
      "There’s a clear dichotomy between his words and his actions. What does dichotomy mean in this context?",
    options: ["agreement", "contrast", "similarity"],
    answer: "contrast",
  },
  {
    question:
      "The festival turned into a bacchanalian celebration with wild dancing and drinking. What does bacchanalian mean in this context?",
    options: ["excessive", "orderly", "quiet"],
    answer: "excessive",
  },
  {
    question:
      "He promised to pay for dinner but tried to welch on the bill. What does welch mean in this context?",
    options: ["avoid paying", "pay fully", "tip generously"],
    answer: "avoid paying",
  },
  {
    question:
      "The article’s false claims about her were considered libel by her lawyer. What does libel mean in this context?",
    options: ["defamation", "praise", "truth"],
    answer: "defamation",
  },
  {
    question:
      "She’s a true friend in my book because she’s always there for me. What does in my book mean in this context?",
    options: ["in my opinion", "in my diary", "in my story"],
    answer: "in my opinion",
  },
  {
    question:
      "After the loud crash, he stood there dazed, unsure of what happened. What does dazed mean in this context?",
    options: ["alert", "excited", "confused"],
    answer: "confused",
  },
  {
    question:
      "The official was fired for malfeasance after misusing public funds. What does malfeasance mean in this context?",
    options: ["generosity", "honesty", "misconduct"],
    answer: "misconduct",
  },
  {
    question:
      "Planting trees helped offset the carbon emissions from the event. What does offset mean in this context?",
    options: ["balance", "ignore", "increase"],
    answer: "balance",
  },
  {
    question:
      "The peals of laughter from the children filled the playground. What does peals mean in this context?",
    options: ["bursts", "silence", "whispers"],
    answer: "bursts",
  },
  {
    question:
      "He felt a wrench in his heart when he said goodbye to his best friend. What does wrench mean in this context?",
    options: ["joy", "relief", "pain"],
    answer: "pain",
  },
  {
    question:
      "She missed the bus and, hence, was late for school. What does hence mean in this context?",
    options: ["therefore", "however", "before"],
    answer: "therefore",
  },
  {
    question:
      "The old truck moved in lurches, jerking forward unevenly. What does lurches mean in this context?",
    options: ["smooth glides", "slow turns", "sudden jolts"],
    answer: "sudden jolts",
  },
  {
    question:
      "He wore a sling to support his injured arm after the fall. What does sling mean in this context?",
    options: ["bandage", "cast", "support"],
    answer: "support",
  },
  {
    question:
      "After working overtime for weeks, she felt completely burned out. What does burned out mean in this context?",
    options: ["energized", "motivated", "exhausted"],
    answer: "exhausted",
  },
  {
    question:
      "They threw a big bash to celebrate the end of the school year. What does bash mean in this context?",
    options: ["party", "meeting", "argument"],
    answer: "party",
  },
  {
    question:
      "The bread was so stale that it was hard to chew. What does stale mean in this context?",
    options: ["fresh", "soft", "old"],
    answer: "old",
  },
  {
    question:
      "Her fortitude helped her stay strong during the difficult times. What does fortitude mean in this context?",
    options: ["weakness", "doubt", "courage"],
    answer: "courage",
  },
  {
    question:
      "The golf course had a tricky dogleg that curved sharply to the left. What does dogleg mean in this context?",
    options: ["straight path", "open field", "sharp bend"],
    answer: "sharp bend",
  },
  {
    question:
      "He looked strung out after staying up all night studying. What does strung out mean in this context?",
    options: ["relaxed", "focused", "tired"],
    answer: "tired",
  },
  {
    question:
      "The naughty puppy chewed on the slippers when no one was looking. What does naughty mean in this context?",
    options: ["obedient", "quiet", "mischievous"],
    answer: "mischievous",
  },
  {
    question:
      "The team’s ignominious defeat was a low point in their season. What does ignominious mean in this context?",
    options: ["glorious", "shameful", "expected"],
    answer: "shameful",
  },
  {
    question:
      "The festival attracted upwards of a thousand visitors last weekend. What does upwards of mean in this context?",
    options: ["exactly", "less than", "more than"],
    answer: "more than",
  },
  {
    question:
      "His friends set him up with a prank that left him laughing. What does set him up mean in this context?",
    options: ["supported him", "helped him", "tricked him"],
    answer: "tricked him",
  },
  {
    question:
      "All his plans for the trip gone up in smoke when his car broke down. What does gone up in smoke mean in this context?",
    options: ["succeeded", "continued", "failed"],
    answer: "failed",
  },
  {
    question:
      "The judge decided to quash the rumors by issuing a clear statement. What does quash mean in this context?",
    options: ["spread", "confirm", "suppress"],
    answer: "suppress",
  },
  {
    question:
      "She was just beside herself with joy when she heard the good news. What does was just beside herself mean in this context?",
    options: ["overwhelmed", "calm", "bored"],
    answer: "overwhelmed",
  },
  {
    question:
      "Without quick action, the project was going to hell in a handbasket. What does going to hell in a handbasket mean in this context?",
    options: ["failing", "improving", "staying steady"],
    answer: "failing",
  },
  {
    question:
      "She deferred to her boss’s decision on the new policy. What does deferred to mean in this context?",
    options: ["ignored", "accepted", "challenged"],
    answer: "accepted",
  },
  {
    question:
      "The hiker strayed from the path and got lost in the woods. What does strayed mean in this context?",
    options: ["stayed", "wandered", "ran"],
    answer: "wandered",
  },
  {
    question:
      "The impecunious artist struggled to afford paint for her next project. What does impecunious mean in this context?",
    options: ["poor", "wealthy", "talented"],
    answer: "poor",
  },
  {
    question:
      "The factory was tooling new equipment to boost production speed. What does tooling mean in this context?",
    options: ["equipping", "repairing", "equipping", "selling"],
    answer: "equipping",
  },
  {
    question:
      "The old train chugged slowly up the steep hill. What does chugged mean in this context?",
    options: ["moved steadily", "stopped", "sped quickly"],
    answer: "moved steadily",
  },
  {
    question:
      "He trumped the whole thing up to make the story sound more exciting. What does trumped the whole thing up mean in this context?",
    options: ["simplified", "exaggerated", "ignored"],
    answer: "exaggerated",
  },
  {
    question:
      "Moving to a new city wasn’t a bed of roses, but she managed. What does bed of roses mean in this context?",
    options: ["easy situation", "tough challenge", "boring task"],
    answer: "easy situation",
  },
  {
    question:
      "She showed up to the party with bells on, ready to have fun. What does with bells on mean in this context?",
    options: ["enthusiastically", "reluctantly", "quietly"],
    answer: "enthusiastically",
  },
  {
    question:
      "The cartoon gave the animals anthropomorphic traits, like talking and dancing. What does anthropomorphic mean in this context?",
    options: ["human-like", "animal-like", "robotic"],
    answer: "human-like",
  },
  {
    question:
      "She refused to let the rules cramp her style at the dance. What does cramp her style mean in this context?",
    options: [
      "improve her skills",
      "limit her freedom",
      "boost her confidence",
    ],
    answer: "limit her freedom",
  },
  {
    question:
      "His indolent attitude kept him from finishing his homework on time. What does indolent mean in this context?",
    options: ["energetic", "lazy", "focused"],
    answer: "lazy",
  },
  {
    question:
      "The game was over before the rain started pouring. What does over mean in this context?",
    options: ["delayed", "started", "finished"],
    answer: "finished",
  },
  {
    question:
      "His resignation from the team shocked everyone. What does resignation mean in this context?",
    options: ["promotion", "quitting", "effort"],
    answer: "quitting",
  },
  {
    question:
      "The boss had to lean on them to meet the project deadline. What does lean on them mean in this context?",
    options: ["support them", "ignore them", "pressure them"],
    answer: "pressure them",
  },
  {
    question:
      "She was forward with her opinions, never holding back in meetings. What does forward mean in this context?",
    options: ["bold", "shy", "quiet"],
    answer: "bold",
  },
  {
    question:
      "He complained often, proving that the squeaky wheel gets the grease. What does the squeaky wheel gets the grease mean in this context?",
    options: [
      "silence is rewarded",
      "complaints get attention",
      "hard work pays off",
    ],
    answer: "complaints get attention",
  },
  {
    question:
      "After the heist, the thieves divided the spoils among themselves. What does divided the spoils mean in this context?",
    options: ["shared profits", "lost money", "hid treasures"],
    answer: "shared profits",
  },
  {
    question:
      "The swan was gliding gracefully across the calm lake. What does gliding mean in this context?",
    options: ["swimming slowly", "diving quickly", "moving smoothly"],
    answer: "moving smoothly",
  },
  {
    question:
      "She took the criticism as a lump, not letting it bother her. What does lump mean in this context?",
    options: ["reward", "compliment", "burden"],
    answer: "burden",
  },
  {
    question:
      "There’s only a slim chance of rain this afternoon, so we can go hiking. What does slim chance mean in this context?",
    options: ["high likelihood", "certain outcome", "small possibility"],
    answer: "small possibility",
  },
  {
    question:
      "He couldn’t help but lust after the shiny new sports car in the showroom. What does lust after mean in this context?",
    options: ["dislike strongly", "ignore completely", "desire eagerly"],
    answer: "desire eagerly",
  },
  {
    question:
      "At the dance, she felt like a wallflower, watching from the sidelines. What does wallflower mean in this context?",
    options: ["active dancer", "party host", "shy onlooker"],
    answer: "shy onlooker",
  },
  {
    question:
      "The kids would taunt him about his old sneakers during recess. What does taunt mean in this context?",
    options: ["praise", "help", "tease"],
    answer: "tease",
  },
  {
    question:
      "The actor carried off the challenging role with confidence. What does carried off mean in this context?",
    options: ["failed at", "performed well", "avoided doing"],
    answer: "performed well",
  },
  {
    question:
      "His explanation of the math problem was clear as mud to the students. What does clear as mud mean in this context?",
    options: ["very clear", "somewhat helpful", "very confusing"],
    answer: "very confusing",
  },
  {
    question:
      "The security guard checked the premises to ensure everything was safe. What does premises mean in this context?",
    options: ["property", "documents", "workers"],
    answer: "property",
  },
  {
    question:
      "She used her connections to leverage a better deal for the company. What does leverage mean in this context?",
    options: ["use effectively", "ignore", "lose"],
    answer: "use effectively",
  },
  {
    question:
      "After the long meeting, he was enervated and needed a break. What does was enervated mean in this context?",
    options: ["was exhausted", "was energized", "was excited"],
    answer: "was exhausted",
  },
  {
    question:
      "His mulish refusal to change his plan frustrated the team. What does mulish mean in this context?",
    options: ["cooperative", "stubborn", "helpful"],
    answer: "stubborn",
  },
  {
    question:
      "After the promotion, she became the top dog in the department. What does top dog mean in this context?",
    options: ["lowest worker", "main leader", "new employee"],
    answer: "main leader",
  },
  {
    question:
      "He didn’t mean to cast aspersions on her work, but his comments upset her. What does cast aspersions on mean in this context?",
    options: ["criticize", "praise", "support"],
    answer: "criticize",
  },
  {
    question:
      "The loud crash was jarring, startling everyone in the room. What does jarring mean in this context?",
    options: ["soothing", "shocking", "quiet"],
    answer: "shocking",
  },
  {
    question:
      "The new policy ameliorated working conditions for the staff. What does ameliorated mean in this context?",
    options: ["improved", "worsened", "ignored"],
    answer: "improved",
  },
  {
    question:
      "The movie’s grisly scenes made her cover her eyes. What does grisly mean in this context?",
    options: ["funny", "gruesome", "exciting"],
    answer: "gruesome",
  },
  {
    question:
      "The speaker tended to digress, talking about unrelated topics. What does digress mean in this context?",
    options: ["stay focused", "wander off", "speak clearly"],
    answer: "wander off",
  },
  {
    question:
      "The neighbors were up in arms about the noisy construction work. What does up in arms mean in this context?",
    options: ["pleased", "angry", "calm"],
    answer: "angry",
  },
  {
    question:
      "Her face was wreathed in smiles when she saw her family. What does wreathed mean in this context?",
    options: ["covered", "hidden", "empty"],
    answer: "covered",
  },
  {
    question:
      "He was the black sheep of the family, always causing trouble. What does black sheep mean in this context?",
    options: ["favorite member", "odd one out", "reliable person"],
    answer: "odd one out",
  },
  {
    question:
      "She was upset when her date stood her up at the restaurant. What does stood me up mean in this context?",
    options: ["met on time", "failed to show", "helped out"],
    answer: "failed to show",
  },
  {
    question:
      "They retired to a cozy bungalow by the beach. What does bungalow mean in this context?",
    options: ["tall building", "large hotel", "small house"],
    answer: "small house",
  },
  {
    question:
      "He reluctantly acquiesced to the group’s decision to change plans. What does acquiesced mean in this context?",
    options: ["agreed", "opposed", "ignored"],
    answer: "agreed",
  },
  {
    question:
      "The marathon was a gruelling test of her endurance. What does gruelling mean in this context?",
    options: ["exhausting", "easy", "fun"],
    answer: "exhausting",
  },
  {
    question:
      "Water was trickling slowly from the leaky faucet. What does trickling mean in this context?",
    options: ["gushing", "dripping", "stopping"],
    answer: "dripping",
  },
  {
    question:
      "The inventor’s workshop was filled with strange gizmos that buzzed and whirred. What does gizmos mean in this context?",
    options: ["tools", "gadgets", "books"],
    answer: "gadgets",
  },
  {
    question:
      "The neglected garden began to languish without regular care. What does languish mean in this context?",
    options: ["thrive", "weaken", "grow"],
    answer: "weaken",
  },
  {
    question:
      "She got wind of the surprise party and acted shocked anyway. What does got wind of mean in this context?",
    options: ["heard about", "forgot about", "planned secretly"],
    answer: "heard about",
  },
  {
    question:
      "He scowled at the messy room, unhappy with the clutter. What does scowled mean in this context?",
    options: ["frowned", "smiled", "laughed"],
    answer: "frowned",
  },
  {
    question:
      "Leonardo da Vinci, a polymath, excelled in art, science, and engineering. What does polymath mean in this context?",
    options: ["specialist", "multitalented", "beginner"],
    answer: "multitalented",
  },
  {
    question:
      "The conversation segued smoothly from sports to movies. What does segued mean in this context?",
    options: ["transitioned", "stopped", "repeated"],
    answer: "transitioned",
  },
  {
    question:
      "The carpenter used tongue and groove boards to build the sturdy floor. What does tongue and groove mean in this context?",
    options: ["decorative pattern", "interlocking joint", "painting technique"],
    answer: "interlocking joint",
  },
  {
    question:
      "Spreading rumors was perpetuating the misunderstanding among friends. What does perpetuating mean in this context?",
    options: ["stopping", "continuing", "ignoring"],
    answer: "continuing",
  },
  {
    question:
      "If I had a nickel for every time he was late, I’d be rich! What does if I had a nickel for every time mean in this context?",
    options: ["rarely happens", "happens often", "never happens"],
    answer: "happens often",
  },
  {
    question:
      "She crafted a beautiful scarf using soft wool and intricate patterns. What does crafted mean in this context?",
    options: ["made", "bought", "sold"],
    answer: "made",
  },
  {
    question:
      "The plot to commit regicide shocked the kingdom’s loyal subjects. What does regicide mean in this context?",
    options: ["stealing treasure", "starting a war", "killing a king"],
    answer: "killing a king",
  },
  {
    question:
      "Her business acumen helped her turn a small shop into a chain. What does acumen mean in this context?",
    options: ["skill", "failure", "luck"],
    answer: "skill",
  },
  {
    question:
      "The software feature was deprecated in the latest update. What does deprecated mean in this context?",
    options: ["improved", "added", "discontinued"],
    answer: "discontinued",
  },
  {
    question:
      "He didn’t crack a book until the night before the exam. What does crack a book mean in this context?",
    options: ["write a story", "buy a book", "open a book"],
    answer: "open a book",
  },
  {
    question:
      "The kids were clowning around instead of doing their chores. What does clowning around mean in this context?",
    options: ["acting silly", "working hard", "being quiet"],
    answer: "acting silly",
  },
  {
    question:
      "It suddenly dawned on me that I had forgotten my keys. What does dawned on me mean in this context?",
    options: ["became clear", "confused me", "upset me"],
    answer: "became clear",
  },
  {
    question:
      "Her haughty attitude made it hard for her to make friends. What does haughty mean in this context?",
    options: ["arrogant", "friendly", "shy"],
    answer: "arrogant",
  },
  {
    question:
      "They were first thrown together during a group project at school. What does were first thrown together mean in this context?",
    options: ["argued initially", "met unexpectedly", "planned to meet"],
    answer: "met unexpectedly",
  },
  {
    question:
      "The team hoisted the heavy flagpole into place for the ceremony. What does hoisted mean in this context?",
    options: ["lowered", "lifted", "painted"],
    answer: "lifted",
  },
  {
    question:
      "The teacher chided the student for talking during the lesson. What does chided mean in this context?",
    options: ["scolded", "praised", "ignored"],
    answer: "scolded",
  },
  {
    question:
      "The new mattress was so springy that she bounced slightly when she sat on it. What does springy mean in this context?",
    options: ["stiff", "heavy", "bouncy"],
    answer: "bouncy",
  },
  {
    question:
      "In the wake of the storm, the town began rebuilding its damaged homes. What does in the wake of mean in this context?",
    options: ["before", "following", "during"],
    answer: "following",
  },
  {
    question:
      "He was running her down behind her back, criticizing her work unfairly. What does running her down mean in this context?",
    options: ["criticizing her", "praising her", "helping her"],
    answer: "criticizing her",
  },
  {
    question:
      "Her pithy speech captured the audience’s attention in just a few words. What does pithy mean in this context?",
    options: ["long-winded", "concise", "boring"],
    answer: "concise",
  },
  {
    question:
      "She eats like a bird, taking only small bites at dinner. What does eats like a bird mean in this context?",
    options: ["eats a lot", "eats little", "eats messily"],
    answer: "eats little",
  },
  {
    question:
      "He bought another useless gadget, proving a fool and his money are easily parted. What does a fool and his money are easily parted mean in this context?",
    options: ["wise spending", "reckless spending", "careful saving"],
    answer: "reckless spending",
  },
  {
    question:
      "After the long day, he felt listless and lacked the energy to play. What does listless mean in this context?",
    options: ["energetic", "lethargic", "excited"],
    answer: "lethargic",
  },
  {
    question:
      "Her agreeable nature made her easy to work with on the project. What does agreeable mean in this context?",
    options: ["stubborn", "pleasant", "rude"],
    answer: "pleasant",
  },
  {
    question:
      "She kept talking about her dress, clearly fishing for compliments. What does fishing for compliments mean in this context?",
    options: ["seeking praise", "avoiding attention", "giving advice"],
    answer: "seeking praise",
  },
  {
    question:
      "The neighborhood threw a wingding to celebrate the new park opening. What does wingding mean in this context?",
    options: ["quiet meeting", "lively party", "boring event"],
    answer: "lively party",
  },
  {
    question:
      "Without clear instructions, they muddled through the task somehow. What does muddled through mean in this context?",
    options: ["failed completely", "managed clumsily", "excelled easily"],
    answer: "managed clumsily",
  },
  {
    question:
      "The loan came with strings attached, requiring her to report monthly. What does with strings attached mean in this context?",
    options: ["without conditions", "with conditions", "with rewards"],
    answer: "with conditions",
  },
  {
    question:
      "The firecracker was a dud, failing to light up or make a sound. What does dud mean in this context?",
    options: ["success", "failure", "surprise"],
    answer: "failure",
  },
  {
    question:
      "He made a pledge to donate part of his earnings to charity. What does pledge mean in this context?",
    options: ["refusal", "promise", "question"],
    answer: "promise",
  },
  {
    question:
      "She made a slip and accidentally revealed the surprise party. What does slip mean in this context?",
    options: ["plan", "mistake", "success"],
    answer: "mistake",
  },
  {
    question:
      "Finishing the project by tomorrow is a tall order, but we’ll try. What does tall order mean in this context?",
    options: ["easy task", "small request", "difficult task"],
    answer: "difficult task",
  },
  {
    question:
      "He asserted his opinion confidently during the debate. What does asserted mean in this context?",
    options: ["hid", "stated", "questioned"],
    answer: "stated",
  },
  {
    question:
      "The kids were raising Cain in the backyard, shouting and running wildly. What does raising Cain mean in this context?",
    options: ["behaving well", "causing trouble", "helping out"],
    answer: "causing trouble",
  },
  {
    question:
      "She used her wits to solve the tricky puzzle quickly. What does wits mean in this context?",
    options: ["intelligence", "strength", "luck"],
    answer: "intelligence",
  },
  {
    question:
      "She relinquished her claim to the family heirloom to avoid a dispute. What does relinquished mean in this context?",
    options: ["gave up", "kept", "fought for"],
    answer: "gave up",
  },
  {
    question:
      "The festering wound needed immediate medical attention to heal. What does festering mean in this context?",
    options: ["worsening", "healing", "clean"],
    answer: "worsening",
  },
  {
    question:
      "He snatched the last cookie from the plate before anyone else could. What does snatched mean in this context?",
    options: ["grabbed", "shared", "dropped"],
    answer: "grabbed",
  },
  {
    question:
      "He was an armchair quarterback, always critiquing the game from his couch. What does an armchair quarterback mean in this context?",
    options: ["critical observer", "active player", "supportive fan"],
    answer: "critical observer",
  },
  {
    question:
      "Her canny decision to invest early saved her a lot of money. What does canny mean in this context?",
    options: ["clever", "foolish", "reckless"],
    answer: "clever",
  },
  {
    question:
      "They got VIP tickets because, as they say, money talks. What does money talks mean in this context?",
    options: ["wealth influences", "money is useless", "effort matters"],
    answer: "wealth influences",
  },
  {
    question:
      "She was badmouthing her coworker, spreading negative comments. What does badmouthing mean in this context?",
    options: ["criticizing", "praising", "ignoring"],
    answer: "criticizing",
  },
  {
    question:
      "He woke up with a painful charley horse in his calf after running. What does charley horse mean in this context?",
    options: ["muscle cramp", "broken bone", "headache"],
    answer: "muscle cramp",
  },
  {
    question:
      "She only visits her hometown once in a blue moon now that she’s moved. What does once in a blue moon mean in this context?",
    options: ["frequently", "rarely", "daily"],
    answer: "rarely",
  },
  {
    question:
      "The bully’s taunts upset the younger kids on the playground. What does taunts mean in this context?",
    options: ["insults", "compliments", "questions"],
    answer: "insults",
  },
  {
    question:
      "The rustic cabin in the woods had no electricity or running water. What does rustic mean in this context?",
    options: ["modern", "simple", "luxurious"],
    answer: "simple",
  },
  {
    question:
      "He felt like a pencil pusher, stuck doing paperwork all day. What does pencil pusher mean in this context?",
    options: ["graphic artist", "office worker", "high school teacher"],
    answer: "office worker",
  },
  {
    question:
      "The loud ruckus next door kept everyone awake at night. What does ruckus mean in this context?",
    options: ["celebration", "disturbance", "silence"],
    answer: "disturbance",
  },
  {
    question:
      "The team’s victory was pyrrhic, costing them their best players to injuries. What does pyrrhic mean in this context?",
    options: ["costly", "effortless", "triumphant"],
    answer: "costly",
  },
  {
    question:
      "Her polite manners showed good breeding and respect for others. What does breeding mean in this context?",
    options: ["ignorance", "upbringing", "wealth"],
    answer: "upbringing",
  },
  {
    question:
      "The perennial flowers bloomed in the garden every spring. What does perennial mean in this context?",
    options: ["rare", "recurring", "temporary"],
    answer: "recurring",
  },
  {
    question:
      "The kids were like little fiends, running wild at the birthday party. What does fiends mean in this context?",
    options: ["angels", "helpers", "mischief-makers"],
    answer: "mischief-makers",
  },
  {
    question:
      "Rumors began to swirl around about her sudden departure from the company. What does swirl around mean in this context?",
    options: ["remain secret", "spread widely", "stop suddenly"],
    answer: "spread widely",
  },
  {
    question:
      "His patronizing tone made her feel like he was talking down to her. What does patronizing mean in this context?",
    options: ["condescending", "encouraging", "friendly"],
    answer: "condescending",
  },
  {
    question:
      "The industrious student finished all her assignments ahead of schedule. What does industrious mean in this context?",
    options: ["careless", "hardworking", "lazy"],
    answer: "hardworking",
  },
  {
    question:
      "The shop only accepted the local currency for payments. What does currency mean in this context?",
    options: ["goods", "money", "rumors"],
    answer: "money",
  },
  {
    question:
      "Her bold assertion that the plan would fail surprised the team. What does assertion mean in this context?",
    options: ["question", "statement", "suggestion"],
    answer: "statement",
  },
  {
    question:
      "The police shut down a smuggling racket that was moving goods across the border. What does smuggling racket mean in this context?",
    options: ["charity group", "illegal operation", "legal trade"],
    answer: "illegal operation",
  },
  {
    question:
      "His mental acuity allowed him to solve complex problems quickly. What does acuity mean in this context?",
    options: ["confusion", "dullness", "sharpness"],
    answer: "sharpness",
  },
  {
    question:
      "Despite her nerves, she managed to carry it off and give a great speech. What does carry it off mean in this context?",
    options: ["avoid completely", "fail miserably", "succeed confidently"],
    answer: "succeed confidently",
  },
  {
    question:
      "His Apollonian approach to the project emphasized order and logic. What does Apollonian mean in this context?",
    options: ["chaotic", "emotional", "rational"],
    answer: "rational",
  },
  {
    question:
      "The smoldering campfire gave off a faint glow in the dark. What does smoldering mean in this context?",
    options: ["burning brightly", "burning slowly", "extinguished"],
    answer: "burning slowly",
  },
  {
    question:
      "They told us to sit tight while they sorted out the schedule. What does sit tight mean in this context?",
    options: ["act immediately", "leave quickly", "wait patiently"],
    answer: "wait patiently",
  },
  {
    question:
      "The child told little fibs to avoid getting in trouble for breaking the vase. What does fibs mean in this context?",
    options: ["jokes", "lies", "truths"],
    answer: "lies",
  },
  {
    question:
      "He was teased for being a dweeb, always reading comics instead of socializing. What does dweeb mean in this context?",
    options: ["athletic person", "awkward person", "popular person"],
    answer: "awkward person",
  },
  {
    question:
      "Instead of being direct, he would beat around the bush when asked tough questions. What does beat around the bush mean in this context?",
    options: ["avoid the point", "answer clearly", "speak confidently"],
    answer: "avoid the point",
  },
  {
    question:
      "The solution to the puzzle eluded her despite hours of trying. What does eluded mean in this context?",
    options: ["escaped her", "confused her", "helped her"],
    answer: "escaped her",
  },
  {
    question:
      "The envoy was sent to negotiate peace between the two countries. What does envoy mean in this context?",
    options: ["diplomat", "merchant", "soldier"],
    answer: "diplomat",
  },
  {
    question:
      "She spent the day trailing around the mall, looking for the perfect gift. What does trailing around mean in this context?",
    options: ["rushing quickly", "staying put", "wandering aimlessly"],
    answer: "wandering aimlessly",
  },
  {
    question:
      "He was called a wimp for refusing to jump into the cold lake. What does wimp mean in this context?",
    options: ["brave person", "strong person", "timid person"],
    answer: "timid person",
  },
  {
    question:
      "She procrastinated on her homework until the night before it was due. What does procrastinated mean in this context?",
    options: ["finished quickly", "delayed", "started early"],
    answer: "delayed",
  },
  {
    question:
      "The two companies amalgamated to form a stronger business. What does amalgamated mean in this context?",
    options: ["merged", "competed", "separated"],
    answer: "merged",
  },
  {
    question:
      "His conniving plan to trick his friend was quickly discovered. What does conniving mean in this context?",
    options: ["helpful", "scheming", "honest"],
    answer: "scheming",
  },
  {
    question:
      "She was splurging on a fancy dinner to celebrate her promotion. What does splurging mean in this context?",
    options: ["spending lavishly", "saving money", "borrowing funds"],
    answer: "spending lavishly",
  },
  {
    question:
      "They squelched across the muddy field after the rain. What does squelched across mean in this context?",
    options: ["walked noisily", "ran smoothly", "stood still"],
    answer: "walked noisily",
  },
  {
    question:
      "Her scowl made it clear she was annoyed with the decision. What does scowl mean in this context?",
    options: ["frown", "smile", "laugh"],
    answer: "frown",
  },
  {
    question:
      "The soporific lecture made half the class fall asleep. What does soporific mean in this context?",
    options: ["confusing", "sleep-inducing", "exciting"],
    answer: "sleep-inducing",
  },
  {
    question:
      "He went off the deep end when he heard the bad news, yelling loudly. What does go off the deep end mean in this context?",
    options: ["overreact", "stay calm", "plan carefully"],
    answer: "overreact",
  },
  {
    question:
      "The subsequent meeting addressed the issues raised earlier. What does subsequent mean in this context?",
    options: ["following", "previous", "unrelated"],
    answer: "following",
  },
  {
    question:
      "He swore loudly, then said, “Pardon my French,” with a grin. What does Pardon my French mean in this context?",
    options: ["repeat my statement", "excuse my language", "explain my words"],
    answer: "excuse my language",
  },
  {
    question:
      "To save time, they cut corners on the project, leading to mistakes. What does cut corners mean in this context?",
    options: ["take shortcuts", "work thoroughly", "spend more"],
    answer: "take shortcuts",
  },
  {
    question:
      "She was flat out working to meet the tight deadline. What does flat out mean in this context?",
    options: ["working hard", "not working", "working slowly"],
    answer: "working hard",
  },
  {
    question:
      "She was digging in her heels, refusing to change her opinion. What does digging in my heels mean in this context?",
    options: ["being stubborn", "being flexible", "being cooperative"],
    answer: "being stubborn",
  },
  {
    question:
      "His meddling in their plans caused more problems than solutions. What does meddling mean in this context?",
    options: ["ignoring", "interfering", "helping"],
    answer: "interfering",
  },
  {
    question:
      "The illustrious scientist was honored for her groundbreaking discoveries. What does illustrious mean in this context?",
    options: ["unknown", "ordinary", "distinguished"],
    answer: "distinguished",
  },
  {
    question:
      "After the big meal, he felt bloated and uncomfortable. What does bloated mean in this context?",
    options: ["hungry", "swollen", "relaxed"],
    answer: "swollen",
  },
  {
    question:
      "They felt a kindred connection, sharing the same love for hiking. What does kindred mean in this context?",
    options: ["similar", "opposing", "distant"],
    answer: "similar",
  },
  {
    question:
      "The fox used its cunning to outsmart the hounds and escape. What does cunning mean in this context?",
    options: ["honesty", "clumsiness", "cleverness"],
    answer: "cleverness",
  },
  {
    question:
      "He tried to belittle her efforts, but she stayed confident in her work. What does belittle mean in this context?",
    options: ["support", "praise", "criticize"],
    answer: "criticize",
  },
  {
    question:
      "His quarrelsome nature made it hard to have a peaceful discussion. What does quarrelsome mean in this context?",
    options: ["agreeable", "quiet", "argumentative"],
    answer: "argumentative",
  },
  {
    question:
      "The store was undercutting its competitors by offering lower prices. What does undercutting mean in this context?",
    options: ["lowering prices", "matching prices", "raising prices"],
    answer: "lowering prices",
  },
  {
    question:
      "Her quirky sense of humor always made everyone laugh. What does quirky mean in this context?",
    options: ["serious", "ordinary", "unusual"],
    answer: "unusual",
  },
  {
    question:
      "She would vacillate between choosing pizza or sushi for dinner. What does vacillate mean in this context?",
    options: ["ignore", "hesitate", "decide quickly"],
    answer: "hesitate",
  },
  {
    question:
      "The rain put a crimp in their plans for an outdoor picnic. What does put a crimp in mean in this context?",
    options: ["disrupted", "completed", "improved"],
    answer: "disrupted",
  },
  {
    question:
      "He was ostracized by his peers after the misunderstanding. What does ostracized mean in this context?",
    options: ["praised", "excluded", "welcomed"],
    answer: "excluded",
  },
  {
    question:
      "They bought a carload of supplies for the camping trip. What does carload mean in this context?",
    options: ["large quantity", "single item", "small amount"],
    answer: "large quantity",
  },
  {
    question:
      "The farmer harvested the ripe apples from the orchard. What does harvested mean in this context?",
    options: ["collected", "sold", "planted"],
    answer: "collected",
  },
  {
    question:
      "The old barn had weathered many storms but still stood strong. What does weathered mean in this context?",
    options: ["collapsed", "built", "endured"],
    answer: "endured",
  },
  {
    question:
      "The movie was available on demand for streaming anytime. What does on demand mean in this context?",
    options: ["at a fixed time", "only in theaters", "whenever wanted"],
    answer: "whenever wanted",
  },
  {
    question:
      "They were hightailing out of town to avoid the traffic. What does hightailing mean in this context?",
    options: ["moving slowly", "staying put", "hurrying away"],
    answer: "hurrying away",
  },
  {
    question:
      "The archaeologists exhumed ancient artifacts from the site. What does exhumed mean in this context?",
    options: ["buried", "destroyed", "uncovered"],
    answer: "uncovered",
  },
  {
    question:
      "At the party, he drank like a fish, emptying glass after glass. What does drank like a fish mean in this context?",
    options: ["drank heavily", "drank little", "drank slowly"],
    answer: "drank heavily",
  },
  {
    question:
      "She tends to shoot from the hip, answering without thinking first. What does shoot from the hip mean in this context?",
    options: ["plan carefully", "stay silent", "act impulsively"],
    answer: "act impulsively",
  },
  {
    question:
      "I’d bet dollars for doughnuts that he’ll be late again. What does dollars for doughnuts mean in this context?",
    options: ["risky gamble", "uncertain chance", "sure bet"],
    answer: "sure bet",
  },
  {
    question:
      "The book was interspersed with illustrations to make it more engaging. What does interspersed mean in this context?",
    options: ["grouped together", "removed", "scattered throughout"],
    answer: "scattered throughout",
  },
  {
    question:
      "The politician’s promises were just smoke and mirrors, hiding the real issues. What does smoke and mirrors mean in this context?",
    options: ["clear solutions", "deceptive tactics", "honest plans"],
    answer: "deceptive tactics",
  },
  {
    question:
      "After losing her job, she was feeling the pinch with her bills. What does feeling the pinch mean in this context?",
    options: ["feeling relaxed", "feeling stressed", "feeling wealthy"],
    answer: "feeling stressed",
  },
  {
    question:
      "His insights into the problem helped the team find a solution. What does insights mean in this context?",
    options: ["mistakes", "questions", "understandings"],
    answer: "understandings",
  },
  {
    question:
      "The new car cost him a mint, leaving his savings depleted. What does cost him a mint mean in this context?",
    options: ["was cheap", "was expensive", "was free"],
    answer: "was expensive",
  },
  {
    question:
      "The fisherman harpooned the large fish after a long struggle. What does harpooned mean in this context?",
    options: ["fed", "released", "speared"],
    answer: "speared",
  },
  {
    question:
      "The garish neon sign clashed with the quaint village aesthetic. What does garish mean in this context?",
    options: ["elegant", "flashy", "subtle"],
    answer: "flashy",
  },
  {
    question:
      "She met someone who looked like her doppelganger at the party. What does doppelganger mean in this context?",
    options: ["look-alike", "close friend", "rival"],
    answer: "look-alike",
  },
  {
    question:
      "His dismissive attitude toward her ideas upset the team. What does dismissive mean in this context?",
    options: ["curious", "rejecting", "supportive"],
    answer: "rejecting",
  },
  {
    question:
      "Building the house on a flood plain was a costly folly. What does folly mean in this context?",
    options: ["mistake", "plan", "success"],
    answer: "mistake",
  },
  {
    question:
      "Let’s get down to the nuts and bolts and figure out the project details. What does get down to the nuts and bolts mean in this context?",
    options: ["change plans", "avoid details", "focus on essentials"],
    answer: "focus on essentials",
  },
  {
    question:
      "The festival had a Dionysian vibe, with wild dancing and laughter. What does Dionysian mean in this context?",
    options: ["quiet", "orderly", "passionate"],
    answer: "passionate",
  },
  {
    question:
      "The mystery unfolds slowly as the detective uncovers new clues. What does unfolds mean in this context?",
    options: ["remains hidden", "ends quickly", "develops gradually"],
    answer: "develops gradually",
  },
  {
    question:
      "She ached to travel the world but couldn’t afford it yet. What does ached to mean in this context?",
    options: ["desired strongly", "feared greatly", "planned carefully"],
    answer: "desired strongly",
  },
  {
    question:
      "The beggars sat outside the market, asking for spare change. What does beggars mean in this context?",
    options: ["workers", "merchants", "poor people"],
    answer: "poor people",
  },
  {
    question:
      "His absentminded nature led him to forget his keys again. What does absentminded mean in this context?",
    options: ["forgetful", "organized", "focused"],
    answer: "forgetful",
  },
  {
    question:
      "She hoped he would reciprocate her kindness with a thank-you note. What does reciprocate mean in this context?",
    options: ["ignore", "return", "reject"],
    answer: "return",
  },
  {
    question:
      "His apology seemed disingenuous, as he didn’t sound sincere. What does disingenuous mean in this context?",
    options: ["insincere", "honest", "polite"],
    answer: "insincere",
  },
  {
    question:
      "They lucked out and found the last parking spot near the event. What does lucked out mean in this context?",
    options: ["had bad luck", "worked hard", "got fortunate"],
    answer: "got fortunate",
  },
  {
    question:
      "The kids managed to rumple the neatly pressed tablecloth during dinner. What does rumple mean in this context?",
    options: ["wrinkle", "smooth out", "clean"],
    answer: "wrinkle",
  },
  {
    question:
      "The teacher draws a comparison between the two stories to highlight their themes. What does draws a comparison mean in this context?",
    options: [
      "points out similarities",
      "changes topics",
      "ignores differences",
    ],
    answer: "points out similarities",
  },
  {
    question:
      "Stop explaining the background and cut to the chase—what’s the plan? What does cut to the chase mean in this context?",
    options: ["add details", "change the subject", "get to the point"],
    answer: "get to the point",
  },
  {
    question:
      "He foisted his old furniture on his neighbor, claiming it was valuable. What does foisted mean in this context?",
    options: ["sold fairly", "imposed unwantedly", "gifted generously"],
    answer: "imposed unwantedly",
  },
  {
    question:
      "The snivelling child complained about the cold all day. What does snivelling mean in this context?",
    options: ["quiet", "cheerful", "whining"],
    answer: "whining",
  },
  {
    question:
      "She gave a litany of excuses for missing the deadline. What does litany of mean in this context?",
    options: ["short summary", "long list", "single reason"],
    answer: "long list",
  },
  {
    question:
      "He was putting all his effort into finishing the race. What does putting mean in this context?",
    options: ["exerting", "resting", "ignoring"],
    answer: "exerting",
  },
  {
    question:
      "Her enthusiasm for the project began to wane after weeks of delays. What does wane mean in this context?",
    options: ["fade", "grow", "start"],
    answer: "fade",
  },
  {
    question:
      "His insight into the problem revealed a simple solution. What does insight mean in this context?",
    options: ["mistake", "confusion", "understanding"],
    answer: "understanding",
  },
  {
    question:
      "She was born with a silver spoon in her mouth, never worrying about money. What does born with a silver spoon in her mouth mean in this context?",
    options: ["born wealthy", "born unlucky", "born talented"],
    answer: "born wealthy",
  },
  {
    question:
      "The movement fought for women’s suffrage in the early 20th century. What does suffrage mean in this context?",
    options: ["education", "voting rights", "suffering"],
    answer: "voting rights",
  },
  {
    question:
      "It’s the best pizza in town, bar none. What does bar none mean in this context?",
    options: ["without exception", "except some", "with doubts"],
    answer: "without exception",
  },
  {
    question:
      "In a desperate attempt to win, he risked everything on the final move. What does desperate mean in this context?",
    options: ["calm", "confident", "urgent"],
    answer: "urgent",
  },
  {
    question:
      "The sultry summer evening made everyone feel warm and sleepy. What does sultry mean in this context?",
    options: ["hot", "chilly", "breezy"],
    answer: "hot",
  },
  {
    question:
      "He rushed the job, proving that haste makes waste with all the mistakes. What does haste makes waste mean in this context?",
    options: [
      "rushing causes errors",
      "waiting saves time",
      "speed ensures success",
    ],
    answer: "rushing causes errors",
  },
  {
    question:
      "The hungry dog gobbled down its food in seconds. What does gobbled down mean in this context?",
    options: ["ate quickly", "refused to eat", "ate slowly"],
    answer: "ate quickly",
  },
  {
    question:
      "The ramshackle shed in the backyard was falling apart. What does ramshackle mean in this context?",
    options: ["modern", "sturdy", "dilapidated"],
    answer: "dilapidated",
  },
  {
    question:
      "The official was impeached for abusing his authority. What does impeached mean in this context?",
    options: ["praised publicly", "charged formally", "promoted"],
    answer: "charged formally",
  },
  {
    question:
      "She schlepped her heavy backpack across the airport all day. What does schlepped mean in this context?",
    options: ["left behind", "carried with effort", "packed lightly"],
    answer: "carried with effort",
  },
  {
    question: "I think we've made a terrible ________.",
    options: ["judgment", "mistake"],
    answer: "mistake",
  },
  {
    question: "It's a bit of a sticky ________. I don't know what to do.",
    options: ["area", "situation"],
    answer: "situation",
  },
  {
    question: "I think we've had a very lucky ________.",
    options: ["chance", "escape"],
    answer: "escape",
  },
  {
    question: "I have a gut ________ that this project will be unsuccessful.",
    options: ["feeling", "instinct"],
    answer: "feeling",
  },
  {
    question: "Phew! That was a close ________!",
    options: ["shave", "edge"],
    answer: "shave",
  },
  {
    question:
      "We need to talk about the thorny ________ of restructuring the company.",
    options: ["danger", "issue"],
    answer: "issue",
  },
  {
    question: "He suffered a severe ________ in his ambitions.",
    options: ["obstacle", "setback"],
    answer: "setback",
  },
  {
    question:
      "You'll need a strong survival ________ to do well in this company. The office politics are terrible!",
    options: ["instinct", "bone"],
    answer: "instinct",
  },
  {
    question:
      "There was a tense ________ between the police and the protesters.",
    options: ["fight", "stand-off"],
    answer: "stand-off",
  },
  {
    question:
      "It's not easy knowing what to do. We're in uncharted ________ here.",
    options: ["territory", "land"],
    answer: "territory",
  },
  {
    question:
      "I'd like to __________ your attention to the high number of sales in December due to our Christmas promotion.",
    options: ["draw", "give", "take"],
    answer: "draw",
  },
  {
    question:
      "That company no longer exists; it ____________ for bankruptcy last year.",
    options: ["asked", "entered", "filed"],
    answer: "filed",
  },
  {
    question:
      "We're getting ready to __________ a new product that we believe will be very successful.",
    options: ["break", "launch", "take off"],
    answer: "launch",
  },
  {
    question:
      "Our company designs sophisticated business clothing for women. Our __________ market is female executives aged 35-45.",
    options: ["commercial", "preferred", "target"],
    answer: "target",
  },
  {
    question:
      "I'll be out of the office next week; I'm going to _________ a conference on climate change.",
    options: ["attend", "presence", "watch"],
    answer: "attend",
  },
  {
    question:
      "Everyone agreed with the plan except for Samuel, who _______ a few strong objections.",
    options: ["raised", "put", "said"],
    answer: "raised",
  },
  {
    question:
      "We have a partnership with that company, and we often do __________ ventures.",
    options: ["joint", "cooperate", "together"],
    answer: "joint",
  },
  {
    question:
      "I'd like to get the opinions of the staff on this situation. Let's _________ a meeting to discuss it.",
    options: ["do", "make", "hold"],
    answer: "hold",
  },
  {
    question: "I __________ for a loan of $100,000 to start my own business.",
    options: ["applied", "registered", "tried out"],
    answer: "applied",
  },
  {
    question:
      "The company had to ___________ dozens of staff members due to budget cuts.",
    options: ["lay off", "close out", "send away"],
    answer: "lay off",
  },
  {
    question:
      "Our customer service department ____________ problems people encounter while using our products.",
    options: ["deals with", "gets off", "works away"],
    answer: "deals with",
  },
  {
    question:
      "There was a breakdown in negotiations and we weren't able to _________ the deal.",
    options: ["close", "firm", "nail"],
    answer: "close",
  },
  {
    question: "We’ve walked a long way _______________, haven’t we?",
    options: ["at the moment", "today", "tomorrow", "yesterday"],
    answer: "today",
  },
  {
    question: "Tom hurt himself while rollerblading _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "yesterday",
  },
  {
    question: "We’re having dinner at a nice restaurant _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question: "I bought some fresh bananas at the market _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "yesterday",
  },
  {
    question: "I take the school bus at 6 am _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "every day",
  },
  {
    question:
      "We will bake a delicious cake for grandma’s birthday ______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question: "I chat with my friend at the bus stop _______________.",
    options: ["at the moment", "tomorrow", "yesterday", "every day"],
    answer: "every day",
  },
  {
    question: "Claire is getting off the train _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "at the moment",
  },
  {
    question: "Sarah has had a really good day _______________.",
    options: ["every day", "tomorrow", "yesterday", "today"],
    answer: "today",
  },
  {
    question:
      "They’ll finish work at five o’clock ___________ and then go for a meal.",
    options: ["at the moment", "every day", "yesterday", "tomorrow"],
    answer: "tomorrow",
  },
  {
    question:
      "I have been to the doctor’s ___________, because I’ve got a bad cold.",
    options: ["every day", "today", "tomorrow", "yesterday"],
    answer: "today",
  },
  {
    question: "George will wear a tie to his cousin’s funeral _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question: "Paul has cereal and milk for his breakfast _______________.",
    options: ["at the moment", "today", "yesterday", "every day"],
    answer: "every day",
  },
  {
    question: "I’m listening to the radio _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "at the moment",
  },
  {
    question:
      "Alison wrote about her exam results in her diary _______________.",
    options: ["every day", "tomorrow", "today", "yesterday"],
    answer: "yesterday",
  },
  {
    question:
      "I’m waiting for my appointment at the dentist’s _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "at the moment",
  },
  {
    question: "Lucy beat her opponent in the tennis match _______________.",
    options: ["at the moment", "today", "tomorrow", "yesterday"],
    answer: "yesterday",
  },
  {
    question: "John’s picked up his new bike _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "today",
  },
  {
    question: "I’m going to visit my mother _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question: "Jessie has had an English lesson _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "today",
  },
  {
    question: "I water the plants in my garden almost _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "every day",
  },
  {
    question: "Jeff’s dog had a haircut _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "yesterday",
  },
  {
    question:
      "Theo is going to ask his girlfriend to marry him _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question: "Colin will not be able to go to work _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question: "I’m flying to England _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "today",
  },
  {
    question:
      "Jessica is cooking dinner _______________ while her brother sets the table.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "at the moment",
  },
  {
    question:
      "We visited the museum last weekend and saw an amazing exhibition _______________.",
    options: ["recently", "yesterday", "today", "tomorrow", "at the moment"],
    answer: "recently",
  },
  {
    question:
      "Mark always drinks coffee _______________ before starting work to wake up.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "every day",
  },
  {
    question:
      "We will meet our friends at the park _______________ after work.",
    options: ["yesterday", "every day", "tomorrow", "today"],
    answer: "tomorrow",
  },
  {
    question:
      "Right now, the kids _______________ playing video games in the living room.",
    options: ["are", "were", "will be", "have been"],
    answer: "are",
  },
  {
    question:
      "She finished her homework _______________ before watching her favorite show.",
    options: ["yesterday", "today", "tomorrow", "at the moment"],
    answer: "yesterday",
  },
  {
    question:
      "Every morning, he _______________ a jog around the park to stay healthy.",
    options: ["takes", "took", "will take", "taking"],
    answer: "takes",
  },
  {
    question:
      "Tomorrow, I _______________ a meeting with the new client at 3 PM.",
    options: ["have", "had", "will have", "having"],
    answer: "will have",
  },
  {
    question:
      "Last night, they _______________ a fantastic movie at the cinema.",
    options: ["watch", "watched", "will watch", "watching"],
    answer: "watched",
  },
  {
    question:
      "She usually _______________ her emails first thing in the morning.",
    options: ["checks", "checked", "will check", "checking"],
    answer: "checks",
  },

  {
    question:
      "Maria is writing an important report _______________ while her colleagues are preparing the presentation.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "at the moment",
  },
  {
    question:
      "We went to the beach _______________ and enjoyed the sunny weather all day.",
    options: ["yesterday", "today", "tomorrow", "at the moment"],
    answer: "yesterday",
  },
  {
    question:
      "John drinks a glass of water _______________ before every workout to stay hydrated.",
    options: ["every day", "yesterday", "tomorrow", "at the moment"],
    answer: "every day",
  },
  {
    question:
      "The team will have a meeting _______________ to discuss the new project timeline.",
    options: ["yesterday", "every day", "at the moment", "tomorrow"],
    answer: "tomorrow",
  },
  {
    question:
      "Right now, the children _______________ in the backyard playing soccer.",
    options: ["were", "will be", "have been", "are"],
    answer: "are",
  },
  {
    question:
      "She completed the final draft of her novel _______________ before the deadline.",
    options: ["today", "tomorrow", "yesterday", "soon"],
    answer: "yesterday",
  },
  {
    question:
      "Every morning, he _______________ a cup of black coffee to start his day.",
    options: ["drinks", "drank", "will drink", "drink"],
    answer: "drinks",
  },
  {
    question:
      "Next week, I _______________ an important presentation to the board of directors.",
    options: ["have", "had", "will have", "having"],
    answer: "will have",
  },
  {
    question:
      "Last night, they _______________ a thrilling basketball game at the stadium.",
    options: ["watch", "watched", "will watch", "watching"],
    answer: "watched",
  },
  {
    question:
      "She usually _______________ her emails first thing every morning before starting work.",
    options: ["checked", "will check", "checking", "checks"],
    answer: "checks",
  },
  {
    question: "Kathleen will have arrived in Sweden by ______________ morning.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question: "We have dinner at the same time _______________.",
    options: ["at the moment", "every day", "now", "today"],
    answer: "every day",
  },
  {
    question: "Tim had stolen the man’s wallet __________ for a dare.",
    options: ["at the moment", "every day", "yesterday", "yesterday morning"],
    answer: "yesterday",
  },

  {
    question: "We’re waiting to use the photocopier _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "at the moment",
  },
  {
    question: "I will book a taxi to take us to the airport _______________.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question: "I have managed to do some ironing _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "today",
  },
  {
    question: "_______________ I catch the number forty train into work.",
    options: ["At the moment", "Every day", "Today", "Yesterday"],
    answer: "Every day",
  },
  {
    question:
      "The birds are playing on the bird feeder in the garden _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "at the moment",
  },
  {
    question: "We’ve been organising the office Christmas party _____________.",
    options: ["at the moment", "today", "tomorrow", "yesterday"],
    answer: "at the moment",
  },
  {
    question: "Melanie will be attending the premiere _______________ night.",
    options: ["at the moment", "every day", "tomorrow", "yesterday"],
    answer: "tomorrow",
  },
  {
    question:
      "We had been swimming in the lake _______________ before the rain began.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "yesterday",
  },
  {
    question: "I do my workout to the same music _______________.",
    options: ["every day", "today", "tomorrow", "yesterday"],
    answer: "every day",
  },
  {
    question: "I’m going to finish my project _______________.",
    options: ["at the moment", "every day", "today", "tomorrow"],
    answer: "tomorrow",
  },
  {
    question: "We speak on the phone almost _______________.",
    options: ["at the moment", "every day", "today", "yesterday"],
    answer: "every day",
  },
  {
    question: "Don't make _____ noise because I need some sleep.",
    options: ["any", "some"],
    answer: "any",
  },
  {
    question:
      "Give me _____ money, I want to go shopping. Sorry, I don't have _____.",
    options: ["any - any", "any - some", "some - any", "some - some"],
    answer: "some - any",
  },
  {
    question: "They didn't eat _____ apples or pears.",
    options: ["any", "some"],
    answer: "any",
  },
  {
    question: "If I ______ Michael Jordan, I’d ask him for his autograph.",
    options: ["had met", "meet", "met"],
    answer: "met",
  },
  {
    question: "If you ______ I’m joking, I’ll show you that I’m serious.",
    options: ["had thought", "think", "thought"],
    answer: "think",
  },
  {
    question: "If I won the lottery, I ______ a house for my brother.",
    options: ["will buy", "would buy", "would have bought"],
    answer: "would buy",
  },
  {
    question: "If she ______ so lazy, she’d start her own business.",
    options: ["hadn't been", "isn't", "wasn't"],
    answer: "wasn't",
  },
  {
    question: "If I ______ your chocolates, I would’ve felt a bit guilty.",
    options: ["ate", "eat", "had eaten"],
    answer: "had eaten",
  },
  {
    question: "I usually like listening to the radio if Julie ______ it on.",
    options: ["had", "had had", "has"],
    answer: "has",
  },
  {
    question: "If anyone ______, Sarah will.",
    options: ["had known", "knew", "knows"],
    answer: "knows",
  },
  {
    question: "If I ______ enough money, I would travel around the world.",
    options: ["have", "had", "will have"],
    answer: "had",
  },
  {
    question: "If she ______ earlier, she wouldn't have missed the train.",
    options: ["leaves", "left", "had left"],
    answer: "had left",
  },
  {
    question: "If they ______ the invitation, they will come to the party.",
    options: ["accepted", "had accepted", "accept"],
    answer: "accept",
  },
  {
    question: "If you ______ harder, you could pass the exam.",
    options: ["study", "studied", "had studied"],
    answer: "studied",
  },
  {
    question: "If we ______ a taxi, we wouldn't have been late.",
    options: ["had taken", "take", "took"],
    answer: "had taken",
  },
  {
    question: "If my friend were here, you ______ him.",
    options: ["can meet", "could have met", "could meet"],
    answer: "could meet",
  },
  {
    question: "If I ______ too much, I’d be sure to make a fool of myself.",
    options: ["drink", "drank", "had drunk"],
    answer: "drank",
  },
  {
    question: "If we ______ which room it was, we could ask Stephen.",
    options: ["didn't remember", "don't remember", "hadn't remembered"],
    answer: "didn't remember",
  },
  {
    question: "If my kids ______ more often, they might get better grades.",
    options: ["had studied", "study", "studied"],
    answer: "studied",
  },
  {
    question: "If you don’t like dogs, you ______ Lee’s new puppies.",
    options: ["won't like", "wouldn't have liked", "wouldn't like"],
    answer: "won't like",
  },
  {
    question: "If I woke up at nine am, I ______ late for work.",
    options: ["will be", "would have been", "would be"],
    answer: "would be",
  },
  {
    question: "If she ______ the competition, she wouldn’t do very well.",
    options: ["entered", "enter", "had entered"],
    answer: "entered",
  },
  {
    question: "If I played football for England, they ______ losing.",
    options: ["won't keep", "wouldn't have kept", "wouldn't keep"],
    answer: "wouldn't keep",
  },
  {
    question: "If I ______ my children smoking, I’d be really angry with them.",
    options: ["had seen", "see", "saw"],
    answer: "saw",
  },
  {
    question: "If he ______ to class early, he could finish his homework.",
    options: ["came", "come", "had come"],
    answer: "came",
  },
  {
    question: "I can go early on Fridays if I ______ my manager's permission.",
    options: ["asked", "ask", "had asked"],
    answer: "ask",
  },
  {
    question: "If I give you ten pounds, can you ______ some shopping for me?",
    options: ["do", "did", "had done"],
    answer: "do",
  },
  {
    question:
      "They ______ miss my favourite show if they bought a video recorder.",
    options: ["won't miss", "wouldn't have missed", "wouldn't miss"],
    answer: "wouldn't miss",
  },
  {
    question: "We went skiing in winter and _____ a camping holiday in summer.",
    options: ["at", "by", "in", "on"],
    answer: "on",
  },
  {
    question:
      "Where did you spend your holidays? - I was _____ Tunisia in August.",
    options: ["at", "in", "into", "on"],
    answer: "in",
  },
  {
    question: "They sent us best wishes _____ England.",
    options: ["by", "in", "on", "from"],
    answer: "from",
  },
  {
    question: "We went there _____ train and boat.",
    options: ["by", "from", "into", "on"],
    answer: "by",
  },
  {
    question: "Susan stayed _____ a pop concert in France last August.",
    options: ["by", "from", "in", "at"],
    answer: "at",
  },
  {
    question: "They met their friends _____ the cinema yesterday.",
    options: ["by", "into", "at", "on"],
    answer: "at",
  },
  {
    question: "There were lots of people _____ Germany too.",
    options: ["at", "from", "on", "to"],
    answer: "from",
  },
  {
    question: "They often had picnics _____ the woods.",
    options: ["at", "in", "on", "to"],
    answer: "in",
  },
  {
    question: "When are you going to send the letter _____ London?",
    options: ["at", "by", "on", "to"],
    answer: "to",
  },
  {
    question: "Our apartment is _____ the third floor.",
    options: ["at", "in", "on", "to"],
    answer: "on",
  },
  {
    question: "The city of Paris is located _____ the river Seine.",
    options: ["at", "by", "in", "on"],
    answer: "on",
  },
  {
    question: "I think the gloves are _____ the left drawer.",
    options: ["at", "in", "into", "on"],
    answer: "in",
  },
  {
    question:
      "During yoga class, the instructor asked if anyone could stand _____ their head to improve balance and strength.",
    options: ["at", "by", "on", "to"],
    answer: "on",
  },
  {
    question:
      "I noticed your bag lying around. Your bag is _____ the floor in the kitchen.",
    options: ["at", "by", "in", "on"],
    answer: "on",
  },
  {
    question: "Most of the rooms _____ Patrick's house are big.",
    options: ["from", "in", "into", "on"],
    answer: "in",
  },
  {
    question:
      "After his accident, he had to stay _____ hospital for a few days.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question:
      "The children are _____ school today because their classes have started early.",
    options: ["at", "in", "on", "to"],
    answer: "at",
  },
  {
    question: "Are there any cars _____ the street outside your house?",
    options: ["at", "by", "into", "on"],
    answer: "on",
  },
  {
    question: "I hope your holiday _____ Croatia was great fun and relaxing.",
    options: ["at", "in", "into", "on"],
    answer: "in",
  },
  {
    question:
      "The next shop is _____ the corner of Virginia Street, so it’s easy to find.",
    options: ["at", "by", "in", "on"],
    answer: "at",
  },
  {
    question:
      "There is a man knocking _____ the door, trying to get someone’s attention.",
    options: ["at", "in", "into", "on"],
    answer: "at",
  },
  {
    question: "The children are playing _____ the tree in the backyard.",
    options: ["at", "in", "on", "to"],
    answer: "in",
  },
  {
    question: "What’s _____ your bag? I’m curious about what you’re carrying.",
    options: ["in", "into", "on", "at"],
    answer: "in",
  },
  {
    question:
      "The headmaster is standing _____ the playground, watching the children play.",
    options: ["by", "in", "into", "on"],
    answer: "in",
  },
  {
    question: "Two men were taken _____ hospital after the accident.",
    options: ["at", "in", "on", "to"],
    answer: "to",
  },
  {
    question: "What news is there _____ the papers this morning?",
    options: ["at", "by", "in", "on"],
    answer: "in",
  },
  {
    question: "I saw Tom _____ the bus stop this morning.",
    options: ["at", "by", "in", "on"],
    answer: "at",
  },
  {
    question: "Peter's friends stayed _____ a campsite near the sea.",
    options: ["at", "by", "on", "into"],
    answer: "at",
  },
  {
    question: "We were standing _____ a queue and he was in the front of it.",
    options: ["in", "at", "to", "into"],
    answer: "in",
  },
  {
    question: "Will you also be _____ the meeting tonight?",
    options: ["at", "to", "on", "by"],
    answer: "at",
  },
  {
    question: "I hope your holiday _____ August was great fun.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "_____ the second day of my holiday we visited Disney World.",
    options: ["On", "At", "In"],
    answer: "On",
  },
  {
    question: "I have stayed at home _____ last Saturday.",
    options: ["for", "until", "since"],
    answer: "since",
  },
  {
    question: "We stayed there _____ three weeks.",
    options: ["since", "for", "during"],
    answer: "for",
  },
  {
    question: "My friend went to Italy _____ July.",
    options: ["on", "in", "at"],
    answer: "in",
  },
  {
    question: "Pat's uncle left Canada _____ 1968 and went to Brazil.",
    options: ["at", "on", "in"],
    answer: "in",
  },
  {
    question: "John is getting married _____ the end of this month.",
    options: ["on", "at", "in"],
    answer: "at",
  },
  {
    question: "The accident happened _____ Monday morning.",
    options: ["on", "at", "in"],
    answer: "on",
  },
  {
    question: "The birds started singing _____ half past four this morning.",
    options: ["on", "in", "at"],
    answer: "at",
  },
  {
    question: "We’ll know the result of the exam _____ three weeks.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "I swim in the sea every day _____ summer.",
    options: ["at", "on", "in"],
    answer: "in",
  },
  {
    question: "Kate went to Istanbul _____ her summer holidays.",
    options: ["on", "in", "at"],
    answer: "on",
  },
  {
    question:
      "I wake up at 7.30 a.m. _____ the week, but much later on Sundays.",
    options: ["for", "during", "since"],
    answer: "during",
  },
  {
    question: "I was born _____ the seventeenth of September.",
    options: ["on", "at", "in"],
    answer: "on",
  },
  {
    question: "My mother says I was born _____ 6 o'clock in the afternoon.",
    options: ["in", "at", "on"],
    answer: "at",
  },
  {
    question: "My grandpa died _____ the age of 91.",
    options: ["on", "in", "at"],
    answer: "at",
  },
  {
    question: "This band was very popular _____ the 1970s.",
    options: ["at", "on", "in"],
    answer: "in",
  },
  {
    question: "We are working in the garden _____ the moment.",
    options: ["at", "on", "in"],
    answer: "at",
  },
  {
    question: "But last year we went on holiday _____ April.",
    options: ["on", "in", "at"],
    answer: "in",
  },
  {
    question: "My father goes to work _____ half past six every day.",
    options: ["at", "on", "in"],
    answer: "at",
  },
  {
    question: "It’s warm. Take _____ your coat!",
    options: ["off", "on", "out"],
    answer: "off",
  },
  {
    question: "Be quiet and listen _____ those birds.",
    options: ["at", "to", "on"],
    answer: "to",
  },
  {
    question: "Should I put _____ my new dress?",
    options: ["in", "up", "on"],
    answer: "on",
  },
  {
    question: "Try _____ these shoes, Sue.",
    options: ["in", "of", "on"],
    answer: "on",
  },
  {
    question: "Sit _____ and enjoy your milkshake, young lady.",
    options: ["in", "down", "on"],
    answer: "down",
  },
  {
    question: "Take _____ the sandwiches and eat them.",
    options: ["out", "in", "up"],
    answer: "out",
  },
  {
    question: "Stand _____ when the teacher comes in.",
    options: ["on", "up", "back"],
    answer: "up",
  },
  {
    question: "Hurry _____! I don’t want to be late again.",
    options: ["out", "up", "off"],
    answer: "up",
  },
  {
    question: "Look _____ me!",
    options: ["to", "of", "at"],
    answer: "at",
  },
  {
    question: "Put _____ warm clothes. It’s cold outside.",
    options: ["into", "on", "in"],
    answer: "on",
  },
  {
    question:
      "The coach worked hard to instill discipline in the young athletes. What does 'to instill discipline' mean in this context?",
    options: ["ignore rules", "remove focus", "teach control"],
    answer: "teach control",
  },
  {
    question:
      "The deal fell apart when the company’s CEO lost his wheels during negotiations. What does 'wheels' mean in this context?",
    options: ["confidence", "documents", "patience"],
    answer: "confidence",
  },
  {
    question:
      "After missing too many deadlines, she got the boot from the team. What does 'the boot' mean in this context?",
    options: ["a promotion", "a warning", "dismissal"],
    answer: "dismissal",
  },
  {
    question:
      "He got swept up in the excitement of the festival and forgot his chores. What does 'swept up' mean in this context?",
    options: ["carried away", "calmed down", "left behind"],
    answer: "carried away",
  },
  {
    question:
      "The critic’s review was like flaying the artist’s work in public. What does 'flaying' mean in this context?",
    options: ["criticizing harshly", "ignoring", "praising"],
    answer: "criticizing harshly",
  },
  {
    question:
      "She went on a limb to support her friend’s risky idea. What does 'went on a limb' mean in this context?",
    options: ["followed rules", "played it safe", "took a risk"],
    answer: "took a risk",
  },
  {
    question:
      "The dean addressed the students about the new campus rules. What does 'dean' mean in this context?",
    options: ["academic leader", "professor", "student"],
    answer: "academic leader",
  },
  {
    question:
      "The company was a behemoth in the tech industry, dominating all competitors. What does 'behemoth' mean in this context?",
    options: ["massive entity", "minor player", "small startup"],
    answer: "massive entity",
  },
  {
    question:
      "When asked about the event, he drew a blank and couldn’t recall anything. What does 'drew a blank' mean in this context?",
    options: ["answered quickly", "forgot completely", "remembered clearly"],
    answer: "forgot completely",
  },
  {
    question:
      "Winning the championship was really something to crow about for the team. What does 'something to crow about' mean in this context?",
    options: ["cause for shame", "minor achievement", "reason to boast"],
    answer: "reason to boast",
  },
  {
    question:
      "The gravity of the situation hit her when she saw the damage. What does 'gravity' mean in this context?",
    options: ["humor", "lightness", "seriousness"],
    answer: "seriousness",
  },
  {
    question:
      "His speech struck a chord with the audience, earning loud applause. What does 'chord' mean in this context?",
    options: [
      "caused disagreement",
      "confused people",
      "resonated emotionally",
    ],
    answer: "resonated emotionally",
  },
  {
    question:
      "After the scandal, he was blackballed from the club. What does 'blackballed' mean in this context?",
    options: ["excluded deliberately", "promoted quietly", "welcomed warmly"],
    answer: "excluded deliberately",
  },
  {
    question:
      "The meeting was orderly, with everyone following the agenda. What does 'orderly' mean in this context?",
    options: ["chaotic", "delayed", "well-organized"],
    answer: "well-organized",
  },
  {
    question:
      "His insolent remark to the teacher got him sent to detention. What does 'insolent' mean in this context?",
    options: ["quiet", "respectful", "rude"],
    answer: "rude",
  },
  {
    question:
      "The elderly man’s senile behavior worried his family. What does 'senile' mean in this context?",
    options: ["mentally impaired", "mentally sharp", "physically strong"],
    answer: "mentally impaired",
  },
  {
    question:
      "She was quick on the uptake, grasping the new concept instantly. What does 'quick on the uptake' mean in this context?",
    options: ["easily distracted", "fast to understand", "slow to learn"],
    answer: "fast to understand",
  },
  {
    question:
      "I’m still getting my head around it, but the plan seems solid. What does 'getting my head around it' mean in this context?",
    options: [
      "completely ignoring",
      "fully understanding",
      "starting to comprehend",
    ],
    answer: "starting to comprehend",
  },
  {
    question:
      "As a sybarite, she always chose luxury over simplicity. What does 'sybarite' mean in this context?",
    options: ["hard worker", "minimalist", "pleasure-seeker"],
    answer: "pleasure-seeker",
  },
  {
    question:
      "The village is ten miles away as the crow flies, but the road is longer. What does 'as the crow flies' mean in this context?",
    options: ["by winding path", "in a straight line", "through obstacles"],
    answer: "in a straight line",
  },
  {
    question:
      "His peevish tone annoyed everyone at the meeting. What does 'peevish' mean in this context?",
    options: ["calm", "cheerful", "irritable"],
    answer: "irritable",
  },
  {
    question:
      "The vandals desecrated the old church with graffiti. What does 'desecrated' mean in this context?",
    options: ["defiled", "decorated", "restored"],
    answer: "defiled",
  },
  {
    question:
      "Her irreverent jokes about the ceremony upset some guests. What does 'irreverent' mean in this context?",
    options: ["disrespectful", "respectful", "serious"],
    answer: "disrespectful",
  },
  {
    question:
      "The abandoned house had an eerie silence that unnerved the visitors. What does 'eerie' mean in this context?",
    options: ["comforting", "lively", "spooky"],
    answer: "spooky",
  },
  {
    question:
      "The pundits debated the election outcome on live television. What does 'pundits' mean in this context?",
    options: ["audience", "experts", "voters"],
    answer: "experts",
  },
  {
    question:
      "She spent hours burnishing her speech to make it perfect. What does 'burnishing' mean in this context?",
    options: ["ignoring", "polishing", "shortening"],
    answer: "polishing",
  },
  {
    question:
      "They wrote him off as a failure, but he proved them wrong. What does 'wrote him off' mean in this context?",
    options: ["dismissed as hopeless", "praised highly", "supported strongly"],
    answer: "dismissed as hopeless",
  },
  {
    question:
      "The new phone wasn’t all it was cracked up to be in the ads. What does 'cracked up to be' mean in this context?",
    options: [
      "as great as claimed",
      "better than expected",
      "not as good as hyped",
    ],
    answer: "not as good as hyped",
  },
  {
    question:
      "In the debate, she came out swinging with bold arguments. What does 'came out swinging' mean in this context?",
    options: ["acted defensively", "remained silent", "started aggressively"],
    answer: "started aggressively",
  },
  {
    question:
      "The actors waited in the green room before the show started. What does 'green room' mean in this context?",
    options: ["backstage lounge", "costume area", "outdoor stage"],
    answer: "backstage lounge",
  },
  {
    question:
      "His flailing attempts to fix the problem only made it worse. What does 'flailing' mean in this context?",
    options: ["calm", "frantic", "skillful"],
    answer: "frantic",
  },
  {
    question:
      "The planet appeared to move in a retrograde motion across the sky. What does 'retrograde' mean in this context?",
    options: ["backward", "circular", "forward"],
    answer: "backward",
  },
  {
    question:
      "His criticism of her laziness was like the pot calling the kettle black. What does 'the pot calling the kettle black' mean in this context?",
    options: ["fair comparison", "honest feedback", "hypocritical judgment"],
    answer: "hypocritical judgment",
  },
  {
    question:
      "The rain ruined the picnic, so much for our outdoor plans. What does 'so much for' mean in this context?",
    options: ["great success", "end of hopes", "new opportunity"],
    answer: "end of hopes",
  },
  {
    question:
      "The pedagogue explained the math concept with great clarity. What does 'pedagogue' mean in this context?",
    options: ["student", "teacher", "parent"],
    answer: "teacher",
  },
  {
    question:
      "The pampered dog had its own bed and gourmet food. What does 'pampered' mean in this context?",
    options: ["neglected", "spoiled", "trained"],
    answer: "spoiled",
  },
  {
    question:
      "Her bright red hat was conspicuous in the crowd. What does 'conspicuous' mean in this context?",
    options: ["hidden", "noticeable", "ordinary"],
    answer: "noticeable",
  },
  {
    question:
      "The team received approbation for their innovative project. What does 'approbation' mean in this context?",
    options: ["criticism", "approval", "confusion"],
    answer: "approval",
  },
  {
    question:
      "The audience was riveted by the speaker’s powerful story. What does 'riveted' mean in this context?",
    options: ["bored", "captivated", "distracted"],
    answer: "captivated",
  },
  {
    question:
      "After missing the deadline, she was behind the eight ball with her project. What does 'behind the eight ball' mean in this context?",
    options: ["ahead of schedule", "in a tough spot", "well-prepared"],
    answer: "in a tough spot",
  },
  {
    question:
      "His probity earned him the trust of everyone in the community. What does 'probity' mean in this context?",
    options: ["dishonesty", "integrity", "arrogance"],
    answer: "integrity",
  },
  {
    question:
      "The storm brought concomitant flooding that damaged the roads. What does 'concomitant' mean in this context?",
    options: ["unrelated", "accompanying", "prevented"],
    answer: "accompanying",
  },
  {
    question:
      "His rude comment really teed off the entire team. What does 'tee off' mean in this context?",
    options: ["amused", "angered", "calmed"],
    answer: "angered",
  },
  {
    question:
      "The fishermen gathered at the wharf to unload their catch. What does 'wharf' mean in this context?",
    options: ["market", "dock", "boat"],
    answer: "dock",
  },
  {
    question:
      "She was the quintessential host, making everyone feel welcome. What does 'quintessential' mean in this context?",
    options: ["average", "perfect example", "inexperienced"],
    answer: "perfect example",
  },
  {
    question:
      "The bride looked resplendent in her sparkling gown. What does 'resplendent' mean in this context?",
    options: ["plain", "dazzling", "modest"],
    answer: "dazzling",
  },
  {
    question:
      "The committee gave their assent to the new safety rules. What does 'assent' mean in this context?",
    options: ["objection", "agreement", "delay"],
    answer: "agreement",
  },
  {
    question:
      "He was told to button his lip during the sensitive meeting. What does 'button his lip' mean in this context?",
    options: ["speak loudly", "stay silent", "argue back"],
    answer: "stay silent",
  },
  {
    question:
      "Her sagacious advice helped the team avoid a major mistake. What does 'sagacious' mean in this context?",
    options: ["foolish", "wise", "careless"],
    answer: "wise",
  },
  {
    question:
      "His blunt response surprised everyone at the polite gathering. What does 'blunt' mean in this context?",
    options: ["tactful", "direct", "vague"],
    answer: "direct",
  },
  {
    question:
      "The judge quashed the rumors by issuing a clear statement. What does 'quashed' mean in this context?",
    options: ["spread", "suppressed", "confirmed"],
    answer: "suppressed",
  },
  {
    question:
      "His repetitive stories bore everyone at the party. What does 'bore' mean in this context?",
    options: ["excited", "tired", "interested"],
    answer: "tired",
  },
  {
    question:
      "She was emphatic about finishing the project on time. What does 'emphatic' mean in this context?",
    options: ["uncertain", "forceful", "casual"],
    answer: "forceful",
  },
  {
    question:
      "Seeing her old friend was a real blast from the past. What does 'blast from the past' mean in this context?",
    options: ["new experience", "nostalgic reminder", "future plan"],
    answer: "nostalgic reminder",
  },
  {
    question:
      "He gloated over his victory, annoying his opponent. What does 'gloated' mean in this context?",
    options: ["apologized humbly", "bragged smugly", "celebrated quietly"],
    answer: "bragged smugly",
  },
  {
    question:
      "The team used clever ploys to outsmart their opponents. What does 'ploys' mean in this context?",
    options: ["mistakes", "tactics", "apologies"],
    answer: "tactics",
  },
  {
    question:
      "The new gadget sold like hotcakes on its release day. What does 'sold like hotcakes' mean in this context?",
    options: ["sold slowly", "sold quickly", "sold cheaply"],
    answer: "sold quickly",
  },
  {
    question:
      "After missing several shifts, he got the sack from his job. What does 'got the sack' mean in this context?",
    options: ["was promoted", "was fired", "was praised"],
    answer: "was fired",
  },
  {
    question:
      "The old table had several blemishes on its surface. What does 'blemishes' mean in this context?",
    options: ["decorations", "flaws", "patterns"],
    answer: "flaws",
  },
  {
    question:
      "After a long day, he liked to crack open a cold one with friends. What does 'crack open a cold one' mean in this context?",
    options: ["open a soda", "open a beer", "open a book"],
    answer: "open a beer",
  },
  {
    question:
      "She tried to prevaricate when asked about her whereabouts. What does 'prevaricate' mean in this context?",
    options: ["speak truthfully", "evade the truth", "answer clearly"],
    answer: "evade the truth",
  },
  {
    question:
      "The car was so damaged it was a goner after the crash. What does 'goner' mean in this context?",
    options: ["repairable", "beyond saving", "brand new"],
    answer: "beyond saving",
  },
  {
    question:
      "His tertiary role in the project was to review the final report. What does 'tertiary' mean in this context?",
    options: ["primary", "secondary", "third in importance"],
    answer: "third in importance",
  },
  {
    question:
      "The bullies roughed him up behind the school. What does 'roughed him up' mean in this context?",
    options: ["helped him", "physically attacked him", "cheered him up"],
    answer: "physically attacked him",
  },
  {
    question:
      "He knows zip about fixing computers, despite his claims. What does 'knows zip' mean in this context?",
    options: ["knows everything", "knows nothing", "knows a little"],
    answer: "knows nothing",
  },
  {
    question:
      "The wind caused the leaves to scatter across the yard. What does 'scatter' mean in this context?",
    options: ["gather", "spread out", "stick together"],
    answer: "spread out",
  },
  {
    question:
      "Under pressure, he buckled and agreed to their demands. What does 'buckled' mean in this context?",
    options: ["stood firm", "gave in", "fought back"],
    answer: "gave in",
  },
  {
    question:
      "The doctor gave her a sugar pill to test if her symptoms were psychological. What does 'sugar pill' mean in this context?",
    options: ["sweet medicine", "placebo", "strong drug"],
    answer: "placebo",
  },
  {
    question:
      "The stench of rotting fruit filled the kitchen. What does 'stench of' mean in this context?",
    options: ["pleasant smell", "foul odor", "faint scent"],
    answer: "foul odor",
  },
  {
    question:
      "She was fit to be tied when she heard about the mistake. What does 'fit to be tied' mean in this context?",
    options: ["extremely happy", "extremely angry", "extremely calm"],
    answer: "extremely angry",
  },
  {
    question:
      "The barkeeper served drinks to the lively crowd. What does barkeeper mean in this context?",
    options: ["bartender", "bouncer", "chef"],
    answer: "bartender",
  },
  {
    question:
      "After being overcharged, she gave the salesperson a piece of her mind. What does gave the salesperson a piece of my mind mean in this context?",
    options: ["expressed anger", "offered advice", "shared a compliment"],
    answer: "expressed anger",
  },
  {
    question:
      "His explanation jibed with the facts we already knew. What does jibed mean in this context?",
    options: ["conflicted", "confused", "matched"],
    answer: "matched",
  },
  {
    question:
      "Her acquiescence to the new rules surprised everyone. What does acquiescence mean in this context?",
    options: ["agreement", "ignorance", "resistance"],
    answer: "agreement",
  },
  {
    question:
      "The artist created an intricate design on the pottery. What does intricate mean in this context?",
    options: ["complex", "plain", "simple"],
    answer: "complex",
  },
  {
    question:
      "The overcooked vegetables were mushy and tasteless. What does mushy mean in this context?",
    options: ["crisp", "soft", "spicy"],
    answer: "soft",
  },
  {
    question:
      "His prejudice against the new team members caused tension. What does prejudice mean in this context?",
    options: ["bias", "fairness", "support"],
    answer: "bias",
  },
  {
    question:
      "The novitiates were nervous during their first day at the monastery. What does novitiates mean in this context?",
    options: ["experienced monks", "new trainees", "senior leaders"],
    answer: "new trainees",
  },
  {
    question:
      "She tried to get it through his head that the deadline was tomorrow. What does get it through his head mean in this context?",
    options: ["make him understand", "make him forget", "make him ignore"],
    answer: "make him understand",
  },
  {
    question:
      "The mountain had a deep cleft that made climbing difficult. What does cleft mean in this context?",
    options: ["flat surface", "wide valley", "narrow split"],
    answer: "narrow split",
  },
  {
    question:
      "They went door-to-door to canvass for votes before the election. What does canvass mean in this context?",
    options: ["avoid", "protest", "campaign"],
    answer: "campaign",
  },
  {
    question:
      "The firefighters worked to subdue the raging blaze. What does subdue mean in this context?",
    options: ["control", "ignore", "intensify"],
    answer: "control",
  },
  {
    question:
      "He spent the afternoon whittling a small wooden figure. What does whittling mean in this context?",
    options: ["carving", "painting", "polishing"],
    answer: "carving",
  },
  {
    question:
      "She was a diehard fan, attending every game despite the rain. What does diehard mean in this context?",
    options: ["casual", "loyal", "new"],
    answer: "loyal",
  },
  {
    question:
      "The library had several hagiographies about local saints. What does hagiographies mean in this context?",
    options: ["critical essays", "fictional stories", "saint biographies"],
    answer: "saint biographies",
  },
  {
    question:
      "He was remiss in forgetting to submit his report on time. What does remiss mean in this context?",
    options: ["negligent", "punctual", "responsible"],
    answer: "negligent",
  },
  {
    question:
      "She was assiduous in her studies, spending hours reviewing every detail. What does assiduous mean in this context?",
    options: ["careless", "diligent", "distracted"],
    answer: "diligent",
  },
  {
    question:
      "The attacker used a blunt instrument to break into the car. What does blunt instrument mean in this context?",
    options: ["dull object", "precise device", "sharp tool"],
    answer: "dull object",
  },
  {
    question:
      "The excitement of the game palled after hours of repetitive play. What does palled mean in this context?",
    options: ["became boring", "grew exciting", "stayed intense"],
    answer: "became boring",
  },
  {
    question:
      "Her kindness was a beacon of hope during tough times. What does beacon of mean in this context?",
    options: ["barrier to", "lack of", "source of"],
    answer: "source of",
  },
  {
    question:
      "He promised to help but failed to follow through with his commitment. What does follow through mean in this context?",
    options: ["abandon", "complete", "delay"],
    answer: "complete",
  },
  {
    question:
      "Her skills soon outstripped those of her peers in the competition. What does outstripped mean in this context?",
    options: ["fell behind", "matched", "surpassed"],
    answer: "surpassed",
  },
  {
    question:
      "The manager forgot to apprise the team of the schedule change. What does apprise mean in this context?",
    options: ["confuse", "ignore", "inform"],
    answer: "inform",
  },
  {
    question:
      "I thought we were friends, but she suddenly turned on me during the argument. What does turned on me mean in this context?",
    options: ["attacked me", "ignored me", "supported me"],
    answer: "attacked me",
  },
  {
    question:
      "After getting the promotion, he was walking on air all day. What does walking on air mean in this context?",
    options: ["feeling elated", "feeling nervous", "feeling tired"],
    answer: "feeling elated",
  },
  {
    question:
      "The business foundered due to poor financial decisions. What does foundered mean in this context?",
    options: ["failed", "succeeded", "expanded"],
    answer: "failed",
  },
  {
    question:
      "She felt deep regret for missing her friend's important event. What does regret mean in this context?",
    options: ["joy", "pride", "sorrow"],
    answer: "sorrow",
  },
  {
    question:
      "The refractory student ignored the teacher's instructions repeatedly. What does refractory mean in this context?",
    options: ["obedient", "stubborn", "cheerful"],
    answer: "stubborn",
  },
  {
    question:
      "Her confident gait caught everyone's attention as she entered the room. What does gait mean in this context?",
    options: ["smile", "voice", "walk"],
    answer: "walk",
  },
  {
    question:
      "The team endured a hellish week of nonstop deadlines. What does hellish mean in this context?",
    options: ["dreadful", "easy", "pleasant"],
    answer: "dreadful",
  },
  {
    question:
      "He had a prodigious talent for solving complex math problems. What does prodigious mean in this context?",
    options: ["average", "extraordinary", "limited"],
    answer: "extraordinary",
  },
  {
    question:
      "His political views were middle of the road, avoiding extremes. What does middle of the road mean in this context?",
    options: ["moderate", "radical", "unpopular"],
    answer: "moderate",
  },
  {
    question:
      "The new policy had a ripple effect, impacting every department. What does ripple effect mean in this context?",
    options: ["immediate end", "single impact", "spreading influence"],
    answer: "spreading influence",
  },
  {
    question:
      "The loud noise broke her train of thought during the presentation. What does train of thought mean in this context?",
    options: ["random ideas", "sequence of ideas", "unrelated opinions"],
    answer: "sequence of ideas",
  },
  {
    question:
      "The basement was dank and smelled of mold after the flood. What does dank mean in this context?",
    options: ["damp", "dry", "warm"],
    answer: "damp",
  },
  {
    question:
      "He told me the secret but said to keep it under my hat. What does keep it under your hat mean in this context?",
    options: ["keep it secret", "share it widely", "write it down"],
    answer: "keep it secret",
  },
  {
    question:
      "After the deal, the entrepreneur was rolling in it. What does rolling in it mean in this context?",
    options: ["slightly successful", "struggling financially", "very wealthy"],
    answer: "very wealthy",
  },
  {
    question:
      "The demagogues swayed the crowd with their fiery speeches. What does demagogues mean in this context?",
    options: ["calm mediators", "honest advisors", "manipulative leaders"],
    answer: "manipulative leaders",
  },
  {
    question:
      "The strong smell of the flowers overpowered the room. What does overpowered mean in this context?",
    options: ["balanced", "enhanced", "overwhelmed"],
    answer: "overwhelmed",
  },
  {
    question:
      "She treated the kids to ice cream after their game. What does treated the kids to mean in this context?",
    options: ["paid for", "scolded them for", "taught them about"],
    answer: "paid for",
  },
  {
    question:
      "His caustic remarks upset everyone at the meeting. What does caustic mean in this context?",
    options: ["kind", "quiet", "sarcastic"],
    answer: "sarcastic",
  },
  {
    question:
      "She gets cross when people ignore her advice. What does gets cross mean in this context?",
    options: ["becomes angry", "becomes confused", "becomes happy"],
    answer: "becomes angry",
  },
  {
    question:
      "The moment of silence was fleeting before the noise resumed. What does fleeting mean in this context?",
    options: ["brief", "lasting", "loud"],
    answer: "brief",
  },
  {
    question:
      "Rivulets of water ran down the hill after the rain. What does rivulets mean in this context?",
    options: ["large rivers", "small streams", "deep puddles"],
    answer: "small streams",
  },
  {
    question:
      "After the argument, his friends cast him off completely. What does cast him off mean in this context?",
    options: ["praised him", "rejected him", "supported him"],
    answer: "rejected him",
  },
  {
    question:
      "The prolific author published three books this year. What does prolific mean in this context?",
    options: ["highly productive", "inexperienced", "unproductive"],
    answer: "highly productive",
  },
  {
    question:
      "The restaurant was too posh for a casual lunch. What does posh mean in this context?",
    options: ["crowded", "luxurious", "simple"],
    answer: "luxurious",
  },
  {
    question:
      "He was forthcoming about his plans for the project. What does forthcoming mean in this context?",
    options: ["hesitant", "open", "secretive"],
    answer: "open",
  },
  {
    question:
      "The lawyer was disbarred after unethical conduct. What does disbarred mean in this context?",
    options: ["banned from practicing", "fined", "promoted"],
    answer: "banned from practicing",
  },
  {
    question:
      "By insulting his boss, he burned his bridges at the company. What does burned his bridges mean in this context?",
    options: ["built trust", "gained support", "ruined relationships"],
    answer: "ruined relationships",
  },
  {
    question:
      "She’s my flesh and blood, so I’ll always support her. What does flesh and blood mean in this context?",
    options: ["close family", "distant friend", "trusted colleague"],
    answer: "close family",
  },
  {
    question:
      "The workers were picketing outside the factory for better wages. What does picketing mean in this context?",
    options: ["celebrating", "protesting", "working"],
    answer: "protesting",
  },
  {
    question:
      "The transition to the new system was seamless and efficient. What does seamless mean in this context?",
    options: ["flawed", "smooth", "delayed"],
    answer: "smooth",
  },
  {
    question:
      "The cloud had an amorphous shape, constantly changing. What does amorphous mean in this context?",
    options: ["rigid", "shapeless", "well-defined"],
    answer: "shapeless",
  },
  {
    question:
      "She limbered up with stretches before the race. What does limbered mean in this context?",
    options: ["rested", "slowed down", "warmed up"],
    answer: "warmed up",
  },
  {
    question:
      "The reporter hounded the celebrity for a comment. What does hounded mean in this context?",
    options: ["complimented", "ignored", "pursued relentlessly"],
    answer: "pursued relentlessly",
  },
  {
    question:
      "After the argument, she decided to hold out an olive branch to make peace. What does to hold out an olive branch mean in this context?",
    options: ["ignore the issue", "offer reconciliation", "start a conflict"],
    answer: "offer reconciliation",
  },
  {
    question:
      "His bellicose tone during the debate intimidated his opponents. What does bellicose mean in this context?",
    options: ["aggressive", "peaceful", "quiet"],
    answer: "aggressive",
  },
  {
    question:
      "The couple was thrilled to welcome triplets into their family. What does triplets mean in this context?",
    options: [
      "three siblings born together",
      "three toys",
      "three unrelated children",
    ],
    answer: "three siblings born together",
  },
  {
    question:
      "She abhors cruelty and always speaks out against it. What does abhor mean in this context?",
    options: ["admire", "hate", "tolerater"],
    answer: "hate",
  },
  {
    question:
      "The allure of the tropical island drew many tourists. What does allure mean in this context?",
    options: ["attraction", "danger", "expense"],
    answer: "attraction",
  },
  {
    question:
      "As a gofer, he ran errands for the entire office. What does gofer mean in this context?",
    options: ["assistant", "client", "manager"],
    answer: "assistant",
  },
  {
    question:
      "He was nonchalant about the exam, acting as if it didn’t matter. What does nonchalant mean in this context?",
    options: ["casual", "excited", "nervous"],
    answer: "casual",
  },
  {
    question:
      "She decided to throw caution to the wind and invest all her savings. What does throw caution to the wind mean in this context?",
    options: ["act carefully", "save money", "take a risk"],
    answer: "take a risk",
  },
  {
    question:
      "The coach keeps a tight rein on the team to ensure discipline. What does keeps a tight rein mean in this context?",
    options: ["allows freedom", "maintains control", "ignores rules"],
    answer: "maintains control",
  },
  {
    question:
      "The neighbors complained about the racket from the late-night party. What does racket mean in this context?",
    options: ["music", "noise", "silence"],
    answer: "noise",
  },
  {
    question:
      "He was frustrated with his mickey mouse job that required little skill. What does mickey mouse job mean in this context?",
    options: ["creative project", "important task", "trivial task"],
    answer: "trivial task",
  },
  {
    question:
      "When he said he won the lottery, I asked, “Are you joshing me?” What does joshing me mean in this context?",
    options: ["helping me", "lying to me", "teasing me"],
    answer: "teasing me",
  },
  {
    question:
      "The coarse fabric of the old blanket scratched her skin. What does coarse mean in this context?",
    options: ["delicate", "rough", "soft"],
    answer: "rough",
  },
  {
    question:
      "She carved out a successful career in a competitive industry. What does carved out mean in this context?",
    options: ["abandoned", "copied", "created"],
    answer: "created",
  },
  {
    question:
      "When he heard the news, he hit the ceiling with anger. What does hit the ceiling mean in this context?",
    options: ["became furious", "felt relieved", "stayed calm"],
    answer: "became furious",
  },
  {
    question:
      "The hot afternoon made everyone feel languorous and sleepy. What does languorous mean in this context?",
    options: ["anxious", "energetic", "relaxed"],
    answer: "relaxed",
  },
  {
    question:
      "He woke up with a terrible hangover after the party. What does hangover mean in this context?",
    options: ["excitement", "good mood", "headache from drinking"],
    answer: "headache from drinking",
  },
  {
    question:
      "She decided to repudiate the false claims made against her. What does repudiate mean in this context?",
    options: ["accept", "ignore", "reject"],
    answer: "reject",
  },
  {
    question:
      "I have half a mind to cancel the trip due to the weather. What does half a mind to mean in this context?",
    options: ["considering to", "fully decided to", "opposed to"],
    answer: "considering to",
  },
  {
    question:
      "The business managed to break even after a tough year. What does break even mean in this context?",
    options: ["earn a large profit", "lose money", "make no profit or loss"],
    answer: "make no profit or loss",
  },
  {
    question:
      "He took the job offer, believing a bird in the hand is worth two in the bush. What does a bird in the hand is worth two in the bush mean in this context?",
    options: [
      "seek new opportunities",
      "take risks for more",
      "value what you have",
    ],
    answer: "value what you have",
  },
  {
    question:
      "The company’s website was hacked and sensitive data was stolen. What does hacked mean in this context?",
    options: ["illegally accessed", "improved", "updated"],
    answer: "illegally accessed",
  },
  {
    question:
      "Her eyes seemed to glaze over during the boring lecture. What does glaze mean in this context?",
    options: ["lose focus", "shine brightly", "sparkle with interest"],
    answer: "lose focus",
  },
  {
    question:
      "The team turned up the heat to finish the project before the deadline. What does turned up the heat mean in this context?",
    options: ["increased effort", "relaxed pressure", "slowed down"],
    answer: "increased effort",
  },
  {
    question:
      "The reckless driver was a menace to everyone on the road. What does menace to mean in this context?",
    options: ["friend to", "help to", "threat to"],
    answer: "threat to",
  },
  {
    question:
      "The small cabin was a far cry from the luxury hotel she expected. What does a far cry from mean in this context?",
    options: ["slightly better than", "very different from", "very similar to"],
    answer: "very different from",
  },
  {
    question:
      "He was dodging questions about his plans for the future. What does dodging mean in this context?",
    options: ["answering directly", "avoiding", "repeating"],
    answer: "avoiding",
  },
  {
    question:
      "Let’s put our thinking caps on to solve this puzzle. What does put our thinking caps mean in this context?",
    options: ["start brainstorming", "stop thinking", "take a break"],
    answer: "start brainstorming",
  },
  {
    question:
      "Please keep me in the loop about the project updates. What does 'in the loop' mean when asking for project updates?",
    options: ["excluded", "informed", "uninformed"],
    answer: "informed",
  },
  {
    question:
      "The delays and bad weather created a perfect storm for the event. What does the idiom 'a perfect storm' signify in relation to the event's outcome?",
    options: ["a disastrous combination", "ideal conditions", "minor setback"],
    answer: "a disastrous combination",
  },
  {
    question:
      "I ran into an old friend the other day at the store. What does the other day mean in this context?",
    options: ["a long time ago", "recently", "tomorrow"],
    answer: "recently",
  },
  {
    question:
      "The company was in the red after months of declining sales. What does the phrase 'in the red' indicate about the company's financial status?",
    options: ["breaking even", "losing money", "making profit"],
    answer: "losing money",
  },
  {
    question:
      "They planned a secret rendezvous at the café after work. What does 'rendezvous' refer to in the context of their plans?",
    options: ["argument", "cancellation", "meeting"],
    answer: "meeting",
  },
  {
    question:
      "Despite the chaos, she managed to keep her cool during the presentation. What does 'keep her cool' indicate about her demeanor during the presentation?",
    options: ["get angry", "feel nervous", "stay calm"],
    answer: "stay calm",
  },
  {
    question:
      "As a new employee, he felt thrown to the wolves on his first big project. What does the phrase 'thrown to the wolves' imply about his situation as a new employee?",
    options: ["highly trained", "left unsupported", "well-supported"],
    answer: "left unsupported",
  },
  {
    question:
      "Stuck indoors all day, the kids were climbing the walls with boredom.What does the idiom 'climbing the walls' mean in this situation?",
    options: ["feeling focused", "feeling relaxed", "feeling restless"],
    answer: "feeling restless",
  },
  {
    question:
      "His offer to help was met with a sharp rebuff from the team. What is the meaning of 'rebuff' in this context?",
    options: ["acceptance", "delay", "rejection"],
    answer: "rejection",
  },
  {
    question:
      "The esteemed professor was invited to speak at the conference. What does 'esteemed' signify regarding the professor in this scenario?",
    options: ["inexperienced", "respected", "unknown"],
    answer: "respected",
  },
  {
    question:
      "Her scarf was bunched up around her neck in the cold wind. In the given context, what is the meaning of 'bunched up'?",
    options: ["loosely spread", "neatly folded", "tightly gathered"],
    answer: "tightly gathered",
  },
  {
    question:
      "His brusque reply made the conversation feel awkward. What does brusque mean in this context?",
    options: ["abrupt", "friendly", "polite"],
    answer: "abrupt",
  },
  {
    question:
      "She seemed to live a charmed life, always avoiding trouble. In the given context, what is the meaning of 'charmed life'?",
    options: ["difficult life", "fortunate life", "ordinary life"],
    answer: "fortunate life",
  },
  {
    question:
      "Her saccharine compliments felt insincere to everyone. What does saccharine mean in this context?",
    options: ["critical", "genuine", "overly sweet"],
    answer: "overly sweet",
  },
  {
    question:
      "The comely young woman caught everyone’s attention at the event. What does comely mean in this context?",
    options: ["attractive", "plain", "shy"],
    answer: "attractive",
  },
  {
    question:
      "He bought a new gizmo to help organize his desk. What does gizmo mean in this context?",
    options: ["book", "chair", "gadget"],
    answer: "gadget",
  },
  {
    question:
      "They decided to put the project on ice until funding arrived. What does put it on ice mean in this context?",
    options: ["complete", "postpone", "speed up"],
    answer: "postpone",
  },
  {
    question:
      "He called the dishonest politician pond scum during the debate. What does pond scum mean in this context?",
    options: ["despicable person", "admirable person", "neutral person"],
    answer: "despicable person",
  },
  {
    question:
      "She acted high and mighty after her promotion, ignoring her old friends. What does high and mighty mean in this context?",
    options: ["arrogant", "friendly", "humble"],
    answer: "arrogant",
  },
  {
    question:
      "His constrained budget forced him to skip the vacation. What does constrained mean in this context?",
    options: ["generous", "restricted", "unlimited"],
    answer: "restricted",
  },
  {
    question:
      "They decided to square up their debts before the year ended. What does square up mean in this context?",
    options: ["increase", "ignore", "settle"],
    answer: "settle",
  },
  {
    question:
      "The crowd was trampling the grass during the festival. What does trampling mean in this context?",
    options: ["planting seeds", "pouring water", "crushing underfoot"],
    answer: "crushing underfoot",
  },
  {
    question:
      "Caught lying, he tried to brazen it out and act confident. What does brazen it out mean in this context?",
    options: ["act boldly", "admit guilt", "apologize quietly"],
    answer: "act boldly",
  },
  {
    question:
      "His roving eye made his partner jealous at the party. What does roving eye mean in this context?",
    options: ["focused gaze", "shy look", "wandering glance"],
    answer: "wandering glance",
  },
  {
    question:
      "The fruit was perfectly ripe and ready to eat. What does ripe mean in this context?",
    options: ["mature", "spoiled", "unready"],
    answer: "mature",
  },
  {
    question:
      "Her performance eclipsed all others at the talent show. What does eclipse mean in this context?",
    options: ["followed", "matched", "outshone"],
    answer: "outshone",
  },
  {
    question:
      "He arrived at the meeting sans his usual coffee. What does sans mean in this context?",
    options: ["carrying", "with", "without"],
    answer: "without",
  },
  {
    question:
      "The campaign’s promises were just smoke and mirrors to win votes. How is smoke and mirrors used to describe the campaign’s promises in this context?",
    options: ["clear plans", "deceptive tactics", "honest efforts"],
    answer: "deceptive tactics",
  },
  {
    question:
      "She fell head over heels for her new coworker. What does head over heels mean in this context?",
    options: ["casually interested", "deeply in love", "slightly annoyed"],
    answer: "deeply in love",
  },
  {
    question:
      "They were known as party animals, always dancing until dawn. What characteristic does party animals reveal about their behavior in this sentence?",
    options: ["Early leavers", "Enthusiastic partiers", "Quiet guests"],
    answer: "Enthusiastic partiers",
  },
  {
    question:
      "The deal included the whole ball of wax, from equipment to staff. What does whole ball of wax mean in this context?",
    options: ["everything", "minor details", "small part"],
    answer: "everything",
  },
  {
    question:
      "The fickle weather changed from sunny to rainy in an hour. What does fickle mean in this context?",
    options: ["stable", "unpredictable", "pleasant"],
    answer: "unpredictable",
  },
  {
    question:
      "His promiscuous behavior at the event shocked the guests. In the given context, what is the meaning of 'promiscuous'?",
    options: ["indiscreet", "polite", "reserved"],
    answer: "indiscreet",
  },
  {
    question:
      "I'm writing ___ ask for some information about trips to Florida.",
    options: ["to", "for"],
    answer: "to",
  },
  {
    question: "Who were you talking ___ on the phone?",
    options: ["for", "to"],
    answer: "to",
  },
  {
    question: "They plan to arrive in Paris ___ July 4th.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "In times of war, soldiers usually dream ___ their home.",
    options: ["of", "over", "with"],
    answer: "of",
  },
  {
    question: "It was discovered that he didn’t die ___ cancer.",
    options: ["about", "for", "of"],
    answer: "of",
  },
  {
    question: "Don’t forget to congratulate him ___ his birthday.",
    options: ["for", "in", "on"],
    answer: "on",
  },
  {
    question: "He took her ___ his arms and kissed her passionately.",
    options: ["in", "on", "with"],
    answer: "in",
  },
  {
    question: "We must ___ all costs help those who are ___ danger.",
    options: ["at, in", "at, on", "on, in"],
    answer: "at, in",
  },
  {
    question: "The girl was dressed ___ white ___ head ___ foot.",
    options: ["in, from, to", "with, from, to", "with, to, from"],
    answer: "in, from, to",
  },
  {
    question: "You will always have a good friend ___ me.",
    options: ["on", "with", "in"],
    answer: "in",
  },
  {
    question:
      "The old fellow sat down ___ the roulette table and placed a few chips ___ number 25, red.",
    options: ["on, in", "on, on", "at, on"],
    answer: "at, on",
  },
  {
    question: "Is it wise to wish ___ something you can’t ever have?",
    options: ["about", "for", "over"],
    answer: "for",
  },
  {
    question: "Jenny is ___ work now.",
    options: ["on", "in", "at", "over"],
    answer: "at",
  },
  {
    question: "The bookstore is just ___ the corner.",
    options: ["around", "across", "over", "opposite"],
    answer: "around",
  },
  {
    question: "Jill was standing ___ me.",
    options: ["along", "at", "across", "next to"],
    answer: "next to",
  },
  {
    question: "Tracy waited ___ the bus station for an hour.",
    options: ["under", "at", "across", "along"],
    answer: "at",
  },
  {
    question: "Donald lives ___ Coronation Street.",
    options: ["around", "by", "through", "on"],
    answer: "on",
  },
  {
    question: "My birthday falls ___ the 25 of July.",
    options: ["at", "on", "behind", "in"],
    answer: "on",
  },
  {
    question: "There is a bench ___ the lamp post.",
    options: ["beside", "over", "along", "through"],
    answer: "beside",
  },
  {
    question: "There are cars parked ___ the road.",
    options: ["across", "along", "through", "with"],
    answer: "along",
  },
  {
    question: "She comes to work ___ foot.",
    options: ["by", "in", "on", "with"],
    answer: "on",
  },
  {
    question: "Ida wanted to stay ___ home.",
    options: ["at", "in", "inside", "off"],
    answer: "at",
  },
  {
    question: "The winner of the competition was ___ the drawing-room.",
    options: ["on", "in", "at"],
    answer: "in",
  },
  {
    question:
      "Everybody sat ___ the floor, but Mr. Spencer sat ___ a chair ___ the corner.",
    options: ["over – in – on", "about – on – at", "on – on – in"],
    answer: "on – on – in",
  },
  {
    question: "The judge poured champagne ___ the glass.",
    options: ["in", "into", "on"],
    answer: "into",
  },
  {
    question: "The elderly lady was always ___ home ___ night.",
    options: ["at – at", "in – at", "into – inside"],
    answer: "at – at",
  },
  {
    question: "Adriana used to swim ___ the sea and sunbathe ___ the sand.",
    options: ["in – on", "on – at", "on – in"],
    answer: "in – on",
  },
  {
    question:
      "During the week I get up early ___ the morning and go to bed late ___ night. But normally ___ weekends I sleep until midday.",
    options: ["in – at – on", "in – in – at", "on – at – at"],
    answer: "in – at – on",
  },
  {
    question:
      "Peter lives ___ Boa Viagem Avenue, now, but he lived ___ 109, Amizade Street ___ 1980.",
    options: ["on – at – in", "in – at – on", "on – at – on"],
    answer: "on – at – in",
  },
  {
    question: "He was born ___ 8:15 ___ the morning ___ June, 18th, 1928.",
    options: ["at – in – on", "in – on – at", "on – on – in"],
    answer: "at – in – on",
  },
  {
    question: "The hanging light is ___ the table.",
    options: ["in", "over", "at"],
    answer: "over",
  },
  {
    question: "Thomas was born ___ January 9th ___ Buenos Aires.",
    options: ["in – on", "on – in", "at – on"],
    answer: "on – in",
  },
  {
    question: "He’s arriving from Europe ___ Wednesday.",
    options: ["at", "on", "of"],
    answer: "on",
  },
  {
    question: "She doesn’t work ___ night.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "Astronomers study the planets ___ our solar system.",
    options: ["among", "below", "in"],
    answer: "in",
  },
  {
    question: "Stars are balls of gas that give ___ light.",
    options: ["away", "in", "out"],
    answer: "out",
  },
  {
    question: "A galaxy is a system ___ stars.",
    options: ["of", "off", "with"],
    answer: "of",
  },
  {
    question: "Would you like to live ___ the moon?",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "The Chinese Wall can be seen ___ the moon.",
    options: ["along", "through", "from"],
    answer: "from",
  },
  {
    question:
      "A “light year” is the distance covered ___ light travelling during one year.",
    options: ["after", "by", "for"],
    answer: "by",
  },
  {
    question: "Lunar months are ___ than our months.",
    options: ["more short", "shorter", "shortier"],
    answer: "shorter",
  },
  {
    question: "Man first landed on the moon ___ 1969.",
    options: ["afterwards", "in", "since"],
    answer: "in",
  },
  {
    question: "A crater is a hole ___ the ground.",
    options: ["below", "off", "in"],
    answer: "in",
  },
  {
    question:
      "Most people find it difficult to read and listen to the radio _______ the same time.",
    options: ["at", "for", "in", "on"],
    answer: "at",
  },
  {
    question: "Sorry, I can’t eat any cookies. I’m _______ a severe diet.",
    options: ["at", "of", "on", "for"],
    answer: "on",
  },
  {
    question: "He was born in the country but grew _______ in Rio de Janeiro.",
    options: ["on", "up", "over", "down"],
    answer: "up",
  },
  {
    question: "Listen _______ me, will you?",
    options: ["at", "on", "to", "of"],
    answer: "to",
  },
  {
    question: "I always go _______ school ___________ foot.",
    options: ["of, of", "to, by", "at, from", "to, on"],
    answer: "to, on",
  },
  {
    question: "They traveled ______ New York ______ San Francisco ______ car.",
    options: ["to; for; by", "from; to; by", "of; at; in", "of; at; over"],
    answer: "from; to; by",
  },
  {
    question:
      "People _______ 70 should not do these exercises. It’s too heavy for them.",
    options: ["in", "on", "out of", "over"],
    answer: "over",
  },
  {
    question: "Read ______ line 5 _____ line 20 ______ page 31.",
    options: [
      "from; to; on",
      "from; until; in",
      "of; to; at",
      "on; as far as; by",
    ],
    answer: "from; to; on",
  },
  {
    question: "Travelling ______ ship is not so expensive nowadays.",
    options: ["above", "below", "by", "behind"],
    answer: "by",
  },
  {
    question:
      "She learned a new hack to organize her desk efficiently. What does 'hack' mean in this context?",
    options: ["cut roughly", "clever solution", "steal secretly"],
    answer: "clever solution",
  },
  {
    question:
      "He had to keep his nose to the grindstone to finish the project on time. What does 'keep my nose to the grindstone' mean in this context?",
    options: ["take frequent breaks", "work diligently", "ignore distractions"],
    answer: "work diligently",
  },
  {
    question:
      "She was flabbergasted when she won the art contest. What does 'flabbergasted' mean in this context?",
    options: ["slightly annoyed", "extremely surprised", "quietly pleased"],
    answer: "extremely surprised",
  },
  {
    question:
      "His performance in the play was letter perfect. What does 'letter perfect' mean in this context?",
    options: ["completely accurate", "somewhat creative", "barely adequate"],
    answer: "completely accurate",
  },
  {
    question:
      "After studying for hours, she felt spaced out and couldn’t focus. What does 'spaced out' mean in this context?",
    options: ["highly energetic", "mentally distracted", "physically active"],
    answer: "mentally distracted",
  },
  {
    question:
      "He cracked under the pressure of the tight deadline. What does 'cracked' mean in this context?",
    options: ["broke down emotionally", "laughed loudly", "solved a problem"],
    answer: "broke down emotionally",
  },
  {
    question:
      "A chill ran through her as the temperature started creeping down. What does 'creeping down' mean in this context?",
    options: ["dropping gradually", "rising slowly", "staying steady"],
    answer: "dropping gradually",
  },
  {
    question:
      "The teammates turned on each other during the heated argument. What does 'turned on each other' mean in this context?",
    options: ["began fighting", "supported one another", "worked together"],
    answer: "began fighting",
  },
  {
    question:
      "His calm demeanor was just a charade to hide his nervousness. What does 'charade' mean in this context?",
    options: ["clever plan", "false pretense", "honest expression"],
    answer: "false pretense",
  },
  {
    question:
      "Forgetting the meeting time was a major screwup on his part. What does 'a screwup' mean in this context?",
    options: ["brilliant idea", "serious mistake", "small success"],
    answer: "serious mistake",
  },
  {
    question:
      "She tripped again, laughing and calling herself a klutz. What does 'klutz' mean in this context?",
    options: ["careful planner", "clumsy person", "skilled athlete"],
    answer: "clumsy person",
  },
  {
    question:
      "We need to hurry, so start shaking a leg! What does 'shaking a leg' mean in this context?",
    options: ["dancing wildly", "moving quickly", "resting briefly"],
    answer: "moving quickly",
  },
  {
    question:
      "He promised to meet her, but he stood her up at the last minute. What does 'stand up' mean in this context?",
    options: ["arrive on time", "fail to show", "offer support"],
    answer: "fail to show",
  },
  {
    question:
      "The host was so congenial that everyone felt welcome. What does 'congenial' mean in this context?",
    options: ["distant and cold", "friendly and pleasant", "overly serious"],
    answer: "friendly and pleasant",
  },
  {
    question:
      "His obsequious behavior toward the boss annoyed his coworkers. What does 'obsequious' mean in this context?",
    options: ["openly defiant", "overly flattering", "quietly confident"],
    answer: "overly flattering",
  },
  {
    question:
      "The bus arrived like clockwork every morning at 7 AM. What does 'like clockwork' mean in this context?",
    options: ["predictably late", "reliably on time", "slowly moving"],
    answer: "reliably on time",
  },
  {
    question:
      "After the scare, she paused to gather her wits before speaking. What does 'gather my wits' mean in this context?",
    options: ["lose control", "make a plan", "regain composure"],
    answer: "regain composure",
  },
  {
    question:
      "They were toiling in the garden all day to plant new flowers. What does 'toiling' mean in this context?",
    options: ["planning carefully", "relaxing casually", "working hard"],
    answer: "working hard",
  },
  {
    question:
      "She was accused of abetting the theft by hiding the evidence. What does 'abetting' mean in this context?",
    options: [
      "assisting a wrongdoing",
      "preventing a crime",
      "reporting an issue",
    ],
    answer: "assisting a wrongdoing",
  },
  {
    question:
      "The kids ran amok at the party, causing chaos. What does 'ran amok' mean in this context?",
    options: ["behaved wildly", "followed rules", "played quietly"],
    answer: "behaved wildly",
  },
  {
    question:
      "He accepted the challenge with alacrity, eager to start. What does 'alacrity' mean in this context?",
    options: ["cheerful readiness", "great reluctance", "quiet hesitation"],
    answer: "cheerful readiness",
  },
  {
    question:
      "The searing pain in her foot made it hard to walk. What does 'searing' mean in this context?",
    options: ["dull and faint", "mild and soothing", "sharp and intense"],
    answer: "sharp and intense",
  },
  {
    question:
      "He tried to fix the car himself, proving that a little learning can be a dangerous thing. What does this phrase mean in this context?",
    options: [
      "a limited knowledge can cause mistakes",
      "learning slowly is safe",
      "small efforts always succeed",
    ],
    answer: "a limited knowledge can cause mistakes",
  },
  {
    question:
      "The price of the concert tickets was absolutely outrageous. What does 'outrageous' mean in this context?",
    options: ["quietly affordable", "reasonably fair", "shockingly excessive"],
    answer: "shockingly excessive",
  },
  {
    question:
      "Her dress was made of soft, flowing rayon fabric. What does 'rayon' mean in this context?",
    options: [
      "coarse cotton blend",
      "heavy wool material",
      "synthetic silk-like fabric",
    ],
    answer: "synthetic silk-like fabric",
  },
  {
    question:
      "His comments were meant to stir up excitement for the event. What does 'stir up' mean in this context?",
    options: ["calm down", "create enthusiasm", "reduce interest"],
    answer: "create enthusiasm",
  },
  {
    question:
      "The undulating hills stretched across the horizon. What does 'undulating' mean in this context?",
    options: ["flat and even", "wavy and rolling", "steep and jagged"],
    answer: "wavy and rolling",
  },
  {
    question:
      "His silence suggested complicity in the prank. What does 'complicity' mean in this context?",
    options: [
      "active resistance",
      "involvement in wrongdoing",
      "complete ignorance",
    ],
    answer: "involvement in wrongdoing",
  },
  {
    question:
      "The depth of the ocean was unfathomable to the explorers. What does 'unfathomable' mean in this context?",
    options: [
      "easily understood",
      "impossible to measure",
      "slightly confusing",
    ],
    answer: "impossible to measure",
  },
  {
    question:
      "Please keep me in the loop about the project updates. What does 'keep me in the loop' mean in this context?",
    options: [
      "exclude me from details",
      "inform me regularly",
      "delay the updates",
    ],
    answer: "inform me regularly",
  },
  {
    question:
      "The old bicycle was her only conveyance to school. What does 'conveyance' mean in this context?",
    options: ["means of transport", "type of clothing", "source of food"],
    answer: "means of transport",
  },
  {
    question:
      "After paying the debt, they were finally square. What does 'square' mean in this context?",
    options: ["in debt again", "even or settled", "confused"],
    answer: "even or settled",
  },
  {
    question:
      "They planned to meet again in a fortnight. What does 'fortnight' mean in this context?",
    options: ["one week", "two weeks", "one month"],
    answer: "two weeks",
  },
  {
    question:
      "She shared her tale of woe about losing her job. What does 'woe' mean in this context?",
    options: ["great joy", "deep sorrow", "mild annoyance"],
    answer: "deep sorrow",
  },
  {
    question:
      "After a tough loss, the team rebounded with a big win. What does 'rebounded' mean in this context?",
    options: ["gave up entirely", "recovered successfully", "lost again"],
    answer: "recovered successfully",
  },
  {
    question:
      "During the storm, they hunkered down in the basement. What does 'hunkered down' mean in this context?",
    options: ["went outside", "took shelter", "started celebrating"],
    answer: "took shelter",
  },
  {
    question:
      "The company gave raises across the board to all employees. What does 'across the board' mean in this context?",
    options: ["to select groups", "to everyone equally", "to managers only"],
    answer: "to everyone equally",
  },
  {
    question:
      "The garrulous guest talked nonstop at the party. What does 'garrulous' mean in this context?",
    options: ["very quiet", "overly talkative", "slightly shy"],
    answer: "overly talkative",
  },
  {
    question:
      "Studying daily sets you up for success on the exam. What does 'sets you up' mean in this context?",
    options: ["causes failure", "prepares well", "creates confusion"],
    answer: "prepares well",
  },
  {
    question:
      "After a long day, she craved comfort food like macaroni and cheese. What does 'comfort food' mean in this context?",
    options: ["spicy dishes", "familiar, soothing meals", "exotic cuisine"],
    answer: "familiar, soothing meals",
  },
  {
    question:
      "Come on, use your loaf and solve this puzzle! What does 'use your loaf' mean in this context?",
    options: ["think carefully", "give up quickly", "ask for help"],
    answer: "think carefully",
  },
  {
    question:
      "He had no regrets about moving to a new city. What does 'regrets' mean in this context?",
    options: ["happy memories", "feelings of sorrow", "future plans"],
    answer: "feelings of sorrow",
  },
  {
    question:
      "She climbed the corporate ladder to become a manager. What does 'ladder' mean in this context?",
    options: ["physical staircase", "career progression", "social circle"],
    answer: "career progression",
  },
  {
    question:
      "Any way you cut it, this deal is a great opportunity. What does 'any way you cut it' mean in this context?",
    options: ["in every perspective", "with some effort", "only one way"],
    answer: "in every perspective",
  },
  {
    question:
      "Cast your mind back to when we first met. What does 'cast your mind' mean in this context?",
    options: ["forget quickly", "remember clearly", "imagine wildly"],
    answer: "remember clearly",
  },
  {
    question:
      "News of the event trickled out slowly to the public. What does 'trickled out' mean in this context?",
    options: ["spread rapidly", "leaked gradually", "stopped completely"],
    answer: "leaked gradually",
  },
  {
    question:
      "The verdant meadow was full of lush green grass. What does 'verdant' mean in this context?",
    options: ["dry and barren", "green and fertile", "cold and icy"],
    answer: "green and fertile",
  },
  {
    question:
      "Her guile helped her win the debate without anyone noticing her subtle deception. Which option best describes the meaning of 'guile'?",
    options: [
      "Bold confidence in public speaking",
      "Clever honesty in presenting arguments",
      "Cunning deceit to manipulate outcomes",
    ],
    answer: "Cunning deceit to manipulate outcomes",
  },
  {
    question:
      "The politician staged a photo op at the charity event to boost her public image. What is the purpose of a 'photo op' in this situation?",
    options: [
      "Informal meeting for community discussion",
      "Private gathering for strategic planning",
      "Public event staged for media photographs",
    ],
    answer: "Public event staged for media photographs",
  },
  {
    question:
      "Without evidence, his theory about the missing artifact was mere conjecture. How can we best define 'conjecture' here?",
    options: [
      "Detailed blueprint for future exploration",
      "Speculative guess lacking firm evidence",
      "Verified conclusion based on solid facts",
    ],
    answer: "Speculative guess lacking firm evidence",
  },
  {
    question:
      "The urgent project took precedence over all other tasks this week. What does it mean when something takes 'precedence'?",
    options: [
      "Equal importance among competing tasks",
      "Higher priority over other responsibilities",
      "Temporary delay for better organization",
    ],
    answer: "Higher priority over other responsibilities",
  },
  {
    question:
      "His condescending tone made her feel like he thought she was less intelligent. What is the best interpretation of 'condescending' in this case?",
    options: [
      "Encouraging tone to boost confidence",
      "Patronizing manner implying superiority",
      "Respectful attitude fostering collaboration",
    ],
    answer: "Patronizing manner implying superiority",
  },
  {
    question:
      "The courier delivered the sensitive documents to the office before noon. In this sentence, what does 'courier' refer to?",
    options: [
      "Financial officer managing secure transactions",
      "Legal advisor handling confidential files",
      "Messenger service for delivering packages",
    ],
    answer: "Messenger service for delivering packages",
  },
  {
    question:
      "The eerie wail from the forest sounded like a banshee in the dead of night. Based on this context, what is a 'banshee'?",
    options: [
      "Ferocious beast with a terrifying howl",
      "Fierce wind creating haunting sounds",
      "Mythical spirit known for mournful wailing",
    ],
    answer: "Mythical spirit known for mournful wailing",
  },
  {
    question:
      "The judge was called to adjudicate the dispute between the two companies. What does it mean to 'adjudicate' something?",
    options: [
      "Ignore conflicts to avoid legal proceedings",
      "Make official rulings to resolve conflicts",
      "Mediate disputes for mutual compromise",
    ],
    answer: "Make official rulings to resolve conflicts",
  },
  {
    question:
      "She received a monthly stipend to cover her living expenses during the internship. What is the meaning of 'stipend' in this context?",
    options: [
      "Fixed allowance for specific expenses",
      "Generous gift with no obligations",
      "Temporary loan requiring future repayment",
    ],
    answer: "Fixed allowance for specific expenses",
  },
  {
    question:
      "The airstrike caused collateral damage to nearby homes, harming innocent people. What does 'collateral damage' most likely refer to here?",
    options: [
      "Deliberate destruction of civilian property",
      "Strategic repairs to damaged infrastructure",
      "Unintended harm to non-targeted areas",
    ],
    answer: "Unintended harm to non-targeted areas",
  },
  {
    question:
      "His visceral reaction to the news left him trembling with anger. What does 'visceral' most likely mean here?",
    options: [
      "Calm response driven by rational thought",
      "Instinctive reaction rooted in deep emotion",
      "Intellectual analysis of complex feelings",
    ],
    answer: "Instinctive reaction rooted in deep emotion",
  },
  {
    question:
      "Gamers competed in a speed run to finish the game in record time. What does 'speed run' refer to in this context?",
    options: [
      "Casual gameplay for leisurely enjoyment",
      "Rapid attempt to complete a game quickly",
      "Team-based strategy for cooperative play",
    ],
    answer: "Rapid attempt to complete a game quickly",
  },
  {
    question:
      "She watched a speed run of her favorite game, amazed at the player's skill in finishing it so quickly. What is a 'speed run' in this sentence?",
    options: [
      "Casual gameplay showcasing creative strategies",
      "Collaborative effort to explore a game's storyline",
      "Video demonstration of a game completed exceptionally fast",
    ],
    answer: "Video demonstration of a game completed exceptionally fast",
  },
  {
    question:
      "The team was chomping at the bit to start the project after months of delays. What does 'chomp at the bit' mean?",
    options: [
      "Eagerly impatient to begin an activity",
      "Hesitating nervously before a big task",
      "Quietly preparing for a challenge",
    ],
    answer: "Eagerly impatient to begin an activity",
  },
  {
    question:
      "He continued to badger his friend into joining the hiking trip despite her reluctance. What does 'badger' mean here?",
    options: [
      "Casually mention without much insistence",
      "Persistently pester to achieve persuasion",
      "Politely encourage with gentle suggestions",
    ],
    answer: "Persistently pester to achieve persuasion",
  },
  {
    question:
      "The politician's hawkish stance on foreign policy worried those hoping for peace talks. What does 'hawkish' mean in this context?",
    options: [
      "Aggressive attitude supporting military action",
      "Cautious approach favoring diplomatic solutions",
      "Neutral position avoiding any conflict",
    ],
    answer: "Aggressive attitude supporting military action",
  },
  {
    question:
      "His deviant behavior at the formal event shocked the other guests. In this sentence, what does 'deviant' mean?",
    options: [
      "Friendly demeanor encouraging group unity",
      "Polite conduct aligning with social norms",
      "Unusual actions defying expected behavior",
    ],
    answer: "Unusual actions defying expected behavior",
  },
  {
    question:
      "She bristled when her boss criticized her work in front of the team. What does 'bristle' mean here?",
    options: [
      "React calmly despite public criticism",
      "Respond politely to avoid confrontation",
      "Show intense anger or annoyance outwardly",
    ],
    answer: "Show intense anger or annoyance outwardly",
  },
  {
    question:
      "The company placed workers on furlough during the factory's temporary closure. What is meant by 'furlough'?",
    options: [
      "Extended vacation with full benefits",
      "Permanent dismissal from employment",
      "Temporary leave without pay during closure",
    ],
    answer: "Temporary leave without pay during closure",
  },
  {
    question:
      "Her inquisitive nature led her to ask the scientist detailed questions about the experiment. What does 'inquisitive' suggest here?",
    options: [
      "Critical attitude challenging others’ ideas",
      "Curious tendency to seek detailed answers",
      "Reserved demeanor avoiding deep questions",
    ],
    answer: "Curious tendency to seek detailed answers",
  },
  {
    question:
      "Math was never his strong suit, so he struggled with the complex equations. What does 'strong suit' refer to in this sentence?",
    options: [
      "Area of exceptional skill or expertise",
      "Subject of moderate interest or ability",
      "Topic requiring minimal effort to master",
    ],
    answer: "Area of exceptional skill or expertise",
  },
  {
    question:
      "The bridal shower was filled with games and gifts to celebrate the upcoming wedding. What is a 'bridal shower'?",
    options: [
      "Formal ceremony marking the wedding day",
      "Festive party honoring the bride-to-be",
      "Casual gathering for post-wedding reflection",
    ],
    answer: "Festive party honoring the bride-to-be",
  },
  {
    question:
      "The suspect’s perp walk was broadcast on the news, showing him in handcuffs. In this context, 'perp walk' means:",
    options: [
      "Private escort of a suspect to a courtroom",
      "Public display of an arrested person in custody",
      "Formal parade for a convicted individual",
    ],
    answer: "Public display of an arrested person in custody",
  },
  {
    question:
      "The investment scheme turned out to be a ponzi, leaving many people broke. What does 'ponzi' imply here?",
    options: [
      "Fraudulent scheme paying returns from new investors",
      "Legitimate fund with guaranteed returns",
      "Charitable trust supporting community projects",
    ],
    answer: "Fraudulent scheme paying returns from new investors",
  },
  {
    question:
      "He went off the deep end when he heard the news, shouting uncontrollably. What does 'go off the deep end' suggest?",
    options: [
      "React calmly to unexpected information",
      "Lose control in an extreme emotional outburst",
      "Plan carefully to address a sudden issue",
    ],
    answer: "Lose control in an extreme emotional outburst",
  },
  {
    question:
      "The telltale stain on his shirt revealed he’d been eating spaghetti. What does 'telltale' mean here?",
    options: [
      "Revealing sign that exposes a secret",
      "Hidden clue unnoticed by most observers",
      "Decorative mark adding personal flair",
    ],
    answer: "Revealing sign that exposes a secret",
  },
  {
    question:
      "The article was filled with drivel, offering no real insights. What is 'drivel' in this case?",
    options: [
      "Nonsensical content lacking substance",
      "Concise writing with clear arguments",
      "Thoughtful analysis with deep meaning",
    ],
    answer: "Nonsensical content lacking substance",
  },
  {
    question:
      "The neglected park became a breeding ground for troublemakers. What does 'breeding ground' mean here?",
    options: [
      "Safe haven for community gatherings",
      "Fertile place where problems develop",
      "Quiet area for peaceful activities",
    ],
    answer: "Fertile place where problems develop",
  },
  {
    question:
      "She continued to brood over her mistake long after it was resolved. What does 'brood' mean in this context?",
    options: [
      "Dwell moodily on negative thoughts",
      "Celebrate quietly over past successes",
      "Plan eagerly for future opportunities",
    ],
    answer: "Dwell moodily on negative thoughts",
  },
  {
    question:
      "The crowd began to clamor for the concert to start on time. What does 'clamor' mean in this sentence?",
    options: [
      "Wait patiently for an event to begin",
      "Demand loudly with urgent shouts",
      "Whisper softly to avoid disruption",
    ],
    answer: "Demand loudly with urgent shouts",
  },
  {
    question:
      "Interest will accrue on the savings account over time. What does 'accrue' mean here?",
    options: [
      "Accumulate gradually through growth",
      "Decrease steadily due to withdrawals",
      "Remain static without any change",
    ],
    answer: "Accumulate gradually through growth",
  },
  {
    question:
      "He would often bemoan the lack of good coffee in the office. What does 'bemoan' mean in this case?",
    options: [
      "Celebrate joyfully about a situation",
      "Ignore casually without much concern",
      "Complain sadly about a problem",
    ],
    answer: "Complain sadly about a problem",
  },
  {
    question:
      "Her bold speech was sure to make waves at the quiet meeting. What does 'make waves' suggest?",
    options: [
      "Maintain harmony with subtle comments",
      "Blend quietly into the group’s mood",
      "Cause disruption with impactful actions",
    ],
    answer: "Cause disruption with impactful actions",
  },
  {
    question:
      "During the dance battle, she decided to go ham and stole the show. What does 'go ham' mean in this context?",
    options: [
      "Act intensely with full commitment",
      "Perform cautiously to avoid attention",
      "Relax casually during a performance",
    ],
    answer: "Act intensely with full commitment",
  },
  {
    question:
      "The grifter convinced the crowd to buy fake tickets to the event. What does 'grifter' mean in this context?",
    options: [
      "Honest vendor offering genuine products",
      "Deceptive person running a scam",
      "Helpful guide assisting event attendees",
    ],
    answer: "Deceptive person running a scam",
  },
  {
    question:
      "She found solace in reading after a stressful day. What does 'solace' mean here?",
    options: [
      "Distraction through chaotic activities",
      "Excitement from thrilling challenges",
      "Comfort during times of distress",
    ],
    answer: "Comfort during times of distress",
  },
  {
    question:
      "The lawyer required a retainer before starting work on the case. What does 'retainer' mean in this situation?",
    options: [
      "Upfront fee to secure professional services",
      "Final payment after services are completed",
      "Refundable deposit for temporary work",
    ],
    answer: "Upfront fee to secure professional services",
  },
  {
    question:
      "His excuse for being late was a complete crock and fooled no one. What does 'crock' mean in this context?",
    options: [
      "False tale lacking any credibility",
      "Believable story with clear reasoning",
      "Detailed plan with logical steps",
    ],
    answer: "False tale lacking any credibility",
  },
  {
    question:
      "She finessed the negotiation, getting a deal without revealing her strategy. What does 'finesse' mean here?",
    options: [
      "Handle openly with complete honesty",
      "Approach directly with blunt demands",
      "Manage skillfully with subtle cunning",
    ],
    answer: "Manage skillfully with subtle cunning",
  },
  {
    question:
      "The secret assignation between the two spies took place at midnight. What does 'assignation' mean in this sentence?",
    options: [
      "Public gathering for official business",
      "Casual encounter with no planning",
      "Clandestine meeting arranged in secret",
    ],
    answer: "Clandestine meeting arranged in secret",
  },
  {
    question:
      "They rowed a small skiff across the calm lake at sunrise. What does 'skiff' mean in this context?",
    options: [
      "Small boat for short trips",
      "Large yacht for luxurious travel",
      "Heavy barge for cargo transport",
    ],
    answer: "Small boat for short trips",
  },
  {
    question: "If you’re up to your ears with homework, you _____",
    options: [
      "don’t have much to do",
      "have a lot to do",
      "can’t wait to get started",
    ],
    answer: "have a lot to do",
  },
  {
    question:
      "If your teacher says it's out of the question to turn in your paper late, you _____",
    options: [
      "must turn in your paper on time",
      "have extra time to work on your paper",
      "don’t have any more questions to ask",
    ],
    answer: "must turn in your paper on time",
  },
  {
    question: "If you gave your neighbor a hand with her groceries, you _____",
    options: ["helped her", "avoided her", "shook hands with her"],
    answer: "helped her",
  },
  {
    question:
      "Steve asked for more than he could eat. His eyes were bigger than his stomach. Steve _____",
    options: ["thought he could eat a lot", "did not think he could eat much"],
    answer: "thought he could eat a lot",
  },
  {
    question:
      "Eric became so upset that he lost control of himself. Eric was _____",
    options: ["rational", "irrational"],
    answer: "irrational",
  },
  {
    question:
      "Stan consumes too many alcoholic beverages. He drinks like a fish. That means Stan _____",
    options: ["spends a lot of time in bars", "dislikes bars"],
    answer: "spends a lot of time in bars",
  },
  {
    question:
      "Daniel eats more than anybody else I know. He eats like a horse. That means Daniel _____",
    options: [
      "does not spend a lot of money on food",
      "spends a lot of money on food",
    ],
    answer: "spends a lot of money on food",
  },
  {
    question:
      "Polly did too many things and got overtired. She burned herself out. That means Polly _____",
    options: ["works hard", "does not like to work"],
    answer: "works hard",
  },
  {
    question:
      "Ken talked and talked, but he did not change Gene’s mind. He talked until he was blue in the face. That means _____",
    options: ["Gene agreed with Ken", "Ken did not convince Gene"],
    answer: "Ken did not convince Gene",
  },
  {
    question:
      "Helen ate too much. She made a pig out of herself. That means it _____",
    options: [
      "was enjoyable to watch Helen eat",
      "was not enjoyable to watch Helen eat",
    ],
    answer: "was not enjoyable to watch Helen eat",
  },
  {
    question:
      "Brian is reading a newspaper under a tree in the park. Brian is taking it easy. That means Brian _____",
    options: ["is relaxing", "is hard at work"],
    answer: "is relaxing",
  },
  {
    question:
      "I gather from your remark that you are angry. 'Gather' means _____",
    options: ["hear", "understand from", "ignore"],
    answer: "understand from",
  },
  {
    question:
      "To tell you the truth, we’re starving. 'To tell you the truth' means _____",
    options: ["to explain why", "in other words", "to be honest"],
    answer: "to be honest",
  },
  {
    question:
      "Oh, come on, Michael, we know you’re over thirty! 'Come on' means _____",
    options: ["come with us", "hurry", "stop saying something that isn’t true"],
    answer: "stop saying something that isn’t true",
  },
  {
    question:
      "She didn’t want to go to the party so she made up a good excuse. 'Made up' means _____",
    options: ["asked for", "wrote", "invented"],
    answer: "invented",
  },
  {
    question:
      "During the press conference, the President touched on the unemployment problem. 'Touched on' means _____",
    options: ["discussed fully", "discussed briefly", "avoided"],
    answer: "discussed briefly",
  },
  {
    question:
      "He wanted to buy a Cadillac but his son talked him into buying a Porsche. 'Talked him into' means _____",
    options: ["asked", "convinced", "told"],
    answer: "convinced",
  },
  {
    question: "He made a deal with his client. 'Made a deal' means _____",
    options: [
      "discussed it with",
      "agreed to do business with",
      "produced something with",
    ],
    answer: "agreed to do business with",
  },
  {
    question:
      "After a few minutes of social talk, we got down to business. 'Got down to business' means _____",
    options: ["sat down", "talked about our jobs", "began to talk seriously"],
    answer: "began to talk seriously",
  },
  {
    question:
      "It was impossible for him to make a living by acting. 'Make a living' means _____",
    options: [
      "live without",
      "support himself financially by",
      "have an interesting life by",
    ],
    answer: "support himself financially by",
  },
  {
    question:
      "As a salesman, he had to deal with the public. 'Deal with' means _____",
    options: ["have contact with", "play cards with", "convince"],
    answer: "have contact with",
  },
  {
    question:
      "When I was cleaning out my desk drawer, I came across this old picture. 'Came across' means _____",
    options: ["looked for", "found", "ripped"],
    answer: "found",
  },
  {
    question: "Everything in this kitchen is up to date. That means it _____",
    options: ["is old", "is used", "is modern"],
    answer: "is modern",
  },
  {
    question:
      "If you get rid of these doors, you will have much more room. 'Get rid of' means _____",
    options: ["open", "remove", "close"],
    answer: "remove",
  },
  {
    question: "The robbers broke in. 'Broke in' means _____",
    options: ["needed money", "got hurt", "forced their way in"],
    answer: "forced their way in",
  },
  {
    question: "He put the blame on Perry. That means he _____ Perry.",
    options: ["forgave", "accused", "attacked"],
    answer: "accused",
  },
  {
    question:
      "The young salesman came up with a money-saving idea. 'Came up with' means _____",
    options: ["bought", "exchanged", "found"],
    answer: "found",
  },
  {
    question:
      "Everyone was surprised when the president showed up in blue jeans. 'Showed up' means _____",
    options: ["bought", "displayed", "appeared wearing"],
    answer: "appeared wearing",
  },
  {
    question:
      "He quit his job because he couldn’t cope with all the pressure. 'Cope with' means _____",
    options: ["overcome", "avoid", "enjoy"],
    answer: "overcome",
  },
  {
    question: "We’re fed up with the weather here. 'Fed up with' means _____",
    options: ["enjoying", "tired of", "pleased with"],
    answer: "tired of",
  },
  {
    question:
      "It’s better not to talk to him. He got out of bed on the wrong side this morning. That means he _____",
    options: [
      "was in a bad mood when he went to sleep",
      "hurt himself when he got up",
      "has been in a bad mood since he got up",
    ],
    answer: "has been in a bad mood since he got up",
  },
  {
    question:
      "I don’t feel like going out in the rain. 'Feel like' means _____",
    options: ["want to", "feel well enough to", "enjoy"],
    answer: "want to",
  },
  {
    question:
      "If you don’t cut out smoking three packs of cigarettes a day, you will die before you are fifty. 'Cut out' means _____",
    options: ["think about", "stop", "limit yourself to"],
    answer: "stop",
  },
  {
    question:
      "The cleaning lady objected to washing windows. 'Objected to' means _____",
    options: ["avoided", "liked", "expressed a negative attitude about"],
    answer: "expressed a negative attitude about",
  },
  {
    question:
      "If you want to discuss the matter, you must calm down first. 'Calm down' means _____",
    options: [
      "become quiet, more relaxed",
      "make an appointment",
      "explain your position",
    ],
    answer: "become quiet, more relaxed",
  },
  {
    question:
      "The bus passes by her house every fifteen minutes. 'Passes by' means _____",
    options: ["goes near", "goes past", "stops at"],
    answer: "goes past",
  },
  {
    question:
      "We should fill up the tank before we reach the highway. 'Fill up' means _____",
    options: ["make completely full", "fix", "put a little gas in"],
    answer: "make completely full",
  },
  {
    question:
      "Take it easy, dinner will be ready in a few minutes. 'Take it easy' means _____",
    options: ["hurry", "relax, be calm", "come here"],
    answer: "relax, be calm",
  },
  {
    question:
      "She got a tour guide to show her around. 'Show around' means _____",
    options: ["take on a tour", "translate for", "introduce to people"],
    answer: "take on a tour",
  },
  {
    question:
      "Speaking to reporters is against the president’s wishes. 'Against' means _____",
    options: ["is contrary to", "is in agreement", "goes with"],
    answer: "is contrary to",
  },
  {
    question:
      "Her father isn’t looking forward to his retirement. 'Looking forward to' means _____",
    options: ["thinking about with pleasure", "planning", "concerned about"],
    answer: "thinking about with pleasure",
  },
  {
    question: "We’re leaving for Las Vegas tomorrow. 'Leaving for' means _____",
    options: ["travelling to", "going away from", "immigrating to"],
    answer: "travelling to",
  },
  {
    question: "Right now Tony _____ his car.",
    options: ["washes", "is washing"],
    answer: "is washing",
  },
  {
    question: "It may sound strange but I _____ his story.",
    options: ["believe", "am believing"],
    answer: "believe",
  },
  {
    question: "Laurie always _____ to work at seven.",
    options: ["is going", "goes"],
    answer: "goes",
  },
  {
    question: "We _____ to the movies at six tonight.",
    options: ["go", "are going"],
    answer: "are going",
  },
  {
    question: "He usually _____ in the evening.",
    options: ["is phoning", "phones"],
    answer: "phones",
  },
  {
    question: "I _____ my first day at school.",
    options: ["am remembering", "remember"],
    answer: "remember",
  },
  {
    question: "This food _____ delicious.",
    options: ["smells", "is smelling"],
    answer: "smells",
  },
  {
    question: "He _____ to the gym every week.",
    options: ["is going", "goes"],
    answer: "goes",
  },
  {
    question: "This food _____ delicious.",
    options: ["is smelling", "smells"],
    answer: "smells",
  },
  {
    question: "He _____ to the gym every week.",
    options: ["is going", "goes"],
    answer: "goes",
  },
  {
    question: "Right now Tony _____ his car.",
    options: ["is washing", "washes"],
    answer: "is washing",
  },
  {
    question: "Laurie always _____ to work at seven.",
    options: ["goes", "is going"],
    answer: "goes",
  },
  {
    question: "He usually _____ in the evening.",
    options: ["phones", "is phoning"],
    answer: "phones",
  },
  {
    question: "We _____ to the movies at six tonight.",
    options: ["go", "are going"],
    answer: "are going",
  },
  {
    question: "It may sound strange but I _____ his story.",
    options: ["believe", "am believing"],
    answer: "believe",
  },
  {
    question: "I _____ my first day at school.",
    options: ["remember", "am remembering"],
    answer: "remember",
  },
  {
    question: "_______ are you thinking about?",
    options: ["Why", "What", "How", "Where"],
    answer: "What",
  },
  {
    question: "_______ is the nearest telephone?",
    options: ["Why", "What", "How", "Where"],
    answer: "Where",
  },
  {
    question: "_______ are you doing now?",
    options: ["Why", "What", "How", "Where"],
    answer: "What",
  },
  {
    question: "_______ don’t you wear this sweater?",
    options: ["Why", "What", "How", "Where"],
    answer: "Why",
  },
  {
    question: "_______ do they get to school?",
    options: ["Why", "What", "How", "Where"],
    answer: "How",
  },
  {
    question: "_______ does your father go on Mondays?",
    options: ["Why", "What", "How", "Where"],
    answer: "Where",
  },
  {
    question: "_______ didn’t you come to school yesterday?",
    options: ["Why", "What", "How", "Where"],
    answer: "Why",
  },
  {
    question: "_______ is she wearing?",
    options: ["Why", "What", "How", "Where"],
    answer: "What",
  },
  {
    question: "_______ do you think of Mike?",
    options: ["Why", "What", "How", "Where"],
    answer: "What",
  },
  {
    question: "_______ often does he go running?",
    options: ["Why", "What", "How", "Where"],
    answer: "How",
  },
  {
    question: "_______ time do you get back?",
    options: ["Why", "What", "How", "Where"],
    answer: "What",
  },
  {
    question: "_______ don’t we go shopping this afternoon?",
    options: ["Why", "What", "How", "Where"],
    answer: "Why",
  },
  {
    question: "_______ much are these trousers?",
    options: ["Why", "What", "How", "Where"],
    answer: "How",
  },
  {
    question: "_______ tall is he?",
    options: ["Why", "What", "How", "Where"],
    answer: "How",
  },
  {
    question: "_______ does your granny live?",
    options: ["Why", "What", "How", "Where"],
    answer: "Where",
  },
  {
    question: "_______ many people live there?",
    options: ["Why", "What", "How", "Where"],
    answer: "How",
  },
  {
    question: "_______ are they from?",
    options: ["Why", "What", "How", "Where"],
    answer: "Where",
  },
  {
    question: "_______ far is your school from our house?",
    options: ["Why", "What", "How", "Where"],
    answer: "How",
  },
  {
    question: "_______ don’t we have a game together some time?",
    options: ["Why", "What", "How", "Where"],
    answer: "Why",
  },
  {
    question: "_______ exams have you passed?",
    options: ["Why", "What", "How", "Where"],
    answer: "What",
  },
  {
    question: "Your brother will work at a laboratory, ………. ?",
    options: ["doesn’t", "won’t", "will he", "is he"],
    answer: "won’t",
  },
  {
    question:
      "Choose the question: These scientists have completed their experiments.",
    options: [
      "What these scientists completed?",
      "What have these scientists completed?",
      "What have completed these scientists?",
      "What these scientists have completed?",
    ],
    answer: "What have these scientists completed?",
  },
  {
    question: "J. London is an American writer, ………. ?",
    options: ["is", "does", "isn’t", "doesn’t"],
    answer: "isn’t",
  },
  {
    question: "The English people often talk about the weather, ………. ?",
    options: ["didn’t", "don’t", "aren’t", "do"],
    answer: "don’t",
  },
  {
    question: "They learn German.",
    options: [
      "What language they learn?",
      "What language did they learn?",
      "What language do they learn?",
      "What language learn they?",
    ],
    answer: "What language do they learn?",
  },
  {
    question: "The car belongs to Michael.",
    options: [
      "Does the car belongs to Michael?",
      "Do the car belongs to Michael?",
      "Does the car belong to Michael?",
      "Belongs the car to Michael?",
    ],
    answer: "Does the car belong to Michael?",
  },
  {
    question: "The concert starts at 7, ………. it?",
    options: ["isn’t", "doesn’t", "is", "does"],
    answer: "doesn’t",
  },
  {
    question: "She likes reading.",
    options: [
      "What she likes?",
      "What does she likes?",
      "What does she like?",
      "What do she like?",
    ],
    answer: "What does she like?",
  },
  {
    question: "It often rains in autumn.",
    options: [
      "It often rains in autumn?",
      "Does it often rains in autumn?",
      "Does it often rain in autumn?",
      "Do it often rains in autumn?",
    ],
    answer: "Does it often rain in autumn?",
  },
  {
    question: "She is married, ………. ?",
    options: ["does", "isn’t", "is", "doesn’t"],
    answer: "isn’t",
  },
  {
    question: "The sun shines brightly in summer.",
    options: [
      "The sun shines brightly in summer?",
      "Is the sun shining brightly in summer?",
      "Does the sun shine brightly in summer?",
      "Does the sun shines brightly in summer?",
    ],
    answer: "Does the sun shine brightly in summer?",
  },
  {
    question: "Admiral Nelson was killed in the battle of Trafalgar, ………. ?",
    options: ["was", "wasn’t", "did", "didn’t"],
    answer: "wasn’t",
  },
  {
    question: "She made two mistakes in the test",
    options: [
      "How many mistakes she made in the test?",
      "How many mistakes made she in the test?",
      "How many mistakes did she make in the test?",
      "How many mistakes did made she in the test?",
    ],
    answer: "How many mistakes did she make in the test?",
  },
  {
    question: "She comes from Scotland.",
    options: [
      "Does she comes from Scotland?",
      "Do she come from Scotland?",
      "Does she come from Scotland?",
      "She comes from Scotland?",
    ],
    answer: "Does she come from Scotland?",
  },
  {
    question: "It’s your first time here, ………. it?",
    options: ["is", "isn’t", "does", "doesn’t"],
    answer: "isn’t",
  },
  {
    question: "The girl asked questions about everything she saw.",
    options: [
      "Did the girl ask questions about everything she saw?",
      "Did the girl asked questions about everything she saw?",
      "Does the girl ask questions about everything she saw?",
      "Asked the girl questions about everything she saw?",
    ],
    answer: "Did the girl ask questions about everything she saw?",
  },
  {
    question: "Laws tell people what they must do and what they mustn’t do.",
    options: [
      "What laws tell people?",
      "What people tell laws?",
      "What do people tell laws?",
      "What do laws tell people?",
    ],
    answer: "What do laws tell people?",
  },
  {
    question: "She speaks English fluently?",
    options: [
      "How does she speaks English?",
      "How she speaks English?",
      "How does she speak English?",
      "How do she speak English?",
    ],
    answer: "How does she speak English?",
  },
  {
    question: "She knows three languages.",
    options: [
      "How many languages she knows?",
      "How many languages does she knows?",
      "How many languages does she know?",
      "How many languages knows she?",
    ],
    answer: "How many languages does she know?",
  },
  {
    question: "She has never been abroad.",
    options: [
      "Has she never been abroad?",
      "She has never been abroad?",
      "Has she ever been abroad?",
      "Hasn’t she ever been abroad?",
    ],
    answer: "Has she ever been abroad?",
  },
  {
    question: "The postman will come in the afternoon, ………. ?",
    options: ["will he", "won’t he", "is he", "does he"],
    answer: "won’t he",
  },
  {
    question: "It often rained last summer.",
    options: [
      "Did it often rained last summer?",
      "Does it often rain last summer?",
      "Did it often rain last summer?",
      "It often rained last summer?",
    ],
    answer: "Did it often rain last summer?",
  },
  {
    question: "It was ______ who told us.",
    options: ["they", "them"],
    answer: "they",
  },
  {
    question: "Is it true that ______ is here?",
    options: ["he", "him"],
    answer: "he",
  },
  {
    question: "______ and his father are both very tall.",
    options: ["him", "he"],
    answer: "he",
  },
  {
    question: "Just between you and ______, Marcy’s hair is fright.",
    options: ["me", "I"],
    answer: "me",
  },
  {
    question: "It must be ______.",
    options: ["her", "she"],
    answer: "her",
  },
  {
    question: "She went with Babs and ______ to a new hairdresser.",
    options: ["I", "me"],
    answer: "me",
  },
  {
    question: "Mary is heavier than ______.",
    options: ["me", "I"],
    answer: "I",
  },
  {
    question: "She isn’t so fast as ______.",
    options: ["he", "him"],
    answer: "he",
  },
  {
    question:
      "Who would have guessed that ______ teasing my hair would make such a difference?",
    options: ["his", "him"],
    answer: "his",
  },
  {
    question: "John and ______ went to the movies.",
    options: ["me", "I"],
    answer: "I",
  },
  {
    question: "Would you ______ watch a movie or go to a concert tonight?",
    options: ["rather", "prefer"],
    answer: "rather",
  },
  {
    question: "I ______ take a taxi than walk home in the rain.",
    options: ["would rather", "would prefer"],
    answer: "would rather",
  },
  {
    question: "Would you ______ have pizza or sushi for dinner tonight?",
    options: ["rather", "prefer"],
    answer: "rather",
  },
  {
    question:
      "He ______ study for the exam than go to the party tomorrow night.",
    options: ["would rather", "would prefer"],
    answer: "would rather",
  },
  {
    question:
      "Would you ______ have tea or coffee with your breakfast this morning?",
    options: ["rather", "prefer"],
    answer: "rather",
  },
  {
    question:
      "They ______ go to the beach than the mountains for their vacation.",
    options: ["would rather", "would prefer"],
    answer: "would rather",
  },
  {
    question:
      "Would you ______ have a beach holiday or a city break this year?",
    options: ["rather", "prefer"],
    answer: "rather",
  },
  {
    question:
      "I ______ stay home and watch TV than go out with my friends tonight.",
    options: ["would rather", "would prefer"],
    answer: "would rather",
  },
  {
    question:
      "Would you ______ read a book or go for a walk in the park this afternoon?",
    options: ["rather", "prefer"],
    answer: "prefer",
  },
  {
    question: "She ______ listen to music than watch TV in her free time.",
    options: ["would rather", "would prefer"],
    answer: "would rather",
  },
  {
    question: "I’m tired. I ______ stay home tonight.",
    options: ["prefer", "would rather", "want to", "would like"],
    answer: "would rather",
  },
  {
    question: "I ______ go to the beach than to the mountains.",
    options: ["prefer", "would rather", "want to", "would like"],
    answer: "prefer",
  },
  {
    question: "______ you ______ eat out or cook at home tonight?",
    options: [
      "Do/would prefer",
      "Would/do rather",
      "Do/want to",
      "Would/do like",
    ],
    answer: "Would/do rather",
  },
  {
    question: "She ______ not go to the party tonight.",
    options: ["prefers", "would rather", "wants to", "would like"],
    answer: "would rather",
  },
  {
    question: "______ you ______ go to the movies or watch a DVD at home?",
    options: [
      "Do/would prefer",
      "Would/do rather",
      "Do/want to",
      "Would/do like",
    ],
    answer: "Do/would prefer",
  },
  {
    question: "Team A worked ______ Team B during construction.",
    options: ["alongside", "except", "throughout"],
    answer: "alongside",
  },
  {
    question: "That makes $70, not ______ the tax.",
    options: ["within", "counting", "opposite"],
    answer: "counting",
  },
  {
    question: "That’s very unusual. It’s ______ Andrea to be so rude.",
    options: ["opposite", "since", "unlike"],
    answer: "unlike",
  },
  {
    question: "The cat jumped ______ the chair.",
    options: ["less", "inside", "onto"],
    answer: "onto",
  },
  {
    question: "The error occurred ______ my own stupidity.",
    options: ["like", "through", "throughout"],
    answer: "through",
  },
  {
    question: "The meeting continued ______ midnight.",
    options: ["beyond", "as", "unlike"],
    answer: "beyond",
  },
  {
    question: "The river runs ______ our house.",
    options: ["beside", "up", "astride"],
    answer: "beside",
  },
  {
    question: "The speed limit is 70 miles ______ hour.",
    options: ["per", "on", "around"],
    answer: "per",
  },
  {
    question: "The temperature is ______ 30 degrees centigrade.",
    options: ["less", "in", "minus"],
    answer: "minus",
  },
  {
    question: "The tunnel runs ______ the sea.",
    options: ["over", "counting", "beneath"],
    answer: "beneath",
  },
  {
    question: "There is a big cellar ______ our house.",
    options: ["until", "on", "underneath"],
    answer: "underneath",
  },
  {
    question: "There is a big fence ______ the house.",
    options: ["in", "around"],
    answer: "in",
  },
  {
    question: "There were four of us, ______ the baby.",
    options: ["including", "inside", "within"],
    answer: "including",
  },
  {
    question: "There were secret police ______ the crowd.",
    options: ["among", "concerning", "except"],
    answer: "among",
  },
  {
    question: "They all sat ______ the fire.",
    options: ["via", "down", "round"],
    answer: "round",
  },
  {
    question: "They continued the meeting ______ 11pm.",
    options: ["until", "in", "along"],
    answer: "until",
  },
  {
    question: "They ran ______ the hill.",
    options: ["aboard", "down", "worth"],
    answer: "down",
  },
  {
    question: "They went swimming, ______ the rain.",
    options: ["at", "minus", "notwithstanding"],
    answer: "notwithstanding",
  },
  {
    question: "This car is ______ $10,000.",
    options: ["counting", "worth", "unlike"],
    answer: "worth",
  },
  {
    question: "This is difficult. It’s ______ me.",
    options: ["until", "than", "past"],
    answer: "past",
  },
  {
    question: "This is the cause ______ the problem.",
    options: ["on", "of", "off"],
    answer: "of",
  },
  {
    question: "_______ his surprise, the door was open.",
    options: ["To", "On", "At"],
    answer: "To",
  },
  {
    question: "_______ your homework, I think we need to speak.",
    options: ["Touching", "Aboard", "Behind"],
    answer: "Touching",
  },
  {
    question: "Trains were invented ______ the nineteenth century.",
    options: ["at", "since", "in"],
    answer: "in",
  },
  {
    question: "We are aiming ______ sales of $2,000,000.",
    options: ["to", "at", "on"],
    answer: "at",
  },
  {
    question: "We are flying ______ the clouds.",
    options: ["above", "gone", "except"],
    answer: "above",
  },
  {
    question: "We cut the cake ______ ten pieces.",
    options: ["onto", "into", "above"],
    answer: "into",
  },
  {
    question: "We drove ______ the desert.",
    options: ["aboard", "across", "concerning"],
    answer: "across",
  },
  {
    question: "We flew from Paris to Bangkok ______ Dubai.",
    options: ["at", "between", "via"],
    answer: "via",
  },
  {
    question: "We had lunch ______ the meeting.",
    options: ["astride", "bar", "after"],
    answer: "after",
  },
  {
    question: "_______ the rain, they did not play tennis.",
    options: ["Worth", "Owing to", "On behalf of"],
    answer: "Owing to",
  },
  {
    question: "Can I have fish ______ chicken? Chicken makes me sick.",
    options: ["across", "together with", "instead of"],
    answer: "instead of",
  },
  {
    question: "There were ten people ______ the meeting.",
    options: ["at", "on", "on board"],
    answer: "at",
  },
  {
    question: "The ticket is $5 or $10, ______ your age. How old are you?",
    options: ["above", "out of", "depending on"],
    answer: "depending on",
  },
  {
    question: "I work ______ Dr Hudson. I will have to ask him for permission.",
    options: ["since", "under", "as for"],
    answer: "under",
  },
  {
    question: "After his wife died he went ______ a very bad time.",
    options: ["with", "through", "preparatory to"],
    answer: "through",
  },
  {
    question: "There was a good film ______ television last night.",
    options: ["in", "as to", "on"],
    answer: "on",
  },
  {
    question: "You should take paper ______ a pen. They don’t have either.",
    options: ["as", "as well as", "except for"],
    answer: "as well as",
  },
  {
    question: "Do I have to pay tax ______ this charge? Or is it included?",
    options: ["in addition to", "onto", "counting"],
    answer: "in addition to",
  },
  {
    question: "I’m phoning ______ your recent order.",
    options: ["opposite", "in between", "with reference to"],
    answer: "with reference to",
  },
  {
    question: "We met the day ______ yesterday.",
    options: ["before", "despite", "versus"],
    answer: "before",
  },
  {
    question: "We open every day ______ Christmas Day.",
    options: ["excluding", "anti", "gone"],
    answer: "excluding",
  },
  {
    question: "We walked ______ the beach for two miles.",
    options: ["under", "along", "outside"],
    answer: "along",
  },
  {
    question: "We went ______ the boat.",
    options: ["since", "aboard", "worth"],
    answer: "aboard",
  },
  {
    question: "We worked ______ Monday to Wednesday.",
    options: ["in", "from", "at"],
    answer: "from",
  },
  {
    question: "What do you think ______ Mary?",
    options: ["about", "off", "via"],
    answer: "about",
  },
  {
    question: "What shall we have ______ coffee?",
    options: ["minus", "of", "besides"],
    answer: "besides",
  },
  {
    question: "You can buy it if it’s ______ $100.",
    options: ["below", "among", "notwithstanding"],
    answer: "below",
  },
  {
    question: "You can have any colour ______ blue.",
    options: ["until", "to", "except"],
    answer: "except",
  },
  {
    question: "Your car is bigger ______ my car.",
    options: ["as", "than", "for"],
    answer: "than",
  },
  {
    question: "________ John, Mary was late. I believe John.",
    options: ["According to", "Further to", "Forward of"],
    answer: "According to",
  },
  {
    question: "Anthony is ________ Rachel in the race. I think he’ll win.",
    options: ["aside from", "ahead of", "on board"],
    answer: "ahead of",
  },
  {
    question: "________ Matt, he will arrive later.",
    options: ["As for", "Out of", "Up to"],
    answer: "As for",
  },
  {
    question: "________ your behaviour, I think you were wrong.",
    options: ["As per", "Up until", "As to"],
    answer: "As to",
  },
  {
    question: "________ expectations, the euro fell in value.",
    options: ["Next to", "In favour of", "Contrary to"],
    answer: "Contrary to",
  },
  {
    question: "Do you want some pork ________ the chicken?",
    options: ["along with", "out of", "thanks to"],
    answer: "along with",
  },
  {
    question: "Don’t worry ________ me. Think about yourself.",
    options: ["apart from", "on top of", "on account of"],
    answer: "on account of",
  },
  {
    question: "Everyone came, ________ Lek who had to work.",
    options: ["save for", "away from", "as for"],
    answer: "save for",
  },
  {
    question: "Everyone was present, ________ Mary. She stayed at home.",
    options: ["in face of", "out of", "except for"],
    answer: "except for",
  },
  {
    question: "________ your letter, I have spoken to Mr Brown.",
    options: ["Forward of", "Further to", "Next to"],
    answer: "Further to",
  },
  {
    question: "He is ________ the two opinions. He wants to compromise.",
    options: ["in between", "up to", "instead of"],
    answer: "in between",
  },
  {
    question: "He reacts bravely ________ danger.",
    options: ["up until", "in face of", "further to"],
    answer: "in face of",
  },
  {
    question: "He was sitting ________ me in the plane.",
    options: ["on board", "out of", "forward of"],
    answer: "forward of",
  },
  {
    question: "I am not ________ your idea. It won’t work.",
    options: ["in favour of", "thanks to", "away from"],
    answer: "in favour of",
  },
  {
    question: "I am writing ________ your order.",
    options: ["away from", "up to", "with reference to"],
    answer: "with reference to",
  },
  {
    question: "I don’t have any dollars. Can I pay euro ________ dollars?",
    options: ["opposite to", "in lieu of", "in spite of"],
    answer: "in lieu of",
  },
  {
    question: "I don’t like it, ________ what you say.",
    options: ["up against", "close to", "irrespective of"],
    answer: "irrespective of",
  },
  {
    question: "I don’t want it, ________ the price. Even if it’s free.",
    options: ["away from", "prior to", "regardless of"],
    answer: "regardless of",
  },
  {
    question: "I have another car ________ this one. Both are red.",
    options: ["aside from", "out of", "by means of"],
    answer: "aside from",
  },
  {
    question: "I made a graph ________ the meeting, so all was ready.",
    options: ["except for", "on top of", "preparatory to"],
    answer: "preparatory to",
  },
  {
    question: "I love to go swimming at the beach ______ summer.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "What time do your children usually go to bed ______ night?",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "Next year, we plan to travel to Taiwan ______ September.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "My birthday is next week. I was born ______ October 15th.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "My grandfather is very old. He was born ______ 1939.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "I am going to meet my friends ______ Friday evening.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "Most stores and businesses are closed ______ New Year’s Day.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "I always get up very early ______ the morning.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "My father goes to work ______ weekdays, from Monday to Friday.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "After I eat dinner, I like to watch TV ______ the evening.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "My first class at college begins ______ eight o’clock.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "He has an appointment to see a dentist ______ Monday.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "Last night, I heard a very strange sound ______ midnight.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "My summer holiday starts ______ June. Hooray!",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "He changed his job three times ______ the 1990s.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "My friend wants to have a party ______ his birthday.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "See you ______ Friday.",
    options: ["in", "at", "on"],
    answer: "on",
  },
  {
    question: "I brush my teeth ______ the morning.",
    options: ["on", "in", "at"],
    answer: "in",
  },
  {
    question: "The match is ______ 4 o'clock.",
    options: ["at", "on", "in"],
    answer: "at",
  },
  {
    question: "We have lunch ______ midday.",
    options: ["in", "at", "on"],
    answer: "at",
  },
  {
    question: "I'm busy ______ the moment.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "My parents always visit me ______ my birthday.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "He was born ______ the 19th century.",
    options: ["at", "on", "in"],
    answer: "in",
  },
  {
    question: "He usually goes on holiday ______ July.",
    options: ["on", "at", "in"],
    answer: "in",
  },
  {
    question: "They always get together ______ Christmas.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "You can come ______ the weekend.",
    options: ["in", "at"],
    answer: "at",
  },
  {
    question: "I have to meet the clients _____ lunchtime.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "This happened _____ the 80s.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question:
      "We want to go for a drink after the concert _____ Friday evening.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "You can plant these flowers _____ the autumn.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "Is your neighbourhood quiet _____ night?",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "I will retire _____ 2030.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "My birthday is _____ the 10th of January.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "I usually go to bed _____ midnight.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "I don't work _____ Christmas day.",
    options: ["at", "in", "on"],
    answer: "on",
  },
  {
    question: "We usually stay home _____ Easter.",
    options: ["at", "in", "on"],
    answer: "at",
  },
  {
    question: "Craig's birthday is _____ February 15th.",
    options: ["in", "at", "on"],
    answer: "on",
  },
  {
    question: "It is always cold ________ January in England.",
    options: ["on", "in", "at"],
    answer: "in",
  },
  {
    question: "It can be dangerous to walk alone ____ night.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "The train leaves _____ 8 o'clock tomorrow morning.",
    options: ["on", "in", "at"],
    answer: "at",
  },
  {
    question: "Let's meet at the restaurant ____ 7 PM.",
    options: ["in", "at", "on"],
    answer: "at",
  },
  {
    question: "English class is ____ 10 AM on Monday mornings.",
    options: ["on", "at", "in"],
    answer: "at",
  },
  {
    question: "I love swimming in the sea ___ the summer time.",
    options: ["at", "in", "on"],
    answer: "in",
  },
  {
    question: "I graduated from high school ___ 2010.",
    options: ["in", "at", "on"],
    answer: "in",
  },
  {
    question: "The graduation ceremony was held _____ the 20th of March.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "Next Monday the lesson will start ___ 11:30.",
    options: ["on", "in", "at"],
    answer: "at",
  },
  {
    question: "____ December it often snows.",
    options: ["In", "At", "On"],
    answer: "In",
  },
  {
    question: "I visited my parent’s house _____ Thanksgiving.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "I always go for a run ____ the morning.",
    options: ["at", "on", "in"],
    answer: "in",
  },
  {
    question: "I usually stay up late _____ night and play computer games.",
    options: ["on", "at", "in"],
    answer: "at",
  },
  {
    question: "I _______________ to the store yesterday.",
    options: ["go", "went", "am going"],
    answer: "went",
  },
  {
    question: "The cat _______________ on the couch right now.",
    options: ["is lying", "lies", "has lain"],
    answer: "is lying",
  },
  {
    question: "I _______________ to bed early tonight.",
    options: ["is going", "goes", "will go"],
    answer: "will go",
  },
  {
    question: "He _______________ the piano every day after school.",
    options: ["playing", "plays", "play"],
    answer: "plays",
  },
  {
    question: "They _______________ to Paris next month.",
    options: ["will travel", "have travelled", "has travelled"],
    answer: "will travel",
  },
  {
    question: "She ___________ cereal for breakfast everyday.",
    options: ["eat", "eating", "eats"],
    answer: "eats",
  },
  {
    question: "She _______________ a letter to her grandma yesterday.",
    options: ["write", "written", "wrote"],
    answer: "wrote",
  },
  {
    question: "I _______________ the project for tomorrow's meeting.",
    options: ["will finish", "did finish", "going to"],
    answer: "will finish",
  },
  {
    question: "I ____________ to the store when I saw the accident.",
    options: ["walking", "was walking", "walked"],
    answer: "was walking",
  },
  {
    question: "They __________ soccer in the park when it started raining.",
    options: ["were playing", "was playing", "is playing"],
    answer: "were playing",
  },
  {
    question: "Allie planted sunflowers ____ her garden.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "Would you please put the milk ____ the table?",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "Lindsay is still ______ soccer practice.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "Our teacher told us to put our test papers ____ her desk.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "The runners flopped down _____ the grass to rest.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "I think Keith is ____ Tom's house.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "My grandma arrived while I was _____ school.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "I thought the book was _____ my room.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "Carlos can stand up _____ his surfboard now.",
    options: ["in", "on", "at"],
    answer: "on",
  },
  {
    question: "My sister is ____ the movies with her friends.",
    options: ["in", "on", "at"],
    answer: "at",
  },
  {
    question: "My mom is ____ the kitchen.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "Alex is ___ the cafeteria.",
    options: ["in", "on", "at"],
    answer: "in",
  },
  {
    question: "_____ you say the alphabet backwards?",
    options: ["Can", "May"],
    answer: "Can",
  },
  {
    question: "Do you think you _____ make the game on Friday?",
    options: ["can", "may"],
    answer: "can",
  },
  {
    question: "How much weight _____ you lift?",
    options: ["can", "may"],
    answer: "can",
  },
  {
    question: "When _____ I go to Mandy's?",
    options: ["can", "may"],
    answer: "may",
  },
  {
    question: "_____ I please have some ice cream?",
    options: ["Can", "May"],
    answer: "May",
  },
  {
    question: "You _____ do it if you try.",
    options: ["can", "may"],
    answer: "can",
  },
  {
    question: "_____ you get that essay finished in time?",
    options: ["Can", "May"],
    answer: "Can",
  },
  {
    question: "You _____ go on the field trip if your behavior is good.",
    options: ["can", "may"],
    answer: "may",
  },
  {
    question: "When _____ we leave, Ms. Fraser?",
    options: ["can", "may"],
    answer: "may",
  },
  {
    question: "How far _____ you jump in the broad jump?",
    options: ["can", "may"],
    answer: "can",
  },
  {
    question: "You _____ turn over you papers and start the test.",
    options: ["can", "may"],
    answer: "may",
  },
  {
    question: "_____ I go to the movies on Saturday?",
    options: ["Can", "May"],
    answer: "May",
  },
  {
    question: "_____ Brittany strike out the next batter?",
    options: ["Can", "May"],
    answer: "Can",
  },
  {
    question: "Do you think I _____ run faster than she can?",
    options: ["can", "may"],
    answer: "can",
  },
  {
    question: "The maple tree is shedding _____ leaves.",
    options: ["its", "it's"],
    answer: "its",
  },
  {
    question: "The dog carries ______ puppies by mouth.",
    options: ["its", "it's"],
    answer: "its",
  },
  {
    question: "_____ only 8, but I'm already tired.",
    options: ["Its", "It's"],
    answer: "It's",
  },
  {
    question: "The giraffe is eating _____ dinner.",
    options: ["its", "it's"],
    answer: "its",
  },
  {
    question: "I've heard that ______ going to be a hard winter this year.",
    options: ["its", "it's"],
    answer: "it's",
  },
  {
    question: "That store treats _____ customers well.",
    options: ["its", "it's"],
    answer: "its",
  },
  {
    question: "I don't know how long _____ going to take to finish the job.",
    options: ["its", "it's"],
    answer: "it's",
  },
  {
    question: "Please put the dog in _____ pen before you go.",
    options: ["its", "it's"],
    answer: "its",
  },
  {
    question: "The company knows that _____ reputation is on the line.",
    options: ["its", "it's"],
    answer: "its",
  },
  {
    question: "When your dog grows up, _____ going to be huge.",
    options: ["its", "it's"],
    answer: "it's",
  },
  {
    question: "We wondered about that club and _____ beginnings.",
    options: ["its", "it's"],
    answer: "its",
  },
  {
    question: "_____ a toss-up which team will win the tournament.",
    options: ["Its", "It's"],
    answer: "It's",
  },
  {
    question: "_____almost time for the show to get started",
    options: ["Its", "It's"],
    answer: "It's",
  },
  {
    question: "I wonder if _____ going to rain tomorrow.",
    options: ["its", "it's"],
    answer: "it's",
  },
  {
    question: "The team tried _____ best but couldn't pull off a win.",
    options: ["its", "it's"],
    answer: "its",
  },
  {
    question:
      "The coach had to rein the players back to prevent them from overexerting early in the game. What does 'rein [somebody] back' mean in this sentence?",
    options: [
      "Encourage to push harder",
      "Control or restrain to maintain focus",
      "Allow to act without restrictions",
    ],
    answer: "Control or restrain to maintain focus",
  },
  {
    question:
      "The search party decided to fan out across the forest to cover more ground. What does 'fan out' mean here?",
    options: [
      "Gather closely together",
      "Spread out in different directions",
      "Retreat quickly from an area",
    ],
    answer: "Spread out in different directions",
  },
  {
    question:
      "During the storm, they chose to hole up in a small cabin until it passed. What does 'hole up' imply in this context?",
    options: [
      "Travel openly to seek help",
      "Stay hidden or sheltered",
      "Host a large gathering",
    ],
    answer: "Stay hidden or sheltered",
  },
  {
    question:
      "She asked, 'How come you didn’t finish the assignment on time?' What does 'how come' mean in this sentence?",
    options: [
      "What is the reason for",
      "How did you manage to",
      "Why are you happy about",
    ],
    answer: "What is the reason for",
  },
  {
    question:
      "The team bent over backwards to meet the client’s tight deadline. What does 'bend over backwards' suggest?",
    options: [
      "Make minimal effort",
      "Go to great lengths",
      "Refuse to cooperate",
    ],
    answer: "Go to great lengths",
  },
  {
    question:
      "He chose to defer to the expert’s opinion on the technical matter. What does 'defer' mean here?",
    options: [
      "Challenge confidently",
      "Accept respectfully due to trust",
      "Delay indefinitely",
    ],
    answer: "Accept respectfully due to trust",
  },
  {
    question:
      "She doesn’t just talk about leadership; she walks the walk. What does 'walk the walk' imply in this context?",
    options: [
      "Speak confidently without action",
      "Act consistently with one’s words",
      "Avoid responsibility",
    ],
    answer: "Act consistently with one’s words",
  },
  {
    question:
      "Despite the challenges, he decided to stick it out until the project was complete. What does 'stick it out' mean?",
    options: [
      "Abandon the task early",
      "Persevere through difficulties",
      "Delegate to someone else",
    ],
    answer: "Persevere through difficulties",
  },
  {
    question:
      "The engine was clogged with gunk, causing it to malfunction. What does 'gunk' refer to in this sentence?",
    options: [
      "Clean lubricating oil",
      "Sticky or greasy residue",
      "High-quality fuel",
    ],
    answer: "Sticky or greasy residue",
  },
  {
    question:
      "The rickety bridge creaked under their weight as they crossed. What does 'rickety' imply here?",
    options: [
      "Sturdy and reliable",
      "Shaky and unstable",
      "Newly built and strong",
    ],
    answer: "Shaky and unstable",
  },
  {
    question: "I'm so thirsty. I need to ______ a drink of water.",
    options: ["do", "have", "make", "take"],
    answer: "have",
  },
  {
    question: "Shirley hates it when she ______ mistakes.",
    options: ["does", "has", "makes", "takes"],
    answer: "makes",
  },
  {
    question: "I always prefer to ______ exercises in the morning.",
    options: ["do", "have", "make", "take"],
    answer: "do",
  },
  {
    question: "Why don't you ______ a rest before practising shootings?",
    options: ["do", "have", "make", "take"],
    answer: "take",
  },
  {
    question:
      "Henry has just ran 16km. He needs to sit down and ______ a breath now.",
    options: ["do", "have", "make", "take"],
    answer: "take",
  },
  {
    question:
      "Joe has started his own business and he says he's going to ______ a fortune.",
    options: ["do", "have", "make", "take"],
    answer: "make",
  },
  {
    question: "Most people hate ______ housework but it is necessary.",
    options: ["doing", "having", "making", "taking"],
    answer: "doing",
  },
  {
    question: "Sonia ______ a quick lunch and left for work.",
    options: ["did", "had", "made", "took"],
    answer: "had",
  },
  {
    question: "The baby is asleep. Don't ______ any noise.",
    options: ["do", "have", "make", "take"],
    answer: "make",
  },
  {
    question: "I'm going to ______ a walk and go to bed.",
    options: ["do", "have", "make", "take"],
    answer: "take",
  },
  {
    question:
      "Hi honey! I was taking a nap. Can you ______ me the time, please? What time is it? Today we have our English Class!",
    options: ["say", "tell", "give"],
    answer: "tell",
  },
  {
    question:
      "Hi honey! I was taking a nap. Can you ______ me the time, please? What time is it? Today we have our English Class!",
    options: ["say", "tell", "give"],
    answer: "tell",
  },
  {
    question:
      "Hi! It's 6.45. It's early! We ______ a lot of time to do things before the English class starts!",
    options: ["spend", "have", "waste"],
    answer: "have",
  },
  {
    question:
      "We can ______ some time in the garden. You can sunbathe and I can cut the grass.",
    options: ["have", "waste", "spend"],
    answer: "spend",
  },
  {
    question:
      "Cut the grass????? We need hours to cut the grass! The garden is big! It ______ a lot of time to cut the grass!!!",
    options: ["takes", "is", "saves"],
    answer: "takes",
  },
  {
    question:
      "Making the bed? No way! That is a ______ of time! I prefer my bed a mess!",
    options: ["lot", "waste", "lost"],
    answer: "waste",
  },
  {
    question:
      "Ok, then we decide if we make the bed or not. But let's plan our day! I want to arrive to the class ______ time! I want to be punctual today. I am happy we have a lot of time!",
    options: ["in", "at", "on"],
    answer: "on",
  },
  {
    question: "A lot of time??? We don't have much time! We are ______!",
    options: ["in a hurry", "on a hurry", "at a hurry"],
    answer: "in a hurry",
  },
  {
    question:
      "Ok. We can discuss this tomorrow. Let's go to English class now. At 7.45, I want to be ______ the door.",
    options: ["on", "in", "at"],
    answer: "at",
  },
  {
    question:
      "But... I thought it was 6.45 in the morning! What ______ is it??????",
    options: ["hour", "second", "time"],
    answer: "time",
  },
  {
    question: "Do you want to ______ hiking with me?",
    options: ["go", "do", "play"],
    answer: "go",
  },
  {
    question: "We are ______ ping pong at the moment.",
    options: ["playing", "going", "doing"],
    answer: "playing",
  },
  {
    question: "He ______ camping every Saturday.",
    options: ["goes", "does", "plays"],
    answer: "goes",
  },
  {
    question: "They love to ______ exercise.",
    options: ["do", "go", "play"],
    answer: "do",
  },
  {
    question: "She ______ gymnastics at the Olympic games.",
    options: ["goes", "does", "plays"],
    answer: "does",
  },

  {
    question:
      "Any way you slice it, the plan was doomed from the start. What does 'any way you slice it' mean here?",
    options: [
      "No matter how you evaluate it",
      "Only if you split the tasks",
      "When you simplify the issue",
    ],
    answer: "No matter how you evaluate it",
  },
  {
    question:
      "Lost in the desert with no water, they were up the creek. What does 'up the creek' imply in this context?",
    options: [
      "In a hopeless situation",
      "Ready for an adventure",
      "In a comfortable spot",
    ],
    answer: "In a hopeless situation",
  },
  {
    question:
      "She groused about the cold weather during the entire trip. What does 'groused' mean in this sentence?",
    options: [
      "Grumbled repeatedly",
      "Celebrated joyfully",
      "Planned carefully",
    ],
    answer: "Grumbled repeatedly",
  },
  {
    question:
      "The stock prices edged up after the positive earnings report. What does 'edged up' suggest here?",
    options: ["Fell sharply", "Increased slightly", "Remained steady"],
    answer: "Increased slightly",
  },
  {
    question:
      "He wields a sharp wit in every debate. What does 'wields' imply in this context?",
    options: ["Uses skillfully", "Hides carefully", "Lacks entirely"],
    answer: "Uses skillfully",
  },
  {
    question:
      "The documentary depicted the harrowing conditions of the refugee camp. What does 'harrowing' mean here?",
    options: [
      "Uplifting and inspiring",
      "Deeply distressing",
      "Mildly inconvenient",
    ],
    answer: "Deeply distressing",
  },
  {
    question:
      "They were chewing the fat during the long train ride. What does 'chewing the fat' suggest in this context?",
    options: ["Arguing intensely", "Chatting casually", "Working diligently"],
    answer: "Chatting casually",
  },
  {
    question:
      "He tramped through the muddy fields to deliver the message. What does 'tramped' mean in this sentence?",
    options: ["Ran swiftly", "Walked heavily", "Drove quickly"],
    answer: "Walked heavily",
  },
  {
    question:
      "After the all-night party, he was out of his gourd and couldn’t think straight. What does 'out of his gourd' imply here?",
    options: ["Completely delirious", "Fully focused", "Slightly tired"],
    answer: "Completely delirious",
  },
  {
    question:
      "She handled the project by the book, ensuring every rule was followed. What does 'by the book' mean in this context?",
    options: [
      "Ignoring standard procedures",
      "Strictly following rules",
      "Acting creatively",
    ],
    answer: "Strictly following rules",
  },
  {
    question:
      "Despite the scandal, he came out smelling like a rose. What does 'came out smelling like a rose' imply here?",
    options: [
      "Faced severe consequences",
      "Emerged looking good",
      "Admitted fault publicly",
    ],
    answer: "Emerged looking good",
  },
  {
    question:
      "He tried to swipe the last cookie from the jar. What does 'swipe' mean in this sentence?",
    options: [
      "Share generously with others",
      "Take quickly or sneakily",
      "Carefully inspect or examine",
    ],
    answer: "Take quickly or sneakily",
  },
  {
    question:
      "To save for the trip, they had to pinch pennies for months. What does 'pinch pennies' suggest here?",
    options: [
      "Spend money extravagantly",
      "Quickly earn extra funds",
      "Save money carefully",
    ],
    answer: "Save money carefully",
  },
  {
    question:
      "Without a backup plan, they were up a gum tree when the deal failed. What does 'up a gum tree' mean in this context?",
    options: [
      "In a difficult predicament",
      "In a safe and secure position",
      "Celebrating a successful outcome",
    ],
    answer: "In a difficult predicament",
  },
  {
    question:
      "The repetitive task was stultifying and drained her creativity. What does 'stultifying' imply in this sentence?",
    options: [
      "Dull and creativity-suppressing",
      "Highly stimulating and engaging",
      "Challenging but ultimately rewarding",
    ],
    answer: "Dull and creativity-suppressing",
  },
  {
    question:
      "Only her immediate family attended the private ceremony. What does 'immediate family' refer to here?",
    options: [
      "Close relatives like parents and siblings",
      "Extended relatives including cousins",
      "Close friends and casual acquaintances",
    ],
    answer: "Close relatives like parents and siblings",
  },
  {
    question:
      "Her promotion came with a salary commensurate with her experience. What does 'commensurate' mean in this context?",
    options: [
      "Unrelated to her qualifications",
      "Lower than expected",
      "Proportional to her skills",
    ],
    answer: "Proportional to her skills",
  },
  {
    question:
      "She savoured every bite of the homemade meal. What does 'savoured' imply in this sentence?",
    options: ["Ate quickly", "Enjoyed slowly and deeply", "Criticized harshly"],
    answer: "Enjoyed slowly and deeply",
  },
  {
    question:
      "He could learn most things by rote, but struggled with creative tasks. What does 'learn most things by rote' mean here?",
    options: [
      "Learn through critical thinking",
      "Understand through discussion",
      "Memorize through repetition",
    ],
    answer: "Memorize through repetition",
  },
  {
    question:
      "The critic slammed the movie for its weak plot. What does 'slammed' mean in this context?",
    options: [
      "Praised enthusiastically",
      "Ignored completely",
      "Criticized harshly",
    ],
    answer: "Criticized harshly",
  },
  {
    question:
      "The comment was off the record and not meant for publication. What does 'off the record' imply here?",
    options: [
      "Officially documented",
      "Not for public disclosure",
      "Widely shared",
    ],
    answer: "Not for public disclosure",
  },
  {
    question:
      "To avoid losses, she decided to hedge her bets in the risky investment. What does 'hedge her bets' mean in this context?",
    options: [
      "Take a cautious approach",
      "Invest all resources",
      "Avoid all risks entirely",
    ],
    answer: "Take a cautious approach",
  },
  {
    question:
      "The deadline loomed over the team as they rushed to finish. What does 'loomed' suggest in this sentence?",
    options: [
      "Approached insignificantly",
      "Appeared threateningly close",
      "Passed quickly",
    ],
    answer: "Appeared threateningly close",
  },
  {
    question:
      "She was told to stretch her arms before starting the workout. What does 'stretch your arms' mean in this context?",
    options: [
      "Extend your limbs to warm up",
      "Raise your hands to surrender",
      "Shorten your sleeves",
    ],
    answer: "Extend your limbs to warm up",
  },
  {
    question:
      "He tried to stretch a rubber band until it snapped. What does 'stretch a rubber band' imply here?",
    options: [
      "Paint it a different color",
      "Pull it to make it longer",
      "Cut it into pieces",
    ],
    answer: "Pull it to make it longer",
  },
  {
    question:
      "To impress his friends, he tended to stretch the truth about his adventures. What does 'stretch the truth' mean in this sentence?",
    options: [
      "Tell the exact facts",
      "Exaggerate or lie slightly",
      "Keep information secret",
    ],
    answer: "Exaggerate or lie slightly",
  },
  {
    question:
      "The car broke down on a lonely stretch of road. What does 'a stretch of road' refer to here?",
    options: [
      "A short detour",
      "A continuous length of highway",
      "A bumpy path",
    ],
    answer: "A continuous length of highway",
  },
  {
    question:
      "He had to do a prison stretch for the minor offense. What does 'do a prison stretch' mean in this context?",
    options: [
      "Serve a period of time in jail",
      "Exercise during incarceration",
      "Escape from prison",
    ],
    answer: "Serve a period of time in jail",
  },
  {
    question:
      "To afford the vacation, they had to stretch their budget carefully. What does 'stretch your budget' imply here?",
    options: [
      "Spend money without restraint",
      "Make resources last longer",
      "Borrow extra money",
    ],
    answer: "Make resources last longer",
  },
  {
    question:
      "The coach advised the team to stretch before exercise to avoid injuries. What does 'stretch before exercise' mean in this sentence?",
    options: [
      "Warm up muscles to prepare",
      "Rest before any activity",
      "Compete right away",
    ],
    answer: "Warm up muscles to prepare",
  },
  {
    question:
      "Her new jacket was made of stretch fabric for a comfortable fit. What does 'stretch fabric' refer to here?",
    options: [
      "Material that stays rigid",
      "Cloth that expands and contracts",
      "Fabric that resists water",
    ],
    answer: "Cloth that expands and contracts",
  },
  {
    question:
      "The puzzle was designed to stretch one's mind with its complexity. What does 'stretch one's mind' imply in this context?",
    options: [
      "Confuse unnecessarily",
      "Challenge mentally",
      "Relax completely",
    ],
    answer: "Challenge mentally",
  },
  {
    question:
      "They decided to stretch the rules to allow a late submission. What does 'stretch the rules' mean here?",
    options: [
      "Enforce regulations strictly",
      "Bend or slightly break guidelines",
      "Create new policies",
    ],
    answer: "Bend or slightly break guidelines",
  },
  {
    question:
      "She worked for eight hours at a stretch without a break. What does 'at a stretch' suggest in this context?",
    options: ["With frequent pauses", "Without stopping", "At a slow pace"],
    answer: "Without stopping",
  },
  {
    question:
      "The region endured a long stretch without rain, causing a drought. What does 'long stretch without rain' mean here?",
    options: [
      "A brief dry period",
      "A continuous period of no rain",
      "Occasional dry spells",
    ],
    answer: "A continuous period of no rain",
  },
  {
    question:
      "He had to stretch to reach something on the top shelf. What does 'stretch to reach something' imply in this sentence?",
    options: [
      "Extend your body to grab an item",
      "Ask someone else for help",
      "Use a tool to retrieve it",
    ],
    answer: "Extend your body to grab an item",
  },
  {
    question:
      "It’s not by any stretch of the imagination a perfect solution. What does 'not by any stretch of the imagination' mean here?",
    options: ["Somewhat acceptable", "Absolutely not", "Highly likely"],
    answer: "Absolutely not",
  },
  {
    question:
      "The team tried to stretch the limits of the new technology. What does 'stretch the limits' suggest in this context?",
    options: [
      "Remain within established boundaries",
      "Push capabilities to the maximum",
      "Completely ignore all restrictions",
    ],
    answer: "Push capabilities to the maximum",
  },
  {
    question:
      "The workers had to bear a heavy load to complete the construction. What does 'bear a heavy load' mean in this context?",
    options: [
      "Avoid exerting physical effort",
      "Carry or support a burden",
      "Delegate tasks to other workers",
    ],
    answer: "Carry or support a burden",
  },
  {
    question:
      "She had to bear the pain of her injury during the race. What does 'bear the pain' imply here?",
    options: [
      "Disregard all physical discomfort",
      "Endure or tolerate discomfort",
      "Cause discomfort to other racers",
    ],
    answer: "Endure or tolerate discomfort",
  },
  {
    question:
      "He chose to bear responsibility for the team’s mistake. What does 'bear responsibility' mean in this sentence?",
    options: [
      "Deny any role in the issue",
      "Accept or take on accountability",
      "Publicly celebrate team success",
    ],
    answer: "Accept or take on accountability",
  },
  {
    question:
      "She was overjoyed to bear a child after years of trying. What does 'bear a child' refer to here?",
    options: ["Raise a young child", "Give birth to a baby", "Adopt a child"],
    answer: "Give birth to a baby",
  },
  {
    question:
      "Their hard work began to bear fruit with increased sales. What does 'bear fruit' mean in this context?",
    options: [
      "Produce literal crops",
      "Yield positive results",
      "Fail to achieve goals",
    ],
    answer: "Yield positive results",
  },
  {
    question:
      "When she heard the news, she said, 'I can’t bear it.' What does 'I can’t bear it' imply in this sentence?",
    options: [
      "Unable to emotionally tolerate",
      "Excited to hear more",
      "Ready to take action",
    ],
    answer: "Unable to emotionally tolerate",
  },
  {
    question:
      "He continued to bear a grudge against his old rival. What does 'bear a grudge' mean here?",
    options: ["Forgive easily", "Hold resentment", "Offer friendship"],
    answer: "Hold resentment",
  },
  {
    question:
      "She was called to bear witness in the court case. What does 'bear witness' imply in this context?",
    options: [
      "Provide testimony or confirmation",
      "Observe silently without speaking",
      "Avoid any form of involvement",
    ],
    answer: "Provide testimony or confirmation",
  },
  {
    question:
      "Bear in mind that the deadline is tomorrow. What does 'bear in mind' mean in this sentence?",
    options: [
      "Remember or consider",
      "Intentionally forget about it",
      "Completely ignore the matter",
    ],
    answer: "Remember or consider",
  },
  {
    question:
      "The storm seemed to bear down on the small village with fierce winds. What does 'bear down on something' suggest here?",
    options: [
      "Press or push with force",
      "Slowly retreat or move away",
      "Gradually lessen in intensity",
    ],
    answer: "Press or push with force",
  },
  {
    question:
      "The twins bear resemblance to their older sister. What does 'bear resemblance' mean in this context?",
    options: [
      "Look completely different",
      "Appear similar",
      "Act in the same way",
    ],
    answer: "Appear similar",
  },
  {
    question:
      "At the fork, the sign said to bear left to reach the town. What does 'bear left' imply here?",
    options: [
      "Turn in the left direction",
      "Continue straight ahead",
      "Stop at the intersection",
    ],
    answer: "Turn in the left direction",
  },
  {
    question:
      "The settlers were allowed to bear arms for self-defense. What does 'bear arms' mean in this context?",
    options: ["Exercise their muscles", "Carry weapons", "Raise their hands"],
    answer: "Carry weapons",
  },
  {
    question:
      "The tree bears apples every autumn. What does 'the tree bears apples' mean here?",
    options: [
      "Produces apples naturally",
      "Stores apples for winter",
      "Drops apples randomly",
    ],
    answer: "Produces apples naturally",
  },
  {
    question:
      "The small business had to bear the brunt of the economic downturn. What does 'bear the brunt' imply in this context?",
    options: [
      "Benefit from a situation",
      "Take the worst part of an impact",
      "Avoid financial loss",
    ],
    answer: "Take the worst part of an impact",
  },
  {
    question:
      "She passed the exam with flying colors, earning top marks. What does 'with flying colors' mean in this context?",
    options: [
      "With minimal effort",
      "With great success",
      "With some difficulty",
    ],
    answer: "With great success",
  },
  {
    question:
      "He always said, 'A penny saved is a penny earned,' to justify his frugality. What does 'a penny saved is a penny earned' imply here?",
    options: [
      "Spending is better than saving",
      "Saving money is as good as earning it",
      "Money is easy to earn",
    ],
    answer: "Saving money is as good as earning it",
  },
  {
    question:
      "It took her a week to get to grips with the new software. What does 'get to grips with' mean in this sentence?",
    options: ["Ignore completely", "Understand and master", "Find faults in"],
    answer: "Understand and master",
  },
  {
    question:
      "They chose different hobbies, proving different strokes for different folks. What does 'different strokes for different folks' suggest here?",
    options: [
      "Everyone has the same preferences",
      "People have varied tastes",
      "Choices should be uniform",
    ],
    answer: "People have varied tastes",
  },
  {
    question:
      "Her speech was tinged with sadness as she spoke of her loss. What does 'tinged' imply in this context?",
    options: [
      "Overflowing with joyful emotion",
      "Entirely transformed in tone",
      "Slightly colored or affected",
    ],
    answer: "Slightly colored or affected",
  },
  {
    question:
      "After the long day, he was dead to the world and didn’t hear the phone. What does 'dead to the world' mean here?",
    options: [
      "Deeply asleep or unresponsive",
      "Extremely alert and attentive",
      "Highly active in social settings",
    ],
    answer: "Deeply asleep or unresponsive",
  },
  {
    question:
      "His laconic reply left everyone wanting more details. What does 'laconic' mean in this sentence?",
    options: [
      "Overly wordy and long-winded",
      "Brief and to the point",
      "Vague and hard to understand",
    ],
    answer: "Brief and to the point",
  },
  {
    question:
      "They served bangers and mash at the pub for dinner. What does 'bangers and mash' refer to here?",
    options: [
      "Sausages and mashed potatoes",
      "A sweet dessert with cream",
      "A lively dance performance",
    ],
    answer: "Sausages and mashed potatoes",
  },
  {
    question:
      "The film featured blonde bombshells as the main characters. What does 'blonde bombshells' imply in this context?",
    options: [
      "Shy and reserved blonde women",
      "Blonde experts in science",
      "Strikingly attractive blonde women",
    ],
    answer: "Strikingly attractive blonde women",
  },
  {
    question:
      "The rainy day filled her with ennui, making her feel restless. What does 'ennui' mean in this sentence?",
    options: [
      "Bursting with excitement and energy",
      "Strong sense of confidence and focus",
      "Boredom and dissatisfaction",
    ],
    answer: "Boredom and dissatisfaction",
  },
  {
    question:
      "She tried to butter them up with compliments before asking for a favor. What does 'butter them up' suggest here?",
    options: ["Flatter to gain favor", "Criticize gently", "Ignore completely"],
    answer: "Flatter to gain favor",
  },
  {
    question:
      "He gripped the banisters tightly while climbing the steep stairs. What does 'banisters' refer to in this context?",
    options: [
      "Steps of a staircase",
      "Handrails along stairs",
      "Wall decorations",
    ],
    answer: "Handrails along stairs",
  },
  {
    question:
      "To get the permit, they had to jump through a lot of hoops. What does 'jump through a lot of hoops' mean here?",
    options: [
      "Complete simple tasks",
      "Overcome many obstacles",
      "Avoid regulations",
    ],
    answer: "Overcome many obstacles",
  },
  {
    question:
      "I had to bite my tongue to avoid arguing with the rude customer. What does 'bite my tongue' imply in this context?",
    options: [
      "Speak out boldly",
      "Stay silent to avoid conflict",
      "Laugh uncontrollably",
    ],
    answer: "Stay silent to avoid conflict",
  },
  {
    question:
      "After years in one place, she got itchy feet and decided to travel. What does 'itchy feet' suggest in this sentence?",
    options: [
      "A desire to stay put",
      "A restless urge to travel",
      "A need for new shoes",
    ],
    answer: "A restless urge to travel",
  },
  {
    question:
      "The soup needed just a tad more salt to be perfect. What does 'tad' mean in this context?",
    options: ["A large amount", "A small amount", "No amount at all"],
    answer: "A small amount",
  },
  {
    question:
      "The room was festooned with colorful streamers for the party. What does 'festooned' imply here?",
    options: [
      "Emptied of decorations",
      "Adorned with hanging decorations",
      "Cleaned thoroughly",
    ],
    answer: "Adorned with hanging decorations",
  },
  {
    question:
      "The dessert was so cloying that she couldn’t finish it. What does 'cloying' mean in this sentence?",
    options: [
      "Deliciously satisfying",
      "Excessively sweet or sentimental",
      "Mildly flavored",
    ],
    answer: "Excessively sweet or sentimental",
  },
  {
    question:
      "A bright painting caught his eye at the gallery. What does 'caught his eye' suggest here?",
    options: [
      "Was ignored completely",
      "Attracted his attention",
      "Was difficult to see",
    ],
    answer: "Attracted his attention",
  },
  {
    question:
      "She was putting on a confident act to impress the crowd. What does 'putting on' mean in this context?",
    options: [
      "Performing or pretending",
      "Dressing in clothes",
      "Organizing an event",
    ],
    answer: "Performing or pretending",
  },
  {
    question:
      "Their plans were thwarted by unexpected bad weather. What does 'thwarted' imply in this sentence?",
    options: [
      "Encouraged to succeed",
      "Prevented or blocked",
      "Improved significantly",
    ],
    answer: "Prevented or blocked",
  },
  {
    question:
      "His adroit handling of the crisis earned him praise. What does 'adroit' mean here?",
    options: ["Clumsy and awkward", "Skillful and clever", "Slow and hesitant"],
    answer: "Skillful and clever",
  },
  {
    question:
      "The speaker’s hackneyed phrases bored the audience. What does 'hackneyed' suggest in this context?",
    options: [
      "Fresh and original",
      "Overused and unoriginal",
      "Complex and engaging",
    ],
    answer: "Overused and unoriginal",
  },
  {
    question:
      "She was lost in a reverie, daydreaming about her vacation. What does 'reverie' mean in this sentence?",
    options: [
      "A state of deep thought or daydream",
      "A moment of intense focus",
      "A feeling of frustration",
    ],
    answer: "A state of deep thought or daydream",
  },
  {
    question:
      "He tried to disengage from the heated argument. What does 'disengage' imply in this context?",
    options: [
      "Participate more actively",
      "Withdraw or detach",
      "Start a new discussion",
    ],
    answer: "Withdraw or detach",
  },
  {
    question:
      "Her formal attire was perfect for the gala. What does 'attire' refer to here?",
    options: [
      "Attitude or behavior",
      "Clothing or outfit",
      "Event decorations",
    ],
    answer: "Clothing or outfit",
  },
  {
    question:
      "The heat was unendurable, forcing them to seek shade. What does 'unendurable' mean in this sentence?",
    options: [
      "Tolerable and pleasant",
      "Impossible to bear",
      "Slightly uncomfortable",
    ],
    answer: "Impossible to bear",
  },
  {
    question:
      "He tried to butt in during their private conversation. What does 'to butt in' suggest here?",
    options: ["Listen quietly", "Interrupt rudely", "Offer helpful advice"],
    answer: "Interrupt rudely",
  },
  {
    question:
      "After the loud noise, she stood dazed in the middle of the room. What does 'dazed' mean in this context?",
    options: [
      "Confused and disoriented",
      "Excited and alert",
      "Calm and focused",
    ],
    answer: "Confused and disoriented",
  },
  {
    question:
      "The lecturer droned on, putting everyone to sleep. What does 'droned on' imply here?",
    options: [
      "Spoke briefly and clearly",
      "Talked monotonously at length",
      "Sang energetically",
    ],
    answer: "Talked monotonously at length",
  },
  {
    question:
      "He landed a job that felt like a gravy train with its perks. What does 'gravy train' mean in this context?",
    options: [
      "A difficult and low-paying job",
      "An easy source of benefits or money",
      "A competitive work environment",
    ],
    answer: "An easy source of benefits or money",
  },
  {
    question:
      "He gave an elevator pitch to the investors during the ride. What does 'elevator pitch' mean in this context?",
    options: [
      "A long speech given in a meeting",
      "A quick and persuasive summary of an idea or product",
      "A detailed written report",
    ],
    answer: "A quick and persuasive summary of an idea or product",
  },
  {
    question:
      "The spin doctors worked hard to improve the politician’s image. What does 'spin doctors' refer to here?",
    options: [
      "Medical advisors for athletes",
      "Public relations experts who manipulate information",
      "Political campaign donors",
    ],
    answer: "Public relations experts who manipulate information",
  },
  {
    question:
      "The record was expunged after the charges were dropped. What does 'expunged' mean in this context?",
    options: [
      "Officially erased or removed",
      "Highlighted for future reference",
      "Copied and stored",
    ],
    answer: "Officially erased or removed",
  },
  {
    question:
      "Her decision flew in the face of tradition. What does 'flew in the face of' suggest here?",
    options: [
      "Strongly opposed or challenged",
      "Quietly accepted",
      "Was inspired by",
    ],
    answer: "Strongly opposed or challenged",
  },
  {
    question:
      "He tended to lard his speeches with technical jargon. What does 'lard' mean in this sentence?",
    options: [
      "Enrich or pad with unnecessary or excessive elements",
      "Shorten dramatically",
      "Remove all emotion from",
    ],
    answer: "Enrich or pad with unnecessary or excessive elements",
  },
  {
    question:
      "She chose to defer the decision until after the holidays. What does 'defer' mean here?",
    options: ["Speed up", "Postpone or delay", "Completely ignore"],
    answer: "Postpone or delay",
  },
  {
    question:
      "The forest was denuded by years of illegal logging. What does 'denuded' imply in this context?",
    options: [
      "Made bare or stripped of covering",
      "Carefully managed",
      "Strengthened and protected",
    ],
    answer: "Made bare or stripped of covering",
  },
  {
    question:
      "They fell victim to a flimflam that cost them thousands. What does 'flimflam' mean here?",
    options: [
      "A type of business deal",
      "A scam or deception",
      "A lucky investment",
    ],
    answer: "A scam or deception",
  },
  {
    question:
      "The scratch on the lens was a small blemish on an otherwise perfect camera. What does 'blemish' refer to?",
    options: [
      "A tiny improvement",
      "A minor flaw or defect",
      "A cleaning mark",
    ],
    answer: "A minor flaw or defect",
  },
  {
    question:
      "She heaped praise on the team after the victory. What does 'heaped' mean in this sentence?",
    options: [
      "Gave generously or excessively",
      "Removed gradually",
      "Ignored completely",
    ],
    answer: "Gave generously or excessively",
  },
  {
    question:
      "He continued to badger her with questions even after she asked him to stop. What does 'badger' mean here?",
    options: [
      "Help in a friendly way",
      "Pester or annoy repeatedly",
      "Praise sincerely",
    ],
    answer: "Pester or annoy repeatedly",
  },
  {
    question:
      "The storm wreaked havoc on the coastal town. What does 'wreaked havoc' mean in this context?",
    options: [
      "Improved living conditions",
      "Caused massive damage or chaos",
      "Avoided any destruction",
    ],
    answer: "Caused massive damage or chaos",
  },
  {
    question:
      "The ducklings waddled across the road. What does 'waddled' suggest here?",
    options: [
      "Walked in a clumsy, swaying way",
      "Ran quickly and lightly",
      "Jumped energetically",
    ],
    answer: "Walked in a clumsy, swaying way",
  },
  {
    question:
      "She was instrumental in organizing the event. What does 'instrumental' mean in this sentence?",
    options: [
      "Casually involved",
      "Unwilling to help",
      "Essential or very helpful",
    ],
    answer: "Essential or very helpful",
  },
  {
    question:
      "After forgetting his lines, he ended up with egg on his face. What does 'egg on his face' imply?",
    options: [
      "Was proud and confident",
      "Felt embarrassed or foolish",
      "Became very angry",
    ],
    answer: "Felt embarrassed or foolish",
  },
  {
    question:
      "Some say the neighborhood is going to the dogs. What does 'going to the dogs' mean here?",
    options: [
      "Gradually improving in overall quality",
      "Transforming into a more modern area",
      "Declining in quality or becoming worse",
    ],
    answer: "Declining in quality or becoming worse",
  },
  {
    question:
      "He wore a slick suit and carried himself with confidence. What does 'slick' suggest in this context?",
    options: [
      "Smooth, stylish, and possibly superficial",
      "Appearing worn out or noticeably shabby",
      "Looking outdated and quite unusual",
    ],
    answer: "Smooth, stylish, and possibly superficial",
  },
  {
    question:
      "Getting him to apologize was like pulling teeth. What does 'like pulling teeth' mean here?",
    options: [
      "Extremely easy and quite straightforward",
      "Highly amusing and very enjoyable",
      "Extremely difficult and unpleasant",
    ],
    answer: "Extremely difficult and unpleasant",
  },
  {
    question:
      "The acquiescent employee never questioned the manager’s decisions. What does 'acquiescent' mean here?",
    options: [
      "Submissive or ready to accept without protest",
      "Very argumentative and openly confrontational",
      "Lacking information and acting carelessly",
    ],
    answer: "Submissive or ready to accept without protest",
  },
  {
    question:
      "Many of the characters lusted after him in the drama series. What does 'lusted after' imply in this context?",
    options: [
      "Greatly respected and deeply admired him",
      "Had a strong sexual desire for him",
      "Intensely feared and actively avoided him",
    ],
    answer: "Had a strong sexual desire for him",
  },
  {
    question:
      "Her tone was subdued during the meeting. What does 'subdued' mean here?",
    options: [
      "Loud and expressive",
      "Quiet and restrained",
      "Cheerful and lively",
    ],
    answer: "Quiet and restrained",
  },
  {
    question:
      "It's imperative that you submit the form today. What does 'imperative' mean in this sentence?",
    options: [
      "Optional and flexible",
      "Absolutely necessary or urgent",
      "Possibly useful",
    ],
    answer: "Absolutely necessary or urgent",
  },
  {
    question:
      "They kowtowed to the boss out of fear. What does 'kowtowed' mean in this context?",
    options: [
      "Showed exaggerated respect or obedience",
      "Challenged the authority",
      "Ignored all rules",
    ],
    answer: "Showed exaggerated respect or obedience",
  },
  {
    question:
      "He lives in an ivory tower, completely disconnected from everyday concerns. What does 'ivory tower' suggest?",
    options: [
      "A comfortable and realistic position",
      "A detached or isolated way of living, often intellectual",
      "A place full of conflict and stress",
    ],
    answer: "A detached or isolated way of living, often intellectual",
  },
  {
    question:
      "Her speech sounded pretentious and fake. What does 'pretentious' mean here?",
    options: [
      "Humble and simple",
      "Trying to appear more important or cultured than is true",
      "Clear and honest",
    ],
    answer: "Trying to appear more important or cultured than is true",
  },
  {
    question:
      "His office reeks of cigarette smoke. What does 'reeks of' mean in this context?",
    options: [
      "Smells strongly and unpleasantly of",
      "Is completely free from",
      "Is decorated with",
    ],
    answer: "Smells strongly and unpleasantly of",
  },
  {
    question:
      "She looked vexed after reading the email. What does 'vexed' mean here?",
    options: [
      "Happy and excited",
      "Annoyed or frustrated",
      "Bored and uninterested",
    ],
    answer: "Annoyed or frustrated",
  },
  {
    question:
      "Guests trickled back into the room after the fire drill. What does 'trickled back' mean here?",
    options: [
      "Returned slowly and gradually",
      "Left all at once",
      "Rushed back quickly",
    ],
    answer: "Returned slowly and gradually",
  },
  {
    question:
      "They try to spend quality time together on weekends. What does 'quality time' mean in this sentence?",
    options: [
      "Time filled with work",
      "Meaningful and focused time with someone",
      "Time spent alone",
    ],
    answer: "Meaningful and focused time with someone",
  },
  {
    question:
      "A long discussion ensued after the announcement. What does 'ensued' mean in this context?",
    options: ["Was avoided", "Happened as a result", "Was ignored"],
    answer: "Happened as a result",
  },
  {
    question:
      "She felt lost in a swirl of emotions. What does 'swirl of' imply here?",
    options: [
      "A single clear emotion",
      "A confusing mix of emotions",
      "No emotion at all",
    ],
    answer: "A confusing mix of emotions",
  },
  {
    question:
      "They go jogging every morning, rain or shine. What does 'rain or shine' mean in this sentence?",
    options: [
      "Only when it's sunny",
      "No matter the weather",
      "Only on weekends",
    ],
    answer: "No matter the weather",
  },
  {
    question:
      "Her boss chewed her out for missing the deadline. What does 'chewed her out' mean here?",
    options: ["Praised her", "Scolded her harshly", "Ignored her completely"],
    answer: "Scolded her harshly",
  },
  {
    question:
      "The novel’s dialogue felt hackneyed and unoriginal. What does 'hackneyed' mean here?",
    options: [
      "Creative and exciting",
      "Overused and cliché",
      "Hard to understand",
    ],
    answer: "Overused and cliché",
  },
  {
    question:
      "He tends to hunch over his desk while working. What does 'hunch over' mean?",
    options: [
      "Stand up straight",
      "Bend forward with shoulders curved",
      "Lie down completely",
    ],
    answer: "Bend forward with shoulders curved",
  },
  {
    question:
      "The doctor said he’s not out of the woods yet. What does 'out of the woods' mean in this sentence?",
    options: [
      "Still in danger or trouble",
      "Completely recovered",
      "Lost in nature",
    ],
    answer: "Still in danger or trouble",
  },
  {
    question:
      "She remained decorous throughout the ceremony. What does 'decorous' mean here?",
    options: [
      "Rude and loud",
      "Proper and well-behaved",
      "Distracted and unfocused",
    ],
    answer: "Proper and well-behaved",
  },
  {
    question:
      "Everyone left early and he was left holding the bag. What does 'holding the bag' mean here?",
    options: [
      "Being blamed or left with responsibility",
      "Winning a prize",
      "Receiving a compliment",
    ],
    answer: "Being blamed or left with responsibility",
  },
  {
    question:
      "She’s very fixed in her ways and dislikes change. What does 'fixed in her ways' suggest?",
    options: [
      "Flexible and open-minded",
      "Stubborn and unwilling to change",
      "Confused and indecisive",
    ],
    answer: "Stubborn and unwilling to change",
  },
  {
    question:
      "The politician’s comments caused public uproar. What does 'uproar' mean here?",
    options: [
      "Silence and calm",
      "Loud and widespread outrage",
      "Private discussion",
    ],
    answer: "Loud and widespread outrage",
  },
  {
    question:
      "The waiter was very obliging and quick to help. What does 'obliging' mean in this context?",
    options: [
      "Rude and uninterested",
      "Helpful and willing to assist",
      "Slow and lazy",
    ],
    answer: "Helpful and willing to assist",
  },
  {
    question:
      "She was aquiver with anticipation before the performance. What does 'aquiver' mean here?",
    options: [
      "Remaining calm and steady despite the excitement",
      "Trembling or shaking with excitement or nervousness",
      "Being deeply asleep and unaware of the surroundings",
    ],
    answer: "Trembling or shaking with excitement or nervousness",
  },
  {
    question:
      "He was the nestor of the group, respected for his wisdom. What does 'nestor' mean in this sentence?",
    options: [
      "A young and inexperienced person",
      "An elder known for wise counsel",
      "A lazy and careless member",
    ],
    answer: "An elder known for wise counsel",
  },
  {
    question:
      "This cheaper model gives me a bigger bang for my buck. What does 'bigger bang for my buck' imply?",
    options: [
      "More value for the money spent",
      "More expensive with fewer features",
      "Less quality at a high price",
    ],
    answer: "More value for the money spent",
  },
  {
    question:
      "A brief silence ensued after his outburst. What does 'ensued' mean in this context?",
    options: [
      "Was prevented",
      "Followed immediately after",
      "Was never noticed",
    ],
    answer: "Followed immediately after",
  },
  {
    question:
      "Even after everything, she trickled back into his life. What does 'trickled back' mean here?",
    options: [
      "Returned gradually and subtly",
      "Left permanently",
      "Demanded to come back forcefully",
    ],
    answer: "Returned gradually and subtly",
  },
  {
    question: "The sun always ____ (rise) in the east.",
    options: ["has risen", "rises", "will rise"],
    answer: "rises",
  },
  {
    question: "She usually ____ (drink) coffee with her breakfast.",
    options: ["drinks", "is drinking", "has drunk"],
    answer: "drinks",
  },
  {
    question: "The library ____ (open) at 9:00 AM every weekday.",
    options: ["has opened", "is opening", "opens"],
    answer: "opens",
  },
  {
    question: "Birds ____ (migrate) south for the winter.",
    options: ["are migrating", "migrate", "will migrate"],
    answer: "migrate",
  },
  {
    question: "He ____ (not / play) tennis on weekends; he prefers swimming.",
    options: ["doesn't play", "isn't playing", "hasn't played"],
    answer: "doesn't play",
  },
  {
    question: "How often ____ (you / visit) your grandparents?",
    options: ["are you visiting", "do you visit", "have you visited"],
    answer: "do you visit",
  },
  {
    question: "Water ____ (boil) at 100 degrees Celsius.",
    options: ["boils", "has boiled", "is boiling"],
    answer: "boils",
  },
  {
    question: "They ____ (live) in a small apartment downtown.",
    options: ["are living", "have lived", "live"],
    answer: "live",
  },
  {
    question: "My train ____ (leave) at 6:30 PM this evening.",
    options: ["is leaving", "leaves", "will leave"],
    answer: "leaves",
  },
  {
    question: "The chef ____ (bake) fresh bread every morning.",
    options: ["bakes", "has baked", "is baking"],
    answer: "bakes",
  },
  {
    question: "My brother always ____ (read) the newspaper during breakfast.",
    options: ["has read", "reads", "is reading"],
    answer: "reads",
  },
  {
    question: "The earth ____ (revolve) around the sun.",
    options: ["is revolving", "revolves", "will revolve"],
    answer: "revolves",
  },
  {
    question: "She ____ (go) to the gym three times a week.",
    options: ["goes", "has gone", "is going"],
    answer: "goes",
  },
  {
    question: "We ____ (not / watch) much television in our house.",
    options: ["aren't watching", "don't watch", "haven't watched"],
    answer: "don't watch",
  },
  {
    question: "The local train ____ (arrive) at 8:15 AM daily.",
    options: ["is arriving", "arrives", "will arrive"],
    answer: "arrives",
  },
  {
    question: "He ____ (teach) English at the local high school.",
    options: ["has taught", "is teaching", "teaches"],
    answer: "teaches",
  },
  {
    question: "How many languages ____ (you / speak)?",
    options: ["are you speaking", "do you speak", "have you spoken"],
    answer: "do you speak",
  },
  {
    question: "Factories often ____ (produce) a lot of waste.",
    options: ["are producing", "have produced", "produce"],
    answer: "produce",
  },
  {
    question: "The museum ____ (close) at 5:00 PM on Sundays.",
    options: ["closes", "has closed", "is closing"],
    answer: "closes",
  },
  {
    question: "My neighbor ____ (walk) his dog every morning.",
    options: ["is walking", "has walked", "walks"],
    answer: "walks",
  },
  {
    question:
      "Her eyes are red and puffy; she ____ (cry) all morning since the sad news.",
    options: ["has cried a lot", "has been crying", "was crying steadily"],
    answer: "has been crying",
  },
  {
    question:
      "I'm exhausted because I ____ (prepare) for this conference for weeks, and it's finally tomorrow.",
    options: [
      "had been preparing the materials",
      "have prepared everything",
      "have been preparing",
    ],
    answer: "have been preparing",
  },
  {
    question:
      "The construction workers ____ (build) this skyscraper for over two years, and they're still not finished.",
    options: [
      "have been building",
      "have already built",
      "were building the foundations",
    ],
    answer: "have been building",
  },
  {
    question:
      "My throat is sore because I ____ (shout) at the football game for the last three hours.",
    options: [
      "have been shouting",
      "had shouted too loudly",
      "have shouted all my voice away",
    ],
    answer: "have been shouting",
  },
  {
    question:
      "Why are the children covered in mud? They ____ (play) in the garden all afternoon!",
    options: [
      "have been playing",
      "have played some games",
      "were playing outside noisily",
    ],
    answer: "have been playing",
  },
  {
    question:
      "She ____ (train) for the marathon since January, and she looks really fit now.",
    options: [
      "had trained very hard",
      "has trained with dedication",
      "has been training",
    ],
    answer: "has been training",
  },
  {
    question:
      "I ____ (not / sleep) well recently, which is why I feel so irritable.",
    options: [
      "have not been sleeping",
      "have not slept properly",
      "was not sleeping soundly",
    ],
    answer: "have not been sleeping",
  },
  {
    question:
      "How long ____ (you / learn) English? Your accent is really good!",
    options: [
      "have you been learning",
      "have you learned many words",
      "were you learning your lessons",
    ],
    answer: "have you been learning",
  },
  {
    question:
      "The air quality is terrible today because the factory ____ (release) smoke for hours.",
    options: [
      "has been releasing",
      "has released a lot of fumes",
      "was releasing pollutants",
    ],
    answer: "has been releasing",
  },
  {
    question:
      "We ____ (try) to contact him since yesterday evening, but his phone is still off.",
    options: [
      "had tried calling him",
      "have been trying",
      "have tried several times",
    ],
    answer: "have been trying",
  },
  {
    question:
      "The children ____ (play) in the park at this very moment; you can hear their laughter.",
    options: ["are playing", "have played", "were playing"],
    answer: "are playing",
  },
  {
    question:
      "Please be quiet! I ____ (try) to concentrate on my homework right now.",
    options: ["am trying", "have tried", "will try"],
    answer: "am trying",
  },
  {
    question:
      "Look! John ____ (run) towards the finish line; he's almost there!",
    options: ["is running", "runs", "will run"],
    answer: "is running",
  },
  {
    question:
      "My sister ____ (study) for her final exams all weekend; she barely leaves her room.",
    options: ["is studying", "has studied", "will study"],
    answer: "is studying",
  },
  {
    question:
      "They ____ (build) a new house down the street these days, and it's almost finished.",
    options: ["are building", "have built", "will build"],
    answer: "are building",
  },
  {
    question: "Why ____ (you / wear) a coat? It's really warm outside today!",
    options: ["are you wearing", "do you wear", "have you worn"],
    answer: "are you wearing",
  },
  {
    question:
      "The chef ____ (prepare) a special dinner for the guests at the moment; it smells delicious!",
    options: ["has prepared", "prepares", "is preparing"],
    answer: "is preparing",
  },
  {
    question: "I ____ (not / feel) well, so I'm going to lie down for a bit.",
    options: [
      "am not feeling",
      "don't usually feel well",
      "haven't felt much better",
    ],
    answer: "am not feeling",
  },
  {
    question: "Excuse me, ____ (you / wait) for the bus right now?",
    options: ["are you waiting", "did you wait long", "do you usually wait"],
    answer: "are you waiting",
  },
  {
    question:
      "The company ____ (develop) a new software program this year; it's a big, ongoing project.",
    options: [
      "develops rapidly",
      "has developed several products",
      "is developing",
    ],
    answer: "is developing",
  },
  {
    question:
      "I ____ (not / see) my old college roommate since graduation; I miss her.",
    options: ["didn't see her often", "don't usually see her", "haven't seen"],
    answer: "haven't seen",
  },
  {
    question: "____ (you / ever / try) authentic Italian pizza in Italy?",
    options: [
      "Did you ever try it",
      "Do you ever try new foods",
      "Have you ever tried",
    ],
    answer: "Have you ever tried",
  },
  {
    question:
      "The train ____ (just / arrive) at the station, so we should hurry to catch it.",
    options: [
      "has just arrived",
      "just arrived a moment ago",
      "just arrives always",
    ],
    answer: "has just arrived",
  },
  {
    question:
      "My brother ____ (lose) his wallet, so he can't pay for dinner now.",
    options: ["has lost", "lost it", "loses things often"],
    answer: "has lost",
  },
  {
    question:
      "We ____ (know) each other for more than twenty years; we're very close friends.",
    options: ["had known them", "have known", "knew each other"],
    answer: "have known",
  },
  {
    question:
      "This is the first time I ____ (eat) authentic Mexican food; it's quite a culinary experience.",
    options: ["am eating", "ate", "have eaten"],
    answer: "have eaten",
  },
  {
    question: "How long ____ (your parents / live) in their current house?",
    options: [
      "did your parents live there",
      "do your parents currently live",
      "have your parents lived",
    ],
    answer: "have your parents lived",
  },
  {
    question:
      "They ____ (already / watch) that documentary, so they don't want to see it again.",
    options: [
      "already watched the whole thing",
      "have already watched",
      "will already watch it later",
    ],
    answer: "have already watched",
  },
  {
    question:
      "Someone ____ (leave) the gate open, and now the dog has escaped!",
    options: ["has left", "left the gate open", "leaves gates open sometimes"],
    answer: "has left",
  },
  {
    question:
      "The company ____ (achieve) all its financial targets for this quarter.",
    options: [
      "achieved its goals last year",
      "achieves objectives regularly",
      "has achieved",
    ],
    answer: "has achieved",
  },
  {
    question:
      "She ____ (not / finish) her presentation for tomorrow's meeting yet.",
    options: ["didn't finish", "doesn't finish", "hasn't finished"],
    answer: "hasn't finished",
  },
  {
    question: "How many books ____ (you / read) this year so far?",
    options: ["did you read", "do you read", "have you read"],
    answer: "have you read",
  },
  {
    question:
      "The company ____ (grow) significantly since its humble beginnings in 2000.",
    options: ["grew", "has grown", "grows"],
    answer: "has grown",
  },
  {
    question:
      "Someone ____ (break) the glass on the front door; it's shattered everywhere.",
    options: ["broke", "has broken", "breaks"],
    answer: "has broken",
  },
  {
    question:
      "Don't worry about the email; I ____ (already / send) it to the client.",
    options: ["already sent", "have already sent", "will already send"],
    answer: "have already sent",
  },
  {
    question: "Our team ____ (win) every game this season so far.",
    options: ["has won", "have win", "wins"],
    answer: "has won",
  },
  {
    question: "My neighbor ____ (just / buy) a brand new electric car.",
    options: ["has just buy", "has just bought", "just bought"],
    answer: "has just bought",
  },
  {
    question: "This is the first time I ____ (eat) authentic Mexican food.",
    options: ["ate", "have eat", "have eaten"],
    answer: "have eaten",
  },
  {
    question: "How long ____ (your parents / live) in their current house?",
    options: [
      "did your parents live",
      "have your parents lived",
      "has your parents lived",
    ],
    answer: "have your parents lived",
  },
  {
    question:
      "They ____ (already / watch) that documentary, so they don't want to see it again.",
    options: ["already watched", "have already watched", "has already watched"],
    answer: "have already watched",
  },
  {
    question: "Someone ____ (leave) the gate open, and the dog has escaped!",
    options: ["has left", "have left", "left"],
    answer: "has left",
  },
  {
    question:
      "The company ____ (achieve) all its financial targets for this quarter.",
    options: ["achieved", "has achieved", "have achieved"],
    answer: "has achieved",
  },
  {
    question:
      "I ____ (read) a fascinating novel when you called me last night.",
    options: ["did reading", "had read", "was reading"],
    answer: "was reading",
  },
  {
    question:
      "At 8 o'clock yesterday evening, she ____ (cook) dinner for her family.",
    options: ["did cooking", "had cooked", "was cooking"],
    answer: "was cooking",
  },
  {
    question:
      "He __________ (listen) to music when his boss suddenly walked into the office.",
    options: ["had listened", "listened", "was listening"],
    answer: "was listening",
  },
  {
    question:
      "The students __________ (work) on their group project all afternoon yesterday.",
    options: ["had worked", "worked", "were working"],
    answer: "were working",
  },
  {
    question:
      "While my sister __________ (talk) on the phone, I was preparing dinner.",
    options: ["had talked", "have talked", "was talking"],
    answer: "was talking",
  },
  {
    question:
      "I __________ (not / sleep) when the earthquake hit; I was reading a book.",
    options: ["didn't sleeping", "hadn't slept", "was not sleeping"],
    answer: "was not sleeping",
  },
  {
    question:
      "What __________ (the children / do) when their parents arrived home unexpectedly?",
    options: [
      "did the children doing",
      "had the children done",
      "were the children doing",
    ],
    answer: "were the children doing",
  },
  {
    question:
      "The sun __________ (set) beautifully as we drove along the coast.",
    options: ["had been set", "was setting", "were setting"],
    answer: "was setting",
  },
  {
    question:
      "She __________ (pack) her suitcase when her flight was announced over the loudspeaker.",
    options: ["had packed", "was packing", "were packing"],
    answer: "was packing",
  },
  {
    question:
      "They __________ (wait) for us at the cafe for an hour before we finally arrived.",
    options: ["had waited", "was waiting", "were waiting"],
    answer: "were waiting",
  },
  {
    question:
      "My computer __________ (make) a strange noise all evening until it finally crashed.",
    options: ["had made", "made", "was making"],
    answer: "was making",
  },
  {
    question:
      "From 10 to 11 AM, the team __________ (practice) their presentation for the client.",
    options: ["had practiced", "practiced", "was practicing"],
    answer: "was practicing",
  },
  {
    question:
      "Last night, I __________ (watch) a really interesting documentary on TV.",
    options: ["had watched", "have watched", "watched"],
    answer: "watched",
  },
  {
    question: "She __________ (move) to Canada in 2018 to start a new life.",
    options: ["has moved", "moves", "moved"],
    answer: "moved",
  },
  {
    question:
      "My parents __________ (not / go) to the party last weekend because they were ill.",
    options: ["didn't go", "haven't gone", "weren't going"],
    answer: "didn't go",
  },
  {
    question: "When __________ (you / finish) your university degree?",
    options: ["did you finish", "have you finished", "were you finishing"],
    answer: "did you finish",
  },
  {
    question: "They __________ (eat) pizza for dinner three nights ago.",
    options: ["ate", "have eaten", "were eating"],
    answer: "ate",
  },
  {
    question:
      "He __________ (live) in that small village for twenty years before moving to the city.",
    options: ["has lived", "lived", "lives"],
    answer: "lived",
  },
  {
    question:
      "I __________ (wake up) late, ate breakfast, and then rushed to work this morning.",
    options: ["have woken up", "wake up", "woke up"],
    answer: "woke up",
  },
  {
    question:
      "The company __________ (launch) its new product successfully last month.",
    options: ["has launched", "launched", "launches"],
    answer: "launched",
  },
  {
    question:
      "We __________ (visit) the museum last summer, and it was fascinating.",
    options: ["have visited", "visited", "were visiting"],
    answer: "visited",
  },
  {
    question:
      "Unfortunately, she __________ (break) her leg while skiing two months ago.",
    options: ["broke", "has broken", "was breaking"],
    answer: "broke",
  },
  {
    question:
      "By the time we arrived at the cinema, the movie __________ (already / start).",
    options: [
      "did already start",
      "had already started",
      "was already starting",
    ],
    answer: "had already started",
  },
  {
    question:
      "She couldn't get into her house because she __________ (lose) her keys earlier that day.",
    options: ["had lost", "had lose", "lost"],
    answer: "had lost",
  },
  {
    question:
      "He __________ (not / study) for the test, so he failed it badly.",
    options: ["hadn't studied", "hadn't study", "wasn't studying"],
    answer: "hadn't studied",
  },
  {
    question:
      "After they __________ (eat) dinner, they decided to go for a walk in the park.",
    options: ["ate", "had eaten", "had eat"],
    answer: "had eaten",
  },
  {
    question:
      "The old bridge collapsed because the engineers __________ (not / maintain) it properly for years.",
    options: ["didn't maintained", "hadn't maintained", "weren't maintaining"],
    answer: "hadn't maintained",
  },
  {
    question:
      "I finally found the book that I __________ (look for) since last week.",
    options: ["had looked for", "had looking for", "looked for"],
    answer: "had looked for",
  },
  {
    question:
      "When the police arrived, the thieves __________ (already / escape).",
    options: [
      "already escaped",
      "had already escaped",
      "were already escaping",
    ],
    answer: "had already escaped",
  },
  {
    question:
      "She __________ (live) in Paris for five years before she moved to London.",
    options: ["had lived", "lived", "was living"],
    answer: "had lived",
  },
  {
    question:
      "He was tired because he __________ (work) on his project all night.",
    options: ["had worked", "worked", "was working"],
    answer: "had worked",
  },
  {
    question:
      "By the time I returned home, my brother __________ (already / leave) for his trip.",
    options: ["already left", "had already left", "was already leaving"],
    answer: "had already left",
  },
  {
    question:
      "Her eyes were red because she __________ (cry) for a long time before her friend arrived.",
    options: ["had cried", "had been crying", "was crying"],
    answer: "had been crying",
  },
  {
    question:
      "The road was very slippery as it __________ (snow) continuously for several hours that morning.",
    options: ["had snowed", "had been snowing", "was snowing"],
    answer: "had been snowing",
  },
  {
    question:
      "He finally passed his driving test after he __________ (practice) for over six months.",
    options: ["had practiced", "had been practicing", "practiced"],
    answer: "had been practicing",
  },
  {
    question:
      "I was exhausted because I __________ (work) on the presentation all night.",
    options: ["had worked", "had been working", "worked"],
    answer: "had been working",
  },
  {
    question:
      "By the time the police found him, he __________ (hide) in the abandoned building for hours.",
    options: ["had hidden", "had been hiding", "was hiding"],
    answer: "had been hiding",
  },
  {
    question:
      "She __________ (travel) around South America for three months before she ran out of money.",
    options: ["had traveled", "had been traveling", "traveled"],
    answer: "had been traveling",
  },
  {
    question:
      "The children were soaking wet because they __________ (play) in the rain for an hour.",
    options: ["had played", "had been playing", "were playing"],
    answer: "had been playing",
  },
  {
    question:
      "They were angry because they __________ (wait) for us for a very long time.",
    options: ["had waited", "had been waiting", "were waiting"],
    answer: "had been waiting",
  },
  {
    question:
      "My computer __________ (make) a strange noise for days before it finally crashed.",
    options: ["had made", "had been making", "made"],
    answer: "had been making",
  },
  {
    question:
      "We were surprised because he __________ (learn) Spanish in secret for a year before he told us.",
    options: ["had learned", "had been learning", "learned"],
    answer: "had been learning",
  },
  {
    question:
      "I think the weather __________ (be) sunny tomorrow, according to the forecast.",
    options: ["be", "is", "will be"],
    answer: "will be",
  },
  {
    question:
      "Don't worry about the heavy box; I __________ (help) you carry it.",
    options: ["am helping", "help", "will help"],
    answer: "will help",
  },
  {
    question:
      "The train to Rio de Janeiro __________ (depart) from Platform 3 at 7:00 PM.",
    options: ["departs", "is departing", "will depart"],
    answer: "will depart",
  },
  {
    question:
      "I promise, I __________ (call) you as soon as I arrive at the airport.",
    options: ["am calling", "call", "will call"],
    answer: "will call",
  },
  {
    question:
      "She's very talented; I'm sure she __________ (become) a famous artist one day.",
    options: ["becomes", "is becoming", "will become"],
    answer: "will become",
  },
  {
    question:
      "We haven't decided yet, but we probably __________ (visit) our grandparents next weekend.",
    options: ["are visiting", "visit", "will visit"],
    answer: "will visit",
  },
  {
    question:
      "The meeting __________ (take place) in Room B on the second floor.",
    options: ["takes place", "will take place", "is taking place"],
    answer: "will take place",
  },
  {
    question: "If it rains, we __________ (stay) home and watch movies.",
    options: ["are staying", "stay", "will stay"],
    answer: "will stay",
  },
  {
    question:
      "Look! The baby is yawning. I think he __________ (fall) asleep soon.",
    options: ["is falling", "falls", "will fall"],
    answer: "will fall",
  },
  {
    question:
      "Please send me your updated report; I __________ (review) it by the end of the day.",
    options: ["am reviewing", "review", "will review"],
    answer: "will review",
  },
  {
    question:
      "This time next week, I __________ (lie) on a beach in Hawaii, enjoying the sun.",
    options: ["am lying", "will be lying", "will lying"],
    answer: "will be lying",
  },
  {
    question:
      "At 9 o'clock tomorrow morning, we __________ (have) our weekly team meeting.",
    options: ["will be having", "will have", "will having"],
    answer: "will be having",
  },
  {
    question:
      "Don't call me between 7 and 8 PM; I __________ (eat) dinner with my family.",
    options: ["will be eating", "will eat", "will eating"],
    answer: "will be eating",
  },
  {
    question:
      "When you arrive at the airport, I __________ (wait) for you near the baggage claim.",
    options: ["will be waiting", "will waiting", "will wait"],
    answer: "will be waiting",
  },
  {
    question:
      "By this time next year, she __________ (study) at a university abroad.",
    options: ["will be studying", "will studying", "will study"],
    answer: "will be studying",
  },
  {
    question:
      "While I __________ (work) on my essay tonight, my roommate will probably be watching TV.",
    options: ["will be working", "will working", "will work"],
    answer: "will be working",
  },
  {
    question:
      "He can't meet you on Friday; he __________ (travel) to another city for a conference.",
    options: ["will be traveling", "will traveling", "will travel"],
    answer: "will be traveling",
  },
  {
    question:
      "The kids __________ (sleep) soundly by the time we get home from the party tonight.",
    options: ["will be sleeping", "will sleep", "will sleeping"],
    answer: "will be sleeping",
  },
  {
    question:
      "What __________ (you / do) this exact moment tomorrow afternoon?",
    options: ["will be you doing", "will you be doing", "will you doing"],
    answer: "will you be doing",
  },
  {
    question:
      "Don't worry about the presentation; I __________ (prepare) it all day tomorrow.",
    options: ["will be preparing", "will have prepared", "will prepare"],
    answer: "will be preparing",
  },
  {
    question: "By the time you arrive, I __________ (finish) cooking dinner.",
    options: ["am finishing", "will have finished", "will finish"],
    answer: "will have finished",
  },
  {
    question:
      "By next month, she __________ (work) at this company for exactly five years.",
    options: ["will be working", "will have worked", "will work"],
    answer: "will have worked",
  },
  {
    question:
      "They __________ (complete) the entire renovation by the end of July.",
    options: ["are completing", "will be completing", "will have completed"],
    answer: "will have completed",
  },
  {
    question:
      "I hope I __________ (save) enough money for a new car by my birthday next year.",
    options: ["am saving", "will be saving", "will have saved"],
    answer: "will have saved",
  },
  {
    question:
      "When he turns 30, he __________ (visit) every continent in the world.",
    options: ["will be visiting", "will have visited", "will be visited"],
    answer: "will have visited",
  },
  {
    question:
      "By the time the new semester begins, the university __________ (build) a new library.",
    options: ["is building", "will be building", "will have built"],
    answer: "will have built",
  },
  {
    question:
      "Don't worry about the report; I __________ (send) it to you by midday tomorrow.",
    options: ["am sending", "will be sending", "will have sent"],
    answer: "will have sent",
  },
  {
    question:
      "By this time tomorrow, the team __________ (arrive) in Tokyo for their tournament.",
    options: ["will be arriving", "will have arrived", "will arrive"],
    answer: "will have arrived",
  },
  {
    question:
      "She __________ (read) all the books in the series before the movie comes out next month.",
    options: ["will be reading", "will have read", "will have been read"],
    answer: "will have read",
  },
  {
    question:
      "If we continue at this pace, we __________ (finish) the entire project by Friday.",
    options: [
      "will be finishing",
      "will have finished",
      "will have been finishing",
    ],
    answer: "will have finished",
  },
  {
    question:
      "The crowd jeered at the performer’s mistake, making him feel humiliated. What does 'jeered' suggest in this context?",
    options: [
      "Cheered enthusiastically",
      "Mocked or taunted loudly",
      "Whispered encouragements",
    ],
    answer: "Mocked or taunted loudly",
  },
  {
    question:
      "Her sternest tone was reserved for moments when discipline was crucial. What does 'sterner' imply here?",
    options: [
      "Stricter and more serious",
      "Gentler and more compassionate",
      "Casual and relaxed",
    ],
    answer: "Stricter and more serious",
  },
  {
    question:
      "The comedian’s final act brought down the house with uproarious laughter. What does 'brought down the house' mean in this sentence?",
    options: [
      "Caused the audience to leave quietly",
      "Ended the show abruptly",
      "Elicited a strong, enthusiastic response",
    ],
    answer: "Elicited a strong, enthusiastic response",
  },
  {
    question:
      "She circumvented the rules by finding a loophole no one else noticed. What does 'circumvented' mean in this context?",
    options: [
      "Bypassed or avoided cleverly",
      "Strictly followed the guidelines",
      "Openly challenged the regulations",
    ],
    answer: "Bypassed or avoided cleverly",
  },
  {
    question:
      "After the breakup, her friends reassured her, saying, 'There are other fish in the sea.' What does this phrase imply?",
    options: [
      "There are many other opportunities or people available",
      "The situation is hopeless and should be abandoned",
      "Only one perfect match exists",
    ],
    answer: "There are many other opportunities or people available",
  },
  {
    question:
      "Constant exposure to the news began to desensitize her to the violence reported daily. What does 'desensitize' mean in this context?",
    options: [
      "Heighten emotional sensitivity",
      "Reduce emotional responsiveness",
      "Increase curiosity about events",
    ],
    answer: "Reduce emotional responsiveness",
  },
  {
    question:
      "He said he’d clean his room when pigs fly, showing his reluctance. What does 'when pigs fly' imply here?",
    options: [
      "Something that will happen soon",
      "A task he is eager to complete",
      "Something highly unlikely to occur",
    ],
    answer: "Something highly unlikely to occur",
  },
  {
    question:
      "The team’s incipient problems were ignored, leading to bigger issues later. What does 'incipient' suggest in this sentence?",
    options: [
      "Fully developed and obvious",
      "Just beginning or emerging",
      "Completely resolved",
    ],
    answer: "Just beginning or emerging",
  },
  {
    question:
      "She gave her friend the short shrift when asked for help, focusing on her own tasks. What does 'gave her friend the short shrift' mean here?",
    options: [
      "Offered generous and thoughtful assistance",
      "Dismissed quickly with little attention",
      "Provided detailed and patient advice",
    ],
    answer: "Dismissed quickly with little attention",
  },
  {
    question:
      "His ace in the hole was a secret investor who could save the project. What does 'ace in the hole' refer to in this context?",
    options: [
      "A hidden advantage or resource",
      "A public and well-known strategy",
      "A risky and unreliable plan",
    ],
    answer: "A hidden advantage or resource",
  },
  {
    question:
      "The speaker was cut off mid-sentence when the microphone failed. What does 'cut off' mean in this context?",
    options: [
      "Abruptly interrupted or stopped",
      "Encouraged to continue speaking",
      "Gently transitioned to another topic",
    ],
    answer: "Abruptly interrupted or stopped",
  },
  {
    question:
      "By saying my work was 'decent,' she was damning me with faint praise. What does 'damning me with faint praise' imply here?",
    options: [
      "Offering mild praise that feels critical",
      "Giving enthusiastic and genuine compliments",
      "Expressing complete disapproval",
    ],
    answer: "Offering mild praise that feels critical",
  },
  {
    question:
      "The chief appeared in full regalia, impressing everyone at the ceremony. What does 'regalia' refer to in this sentence?",
    options: [
      "Casual everyday clothing",
      "Simple and modest garments",
      "Ornate ceremonial attire",
    ],
    answer: "Ornate ceremonial attire",
  },
  {
    question:
      "After the victory, she felt emboldened to take on new challenges. What does 'emboldened' suggest in this context?",
    options: [
      "Discouraged and hesitant",
      "Confused and uncertain",
      "Confident and courageous",
    ],
    answer: "Confident and courageous",
  },
  {
    question:
      "During the crisis, he was running around like a chicken with its head cut off. What does 'like a chicken with its head cut off' mean here?",
    options: [
      "Acting calmly and methodically",
      "Behaving frantically and without direction",
      "Moving slowly and deliberately",
    ],
    answer: "Behaving frantically and without direction",
  },
  {
    question:
      "His derisive laughter made her feel belittled during the presentation. What does 'derisive' suggest in this context?",
    options: [
      "Supportive and encouraging",
      "Mocking and scornful",
      "Quiet and respectful",
    ],
    answer: "Mocking and scornful",
  },
  {
    question:
      "She heard it on the grapevine that the company was planning layoffs. What does 'heard it on the grapevine' mean here?",
    options: [
      "Received an official announcement",
      "Read in a formal report",
      "Learned through informal rumors",
    ],
    answer: "Learned through informal rumors",
  },
  {
    question:
      "When he found out about the betrayal, he was mad as a hornet. What does 'mad as a hornet' imply in this sentence?",
    options: [
      "Slightly annoyed but calm",
      "Confused but indifferent",
      "Extremely angry and agitated",
    ],
    answer: "Extremely angry and agitated",
  },
  {
    question:
      "She told him off after he kept interrupting her during the meeting. What does 'told him off' mean in this context?",
    options: [
      "Politely asked him to be quiet",
      "Gave him a detailed explanation",
      "Sharply reprimanded or scolded him",
    ],
    answer: "Sharply reprimanded or scolded him",
  },
  {
    question:
      "The spurious claims about the product’s benefits misled many customers. What does 'spurious' suggest in this context?",
    options: [
      "False or misleading",
      "Genuine and trustworthy",
      "Vague but accurate",
    ],
    answer: "False or misleading",
  },
  {
    question:
      "The ominous clouds on the horizon warned of an approaching storm. What does 'ominous' suggest in this context?",
    options: [
      "Cheerful and inviting",
      "Bright and promising",
      "Threatening or foreboding",
    ],
    answer: "Threatening or foreboding",
  },
  {
    question:
      "The kitschy decor of the diner gave it a quirky, nostalgic charm. What does 'kitschy' mean in this sentence?",
    options: [
      "Elegant and sophisticated",
      "Exaggeratedly sentimental or tacky",
      "Minimalist and modern",
    ],
    answer: "Exaggeratedly sentimental or tacky",
  },
  {
    question:
      "She was in a bind after forgetting her lines during the live performance. What does 'in a bind' imply here?",
    options: [
      "In a comfortable and easy situation",
      "In a difficult or problematic situation",
      "In a highly successful position",
    ],
    answer: "In a difficult or problematic situation",
  },
  {
    question:
      "He had to swallow his pride to apologize for his mistake. What does 'swallow your pride' mean in this context?",
    options: [
      "Boast about one’s achievements",
      "Set aside ego to admit fault",
      "Refuse to acknowledge errors",
    ],
    answer: "Set aside ego to admit fault",
  },
  {
    question:
      "Her belligerence during the debate alienated many of her supporters. What does 'belligerence' suggest in this context?",
    options: [
      "Friendly and cooperative attitude",
      "Aggressive or hostile behavior",
      "Calm and diplomatic approach",
    ],
    answer: "Aggressive or hostile behavior",
  },
  {
    question:
      "He was a couch potato, spending weekends binge-watching shows instead of exercising. What does 'couch potato' mean in this context?",
    options: [
      "An active and energetic person",
      "A professional athlete",
      "Someone who is lazy and sedentary",
    ],
    answer: "Someone who is lazy and sedentary",
  },
  {
    question:
      "She expostulated loudly when her idea was ignored during the meeting. What does 'expostulated' suggest in this sentence?",
    options: [
      "Objected or protested strongly",
      "Agreed enthusiastically",
      "Listened quietly",
    ],
    answer: "Objected or protested strongly",
  },
  {
    question:
      "With a mischievous grin, he hid his sister’s favorite toy as a prank. What does 'mischievous grin' imply here?",
    options: [
      "A playful and naughty smile",
      "A shy and nervous smile",
      "A serious and focused expression",
    ],
    answer: "A playful and naughty smile",
  },
  {
    question:
      "The decision was cut and dried, leaving no room for debate. What does 'cut and dried' mean in this context?",
    options: [
      "Open to multiple interpretations",
      "Clear and already decided",
      "Completely uncertain",
    ],
    answer: "Clear and already decided",
  },
  {
    question:
      "He inquired politely about the details of the upcoming event. What does 'inquired' suggest in this sentence?",
    options: [
      "Demanded aggressively",
      "Ignored completely",
      "Asked or sought information",
    ],
    answer: "Asked or sought information",
  },
  {
    question:
      "She went the extra mile to ensure the project was completed on time. What does 'went the extra mile' mean in this context?",
    options: [
      "Put in exceptional effort beyond expectations",
      "Did the bare minimum required",
      "Delayed the project unnecessarily",
    ],
    answer: "Put in exceptional effort beyond expectations",
  },
  {
    question:
      "The teenagers were asked to stop loitering outside the store after hours. What does 'loitering' suggest in this sentence?",
    options: [
      "Working diligently in a group",
      "Shopping actively inside",
      "Lingering aimlessly or idly",
    ],
    answer: "Lingering aimlessly or idly",
  },
  {
    question:
      "His perfidious actions betrayed the trust of his closest allies. What does 'perfidious' imply in this context?",
    options: [
      "Deceitful and treacherous",
      "Loyal and trustworthy",
      "Honest and straightforward",
    ],
    answer: "Deceitful and treacherous",
  },
  {
    question:
      "The new evidence cast doubt on the validity of the original report. What does 'cast doubt' mean in this sentence?",
    options: [
      "Confirmed the accuracy",
      "Raised uncertainty or suspicion",
      "Fully supported the findings",
    ],
    answer: "Raised uncertainty or suspicion",
  },
  {
    question:
      "She sweated blood to prepare for the challenging exam. What does 'sweated blood' suggest in this context?",
    options: [
      "Struggled intensely with great effort",
      "Worked with minimal effort",
      "Relaxed and took it easy",
    ],
    answer: "Struggled intensely with great effort",
  },
  {
    question:
      "Her grit helped her push through the toughest challenges of the competition. What does 'grit' suggest in this context?",
    options: [
      "Courage and perseverance",
      "Lack of effort or determination",
      "Tendency to give up easily",
    ],
    answer: "Courage and perseverance",
  },
  {
    question:
      "The team decided to call it a day after hours of unproductive discussions. What does 'to call it a day' mean in this sentence?",
    options: [
      "End work or activity for the day",
      "Continue working late into the night",
      "Start a new project immediately",
    ],
    answer: "End work or activity for the day",
  },
  {
    question:
      "Their tit for tat exchanges escalated into a full-blown argument. What does 'tit for tat' imply here?",
    options: [
      "Friendly and cooperative gestures",
      "Unrelated and random comments",
      "Retaliatory actions or responses",
    ],
    answer: "Retaliatory actions or responses",
  },
  {
    question:
      "The din of the crowded market made it hard to hear her friend. What does 'din' suggest in this context?",
    options: [
      "Quiet and peaceful atmosphere",
      "Soft and soothing background music",
      "Loud and chaotic noise",
    ],
    answer: "Loud and chaotic noise",
  },
  {
    question:
      "After winning the award, she felt like a million dollars. What does 'felt like a million dollars' mean in this context?",
    options: [
      "Felt exhausted and overwhelmed",
      "Felt extremely happy and confident",
      "Felt financially burdened",
    ],
    answer: "Felt extremely happy and confident",
  },
  {
    question:
      "The anonymous benefactor donated millions to rebuild the community center. What does 'benefactor' mean in this context?",
    options: [
      "A critic who opposes projects",
      "A person who provides financial or other support",
      "An employee managing funds",
    ],
    answer: "A person who provides financial or other support",
  },
  {
    question:
      "She spoke with candor about her mistakes, earning the team's respect. What does 'candor' suggest in this sentence?",
    options: [
      "Deceptive and guarded speech",
      "Honest and straightforward openness",
      "Vague and ambiguous remarks",
    ],
    answer: "Honest and straightforward openness",
  },
  {
    question:
      "I escaped the deadline by the skin of my teeth, submitting my work just in time. What does 'by the skin of my teeth' imply here?",
    options: [
      "With plenty of time to spare",
      "By a very narrow margin",
      "With complete confidence",
    ],
    answer: "By a very narrow margin",
  },
  {
    question:
      "The old radio was on the blink, crackling and fading in and out. What does 'on the blink' mean in this context?",
    options: [
      "Working perfectly",
      "Malfunctioning or unreliable",
      "Brand new and advanced",
    ],
    answer: "Malfunctioning or unreliable",
  },
  {
    question:
      "When she started making eyes at the new employee, everyone noticed her flirtatious behavior. What does 'making eyes at the' suggest in this sentence?",
    options: [
      "Ignoring someone completely",
      "Staring with disapproval",
      "Giving flirtatious or suggestive looks",
    ],
    answer: "Giving flirtatious or suggestive looks",
  },
  {
    question:
      "She loved to dish the dirt about her coworkers during lunch breaks. What does 'dish the dirt' mean in this context?",
    options: [
      "Share professional updates",
      "Clean up a messy situation",
      "Gossip or reveal scandals",
    ],
    answer: "Gossip or reveal scandals",
  },
  {
    question:
      "He was the spitting image of his father, from his smile to his mannerisms. What does 'spitting image' suggest in this sentence?",
    options: [
      "A distant resemblance",
      "A completely different appearance",
      "An exact or very close likeness",
    ],
    answer: "An exact or very close likeness",
  },
  {
    question:
      "After the exam, she just wanted to veg out and watch movies all day. What does 'veg out' imply here?",
    options: [
      "Work diligently on a task",
      "Cook a healthy meal",
      "Relax and do nothing productive",
    ],
    answer: "Relax and do nothing productive",
  },
  {
    question:
      "He got so worked up about the argument that he couldn’t sleep. What does 'worked up' mean in this context?",
    options: [
      "Calm and composed",
      "Emotionally agitated or upset",
      "Physically exhausted",
    ],
    answer: "Emotionally agitated or upset",
  },
  {
    question:
      "Her magnanimous gesture of forgiving her rival earned her widespread admiration. What does 'magnanimous' suggest in this sentence?",
    options: [
      "Petty and resentful",
      "Generous and noble in spirit",
      "Cautious and reserved",
    ],
    answer: "Generous and noble in spirit",
  },
  {
    question:
      "Instead of arguing, she chose to turn the other cheek when insulted. What does 'turn the other cheek' mean in this context?",
    options: [
      "Respond with aggression",
      "Ignore an insult and avoid retaliation",
      "Demand an apology immediately",
    ],
    answer: "Ignore an insult and avoid retaliation",
  },
  {
    question:
      "He filed a grievance with the company over unfair treatment at work. What does 'grievance' suggest in this sentence?",
    options: [
      "A formal complaint about a perceived wrong",
      "A casual suggestion for improvement",
      "A positive review of workplace conditions",
    ],
    answer: "A formal complaint about a perceived wrong",
  },
  {
    question:
      "The protracted negotiations delayed the project for months. What does 'protracted' imply in this context?",
    options: [
      "Quick and efficient",
      "Smooth and cooperative",
      "Drawn out or prolonged",
    ],
    answer: "Drawn out or prolonged",
  },
  {
    question:
      "His bravado during the debate masked his lack of preparation. What does 'bravado' mean in this sentence?",
    options: [
      "Genuine confidence and skill",
      "Quiet and humble demeanor",
      "Bold or showy display of courage",
    ],
    answer: "Bold or showy display of courage",
  },
  {
    question:
      "The team was stymied by the unexpected technical issues during the launch. What does 'stymied' suggest in this context?",
    options: [
      "Encouraged and motivated",
      "Blocked or hindered",
      "Easily resolved",
    ],
    answer: "Blocked or hindered",
  },
  {
    question:
      "Her benevolent donation helped the shelter provide meals for the homeless. What does 'benevolent' mean in this context?",
    options: [
      "Indifferent and neutral",
      "Kind and generous",
      "Selfish and unwilling to help",
    ],
    answer: "Kind and generous",
  },
  {
    question:
      "He pulled the wool over my eyes with his convincing lies about the project. What does 'pulled the wool over my eyes' imply here?",
    options: [
      "Clearly explained the situation",
      "Deceived or misled me",
      "Was completely honest and transparent",
    ],
    answer: "Deceived or misled me",
  },
  {
    question:
      "The news of her promotion was a bolt from the blue, surprising everyone. What does 'bolt from the blue' mean in this sentence?",
    options: [
      "A gradual and predictable change",
      "A sudden and unexpected occurrence",
      "An expected and planned event",
    ],
    answer: "A sudden and unexpected occurrence",
  },
  {
    question:
      "As a new employee, she took time to learn the ropes of the company’s procedures. What does 'learn the ropes' suggest in this context?",
    options: [
      "Ignore workplace rules",
      "Master complex technical skills",
      "Understand the basics of a job or process",
    ],
    answer: "Understand the basics of a job or process",
  },
  {
    question:
      "His ebullient personality lit up the room at every gathering. What does 'ebullient' imply in this sentence?",
    options: [
      "Enthusiastic and lively",
      "Serious and focused",
      "Shy and reserved",
    ],
    answer: "Enthusiastic and lively",
  },
  {
    question:
      "The activist published a manifesto outlining her vision for social change. What does 'manifesto' mean in this context?",
    options: [
      "A fictional story",
      "A public declaration of intentions or beliefs",
      "A private journal entry",
    ],
    answer: "A public declaration of intentions or beliefs",
  },
  {
    question:
      "He realized sharing his expertise with the uninterested group was like casting pearls before swine. What does 'casting pearls before swine' imply here?",
    options: [
      "Offering valuable things to those who don’t appreciate them",
      "Selling goods at a low price",
      "Sharing knowledge with eager learners",
    ],
    answer: "Offering valuable things to those who don’t appreciate them",
  },
  {
    question:
      "At sixteen, she had an old head on young shoulders, making wise decisions beyond her years. What does 'an old head on young shoulders' suggest in this sentence?",
    options: [
      "Acting immaturely for one’s age",
      "Having wisdom unusual for one’s youth",
      "Struggling with simple decisions",
    ],
    answer: "Having wisdom unusual for one’s youth",
  },
  {
    question:
      "She was burning the candle at both ends, working late and rising early. What does 'burning the candle at both ends' mean in this context?",
    options: [
      "Conserving energy carefully",
      "Living a balanced and relaxed life",
      "Overworking by exhausting oneself",
    ],
    answer: "Overworking by exhausting oneself",
  },
  {
    question:
      "You can bet your boots that she’ll win the competition with her skills. What does 'you can bet your boots' imply in this sentence?",
    options: [
      "Be absolutely certain",
      "Doubt the outcome",
      "Take a risky gamble",
    ],
    answer: "Be absolutely certain",
  },
  {
    question:
      "The old factory languished in disrepair for decades. What does 'languished in' mean here?",
    options: ["Flourished actively", "Remained neglected", "Was renovated"],
    answer: "Remained neglected",
  },
  {
    question:
      "She rattled off the answers during the quiz, surprising everyone. What does 'rattled off' imply?",
    options: ["Forgot quickly", "Recited rapidly", "Spoke hesitantly"],
    answer: "Recited rapidly",
  },
  {
    question:
      "His scrupulous nature made him check every detail twice. What does 'scrupulous' suggest?",
    options: ["Careless", "Meticulous", "Reckless"],
    answer: "Meticulous",
  },
  {
    question:
      "The article’s false claims were deemed libel by the court. What does 'libel' mean?",
    options: ["Honest reporting", "Malicious falsehood", "Public praise"],
    answer: "Malicious falsehood",
  },
  {
    question:
      "A double whammy hit the team with two major setbacks. What does 'double whammy' imply?",
    options: ["Double success", "Major advantage", "Twofold setback"],
    answer: "Twofold setback",
  },
  {
    question:
      "The new policy was implemented to curb the rising costs. What does 'curb' mean in this context?",
    options: ["To ignore", "To control", "To increase"],
    answer: "To control",
  },
  {
    question:
      "He was caught red-handed taking the money. What does 'red-handed' imply?",
    options: ["Very angry", "In the act", "Not guilty"],
    answer: "In the act",
  },
  {
    question:
      "The speaker’s words resonated deeply with the audience. What does 'resonated' mean here?",
    options: ["Struck a chord", "Confused", "Were ignored"],
    answer: "Struck a chord",
  },
  {
    question:
      "He decided to sling his bag over his shoulder and leave. What does 'sling' mean here?",
    options: ["Throw carelessly", "Carry casually", "Fix tightly"],
    answer: "Carry casually",
  },
  {
    question:
      "After working nonstop, she felt completely burned out. What does 'burned out' mean?",
    options: ["Physically injured", "Exhausted mentally", "Highly motivated"],
    answer: "Exhausted mentally",
  },
  {
    question:
      "They organized a bash to celebrate the victory. What is a 'bash'?",
    options: ["A fight", "A party", "A mistake"],
    answer: "A party",
  },
  {
    question: "The bread was stale and hard to eat. What does 'stale' mean?",
    options: ["Fresh", "Old and dry", "Tasty"],
    answer: "Old and dry",
  },
  {
    question:
      "She showed great fortitude during the crisis. What is 'fortitude'?",
    options: ["Weakness", "Courage and strength", "Confusion"],
    answer: "Courage and strength",
  },
  {
    question:
      "The road made a sharp dogleg to the right. What is a 'dogleg' in this context?",
    options: ["A straight path", "A sharp bend", "A dead end"],
    answer: "A sharp bend",
  },
  {
    question:
      "He looked strung out after the long trip. What does 'strung out' mean?",
    options: ["Relaxed", "Tired and stressed", "Excited"],
    answer: "Tired and stressed",
  },
  {
    question:
      "The naughty puppy chewed up the shoes. What does 'naughty' mean?",
    options: ["Well-behaved", "Mischievous", "Scared"],
    answer: "Mischievous",
  },
  {
    question:
      "The team's ignominious defeat was hard to accept. What does 'ignominious' mean?",
    options: ["Honorable", "Shameful", "Unexpected"],
    answer: "Shameful",
  },
  {
    question:
      "Upwards of 100 people attended the event. What does 'upwards of' mean?",
    options: ["Exactly", "More than", "Less than"],
    answer: "More than",
  },
  {
    question:
      "They set him up with a job interview. What does 'set him up' mean here?",
    options: ["Framed him", "Arranged for him", "Helped him escape"],
    answer: "Arranged for him",
  },
  {
    question:
      "His plans for the business have gone up in smoke. What does this phrase mean?",
    options: ["Were successful", "Failed completely", "Were postponed"],
    answer: "Failed completely",
  },
  {
    question:
      "The government moved to quash the rebellion quickly. What does 'quash' mean?",
    options: ["Support", "Suppress", "Ignore"],
    answer: "Suppress",
  },
  {
    question:
      "She was just beside herself with worry. What does 'beside herself' mean here?",
    options: ["Very calm", "Extremely upset", "Completely confused"],
    answer: "Extremely upset",
  },
  {
    question:
      "The company seemed to be going to hell in a handbasket. What does this phrase suggest?",
    options: ["Improving quickly", "Declining rapidly", "Staying the same"],
    answer: "Declining rapidly",
  },
  {
    question:
      "He deferred to his manager's decision. What does 'deferred to' mean?",
    options: ["Ignored", "Accepted", "Challenged"],
    answer: "Accepted",
  },
  {
    question: "The dog strayed far from the path. What does 'strayed' mean?",
    options: ["Stayed close", "Wandered away", "Ran fast"],
    answer: "Wandered away",
  },
  {
    question:
      "They received assent of the committee for the project. What is 'assent'?",
    options: ["Approval", "Disagreement", "Indifference"],
    answer: "Approval",
  },
  {
    question:
      "His pugnacious attitude often got him into fights. What does 'pugnacious' mean?",
    options: ["Friendly", "Aggressive", "Shy"],
    answer: "Aggressive",
  },
  {
    question:
      "The iconoclast challenged traditional beliefs. What is an 'iconoclast'?",
    options: ["A supporter", "A rebel", "A follower"],
    answer: "A rebel",
  },
  {
    question:
      "He had all his ducks in a row before the presentation. What does this mean?",
    options: ["Was well prepared", "Was disorganized", "Was confused"],
    answer: "Was well prepared",
  },
  {
    question:
      "She looked like the cat that swallowed the canary. What does this expression imply?",
    options: ["She was guilty", "She was tired", "She was happy"],
    answer: "She was guilty",
  },
  {
    question:
      "The coach tried to instill discipline in the team. What does 'instill discipline' mean?",
    options: ["Remove rules", "Teach good behavior", "Encourage laziness"],
    answer: "Teach good behavior",
  },
  {
    question:
      "The project hit some wheels in the planning stage. What does 'hit some wheels' mean?",
    options: ["Faced problems", "Gained momentum", "Was ignored"],
    answer: "Faced problems",
  },
  {
    question:
      "They kicked him to the boot after the scandal. What does 'the boot' mean here?",
    options: ["Promotion", "Rejection", "Support"],
    answer: "Rejection",
  },
  {
    question:
      "She was swept up in the excitement of the event. What does 'swept up' mean?",
    options: ["Caught emotionally", "Ignored", "Stayed calm"],
    answer: "Caught emotionally",
  },
  {
    question:
      "The harsh criticism felt like flaying. What does 'flaying' mean?",
    options: ["Praising", "Severely criticizing", "Ignoring"],
    answer: "Severely criticizing",
  },
  {
    question:
      "He went out on a limb to help his friend. What does 'went on a limb' mean?",
    options: ["Took a risk", "Stayed safe", "Got angry"],
    answer: "Took a risk",
  },
  {
    question: "The Dean addressed the graduating class. Who is the 'Dean'?",
    options: ["A student leader", "A school official", "A janitor"],
    answer: "A school official",
  },
  {
    question:
      "The company is a behemoth in the tech industry. What is a 'behemoth'?",
    options: ["A small startup", "A giant organization", "A competitor"],
    answer: "A giant organization",
  },
  {
    question:
      "During the test, he drew a blank on the answer. What does 'drew a blank' mean?",
    options: ["Forgot", "Answered quickly", "Cheated"],
    answer: "Forgot",
  },
  {
    question:
      "That win is something to crow about! What does 'something to crow about' mean?",
    options: [
      "A reason to boast",
      "A reason to complain",
      "A reason to be quiet",
    ],
    answer: "A reason to boast",
  },
  {
    question:
      "The gravity of the situation made everyone nervous. What is 'gravity' here?",
    options: ["Weight", "Seriousness", "Lightness"],
    answer: "Seriousness",
  },
  {
    question:
      "The speech struck a chord with the audience. What does 'chord' mean here?",
    options: ["A musical note", "An emotional response", "A mistake"],
    answer: "An emotional response",
  },
  {
    question: "He was blackballed from the club. What does 'blackballed' mean?",
    options: ["Accepted", "Rejected", "Ignored"],
    answer: "Rejected",
  },
  {
    question: "The hospital was very orderly. What does 'orderly' mean here?",
    options: ["Clean and organized", "Chaotic", "Rude"],
    answer: "Clean and organized",
  },
  {
    question:
      "The student was insolent to the teacher. What does 'insolent' mean?",
    options: ["Respectful", "Disrespectful", "Timid"],
    answer: "Disrespectful",
  },
  {
    question: "He became senile in his old age. What does 'senile' mean?",
    options: ["Forgetful and confused", "Strong and healthy", "Energetic"],
    answer: "Forgetful and confused",
  },
  {
    question:
      "She’s quick on the uptake in class. What does 'quick on the uptake' mean?",
    options: ["Slow to understand", "Not interested", "Fast to understand"],
    answer: "Fast to understand",
  },
  {
    question:
      "I’m still getting my head around the new rules. What does this phrase mean?",
    options: ["Accepting", "Ignoring", "Understanding"],
    answer: "Understanding",
  },
  {
    question: "He’s a sybarite who loves luxury. What is a 'sybarite'?",
    options: ["A hard worker", "A minimalist", "A lover of pleasure"],
    answer: "A lover of pleasure",
  },
  {
    question:
      "The town is 10 miles away as the crow flies. What does 'as the crow flies' mean?",
    options: ["In a straight line", "By the road", "By river"],
    answer: "In a straight line",
  },
  {
    question: "She’s been peevish all day. What does 'peevish' mean?",
    options: ["Cheerful", "Calm", "Irritable"],
    answer: "Irritable",
  },
  {
    question:
      "The ancient temple was desecrated by vandals. What does 'desecrated' mean?",
    options: ["Respected", "Damaged disrespectfully", "Cleaned"],
    answer: "Damaged disrespectfully",
  },
  {
    question:
      "His irreverent comments upset the elders. What does 'irreverent' mean?",
    options: ["Respectful", "Disrespectful", "Funny"],
    answer: "Disrespectful",
  },
  {
    question:
      "The abandoned house had an eerie feeling. What does 'eerie' mean?",
    options: ["Scary and strange", "Bright and cheerful", "Ordinary"],
    answer: "Scary and strange",
  },
  {
    question: "The pundits predicted the election outcome. Who are 'pundits'?",
    options: ["Experts", "Voters", "Politicians"],
    answer: "Experts",
  },
  {
    question:
      "He’s burnishing his reputation with good deeds. What does 'burnishing' mean?",
    options: ["Ruining", "Improving", "Ignoring"],
    answer: "Improving",
  },
  {
    question:
      "They wrote him off after his failure. What does 'wrote him off' mean?",
    options: ["Stopped trusting", "Promoted", "Helped"],
    answer: "Stopped trusting",
  },
  {
    question:
      "The movie wasn’t as great as it was cracked up to be. What does 'cracked up to be' mean?",
    options: ["Deserved praise", "Was expected", "Was criticized"],
    answer: "Deserved praise",
  },
  {
    question:
      "The boxer came out swinging in the first round. What does 'came out swinging' mean?",
    options: ["Attacked aggressively", "Stayed calm", "Lost quickly"],
    answer: "Attacked aggressively",
  },
  {
    question:
      "The guests waited in the green room before the show. What is a 'green room'?",
    options: ["Waiting area backstage", "Outdoor garden", "Audience seats"],
    answer: "Waiting area backstage",
  },
  {
    question:
      "He was flailing in the water, trying to stay afloat. What does 'flailing' mean?",
    options: ["Swimming smoothly", "Struggling wildly", "Floating calmly"],
    answer: "Struggling wildly",
  },
  {
    question:
      "His retrograde ideas are not accepted by the group. What does 'retrograde' mean?",
    options: ["Modern", "Backward-looking", "Progressive"],
    answer: "Backward-looking",
  },
  {
    question:
      "'The pot calling the kettle black' is a common saying. What does it mean?",
    options: ["Hypocrisy", "Agreement", "Confusion"],
    answer: "Hypocrisy",
  },
  {
    question:
      "So much for his promise to help us. What does 'so much for' mean?",
    options: ["Thanks for", "Forget about", "In favor of"],
    answer: "Forget about",
  },
  {
    question:
      "The pampered child never learned to do chores. What does 'pampered' mean?",
    options: ["Spoiled", "Hardworking", "Independent"],
    answer: "Spoiled",
  },
  {
    question:
      "His bright red jacket made him conspicuous in the crowd. What does 'conspicuous' mean?",
    options: ["Easily noticed", "Hidden", "Unimportant"],
    answer: "Easily noticed",
  },
  {
    question:
      "She received approbation for her excellent work. What is 'approbation'?",
    options: ["Praise", "Criticism", "Confusion"],
    answer: "Praise",
  },
  {
    question:
      "The audience was riveted by the performance. What does 'riveted' mean?",
    options: ["Bored", "Fascinated", "Distracted"],
    answer: "Fascinated",
  },
  {
    question:
      "He's behind the eight ball on this project. What does 'behind the eight ball' mean?",
    options: ["In trouble", "Ahead", "Confident"],
    answer: "In trouble",
  },
  {
    question: "Her probity made her a trusted leader. What is 'probity'?",
    options: ["Honesty", "Strength", "Wisdom"],
    answer: "Honesty",
  },
  {
    question:
      "The new regulations have concomitant challenges. What does 'concomitant' mean?",
    options: ["Unrelated", "Accompanying", "Optional"],
    answer: "Accompanying",
  },
  {
    question: "The golfer teed off at sunrise. What does 'tee off' mean here?",
    options: ["Started the game", "Ended the game", "Paused the game"],
    answer: "Started the game",
  },
  {
    question: "The ship docked at the wharf. What is a 'wharf'?",
    options: ["A pier for ships", "A lighthouse", "A boat"],
    answer: "A pier for ships",
  },
  {
    question:
      "She is the quintessential example of a leader. What does 'quintessential' mean?",
    options: ["Typical", "Unusual", "Flawed"],
    answer: "Typical",
  },
  {
    question:
      "The ballroom was resplendent with chandeliers. What does 'resplendent' mean?",
    options: ["Dull", "Shining brightly", "Empty"],
    answer: "Shining brightly",
  },
  {
    question:
      "They reached assent on the proposal after discussion. What is 'assent'?",
    options: ["Agreement", "Rejection", "Delay"],
    answer: "Agreement",
  },
  {
    question:
      "He was told to button his lip during the meeting. What does 'button his lip' mean?",
    options: ["Be quiet", "Speak loudly", "Argue"],
    answer: "Be quiet",
  },
  {
    question:
      "The sagacious judge made a fair decision. What does 'sagacious' mean?",
    options: ["Wise", "Impatient", "Uninformed"],
    answer: "Wise",
  },
  {
    question: "His blunt remarks offended some people. What does 'blunt' mean?",
    options: ["Direct and honest", "Polite", "Confused"],
    answer: "Direct and honest",
  },
  {
    question:
      "The court quashed the previous ruling. What does 'quashed' mean?",
    options: ["Cancelled", "Confirmed", "Ignored"],
    answer: "Cancelled",
  },
  {
    question: "The lecture was a bore to most students. What does 'bore' mean?",
    options: ["Exciting", "Dull", "Funny"],
    answer: "Dull",
  },
  {
    question:
      "She gave an emphatic 'no' to the proposal. What does 'emphatic' mean?",
    options: ["Unclear", "Forceful", "Weak"],
    answer: "Forceful",
  },
  {
    question:
      "Seeing that old toy was a blast from the past. What does 'blast from the past' mean?",
    options: ["A surprise", , "A problem", "A memory"],
    answer: "A memory",
  },
  {
    question: "He gloated over his victory. What does 'gloated' mean?",
    options: ["Boasted proudly", "Was humble", "Felt sorry"],
    answer: "Boasted proudly",
  },
  {
    question: "She used clever ploys to win the game. What are 'ploys'?",
    options: ["Strategies", "Mistakes", "Gifts"],
    answer: "Strategies",
  },
  {
    question:
      "The new phone model sold like hotcakes. What does 'sold like hotcakes' mean?",
    options: ["Sold quickly", "Was expensive", "Sold poorly"],
    answer: "Sold quickly",
  },
  {
    question:
      "He got the sack after being late too many times. What does 'got the sack' mean?",
    options: ["Was promoted", "Was fired", "Took a break"],
    answer: "Was fired",
  },
  {
    question:
      "The fruit had some blemishes but was still tasty. What are 'blemishes'?",
    options: ["Flaws or marks", "Seeds", "Stems"],
    answer: "Flaws or marks",
  },
  {
    question:
      "Let’s crack open a cold one after work. What does 'crack open a cold one' mean?",
    options: ["Open a cold drink", "Break something", "Turn on the AC"],
    answer: "Open a cold drink",
  },
  {
    question:
      "The politician prevaricated during the interview. What does 'prevaricate' mean?",
    options: ["Avoid telling the truth", "Speak clearly", "Argue loudly"],
    answer: "Avoid telling the truth",
  },
  {
    question: "After the accident, he was a goner. What does 'goner' mean?",
    options: ["Safe", "Doomed", "Recovering"],
    answer: "Doomed",
  },
  {
    question:
      "She’s studying tertiary education at the university. What is 'tertiary'?",
    options: ["Primary school", "Secondary school", "Higher education"],
    answer: "Higher education",
  },
  {
    question:
      "They roughed him up during the fight. What does 'roughed him up' mean?",
    options: ["Helped him", "Beat him", "Ignored him"],
    answer: "Beat him",
  },
  {
    question: "He knows zip about computers. What does 'knows zip' mean?",
    options: ["Knows a lot", "Knows nothing", "Is confused"],
    answer: "Knows nothing",
  },
  {
    question:
      "Don’t scatter your papers all over the desk. What does 'scatter' mean?",
    options: ["Organize", "Spread around", "Throw away"],
    answer: "Spread around",
  },
  {
    question:
      "The bridge buckled under the heavy load. What does 'buckled' mean?",
    options: ["Collapsed", "Held firm", "Was painted"],
    answer: "Collapsed",
  },
  {
    question:
      "The pills were sugar pills with no medicine. What are 'sugar pills'?",
    options: ["Placebos", "Painkillers", "Vitamins"],
    answer: "Placebos",
  },
  {
    question: "There was a stench of garbage in the alley. What is 'stench'?",
    options: ["A pleasant smell", "A bad smell", "A loud noise"],
    answer: "A bad smell",
  },
  {
    question:
      "She was fit to be tied after hearing the news. What does 'fit to be tied' mean?",
    options: ["Very angry", "Very tired", "Very happy"],
    answer: "Very angry",
  },
  {
    question: "The barkeeper served drinks all night. Who is a 'barkeeper'?",
    options: ["A bartender", "A waiter", "A chef"],
    answer: "A bartender",
  },
  {
    question: "I gave the salesperson a piece of my mind. What does this mean?",
    options: ["Complained angrily", "Gave advice", "Thanked politely"],
    answer: "Complained angrily",
  },
  {
    question: "His story jibed with the facts. What does 'jibed' mean?",
    options: ["Agreed", "Contradicted", "Ignored"],
    answer: "Agreed",
  },
  {
    question:
      "The manager’s acquiescence surprised everyone. What is 'acquiescence'?",
    options: ["Agreement without protest", "Strong refusal", "Confusion"],
    answer: "Agreement without protest",
  },
  {
    question:
      "The puzzle was intricate and challenging. What does 'intricate' mean?",
    options: ["Simple", "Complicated", "Boring"],
    answer: "Complicated",
  },
  {
    question: "He got mushy during the romantic movie. What does 'mushy' mean?",
    options: ["Emotional", "Angry", "Confused"],
    answer: "Emotional",
  },
  {
    question:
      "The judge warned against acting on prejudice. What does 'prejudice' mean?",
    options: ["Unfair bias", "Open-mindedness", "Evidence-based thinking"],
    answer: "Unfair bias",
  },
  {
    question:
      "The monastery welcomed several novitiates this year. What are 'novitiates'?",
    options: ["New members in training", "Senior monks", "Religious texts"],
    answer: "New members in training",
  },
  {
    question:
      "I can’t get it through his head that he's wrong. What does 'get it through his head' mean?",
    options: ["Ignore him", "Make him understand", "Confuse him"],
    answer: "Make him understand",
  },
  {
    question:
      "He had a cleft in his chin like a movie star. What is a 'cleft'?",
    options: ["A dent or split", "A scar", "A dimple on the cheek"],
    answer: "A dent or split",
  },
  {
    question:
      "Volunteers will canvass the neighborhood for votes. What does 'canvass' mean?",
    options: ["Ask people for support", "Clean up", "Deliver packages"],
    answer: "Ask people for support",
  },
  {
    question: "Police tried to subdue the rioters. What does 'subdue' mean?",
    options: ["Calm or control", "Avoid", "Ignore"],
    answer: "Calm or control",
  },
  {
    question:
      "He spent hours whittling a piece of wood into a bird. What does 'whittling' mean?",
    options: ["Carving", "Painting", "Burning"],
    answer: "Carving",
  },
  {
    question: "She’s a diehard fan of the team. What does 'diehard' mean?",
    options: ["Very loyal", "Disinterested", "Occasional"],
    answer: "Very loyal",
  },
  {
    question:
      "The documentary was full of hagiographies. What does 'hagiographies' mean?",
    options: [
      "Overly flattering biographies",
      "Critical essays",
      "Boring interviews",
    ],
    answer: "Overly flattering biographies",
  },
  {
    question:
      "I was remiss in sending the invitation. What does 'remiss' mean?",
    options: ["Negligent", "Careful", "Early"],
    answer: "Negligent",
  },
  {
    question:
      "She’s not just a writer—she’s a hack. What does 'hack' imply here?",
    options: ["A mediocre writer", "A bestselling author", "A journalist"],
    answer: "A mediocre writer",
  },
  {
    question:
      "I’ll keep my nose to the grindstone until the project is done. What does this mean?",
    options: [
      "Work hard and steadily",
      "Take frequent breaks",
      "Rush through it",
    ],
    answer: "Work hard and steadily",
  },
  {
    question:
      "I was flabbergasted by the surprise party. What does 'flabbergasted' mean?",
    options: ["Shocked and amazed", "Upset", "Disappointed"],
    answer: "Shocked and amazed",
  },
  {
    question:
      "His presentation was letter perfect. What does 'letter perfect' mean?",
    options: ["Flawless", "Boring", "Handwritten"],
    answer: "Flawless",
  },
  {
    question:
      "She really cut the mustard on that assignment. What does 'cut the mustard' mean?",
    options: ["Met expectations", "Failed badly", "Complained a lot"],
    answer: "Met expectations",
  },
  {
    question:
      "They pulled out all the stops for the wedding. What does 'pull out all the stops' mean?",
    options: ["Used every effort", "Kept it simple", "Postponed it"],
    answer: "Used every effort",
  },
  {
    question:
      "The intrepid explorer ventured into unknown jungles. What does 'intrepid' mean?",
    options: ["Fearless", "Lost", "Tired"],
    answer: "Fearless",
  },
  {
    question:
      "She explained the concept simply, so to speak. What does 'so to speak' mean in this context?",
    options: [
      "in a literal sense",
      "as a metaphorical expression",
      "with complete accuracy",
    ],
    answer: "as a metaphorical expression",
  },
  {
    question:
      "The young musician had finally come of age with her debut album. What does 'come of age' mean here?",
    options: [
      "achieved fame",
      "reached maturity or readiness",
      "started performing publicly",
    ],
    answer: "reached maturity or readiness",
  },
  {
    question:
      "The mayor faced heavy flak after the new policy was announced. What does 'flak' mean in this context?",
    options: ["public approval", "intense criticism", "formal recognition"],
    answer: "intense criticism",
  },
  {
    question:
      "A brief lull followed the heated debate. What does 'lull' mean here?",
    options: ["moment of calm", "surge of activity", "point of confusion"],
    answer: "moment of calm",
  },
  {
    question:
      "The team decided to push back on the unrealistic deadline. What does 'push back' mean in this context?",
    options: ["agree readily", "object or resist", "propose an alternative"],
    answer: "object or resist",
  },
  {
    question:
      "She faced the tough questions with poise during the interview. What does 'poise' mean here?",
    options: ["nervous energy", "calm confidence", "quick wit"],
    answer: "calm confidence",
  },
  {
    question:
      "The children were horsing around during recess. What does 'horse around' mean in this context?",
    options: [
      "playing energetically",
      "studying quietly",
      "competing seriously",
    ],
    answer: "playing energetically",
  },
  {
    question:
      "She could rattle off the company’s statistics effortlessly. What does 'rattle off' mean here?",
    options: ["recite rapidly", "analyze carefully", "forget quickly"],
    answer: "recite rapidly",
  },
  {
    question:
      "The system of checks and balances ensures fair governance. What does 'checks and balances' mean here?",
    options: [
      "power distribution mechanism",
      "financial oversight",
      "routine policy reviews",
    ],
    answer: "power distribution mechanism",
  },
  {
    question:
      "He was labeled a party pooper for leaving the event early. What does 'party pooper' mean here?",
    options: ["event organizer", "enthusiastic guest", "mood dampener"],
    answer: "mood dampener",
  },
  {
    question:
      "He brushed off the reporter’s question with a smile. What does 'brush off' mean in this context?",
    options: ["answer thoroughly", "reflect deeply", "dismiss lightly"],
    answer: "dismiss lightly",
  },
  {
    question:
      "They needed to sort out the scheduling conflicts before the meeting. What does 'sort out' mean here?",
    options: ["resolve issues", "create a plan", "assign tasks"],
    answer: "resolve issues",
  },
  {
    question:
      "In the film, the villain plotted to bump off the hero. What does 'bump off' mean in this context?",
    options: ["eliminate or kill", "challenge openly", "replace secretly"],
    answer: "eliminate or kill",
  },
  {
    question:
      "He was called a cheapskate for refusing to chip in for the gift. What does 'cheapskate' mean here?",
    options: ["miserly person", "thrifty planner", "generous contributor"],
    answer: "miserly person",
  },
  {
    question:
      "His nervous glance was a telltale sign of his guilt. What does 'telltale' mean in this context?",
    options: ["subtle hint", "revealing indicator", "confident gesture"],
    answer: "revealing indicator",
  },
  {
    question:
      "He arrived at the gala looking dapper in his tailored suit. What does 'dapper' mean here?",
    options: ["casually relaxed", "stylishly neat", "overly formal"],
    answer: "stylishly neat",
  },
  {
    question:
      "She spoke out of turn during the meeting, surprising everyone. What does 'out of turn' mean in this context?",
    options: [
      "at the wrong moment",
      "with great authority",
      "in a planned order",
    ],
    answer: "at the wrong moment",
  },
  {
    question:
      "Her unwavering commitment to the cause inspired others. What does 'unwavering' mean here?",
    options: [
      "steadfast and resolute",
      "flexible and adaptable",
      "hesitant and uncertain",
    ],
    answer: "steadfast and resolute",
  },
  {
    question:
      "They put stock in the expert’s advice before deciding. What does 'put stock in' mean in this context?",
    options: ["place trust in", "ignore completely", "question thoroughly"],
    answer: "place trust in",
  },
  {
    question:
      "The team worked hard to lay the groundwork for the project. What does 'lay the groundwork' mean here?",
    options: [
      "complete the final steps",
      "establish the foundation",
      "review the outcomes",
    ],
    answer: "establish the foundation",
  },
  {
    question:
      "The movie relied on the trope of the reluctant hero. What does 'trope' mean in this context?",
    options: [
      "recurring theme or motif",
      "unexpected plot twist",
      "central character",
    ],
    answer: "recurring theme or motif",
  },
  {
    question:
      "Her driven attitude led to rapid career success. What does 'driven' mean here?",
    options: ["highly motivated", "easily distracted", "calmly patient"],
    answer: "highly motivated",
  },
  {
    question:
      "He knew the truth all along but stayed silent. What does 'all along' mean in this context?",
    options: ["for a short time", "at the last moment", "the entire time"],
    answer: "the entire time",
  },
  {
    question:
      "The skittish horse bolted at the slightest noise. What does 'skittish' mean here?",
    options: ["calm and steady", "bold and confident", "nervous and jumpy"],
    answer: "nervous and jumpy",
  },
  {
    question:
      "The storm left the town topsy-turvy. What does 'topsy-turvy' mean in this context?",
    options: [
      "neatly organized",
      "chaotic and disordered",
      "peaceful and calm",
    ],
    answer: "chaotic and disordered",
  },
  {
    question:
      "They scouted the area for a suitable campsite. What does 'scout' mean in this context?",
    options: ["clear out quickly", "settle permanently", "search thoroughly"],
    answer: "search thoroughly",
  },
  {
    question:
      "She could rattle off the names of every capital city. What does 'rattle off' mean in this context?",
    options: ["recite quickly", "forget easily", "study carefully"],
    answer: "recite quickly",
  },
  {
    question:
      "After weeks of illness, he was finally on the mend. What does 'on the mend' mean here?",
    options: ["feeling worse", "seeking treatment", "recovering gradually"],
    answer: "recovering gradually",
  },
  {
    question:
      "Lila was nervous about her first day at the new school, but her teacher’s warm welcome made her feel right at home.",
    options: [
      "Lila felt uncomfortable and out of place at the new school.",
      "Lila was eager to leave the school as soon as possible.",
      "Lila felt comfortable and welcomed at the new school.",
      "Lila was confused by the teacher’s greeting.",
    ],
    answer: "Lila felt comfortable and welcomed at the new school.",
  },
  {
    question:
      "Tom thought he could wing it during the debate, but his lack of preparation left him tongue-tied.",
    options: [
      "Tom performed confidently in the debate despite not preparing.",
      "Tom was unable to speak effectively during the debate.",
      "Tom prepared thoroughly and won the debate easily.",
      "Tom decided to skip the debate altogether.",
    ],
    answer: "Tom was unable to speak effectively during the debate.",
  },
  {
    question:
      "The team was falling behind, but Sarah’s quick thinking turned the tables in their favor.",
    options: [
      "Sarah caused the team to lose the competition.",
      "Sarah reversed the team’s fortunes for the better.",
      "Sarah confused the team with her ideas.",
      "Sarah decided to abandon the team’s efforts.",
    ],
    answer: "Sarah reversed the team’s fortunes for the better.",
  },
  {
    question:
      "Mark bragged about his new job, but when the project failed, he had to eat his words.",
    options: [
      "Mark was forced to admit he was wrong about his job.",
      "Mark celebrated the success of his new job.",
      "Mark continued to boast despite the project’s failure.",
      "Mark decided to quit his new job immediately.",
    ],
    answer: "Mark was forced to admit he was wrong about his job.",
  },
  {
    question:
      "After forgetting her lines, Emma thought the play was doomed, but the audience’s applause showed she was barking up the wrong tree.",
    options: [
      "Emma was correct that the play was a failure.",
      "Emma mistakenly believed the play was unsuccessful.",
      "Emma was confident the play would be a success.",
      "Emma decided to change her role in the play.",
    ],
    answer: "Emma mistakenly believed the play was unsuccessful.",
  },
  {
    question:
      "After forgetting his lines, Jake slipped out the back door during the play’s intermission.",
    options: [
      "Jake stayed on stage to rehearse his lines.",
      "Jake entered the theater through the back door.",
      "Jake performed confidently despite his mistake.",
      "Jake quietly left the theater through a rear exit.",
    ],
    answer: "Jake quietly left the theater through a rear exit.",
  },
  {
    question: "Maria bolted from the meeting when she heard the fire alarm.",
    options: [
      "Maria stayed calm and continued the meeting.",
      "Maria quickly ran out of the meeting room.",
      "Maria ignored the alarm and kept working.",
      "Maria organized an evacuation plan during the meeting.",
    ],
    answer: "Maria quickly ran out of the meeting room.",
  },
  {
    question:
      "Sam managed to sneak into the concert without a ticket by blending with the crowd.",
    options: [
      "Sam entered the concert unnoticed by joining the audience.",
      "Sam bought a ticket to enter the concert legally.",
      "Sam left the concert early to avoid the crowd.",
      "Sam performed on stage with the band.",
    ],
    answer: "Sam entered the concert unnoticed by joining the audience.",
  },
  {
    question:
      "During the race, Emma surged ahead of her competitors in the final lap.",
    options: [
      "Emma fell behind the other runners in the race.",
      "Emma stopped running to catch her breath.",
      "Emma decided to withdraw from the race.",
      "Emma quickly moved in front of the other runners.",
    ],
    answer: "Emma quickly moved in front of the other runners.",
  },
  {
    question:
      "After the argument, Leo stormed out of the room, slamming the door behind him.",
    options: [
      "Leo calmly stayed in the room to resolve the argument.",
      "Leo entered the room angrily to join the discussion.",
      "Leo left the room in a huff, closing the door loudly.",
      "Leo apologized and ended the argument peacefully.",
    ],
    answer: "Leo left the room in a huff, closing the door loudly.",
  },
  {
    question:
      "After bombing the audition, Tara decided to bounce from the theater before anyone noticed.",
    options: [
      "Tara stayed to watch the rest of the auditions.",
      "Tara quickly left the theater after her poor performance.",
      "Tara performed exceptionally well and stayed to celebrate.",
      "Tara entered the theater to try out for another role.",
    ],
    answer: "Tara quickly left the theater after her poor performance.",
  },
  {
    question:
      "Jake was hyped to crash the party, slipping in through the side gate with his friends.",
    options: [
      "Jake attended the party officially with an invitation.",
      "Jake left the party early to avoid trouble.",
      "Jake organized the party and greeted guests at the gate.",
      "Jake entered the party uninvited through a side entrance.",
    ],
    answer: "Jake entered the party uninvited through a side entrance.",
  },
  {
    question:
      "During the game, Mia totally booked it to the goal, leaving the defenders in the dust.",
    options: [
      "Mia slowly walked toward the goal during the game.",
      "Mia stayed back to help her teammates defend.",
      "Mia ran quickly to the goal, outpacing the defenders.",
      "Mia quit the game before reaching the goal.",
    ],
    answer: "Mia ran quickly to the goal, outpacing the defenders.",
  },
  {
    question:
      "Fed up with the boring lecture, Sam decided to ditch class and head to the arcade.",
    options: [
      "Sam stayed engaged and took notes during the lecture.",
      "Sam left the classroom to go somewhere more fun.",
      "Sam invited his friends to join the lecture.",
      "Sam fell asleep during the boring lecture.",
    ],
    answer: "Sam left the classroom to go somewhere more fun.",
  },
  {
    question:
      "When the cops showed up, the crew scattered like roaches from the abandoned warehouse.",
    options: [
      "The group stayed together to talk to the police.",
      "The group entered the warehouse to hide from the police.",
      "The group organized a meeting in the warehouse.",
      "The group quickly dispersed in different directions.",
    ],
    answer: "The group quickly dispersed in different directions.",
  },
  {
    question:
      "After the deal went south, Tony decided to jet out of the meeting before things got worse.",
    options: [
      "Tony stayed to negotiate a better deal.",
      "Tony quickly left the meeting to avoid trouble.",
      "Tony arrived late to the meeting.",
      "Tony took charge of the meeting confidently.",
    ],
    answer: "Tony quickly left the meeting to avoid trouble.",
  },
  {
    question:
      "Lila totally ghosted the boring party, slipping out to hit up a better spot.",
    options: [
      "Lila stayed and made the party more exciting.",
      "Lila invited more friends to join the party.",
      "Lila performed a dance routine at the party.",
      "Lila left the party unnoticed to go elsewhere.",
    ],
    answer: "Lila left the party unnoticed to go elsewhere.",
  },
  {
    question:
      "During the chase, Alex peeled out in his car, leaving the cops in the rearview.",
    options: [
      "Alex drove away quickly to escape pursuit.",
      "Alex stopped his car to talk to the police.",
      "Alex drove slowly to avoid attention.",
      "Alex got out of his car to run on foot.",
    ],
    answer: "Alex drove away quickly to escape pursuit.",
  },
  {
    question:
      "Frustrated with the long line, Mia bailed on the concert and headed to a nearby café.",
    options: [
      "Mia waited patiently to enter the concert.",
      "Mia pushed her way to the front of the line.",
      "Mia gave up on the concert and left for another place.",
      "Mia stayed to enjoy the concert despite the wait.",
    ],
    answer: "Mia gave up on the concert and left for another place.",
  },
  {
    question:
      "When the fight broke out, the crowd hightailed it out of the club in a flash.",
    options: [
      "The crowd stayed to watch the fight unfold.",
      "The crowd moved closer to join the fight.",
      "The crowd organized a plan to stop the fight.",
      "The crowd quickly fled the club to avoid danger.",
    ],
    answer: "The crowd quickly fled the club to avoid danger.",
  },
  {
    question: "When the meeting got heated, Lisa stormed out in frustration.",
    options: [
      "Lisa joined the debate eagerly.",
      "Lisa left the room angrily.",
      "Lisa stayed to calm everyone.",
      "Lisa entered with confidence.",
    ],
    answer: "Lisa left the room angrily.",
  },
  {
    question: "During the sale, Max barged into the store to grab a deal.",
    options: [
      "Max waited outside patiently.",
      "Max left the store quickly.",
      "Max shopped online instead.",
      "Max entered the store forcefully.",
    ],
    answer: "Max entered the store forcefully.",
  },
  {
    question: "After the prank, Zoe dashed off to avoid getting caught.",
    options: [
      "Zoe hid in a nearby room.",
      "Zoe stayed to explain herself.",
      "Zoe ran away quickly.",
      "Zoe laughed with her friends.",
    ],
    answer: "Zoe ran away quickly.",
  },
  {
    question: "Sam crept out of the house to meet his friends at midnight.",
    options: [
      "Sam left the house quietly.",
      "Sam stayed home to rest.",
      "Sam entered the house late.",
      "Sam called his friends over.",
    ],
    answer: "Sam left the house quietly.",
  },
  {
    question: "In the relay, Tara sped up to pass her rival at the end.",
    options: [
      "Tara slowed down to rest.",
      "Tara stopped to cheer.",
      "Tara fell behind her rival.",
      "Tara ran faster to overtake.",
    ],
    answer: "Tara ran faster to overtake.",
  },
  {
    question: "After years of working hard, she finally landed her...",
    options: ["goal position", "dream job", "ideal post"],
    answer: "dream job",
  },
  {
    question:
      "He was caught red-______ trying to steal from the cash register.",
    options: ["colored", "painted", "handed"],
    answer: "handed",
  },
  {
    question: "She's not just smart, she's book-______.",
    options: ["studied", "smart", "learned"],
    answer: "smart",
  },
  {
    question: "They went for a quick bite at a local...",
    options: ["food house", "snack bar", "fast-food joint"],
    answer: "fast-food joint",
  },
  {
    question: "The deal fell through at the ______ minute.",
    options: ["last", "final", "late"],
    answer: "last",
  },
  {
    question: "He's a big fan of old cars — a real car...",
    options: ["freak", "guy", "nut"],
    answer: "nut",
  },
  {
    question: "They grew up in a small, close-______ community.",
    options: ["tied", "bonded", "knit"],
    answer: "knit",
  },
  {
    question:
      "She spilled the beans about the surprise party — now it's no longer a...",
    options: ["secret", "plan", "mystery"],
    answer: "secret",
  },
  {
    question: "He always plays by the ______ — he's not one to take risks.",
    options: ["game", "rules", "book"],
    answer: "book",
  },
  {
    question: "He showed up to the meeting dressed in a full...",
    options: ["business suit", "working clothes", "office wear"],
    answer: "business suit",
  },
  {
    question: "She was over the moon when she got the...",
    options: ["happy result", "great deal", "good news"],
    answer: "good news",
  },
  {
    question: "Let's grab a cup of coffee and have a quick...",
    options: ["meeting", "chat", "talk"],
    answer: "chat",
  },
  {
    question: "The horror movie gave me goose...",
    options: ["pimples", "skin", "bumps"],
    answer: "bumps",
  },
  {
    question: "They live in a quiet, middle-______ neighborhood.",
    options: ["economy", "working", "class"],
    answer: "class",
  },
  {
    question: "He's been under a lot of ______ lately because of work.",
    options: ["pressure", "concern", "thoughts"],
    answer: "pressure",
  },
  {
    question: "It's not rocket ______ — anyone can learn to use this app.",
    options: ["building", "technology", "science"],
    answer: "science",
  },
  {
    question: "She hit the nail on the ______ with her comment.",
    options: ["head", "wall", "point"],
    answer: "head",
  },
  {
    question: "Let's play it ______ and wait to see what happens.",
    options: ["smart", "cool", "safe"],
    answer: "safe",
  },
  {
    question: "I have a sweet ______ — I can't resist chocolate cake.",
    options: ["craving", "tooth", "bite"],
    answer: "tooth",
  },
  {
    question: "He promised to keep me in the...",
    options: ["loop", "know", "side"],
    answer: "loop",
  },
  {
    question: "She always looks put-together — she has a great sense of...",
    options: ["style", "clothes", "dress"],
    answer: "style",
  },
  {
    question: "Don't worry, I'll keep an ______ on your bag while you're gone.",
    options: ["attention", "arm", "eye"],
    answer: "eye",
  },
  {
    question: "They have a zero ______ policy when it comes to cheating.",
    options: ["tolerance", "patience", "risk"],
    answer: "tolerance",
  },
  {
    question: "I'm going to hit the ______ early tonight. I'm exhausted.",
    options: ["pillow", "sack", "bed"],
    answer: "sack",
  },
  {
    question: "He's been in hot ______ since the news broke.",
    options: ["fire", "mess", "water"],
    answer: "water",
  },
  {
    question: "The proposal is still up in the...",
    options: ["mind", "air", "clouds"],
    answer: "air",
  },
  {
    question: "I've been running around like a chicken with its head...",
    options: ["off", "loose", "gone"],
    answer: "off",
  },
  {
    question: "Let's get the ball...",
    options: ["dropping", "bouncing", "rolling"],
    answer: "rolling",
  },
  {
    question: "The project was a piece of...",
    options: ["cake", "fun", "candy"],
    answer: "cake",
  },
  {
    question:
      "She broke the ______ by telling a funny joke at the tense meeting.",
    options: ["silence", "ice", "mood"],
    answer: "ice",
  },
  {
    question: "He's always been the black ______ of the family.",
    options: ["sheep", "duck", "horse"],
    answer: "sheep",
  },
  {
    question: "Don't beat around the ______ — just tell me what happened.",
    options: ["tree", "bush", "point"],
    answer: "bush",
  },
  {
    question: "The company is cutting ______ to reduce expenses.",
    options: ["costs", "corners", "prices"],
    answer: "corners",
  },
  {
    question:
      "She's walking on ______ since her boss found out about the mistake.",
    options: ["glass", "eggshells", "thin ice"],
    answer: "eggshells",
  },
  {
    question: "It's raining cats and ______ out there!",
    options: ["dogs", "mice", "birds"],
    answer: "dogs",
  },
  {
    question: "He's got a chip on his ______ about not going to college.",
    options: ["back", "mind", "shoulder"],
    answer: "shoulder",
  },
  {
    question: "The news spread like wild ______ through the office.",
    options: ["fire", "wind", "rumors"],
    answer: "fire",
  },
  {
    question: "She's the apple of her father's ______.",
    options: ["heart", "eye", "mind"],
    answer: "eye",
  },
  {
    question: "Don't count your chickens before they ______.",
    options: ["hatch", "grow", "fly"],
    answer: "hatch",
  },
  {
    question:
      "I'm exhausted from working 12-hour days. I really need to ______ on my workload.",
    options: ["cut down", "cut off", "cut through", "cut up"],
    answer: "cut down",
  },
  {
    question:
      "The meeting was supposed to start at 3 PM, but the client didn't ______ until 3:30.",
    options: ["show up", "show off", "show out", "show through"],
    answer: "show up",
  },
  {
    question: "I can't find my keys anywhere. Could you help me ______ them?",
    options: ["look after", "look into", "look for", "look up"],
    answer: "look for",
  },
  {
    question: "The music is too loud! Could you please ______ the volume?",
    options: ["turn up", "turn down", "turn over", "turn around"],
    answer: "turn down",
  },
  {
    question:
      "I had to ______ my vacation plans because of the family emergency.",
    options: ["call off", "call up", "call out", "call back"],
    answer: "call off",
  },
  {
    question:
      "She's been feeling sick all week, but she's finally starting to ______ now.",
    options: ["get over", "get by", "get through", "get along"],
    answer: "get over",
  },
  {
    question:
      "This is Bob speaking. I need my pocket calculator. Can I have it back tomorrow? I can't ______ it.",
    options: ["do with", "do without", "deal with", "deal without"],
    answer: "do without",
  },
  {
    question:
      "The fire alarm went off, so we had to ______ the building immediately.",
    options: ["get out of", "get into", "get over", "get around"],
    answer: "get out of",
  },
  {
    question:
      "I've been trying to ______ smoking for months, but it's really difficult.",
    options: ["give in", "give up", "give away", "give back"],
    answer: "give up",
  },
  {
    question:
      "Could you ______ the children while I go to the store? I'll be back in an hour.",
    options: ["look up", "look into", "look after", "look down"],
    answer: "look after",
  },
  {
    question:
      "The old car finally ______ on the highway. We had to call a tow truck.",
    options: ["broke down", "broke up", "broke out", "broke into"],
    answer: "broke down",
  },
  {
    question: "I need to ______ some money for my trip to Europe next summer.",
    options: ["put up", "put away", "put off", "put down"],
    answer: "put away",
  },
  {
    question:
      "The deadline is tomorrow and I still have so much work left. I don't think I can ______ it all.",
    options: ["get through", "get along", "get over", "get around"],
    answer: "get through",
  },
  {
    question:
      "My grandmother ______ last month at the age of 95. She lived a full life.",
    options: ["passed out", "passed by", "passed away", "passed through"],
    answer: "passed away",
  },
  {
    question:
      "I was walking down the street when I ______ my old college roommate. What a coincidence!",
    options: ["ran into", "ran out", "ran over", "ran away"],
    answer: "ran into",
  },
  {
    question: "The company had to ______ 50 employees due to budget cuts.",
    options: ["let down", "let in", "let go", "let out"],
    answer: "let go",
  },
  {
    question:
      "It's getting dark outside. Could you ______ the lights in the living room?",
    options: ["turn off", "turn on", "turn up", "turn down"],
    answer: "turn on",
  },
  {
    question:
      "I can't believe you ______ such a great job opportunity. Why didn't you take it?",
    options: ["turned down", "turned up", "turned in", "turned over"],
    answer: "turned down",
  },
  {
    question:
      "We're planning a surprise party for Sarah. Please don't ______ the secret!",
    options: ["give away", "give up", "give in", "give back"],
    answer: "give away",
  },
  {
    question:
      "The hotel was fully booked, but they managed to ______ us ______ at the last minute.",
    options: ["put / up", "put / down", "put / away", "put / off"],
    answer: "put / up",
  },
  {
    question:
      "The critics really ______ the new movie in their reviews. It got terrible ratings.",
    options: ["bashed", "slammed", "hit"],
    answer: "bashed",
  },
  {
    question: "She angrily ______ the door behind her when she left the room.",
    options: ["bashed", "slammed", "hit"],
    answer: "slammed",
  },
  {
    question:
      "The new restaurant really ______ it big with customers on opening night.",
    options: ["bashed", "slammed", "hit"],
    answer: "hit",
  },
  {
    question: "The car ______ into the wall during the crash test.",
    options: ["bashed", "slammed", "hit"],
    answer: "slammed",
  },
  {
    question: "The hurricane is expected to ______ the coast tomorrow morning.",
    options: ["bash", "slam", "hit"],
    answer: "hit",
  },
  {
    question: "I'll meet you ______ the corner of Main Street and Oak Avenue.",
    options: ["at", "on", "in", "by"],
    answer: "at",
  },
  {
    question: "The meeting starts ______ 9:00 AM exactly.",
    options: ["in", "on", "at", "by"],
    answer: "at",
  },
  {
    question: "Please put the books ______ the shelf in alphabetical order.",
    options: ["in", "at", "on", "under"],
    answer: "on",
  },
  {
    question: "She's excellent ______ solving mathematical problems.",
    options: ["in", "at", "on", "with"],
    answer: "at",
  },
  {
    question: "The party is ______ Saturday night.",
    options: ["in", "on", "at", "during"],
    answer: "on",
  },
  {
    question: "He traveled ______ plane to reach the conference.",
    options: ["by", "on", "in", "with"],
    answer: "by",
  },
  {
    question: "I've been waiting ______ two hours for the bus.",
    options: ["since", "for", "during", "in"],
    answer: "for",
  },
  {
    question: "The cat is hiding ______ the bed.",
    options: ["on", "at", "under", "above"],
    answer: "under",
  },
  {
    question: "We need to finish this project ______ Friday.",
    options: ["until", "at", "on", "by"],
    answer: "by",
  },
  {
    question: "She's afraid ______ spiders and insects.",
    options: ["for", "about", "with", "of"],
    answer: "of",
  },
  {
    question: "The store is located ______ the shopping mall.",
    options: ["at", "on", "by", "in"],
    answer: "in",
  },
  {
    question: "I learned about this ______ the internet.",
    options: ["in", "at", "on", "from"],
    answer: "on",
  },
  {
    question:
      "Halloween is celebrated ______ the United States ______ October 31.",
    options: ["in, on", "at, in", "on, at", "by, during"],
    answer: "in, on",
  },
  {
    question:
      "Are you going away for the weekend? – I don't know. It depends ______ the weather.",
    options: ["on", "from", "of", "with"],
    answer: "on",
  },
  {
    question: "Don't kiss the prince. He might turn ______ a frog.",
    options: ["to", "into", "in", "on"],
    answer: "into",
  },
  {
    question: "He felt bad ______ no reason at all.",
    options: ["with", "from", "for", "of"],
    answer: "for",
  },
  {
    question: "I have been living here ______ ten years.",
    options: ["since", "during", "in", "for"],
    answer: "for",
  },
  {
    question:
      "Have you been ______ the cinema recently? Yes I was there a few days ago.",
    options: ["at", "in", "to", "on"],
    answer: "to",
  },
  {
    question: "I happened to meet an old friend ______ town.",
    options: ["at", "on", "in", "by"],
    answer: "in",
  },
  {
    question:
      "Have you read the article? – It was ______ yesterday's newspapers.",
    options: ["on", "in", "at", "from"],
    answer: "in",
  },
  {
    question:
      "He always drives ______ a tremendous speed because he's always ______ a hurry.",
    options: ["at, in", "with, on", "by, for", "on, with"],
    answer: "at, in",
  },
  {
    question: "He is very fond ______ good food.",
    options: ["with", "for", "about", "of"],
    answer: "of",
  },
  {
    question: "He married ______ the age of 28.",
    options: ["at", "in", "on", "by"],
    answer: "at",
  },
  {
    question: "I bought many things ______ my stay in New York.",
    options: ["for", "during", "in", "through"],
    answer: "during",
  },
  {
    question: "According ______ the guide there are three hotels ______ town.",
    options: ["to, in", "with, at", "by, on", "from, by"],
    answer: "to, in",
  },
  {
    question:
      "I saw him standing ______ the queue but I don't know if he got ______ the bus.",
    options: ["in, on", "at, in", "on, to", "by, at"],
    answer: "in, on",
  },
  {
    question: "I want to post this letter ______ a friend.",
    options: ["for", "to", "with", "at"],
    answer: "to",
  },
  {
    question:
      "I'm going ______ Glasgow on Monday. Would you like to come with us?",
    options: ["to", "in", "at", "for"],
    answer: "to",
  },
  {
    question: "John has got a very strange taste ______ clothes.",
    options: ["for", "with", "of", "in"],
    answer: "in",
  },
  {
    question: "Mum sat ______ the back of the car.",
    options: ["on", "at", "in", "by"],
    answer: "in",
  },
  {
    question:
      "I'm interested ______ basketball but I'm not very good ______ playing it.",
    options: ["in, at", "with, in", "about, with", "for, on"],
    answer: "in, at",
  },
  {
    question: "I'm returning ______ Spain ______ the end of the month.",
    options: ["in, on", "at, in", "to, at", "to, by"],
    answer: "to, at",
  },
  {
    question: "My parents met ______ the war, in 1943.",
    options: ["during", "in", "at", "through"],
    answer: "during",
  },
  {
    question: "Is it true that your mother died ______ cancer?",
    options: ["from", "of", "with", "by"],
    answer: "of",
  },
  {
    question:
      "It was embarrassing. I didn't have enough money ______ pay for the meal.",
    options: ["for", "with", "by", "to"],
    answer: "to",
  },
  {
    question: "It was ______ the radio yesterday morning.",
    options: ["in", "at", "on", "from"],
    answer: "on",
  },
  {
    question: "It's a quick journey ______ Manchester ______ Leeds.",
    options: ["from, to", "to, from", "in, at", "at, in"],
    answer: "from, to",
  },
  {
    question: "Jane goes to the office early ______ Tuesdays.",
    options: ["in", "at", "on", "during"],
    answer: "on",
  },
  {
    question: "I saw him sometime ______ June.",
    options: ["on", "at", "in", "during"],
    answer: "in",
  },
  {
    question: "Meet me ______ the station.",
    options: ["in", "on", "by", "at"],
    answer: "at",
  },
  {
    question: "The lights are moving ______ us.",
    options: ["to", "at", "towards", "for"],
    answer: "towards",
  },
  {
    question: "My country is famous ______ great musicians.",
    options: ["of", "with", "for", "by"],
    answer: "for",
  },
  {
    question: "Who is that girl over there ______ the red dress?",
    options: ["with", "in", "on", "by"],
    answer: "in",
  },
  {
    question:
      "I live ______ Sweden but every summer I travel ______ Spain for my holidays.",
    options: ["in, to", "at, in", "on, for", "by, at"],
    answer: "in, to",
  },
  {
    question:
      "Turn right ______ the end of the street and then it will be right in front of you.",
    options: ["in", "on", "at", "by"],
    answer: "at",
  },
  {
    question:
      "My sister has a beautiful apartment. She lives ______ the third floor.",
    options: ["in", "at", "on", "by"],
    answer: "on",
  },
  {
    question: "Please sit down. Mr. Brown will be ______ you in a moment.",
    options: ["to", "for", "at", "with"],
    answer: "with",
  },
  {
    question: "I have to apologize ______ being late.",
    options: ["about", "for", "of", "with"],
    answer: "for",
  },
  {
    question:
      "She tried to prevent the children ______ jumping into the water.",
    options: ["of", "for", "from", "to"],
    answer: "from",
  },
  {
    question: "Sometimes I have to walk to work and sometimes I go ______ bus.",
    options: ["on", "in", "by", "with"],
    answer: "by",
  },
  {
    question: "Thank you ______ coming to visit us.",
    options: ["to", "for", "with", "of"],
    answer: "for",
  },
  {
    question: "The boys met ______ the corner of the street.",
    options: ["in", "on", "by", "at"],
    answer: "at",
  },
  {
    question: "The smallest room is located ______ the left of the hall.",
    options: ["at", "in", "on", "to"],
    answer: "on",
  },
  {
    question: "We entered the building ______ entrance number 3.",
    options: ["by", "through", "from", "at"],
    answer: "through",
  },
  {
    question: "There was a dark spot ______ the ceiling.",
    options: ["in", "at", "on", "by"],
    answer: "on",
  },
  {
    question: "We arrived just ______ time to see the Queen.",
    options: ["on", "at", "by", "in"],
    answer: "in",
  },
  {
    question: "We have to be at the airport ______ 6 p.m.",
    options: ["on", "in", "by", "at"],
    answer: "at",
  },
  {
    question: "We ran ______ the doctor on our way to the bookshop.",
    options: ["to", "into", "at", "with"],
    answer: "into",
  },
  {
    question: "The two friends went ______ the movies by themselves.",
    options: ["to", "at", "in", "on"],
    answer: "to",
  },
  {
    question: "During the summer I stayed ______ my grandparents.",
    options: ["at", "with", "by", "in"],
    answer: "with",
  },
  {
    question: "I'll wait for you ______ the bus stop.",
    options: ["in", "on", "at", "by"],
    answer: "at",
  },
  {
    question: "The milk is ______ the refrigerator next to the orange juice.",
    options: ["at", "on", "by", "in"],
    answer: "in",
  },
  {
    question: "She came and sat ______ her husband.",
    options: ["with", "beside", "at", "by"],
    answer: "beside",
  },
  {
    question: "______ we saw the television show on bears we drove to the zoo.",
    options: ["Before", "After", "During", "Throughout"],
    answer: "After",
  },
  {
    question: "______ the day, the rain came into the window.",
    options: ["During", "Throughout", "In", "At"],
    answer: "Throughout",
  },
  {
    question: "The phone rang ______ the middle of the night.",
    options: ["at", "in", "on", "during"],
    answer: "in",
  },
  {
    question:
      "The film 'JFK' is being shown ______ on Monday night at 9 p.m. on Channel 4.",
    options: ["on the phone", "on television", "on sale", "on loan"],
    answer: "on television",
  },
  {
    question:
      "150 passengers ______ an Alpine train in Kaprun died when the train caught fire inside a tunnel.",
    options: ["on guard", "on board", "on strike", "on foot"],
    answer: "on board",
  },
  {
    question:
      "While we were ______ our ship anchored at Istanbul, where we visited the Grand Bazaar and Topkapi Palace.",
    options: ["on a trip", "on a cruise", "on an expedition", "on board"],
    answer: "on a cruise",
  },
  {
    question:
      "Barcelona's centre is a maze of narrow streets and medieval buildings, in contrast to the modern apartment buildings ______ of the city.",
    options: [
      "on the outskirts",
      "on the whole",
      "on average",
      "on the increase",
    ],
    answer: "on the outskirts",
  },
  {
    question:
      "I am afraid the book 'Little House of the Prairie' is ______ from the library at the moment. Would you like to reserve it?",
    options: ["on sale", "on loan", "on fire", "on strike"],
    answer: "on loan",
  },
  {
    question:
      "Do you pass a newsagent ______ to work? If you do, would you mind picking me up the Times?",
    options: ["on your way", "on a trip", "on foot", "on board"],
    answer: "on your way",
  },
  {
    question:
      "I don't think the baby dropped it. I think she threw it to the ground ______ in order to gain our attention.",
    options: ["on occasions", "on average", "on purpose", "on the whole"],
    answer: "on purpose",
  },
  {
    question:
      "How long have you been ______? – For three weeks now, but I can't resist eating a little chocolate so I haven't lost much weight yet.",
    options: ["on a diet", "on sale", "on loan", "on strike"],
    answer: "on a diet",
  },
  {
    question:
      "Two days after the bombing, we could still see the flames from the building ______.",
    options: ["on sale", "on fire", "on strike", "on guard"],
    answer: "on fire",
  },
  {
    question: "In 1984, the British coal miners went ______ for almost a year.",
    options: ["on fire", "on guard", "on strike", "on loan"],
    answer: "on strike",
  },
  {
    question:
      "The number of European and American companies investing in underdeveloped countries is ______ as they take advantage of lower wages.",
    options: ["on the whole", "on average", "on the increase", "on occasions"],
    answer: "on the increase",
  },
  {
    question:
      "The owner of the hotel is a qualified chef, but he rarely cooks himself nowadays. However, ______ he helps the head chef in the kitchen if the restaurant is busy.",
    options: ["on occasions", "on average", "on the whole", "on purpose"],
    answer: "on occasions",
  },
  {
    question:
      "I do have a few suggestions that should improve your presentation, but ______ I think it was an excellent speech.",
    options: ["on occasions", "on the whole", "on average", "on purpose"],
    answer: "on the whole",
  },
  {
    question:
      "We went ______ to Paris for a day on the train and saw the Eiffel Tower and Notre Dame Cathedral.",
    options: ["on a trip", "on a cruise", "on an expedition", "on foot"],
    answer: "on a trip",
  },
  {
    question:
      "She is supposed to be studying for her exam but whenever I go to her room she is ______ chatting to her friends.",
    options: ["on television", "on the phone", "on board", "on guard"],
    answer: "on the phone",
  },
  {
    question:
      "We bought a stereo music center that was ______ because it was in the display window.",
    options: ["on loan", "on sale", "on fire", "on strike"],
    answer: "on sale",
  },
  {
    question:
      "All the roads that led to the town centre were closed because of the flood so it was only possible to reach the main square ______.",
    options: ["on foot", "on board", "on purpose", "on guard"],
    answer: "on foot",
  },
  {
    question: "A human heart beats 72 times per minute ______.",
    options: ["on occasions", "on the whole", "on average", "on purpose"],
    answer: "on average",
  },
  {
    question:
      "At the beginning of the 16th century, ______ of the South American jungles, Balboa became the first European to look at the Pacific Ocean.",
    options: [
      "on a trip",
      "on a cruise",
      "on the outskirts",
      "on an expedition",
    ],
    answer: "on an expedition",
  },
  {
    question:
      "The warders who are ______ at the Tower of London to protect valuable jewels are also known as 'Beefeaters'.",
    options: ["on guard", "on strike", "on board", "on fire"],
    answer: "on guard",
  },
  {
    question: "Some boys were crawling ______ under the car.",
    options: ["down", "around", "about", "above"],
    answer: "around",
  },
  {
    question: "His notebook fell ______ the floor.",
    options: ["in", "at", "on", "to"],
    answer: "on",
  },
  {
    question: "The plane flew ______ the clouds.",
    options: ["through", "above", "over", "in"],
    answer: "above",
  },
  {
    question: "Peter doesn't go to work ______ Fridays.",
    options: ["in", "at", "on", "during"],
    answer: "on",
  },
  {
    question: "Open your book ______ page 9.",
    options: ["on", "at", "to", "in"],
    answer: "to",
  },
  {
    question: "Can you see a yellow house ______ the left?",
    options: ["at", "in", "on", "to"],
    answer: "on",
  },
  {
    question: "There was a picture ______ the wall ______ the bed.",
    options: ["on, above", "at, on", "in, beside", "by, at"],
    answer: "on, above",
  },
  {
    question: "All the latest computers will be shown ______ the exhibition.",
    options: ["in", "at", "on", "by"],
    answer: "at",
  },
  {
    question: "He came to see how I was getting ______.",
    options: ["by", "around", "on", "through"],
    answer: "on",
  },
  {
    question: "I am very interested ______ documentaries on TV.",
    options: ["about", "in", "with", "for"],
    answer: "in",
  },
  {
    question: "I am surprised ______ how much money they want to pay him.",
    options: ["about", "at", "with", "of"],
    answer: "at",
  },
  {
    question: "Nobody in the family has heard ______ the accident.",
    options: ["about", "of", "from", "with"],
    answer: "about",
  },
  {
    question: "She comes ______ a poor family.",
    options: ["of", "from", "with", "by"],
    answer: "from",
  },
  {
    question: "I am quite good ______ art.",
    options: ["in", "at", "with", "for"],
    answer: "at",
  },
  {
    question: "Jack came rushing ______ the stairs.",
    options: ["down", "on", "from", "at"],
    answer: "down",
  },
  {
    question: "Turn right ______ the next traffic lights.",
    options: ["on", "in", "at", "by"],
    answer: "at",
  },
  {
    question: "Her mother is looking forward ______ going to Australia.",
    options: ["for", "about", "to", "with"],
    answer: "to",
  },
  {
    question: "The film is based ______ a novel by John Grisham.",
    options: ["in", "at", "from", "on"],
    answer: "on",
  },
  {
    question:
      "John is totally obsessed ______ football. He thinks of nothing else.",
    options: ["about", "with", "of", "by"],
    answer: "with",
  },
  {
    question: "I prefer coffee ______ tea.",
    options: ["than", "from", "over", "to"],
    answer: "to",
  },
  {
    question: "Let's divide this money ______ us.",
    options: ["with", "for", "to", "between"],
    answer: "between",
  },
  {
    question: "I like travelling ______ boat in summer.",
    options: ["on", "in", "with", "by"],
    answer: "by",
  },
  {
    question:
      "When I was younger I was always afraid ______ going to the dentist.",
    options: ["about", "for", "with", "of"],
    answer: "of",
  },
  {
    question: "Mary's in the kitchen looking ______ her car keys.",
    options: ["at", "for", "after", "around"],
    answer: "for",
  },
  {
    question: "Are you really happy ______ your life here?",
    options: ["about", "for", "with", "of"],
    answer: "with",
  },
  {
    question: "He was quite pleased ______ the results.",
    options: ["about", "for", "with", "of"],
    answer: "with",
  },
  {
    question: "This is a painting ______ an unknown artist.",
    options: ["from", "of", "by", "with"],
    answer: "by",
  },
  {
    question: "I am proud ______ being a teacher.",
    options: ["about", "for", "with", "of"],
    answer: "of",
  },
  {
    question: "Don't worry ______ it. Everything will be fine.",
    options: ["for", "with", "about", "of"],
    answer: "about",
  },
  {
    question:
      "My father tells us fascinating stories ______ his years in the navy.",
    options: ["of", "about", "from", "with"],
    answer: "about",
  },
  {
    question: "Did you call attention ______ their mistake?",
    options: ["about", "for", "with", "to"],
    answer: "to",
  },
  {
    question:
      "______ to the headmaster, both of the boys got involved in the fight.",
    options: ["According", "Based", "Related", "Due"],
    answer: "According",
  },
  {
    question: "Except ______ that one, all the sentences were easy.",
    options: ["of", "from", "for", "with"],
    answer: "for",
  },
  {
    question: "Be careful. They will lose faith ______ you.",
    options: ["of", "for", "with", "in"],
    answer: "in",
  },
  {
    question: "The girls worked ______ their lessons for half an hour.",
    options: ["at", "on", "with", "for"],
    answer: "on",
  },
  {
    question: "He depends ______ his sister for help.",
    options: ["of", "from", "on", "with"],
    answer: "on",
  },
  {
    question: "Miss Wilson is very fond ______ French food.",
    options: ["about", "with", "for", "of"],
    answer: "of",
  },
  {
    question: "There were ______ a thousand people at the concert.",
    options: ["about", "over", "above", "at"],
    answer: "about",
  },
  {
    question: "You must be ______ 18 in order to see the film.",
    options: ["around", "over", "exactly", "below"],
    answer: "over",
  },
  {
    question: "We are travelling ______ the road towards the city center.",
    options: ["on", "in", "down", "by"],
    answer: "down",
  },
  {
    question: "He is suffering ______ an unknown illness.",
    options: ["of", "with", "by", "from"],
    answer: "from",
  },
  {
    question: "I listened to the game ______ the radio.",
    options: ["in", "at", "on", "from"],
    answer: "on",
  },
  {
    question: "How are you getting _____ with your studies at school?",
    options: ["by", "on", "through", "around"],
    answer: "on",
  },
  {
    question: "Don't be impatient _____ us. We are trying!",
    options: ["about", "of", "for", "with"],
    answer: "with",
  },
  {
    question: "Could I speak _____ Tom's manager please?",
    options: ["with", "to", "about", "from"],
    answer: "to",
  },
  {
    question:
      "We arrived late and left _____ the last act, so we missed the ending.",
    options: ["during", "after", "before", "at"],
    answer: "before",
  },
  {
    question: "There were some beautiful pictures _____ the walls.",
    options: ["in", "at", "on", "above"],
    answer: "on",
  },
  {
    question:
      "The march started in the park. _____ there we moved to City Hall.",
    options: ["After", "From", "Before", "During"],
    answer: "From",
  },
  {
    question: "Pessimism is bad _____ your health.",
    options: ["to", "with", "for", "of"],
    answer: "for",
  },
  {
    question: "He asked his mother _____ a loan for his new business.",
    options: ["about", "with", "of", "for"],
    answer: "for",
  },
  {
    question: "I bought many things _____ my stay in New York.",
    options: ["for", "during", "in", "at"],
    answer: "during",
  },
  {
    question: "My country is famous _____ historical sights.",
    options: ["of", "with", "for", "by"],
    answer: "for",
  },
  {
    question: "I'm not _____ a hurry. I can wait.",
    options: ["on", "at", "in", "with"],
    answer: "in",
  },
  {
    question: "Have you ever been _____ the theatre recently?",
    options: ["in", "at", "to", "on"],
    answer: "to",
  },
  {
    question: "We arrived _____ the airport _____ time for the plane.",
    options: ["at, in", "to, on", "in, at", "on, for"],
    answer: "at, in",
  },
  {
    question:
      "My grandfather died _____ complications related to his heart condition.",
    options: ["from", "of", "with", "by"],
    answer: "of",
  },
  {
    question: "The resort lies about 1,500 meters _____ sea level.",
    options: ["over", "above", "on", "at"],
    answer: "above",
  },
  {
    question: "He held his hands _____ his face, hiding his expression.",
    options: ["on", "over", "above", "in front of"],
    answer: "in front of",
  },
  {
    question: "There's a chair _____ my desk, out of the way.",
    options: ["on", "behind", "above", "next to"],
    answer: "behind",
  },
  {
    question: "The thief jumped _____ the window.",
    options: ["from", "over", "down", "out of"],
    answer: "out of",
  },
  {
    question:
      "Both of my neighbors can take care _____ the cat while you are gone.",
    options: ["about", "for", "with", "of"],
    answer: "of",
  },
  {
    question:
      "I rarely think _____ the weather forecast; I just deal with it as it comes.",
    options: ["of", "on", "from", "about"],
    answer: "about",
  },
  {
    question: "They were always arguing _____ silly things.",
    options: ["for", "with", "about", "of"],
    answer: "about",
  },
  {
    question:
      "_____ first I found the work very tiring but _____ a few weeks I got used to it.",
    options: ["At, after", "In, during", "On, for", "By, in"],
    answer: "At, after",
  },
  {
    question: "My house is _____ the end of the road.",
    options: ["in", "on", "at", "by"],
    answer: "at",
  },
  {
    question: "The article was _____ yesterday's papers.",
    options: ["on", "at", "in", "from"],
    answer: "in",
  },
  {
    question: "The classroom is _____ the fourth floor.",
    options: ["in", "at", "on", "by"],
    answer: "on",
  },
  {
    question: "I applied _____ a few jobs last week, but nobody wrote back.",
    options: ["to", "for", "with", "at"],
    answer: "for",
  },
  {
    question: "He wants two seats _____ the concert on Friday night.",
    options: ["to", "at", "for", "in"],
    answer: "for",
  },
  {
    question:
      "You ought to be ashamed _____ yourself _____ coming in with dirty boots.",
    options: ["with, about", "about, of", "of, for", "for, with"],
    answer: "of, for",
  },
  {
    question:
      "There's no point _____ going _____ car if we can't park near the theatre.",
    options: ["of, in", "in, by", "for, with", "about, on"],
    answer: "in, by",
  },
  {
    question: "He started his training _____ November.",
    options: ["on", "at", "in", "during"],
    answer: "in",
  },
  {
    question: "Whom did they vote _____?",
    options: ["to", "with", "for", "on"],
    answer: "for",
  },
  {
    question:
      "The bus stopped _____ the corner of High Street and Congress Avenue.",
    options: ["in", "on", "at", "by"],
    answer: "at",
  },
  {
    question: "I love listening _____ classical music.",
    options: ["at", "for", "with", "to"],
    answer: "to",
  },
  {
    question: "He is _____ Dallas, Texas but he was born in California.",
    options: ["in", "at", "from", "of"],
    answer: "from",
  },
  {
    question: "She goes _____ church every Sunday.",
    options: ["in", "at", "to", "for"],
    answer: "to",
  },
  {
    question:
      "It's 7 a.m. We need to leave _____ work at once or else we'll miss the bus.",
    options: ["to", "at", "for", "from"],
    answer: "for",
  },
  {
    question: "I asked the policeman _____ some information.",
    options: ["about", "with", "of", "for"],
    answer: "for",
  },
  {
    question: "The great player hit the ball _____ the net.",
    options: ["on", "at", "over", "above"],
    answer: "over",
  },
  {
    question: "Can you find our holiday beach _____ the map?",
    options: ["in", "at", "on", "from"],
    answer: "on",
  },
  {
    question: "Please turn _____ the volume of the radio. I'm getting deaf.",
    options: ["off", "on", "up", "down"],
    answer: "down",
  },
  {
    question:
      "He always talks tough, but when push comes to shove, he avoids confrontation. What does 'when push comes to shove' mean here?",
    options: [
      "During a casual situation",
      "When people are physically fighting",
      "When things get serious or difficult",
    ],
    answer: "When things get serious or difficult",
  },
  {
    question:
      "A political rift formed between the two former allies. What does 'rift' mean in this sentence?",
    options: [
      "A friendly competition",
      "A serious break or disagreement",
      "An open space or gap in the land",
    ],
    answer: "A serious break or disagreement",
  },
  {
    question:
      "The burly man easily lifted the heavy crate onto the truck. What does 'burly' describe here?",
    options: ["Short and quiet", "Large and muscular", "Quick and thin"],
    answer: "Large and muscular",
  },
  {
    question:
      "This film is a rare crossover between science fiction and romance. What does 'crossover' mean in this context?",
    options: [
      "A shift from one genre to another",
      "A remake done in the same style",
      "A mix of two different genres",
    ],
    answer: "A mix of two different genres",
  },
  {
    question:
      "The band’s latest song is a throwback to the sound of the 80s. What does 'throwback' imply here?",
    options: [
      "A nod to an earlier style",
      "A jump to a future trend",
      "A break from older styles",
    ],
    answer: "A nod to an earlier style",
  },
  {
    question:
      "Her condescending tone made everyone feel uncomfortable. What does 'condescending' mean in this sentence?",
    options: [
      "Talking down to others",
      "Being vague on purpose",
      "Speaking with kindness",
    ],
    answer: "Talking down to others",
  },
  {
    question:
      "The scandal could besmirch his reputation permanently. What does 'besmirch' mean here?",
    options: [
      "Improve or restore someone's reputation",
      "Publicly question someone’s decisions",
      "Damage or tarnish someone's reputation",
    ],
    answer: "Damage or tarnish someone's reputation",
  },
  {
    question:
      "Due to budget cuts, the company had to curtail its operations. What does 'curtail' mean in this sentence?",
    options: [
      "Expand or increase something",
      "Pause temporarily without change",
      "Reduce or limit something",
    ],
    answer: "Reduce or limit something",
  },
];
