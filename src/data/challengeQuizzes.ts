import { Question } from '../types';

export const challengeQuizzes: Question[] = [
  // Math Questions (20)
  {
    id: 1,
    question: "What is 15 × 12?",
    options: ["170", "180", "190", "200"],
    correctAnswer: 1,
    subject: "Math"
  },
  {
    id: 2,
    question: "If a triangle has angles of 60°, 60°, and 60°, what type of triangle is it?",
    options: ["Scalene", "Isosceles", "Equilateral", "Right"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 3,
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 4,
    question: "Solve for x: 3x + 7 = 22",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 5,
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 6,
    question: "What is the area of a rectangle with length 8 and width 5?",
    options: ["13", "26", "40", "45"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 7,
    question: "What is 7³ (7 cubed)?",
    options: ["21", "49", "147", "343"],
    correctAnswer: 3,
    subject: "Math"
  },
  {
    id: 8,
    question: "If a circle has a radius of 7, what is its diameter?",
    options: ["3.5", "7", "14", "21"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 9,
    question: "What is the next prime number after 17?",
    options: ["18", "19", "20", "21"],
    correctAnswer: 1,
    subject: "Math"
  },
  {
    id: 10,
    question: "Simplify: (5 + 3) × 2 - 4",
    options: ["10", "12", "14", "16"],
    correctAnswer: 1,
    subject: "Math"
  },
  {
    id: 11,
    question: "What is 0.75 as a fraction in lowest terms?",
    options: ["1/2", "2/3", "3/4", "4/5"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 12,
    question: "If John has 24 apples and gives away 1/3 of them, how many does he have left?",
    options: ["8", "12", "16", "18"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 13,
    question: "What is the perimeter of a square with side length 9?",
    options: ["18", "27", "36", "81"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 14,
    question: "What is 2⁵ (2 to the power of 5)?",
    options: ["10", "16", "32", "64"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 15,
    question: "If a car travels 60 miles in 1 hour, how far will it travel in 3.5 hours at the same speed?",
    options: ["180 miles", "200 miles", "210 miles", "240 miles"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 16,
    question: "What is the least common multiple (LCM) of 4 and 6?",
    options: ["8", "10", "12", "24"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 17,
    question: "What is 156 ÷ 12?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 18,
    question: "What is the sum of the interior angles of a pentagon?",
    options: ["360°", "450°", "540°", "720°"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 19,
    question: "If 5x - 3 = 27, what is x?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    subject: "Math"
  },
  {
    id: 20,
    question: "What is the value of π (pi) rounded to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: 1,
    subject: "Math"
  },

  // Science Questions (20)
  {
    id: 21,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    subject: "Science"
  },
  {
    id: 22,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
    correctAnswer: 1,
    subject: "Science"
  },
  {
    id: 23,
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctAnswer: 0,
    subject: "Science"
  },
  {
    id: 24,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
    subject: "Science"
  },
  {
    id: 25,
    question: "What is the atomic number of Carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    subject: "Science"
  },
  {
    id: 26,
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
    correctAnswer: 2,
    subject: "Science"
  },
  {
    id: 27,
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "O2", "H2O2"],
    correctAnswer: 0,
    subject: "Science"
  },
  {
    id: 28,
    question: "What is the process by which plants make their food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
    correctAnswer: 1,
    subject: "Science"
  },
  {
    id: 29,
    question: "What is the smallest unit of life?",
    options: ["Atom", "Molecule", "Cell", "Tissue"],
    correctAnswer: 2,
    subject: "Science"
  },
  {
    id: 30,
    question: "At what temperature does water boil at sea level in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: 1,
    subject: "Science"
  },
  {
    id: 31,
    question: "What is the center of an atom called?",
    options: ["Electron", "Proton", "Neutron", "Nucleus"],
    correctAnswer: 3,
    subject: "Science"
  },
  {
    id: 32,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: 2,
    subject: "Science"
  },
  {
    id: 33,
    question: "How many bones are in the adult human body?",
    options: ["196", "206", "216", "226"],
    correctAnswer: 1,
    subject: "Science"
  },
  {
    id: 34,
    question: "What type of energy does the sun primarily emit?",
    options: ["Nuclear", "Chemical", "Electromagnetic", "Kinetic"],
    correctAnswer: 2,
    subject: "Science"
  },
  {
    id: 35,
    question: "What is the pH of pure water?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    subject: "Science"
  },
  {
    id: 36,
    question: "What element has the symbol 'O'?",
    options: ["Osmium", "Oxygen", "Gold", "Silver"],
    correctAnswer: 1,
    subject: "Science"
  },
  {
    id: 37,
    question: "What planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: 1,
    subject: "Science"
  },
  {
    id: 38,
    question: "What is the study of earthquakes called?",
    options: ["Meteorology", "Geology", "Seismology", "Volcanology"],
    correctAnswer: 2,
    subject: "Science"
  },
  {
    id: 39,
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Heart", "Skin"],
    correctAnswer: 3,
    subject: "Science"
  },
  {
    id: 40,
    question: "What gas makes up most of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    subject: "Science"
  },

  // Geography Questions (20)
  {
    id: 41,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 42,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    subject: "Geography"
  },
  {
    id: 43,
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
    correctAnswer: 1,
    subject: "Geography"
  },
  {
    id: 44,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    subject: "Geography"
  },
  {
    id: 45,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 46,
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    correctAnswer: 1,
    subject: "Geography"
  },
  {
    id: 47,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 48,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 49,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 50,
    question: "Which country has the most natural lakes?",
    options: ["United States", "Russia", "Canada", "Finland"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 51,
    question: "What is the largest country by land area?",
    options: ["Canada", "China", "United States", "Russia"],
    correctAnswer: 3,
    subject: "Geography"
  },
  {
    id: 52,
    question: "What is the capital of Egypt?",
    options: ["Alexandria", "Cairo", "Giza", "Luxor"],
    correctAnswer: 1,
    subject: "Geography"
  },
  {
    id: 53,
    question: "Which river flows through London?",
    options: ["Seine", "Danube", "Thames", "Rhine"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 54,
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
    correctAnswer: 3,
    subject: "Geography"
  },
  {
    id: 55,
    question: "In which country would you find the Great Barrier Reef?",
    options: ["Indonesia", "Philippines", "Australia", "New Zealand"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 56,
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 57,
    question: "Which European country has the most volcanoes?",
    options: ["Italy", "Iceland", "Greece", "Norway"],
    correctAnswer: 1,
    subject: "Geography"
  },
  {
    id: 58,
    question: "What is the world's most populous country?",
    options: ["United States", "Indonesia", "India", "China"],
    correctAnswer: 3,
    subject: "Geography"
  },
  {
    id: 59,
    question: "Which city is known as the 'Big Apple'?",
    options: ["Los Angeles", "Chicago", "New York", "Boston"],
    correctAnswer: 2,
    subject: "Geography"
  },
  {
    id: 60,
    question: "What is the official language of Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: 1,
    subject: "Geography"
  },

  // English Questions (20)
  {
    id: 61,
    question: "What is the plural of 'child'?",
    options: ["Childs", "Children", "Childes", "Childrens"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 62,
    question: "Which word is a synonym for 'happy'?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 63,
    question: "Identify the verb in this sentence: 'The cat sleeps on the mat.'",
    options: ["cat", "sleeps", "on", "mat"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 64,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 65,
    question: "What is an antonym of 'hot'?",
    options: ["Warm", "Cold", "Cool", "Freezing"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 66,
    question: "Which is the correct spelling?",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 67,
    question: "What part of speech is the word 'quickly'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correctAnswer: 3,
    subject: "English"
  },
  {
    id: 68,
    question: "Which sentence is grammatically correct?",
    options: ["She don't like pizza", "She doesn't likes pizza", "She doesn't like pizza", "She not like pizza"],
    correctAnswer: 2,
    subject: "English"
  },
  {
    id: 69,
    question: "What is the past tense of 'run'?",
    options: ["Runned", "Run", "Ran", "Running"],
    correctAnswer: 2,
    subject: "English"
  },
  {
    id: 70,
    question: "Which word is an adjective in the sentence: 'The blue car is fast'?",
    options: ["blue", "car", "is", "fast"],
    correctAnswer: 0,
    subject: "English"
  },
  {
    id: 71,
    question: "What is a metaphor?",
    options: ["A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration", "A sound imitation"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 72,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
    correctAnswer: 0,
    subject: "English"
  },
  {
    id: 73,
    question: "What is the superlative form of 'good'?",
    options: ["Gooder", "Goodest", "Better", "Best"],
    correctAnswer: 3,
    subject: "English"
  },
  {
    id: 74,
    question: "Which punctuation mark is used to show possession?",
    options: ["Comma", "Apostrophe", "Period", "Colon"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 75,
    question: "What is a noun?",
    options: ["An action word", "A describing word", "A person, place, or thing", "A connecting word"],
    correctAnswer: 2,
    subject: "English"
  },
  {
    id: 76,
    question: "Which word is a preposition?",
    options: ["Run", "Happy", "Under", "Quickly"],
    correctAnswer: 2,
    subject: "English"
  },
  {
    id: 77,
    question: "What is alliteration?",
    options: ["Repetition of vowel sounds", "Repetition of consonant sounds at the start of words", "A comparison", "An exaggeration"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 78,
    question: "Which is the correct use of 'there', 'their', or 'they're'? '_____ going to the store.'",
    options: ["There", "Their", "They're", "Theyre"],
    correctAnswer: 2,
    subject: "English"
  },
  {
    id: 79,
    question: "What is the main idea of a story called?",
    options: ["Plot", "Theme", "Setting", "Character"],
    correctAnswer: 1,
    subject: "English"
  },
  {
    id: 80,
    question: "Which sentence uses correct capitalization?",
    options: ["i went to paris in may.", "I went to Paris in May.", "I Went To Paris In May.", "i Went to paris in May."],
    correctAnswer: 1,
    subject: "English"
  },
  // Gymnastics Questions (20)
  {
    id: 81,
    question: "What is the term for a sideways hand-over-hand rotation?",
    options: ["Handstand", "Cartwheel", "Round-off", "Walkover"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 82,
    question: "How many events are in women's artistic gymnastics?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    subject: "Gymnastics"
  },
  {
    id: 83,
    question: "Who is the most decorated gymnast in World Championship history?",
    options: ["Nadia Comăneci", "Simone Biles", "Gabby Douglas", "Mary Lou Retton"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 84,
    question: "What should you always do before practicing gymnastics?",
    options: ["Eat a big meal", "Warm up and stretch", "Practice your hardest skills", "Watch TV"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 85,
    question: "What apparatus do gymnasts use to perform flips and tumbling passes with a spring?",
    options: ["Balance Beam", "Floor Exercise Mat", "Vault", "Trampoline"],
    correctAnswer: 2,
    subject: "Gymnastics"
  },
  {
    id: 86,
    question: "Which gymnast was the first to score a perfect 10 at the Olympics?",
    options: ["Simone Biles", "Nadia Comăneci", "Shannon Miller", "Dominique Dawes"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 87,
    question: "What is the narrow apparatus that gymnasts perform on, requiring excellent balance?",
    options: ["Uneven Bars", "Balance Beam", "Parallel Bars", "High Bar"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 88,
    question: "What do we call the floor routine music length limit in competitions?",
    options: ["30 seconds", "60 seconds", "90 seconds", "120 seconds"],
    correctAnswer: 2,
    subject: "Gymnastics"
  },
  {
    id: 89,
    question: "Which of these is an important skill for all gymnasts to develop?",
    options: ["Running fast", "Flexibility", "Swimming", "Singing"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 90,
    question: "What equipment helps gymnasts grip the bars better?",
    options: ["Tape", "Grips", "Gloves", "Socks"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 91,
    question: "In gymnastics, what does a back handspring involve?",
    options: ["Jumping forward", "Flipping backward from your feet to your hands and back to your feet", "Doing a split", "Standing on one leg"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 92,
    question: "What year did gymnastics become an Olympic sport?",
    options: ["1896", "1920", "1950", "1984"],
    correctAnswer: 0,
    subject: "Gymnastics"
  },
  {
    id: 93,
    question: "Which American gymnast won the all-around gold medal at the 2012 Olympics?",
    options: ["Simone Biles", "Gabby Douglas", "Aly Raisman", "McKayla Maroney"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 94,
    question: "What is the highest score a gymnast can achieve under the current scoring system?",
    options: ["10.0", "15.0", "There is no maximum", "100"],
    correctAnswer: 2,
    subject: "Gymnastics"
  },
  {
    id: 95,
    question: "What do gymnasts use to help absorb impact and prevent injuries?",
    options: ["Helmets", "Mats", "Shin guards", "Knee pads"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 96,
    question: "Which gymnastics move starts with your hands on the ground and your feet in the air?",
    options: ["Cartwheel", "Split", "Handstand", "Bridge"],
    correctAnswer: 2,
    subject: "Gymnastics"
  },
  {
    id: 97,
    question: "What is the name of the apparatus with two bars at different heights?",
    options: ["Parallel Bars", "Uneven Bars", "High Bar", "Pommel Horse"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 98,
    question: "How wide is a balance beam?",
    options: ["2 inches", "4 inches", "8 inches", "12 inches"],
    correctAnswer: 1,
    subject: "Gymnastics"
  },
  {
    id: 99,
    question: "What type of training helps gymnasts build the strength needed for their sport?",
    options: ["Only cardio", "Only flexibility", "Strength and conditioning", "Only balance exercises"],
    correctAnswer: 2,
    subject: "Gymnastics"
  },
  {
    id: 100,
    question: "What is a 'round-off' in gymnastics?",
    options: ["A type of jump", "A cartwheel that lands with both feet together", "A flip", "A spin"],
    correctAnswer: 1,
    subject: "Gymnastics"
  }
];
