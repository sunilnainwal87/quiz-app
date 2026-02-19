import { Question } from '../types';

export const challengeQuizzes: Question[] = [
  // Math Questions (20)
  {
    id: 1,
    question: "What is 15 × 12?",
    options: ["170", "180", "190", "200"],
    correctAnswer: 1,
    subject: "Math",
    explanation: "To multiply 15 × 12, you can break it down: (10 × 12) + (5 × 12) = 120 + 60 = 180. Multiplication is repeated addition!"
  },
  {
    id: 2,
    question: "If a triangle has angles of 60°, 60°, and 60°, what type of triangle is it?",
    options: ["Scalene", "Isosceles", "Equilateral", "Right"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "An equilateral triangle has all three angles equal (60° each) and all three sides equal in length. The angles in any triangle always add up to 180°."
  },
  {
    id: 3,
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "The square root of 144 is 12 because 12 × 12 = 144. A square root finds the number that, when multiplied by itself, gives you the original number."
  },
  {
    id: 4,
    question: "Solve for x: 3x + 7 = 22",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "To solve 3x + 7 = 22, first subtract 7 from both sides: 3x = 15. Then divide both sides by 3: x = 5. Always do the opposite operation to isolate the variable!"
  },
  {
    id: 5,
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "25% means 25/100 or 1/4. To find 25% of 200, multiply 200 × 0.25 = 50. Or think of it as 1/4 of 200, which is 200 ÷ 4 = 50."
  },
  {
    id: 6,
    question: "What is the area of a rectangle with length 8 and width 5?",
    options: ["13", "26", "40", "45"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "The area of a rectangle is calculated by multiplying length × width: 8 × 5 = 40 square units. Area measures the space inside a shape."
  },
  {
    id: 7,
    question: "What is 7³ (7 cubed)?",
    options: ["21", "49", "147", "343"],
    correctAnswer: 3,
    subject: "Math",
    explanation: "7 cubed (7³) means 7 × 7 × 7 = 343. The exponent 3 tells you to multiply 7 by itself three times."
  },
  {
    id: 8,
    question: "If a circle has a radius of 7, what is its diameter?",
    options: ["3.5", "7", "14", "21"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "The diameter of a circle is twice the radius. So if the radius is 7, the diameter is 7 × 2 = 14. The diameter goes all the way across the circle through the center."
  },
  {
    id: 9,
    question: "What is the next prime number after 17?",
    options: ["18", "19", "20", "21"],
    correctAnswer: 1,
    subject: "Math",
    explanation: "19 is the next prime number after 17. A prime number can only be divided by 1 and itself. 18 is divisible by 2, 20 by 2, and 21 by 3, but 19 only divides by 1 and 19."
  },
  {
    id: 10,
    question: "Simplify: (5 + 3) × 2 - 4",
    options: ["10", "12", "14", "16"],
    correctAnswer: 1,
    subject: "Math",
    explanation: "Following the order of operations (PEMDAS/BODMAS): First do parentheses: (5 + 3) = 8. Then multiply: 8 × 2 = 16. Finally subtract: 16 - 4 = 12."
  },
  {
    id: 11,
    question: "What is 0.75 as a fraction in lowest terms?",
    options: ["1/2", "2/3", "3/4", "4/5"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "0.75 means 75/100, which simplifies to 3/4 when you divide both the top and bottom by 25. Decimals and fractions are just different ways to show the same number!"
  },
  {
    id: 12,
    question: "If John has 24 apples and gives away 1/3 of them, how many does he have left?",
    options: ["8", "12", "16", "18"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "If John gives away 1/3 of 24 apples, that's 8 apples (24 ÷ 3 = 8). So he has 24 - 8 = 16 apples left, which is 2/3 of what he started with."
  },
  {
    id: 13,
    question: "What is the perimeter of a square with side length 9?",
    options: ["18", "27", "36", "81"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "The perimeter is the distance around a shape. A square has 4 equal sides, so you multiply the side length by 4: 9 × 4 = 36 units."
  },
  {
    id: 14,
    question: "What is 2⁵ (2 to the power of 5)?",
    options: ["10", "16", "32", "64"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "2⁵ means multiply 2 by itself 5 times: 2 × 2 × 2 × 2 × 2 = 32. Each time you multiply by 2, the number doubles!"
  },
  {
    id: 15,
    question: "If a car travels 60 miles in 1 hour, how far will it travel in 3.5 hours at the same speed?",
    options: ["180 miles", "200 miles", "210 miles", "240 miles"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "To find distance, multiply speed by time: 60 miles/hour × 3.5 hours = 210 miles. This is a real-world example of how math helps us plan trips!"
  },
  {
    id: 16,
    question: "What is the least common multiple (LCM) of 4 and 6?",
    options: ["8", "10", "12", "24"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "The LCM is the smallest number that both numbers divide into evenly. The multiples of 4 are 4, 8, 12... and for 6 are 6, 12, 18... so 12 is the smallest number in both lists!"
  },
  {
    id: 17,
    question: "What is 156 ÷ 12?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "156 ÷ 12 = 13 because 12 × 13 = 156. You can check your division by multiplying the answer by the divisor!"
  },
  {
    id: 18,
    question: "What is the sum of the interior angles of a pentagon?",
    options: ["360°", "450°", "540°", "720°"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "A pentagon has 5 sides. The formula for interior angles is (n-2) × 180°, so for a pentagon: (5-2) × 180° = 3 × 180° = 540°."
  },
  {
    id: 19,
    question: "If 5x - 3 = 27, what is x?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2,
    subject: "Math",
    explanation: "First add 3 to both sides: 5x = 30. Then divide both sides by 5: x = 6. Always work backwards through the equation to solve for the variable!"
  },
  {
    id: 20,
    question: "What is the value of π (pi) rounded to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: 1,
    subject: "Math",
    explanation: "Pi (π) is approximately 3.14159... and is used to calculate circles. It's the ratio of a circle's circumference to its diameter, and it never ends or repeats!"
  },

  // Science Questions (20)
  {
    id: 21,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "Gold's symbol 'Au' comes from the Latin word 'aurum' which means gold. Many chemical symbols come from Latin names, which is why they don't always match the English word!"
  },
  {
    id: 22,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
    correctAnswer: 1,
    subject: "Science",
    explanation: "Mitochondria convert food into energy (ATP) that cells can use, like a power plant for the cell. Every cell in your body has mitochondria working to keep you energized!"
  },
  {
    id: 23,
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctAnswer: 0,
    subject: "Science",
    explanation: "Light travels at about 300,000 kilometers per second, which is the fastest speed possible in the universe! At this speed, light could circle Earth about 7.5 times in just one second."
  },
  {
    id: 24,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "Plants take in carbon dioxide and use it during photosynthesis to make food and release oxygen. This is why plants are so important for keeping our air clean and breathable!"
  },
  {
    id: 25,
    question: "What is the atomic number of Carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    subject: "Science",
    explanation: "Carbon's atomic number is 6, which means it has 6 protons in its nucleus. Carbon is essential for all life on Earth and is found in everything from diamonds to the food we eat!"
  },
  {
    id: 26,
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "Jupiter is so big that more than 1,300 Earths could fit inside it! It's a gas giant with a famous giant red spot that's actually a huge storm bigger than Earth."
  },
  {
    id: 27,
    question: "What is the chemical formula for water?",
    options: ["H2O", "CO2", "O2", "H2O2"],
    correctAnswer: 0,
    subject: "Science",
    explanation: "H2O means each water molecule has 2 hydrogen atoms (H2) and 1 oxygen atom (O). Water is essential for all life and covers about 71% of Earth's surface!"
  },
  {
    id: 28,
    question: "What is the process by which plants make their food?",
    options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
    correctAnswer: 1,
    subject: "Science",
    explanation: "Photosynthesis uses sunlight, water, and carbon dioxide to make sugar (food) and oxygen. The green chlorophyll in leaves captures the sun's energy to power this amazing process!"
  },
  {
    id: 29,
    question: "What is the smallest unit of life?",
    options: ["Atom", "Molecule", "Cell", "Tissue"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "Cells are the basic building blocks of all living things. Your body has trillions of cells, each doing special jobs to keep you healthy and alive!"
  },
  {
    id: 30,
    question: "At what temperature does water boil at sea level in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: 1,
    subject: "Science",
    explanation: "Water boils at 100°C (212°F) at sea level, turning from liquid into steam. At higher elevations, water boils at lower temperatures because there's less air pressure!"
  },
  {
    id: 31,
    question: "What is the center of an atom called?",
    options: ["Electron", "Proton", "Neutron", "Nucleus"],
    correctAnswer: 3,
    subject: "Science",
    explanation: "The nucleus is the tiny, dense center of an atom containing protons and neutrons. Even though the nucleus is super small, it contains almost all of the atom's mass!"
  },
  {
    id: 32,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "Diamonds are made of carbon atoms arranged in an incredibly strong crystal structure. They're so hard they can cut through almost any other material and are formed deep underground under extreme pressure!"
  },
  {
    id: 33,
    question: "How many bones are in the adult human body?",
    options: ["196", "206", "216", "226"],
    correctAnswer: 1,
    subject: "Science",
    explanation: "Adults have 206 bones, but babies are born with about 270 bones! As you grow, some bones fuse together, which is why adults have fewer bones than babies."
  },
  {
    id: 34,
    question: "What type of energy does the sun primarily emit?",
    options: ["Nuclear", "Chemical", "Electromagnetic", "Kinetic"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "The sun emits electromagnetic energy, which includes visible light, heat (infrared), and ultraviolet rays. This energy travels through space as waves and provides almost all the energy for life on Earth!"
  },
  {
    id: 35,
    question: "What is the pH of pure water?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "Pure water has a pH of 7, which is perfectly neutral—not acidic or basic. The pH scale goes from 0 (very acidic) to 14 (very basic), with 7 right in the middle!"
  },
  {
    id: 36,
    question: "What element has the symbol 'O'?",
    options: ["Osmium", "Oxygen", "Gold", "Silver"],
    correctAnswer: 1,
    subject: "Science",
    explanation: "Oxygen (O) makes up about 21% of Earth's atmosphere and is essential for breathing. Almost all living things need oxygen to survive and create energy!"
  },
  {
    id: 37,
    question: "What planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: 1,
    subject: "Science",
    explanation: "Mars appears red because its surface is covered in rusty iron oxide (rust)! Scientists are exploring Mars to learn if it ever had water and could have supported life."
  },
  {
    id: 38,
    question: "What is the study of earthquakes called?",
    options: ["Meteorology", "Geology", "Seismology", "Volcanology"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "Seismology is the study of earthquakes and the waves they create through Earth. Seismologists use special instruments called seismographs to detect and measure earthquakes, helping keep people safe!"
  },
  {
    id: 39,
    question: "What is the largest organ in the human body?",
    options: ["Liver", "Brain", "Heart", "Skin"],
    correctAnswer: 3,
    subject: "Science",
    explanation: "Your skin is your largest organ, covering about 2 square meters and weighing around 8 pounds! It protects you from germs, helps control your temperature, and lets you feel touch."
  },
  {
    id: 40,
    question: "What gas makes up most of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    subject: "Science",
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere, while oxygen is only about 21%. Nitrogen is important for plants and is used to make proteins that all living things need!"
  },

  // Geography Questions (20)
  {
    id: 41,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "Paris is the capital of France and is famous for the Eiffel Tower, the Louvre Museum, and delicious French food. It's often called the 'City of Light' because it was one of the first cities to have street lights!"
  },
  {
    id: 42,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    subject: "Geography",
    explanation: "The Pacific Ocean is the largest and deepest ocean, covering more area than all of Earth's land combined! It's home to thousands of islands and amazing marine life."
  },
  {
    id: 43,
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
    correctAnswer: 1,
    subject: "Geography",
    explanation: "The Nile River is about 4,130 miles long and flows through northeastern Africa. Ancient Egyptian civilization grew along the Nile because it provided water, food, and transportation!"
  },
  {
    id: 44,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: 1,
    subject: "Geography",
    explanation: "Vatican City is only 0.17 square miles, about the size of 60 soccer fields! It's located inside Rome, Italy, and is the headquarters of the Catholic Church."
  },
  {
    id: 45,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "Tokyo is Japan's capital and the world's most populous metropolitan area with over 37 million people! It's a fascinating blend of ancient temples and modern technology."
  },
  {
    id: 46,
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    correctAnswer: 1,
    subject: "Geography",
    explanation: "The Sahara Desert in Africa is the world's largest hot desert, about the same size as the United States! Despite being very dry, it's home to amazing animals like camels, foxes, and scorpions."
  },
  {
    id: 47,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "Mount Everest stands 29,032 feet (8,849 meters) tall on the border of Nepal and Tibet. It's so high that climbers need oxygen tanks because there's less air to breathe at the top!"
  },
  {
    id: 48,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "The seven continents are Africa, Antarctica, Asia, Australia, Europe, North America, and South America. Each continent has unique animals, plants, and cultures!"
  },
  {
    id: 49,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "Canberra is Australia's capital, even though Sydney is more famous. Canberra was specially built to be the capital city as a compromise between Sydney and Melbourne!"
  },
  {
    id: 50,
    question: "Which country has the most natural lakes?",
    options: ["United States", "Russia", "Canada", "Finland"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "Canada has more lakes than any other country—over 2 million of them! That's more than half of all the world's natural lakes, many formed by ancient glaciers."
  },
  {
    id: 51,
    question: "What is the largest country by land area?",
    options: ["Canada", "China", "United States", "Russia"],
    correctAnswer: 3,
    subject: "Geography",
    explanation: "Russia is the world's largest country, covering over 6.6 million square miles across Europe and Asia. It's so big it spans 11 time zones!"
  },
  {
    id: 52,
    question: "What is the capital of Egypt?",
    options: ["Alexandria", "Cairo", "Giza", "Luxor"],
    correctAnswer: 1,
    subject: "Geography",
    explanation: "Cairo is Egypt's capital and Africa's largest city. It's located near the Great Pyramids and has been an important city for over 1,000 years!"
  },
  {
    id: 53,
    question: "Which river flows through London?",
    options: ["Seine", "Danube", "Thames", "Rhine"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "The Thames River flows through London and is about 215 miles long. Famous landmarks like Big Ben, the Tower of London, and London Bridge are all located along the Thames!"
  },
  {
    id: 54,
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
    correctAnswer: 3,
    subject: "Geography",
    explanation: "Antarctica is the world's largest desert because it gets very little precipitation, even though it's covered in ice! A desert is defined by low rainfall, not by being hot and sandy."
  },
  {
    id: 55,
    question: "In which country would you find the Great Barrier Reef?",
    options: ["Indonesia", "Philippines", "Australia", "New Zealand"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "The Great Barrier Reef is off the coast of Australia and is the world's largest coral reef system. It's so big you can see it from space and is home to thousands of species of fish and marine life!"
  },
  {
    id: 56,
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "Brasília became Brazil's capital in 1960 and was specially designed and built to be the capital. When viewed from above, the city is shaped like an airplane!"
  },
  {
    id: 57,
    question: "Which European country has the most volcanoes?",
    options: ["Italy", "Iceland", "Greece", "Norway"],
    correctAnswer: 1,
    subject: "Geography",
    explanation: "Iceland has about 130 volcanoes, with around 30 active ones! The country sits on a volcanic hotspot where two tectonic plates meet, creating lots of volcanic and geothermal activity."
  },
  {
    id: 58,
    question: "What is the world's most populous country?",
    options: ["United States", "Indonesia", "India", "China"],
    correctAnswer: 3,
    subject: "Geography",
    explanation: "China has over 1.4 billion people, making it the world's most populous country. That's almost 1 out of every 5 people on Earth living in China!"
  },
  {
    id: 59,
    question: "Which city is known as the 'Big Apple'?",
    options: ["Los Angeles", "Chicago", "New York", "Boston"],
    correctAnswer: 2,
    subject: "Geography",
    explanation: "New York City is nicknamed the 'Big Apple' and is the largest city in the United States. It's famous for the Statue of Liberty, Times Square, and Central Park!"
  },
  {
    id: 60,
    question: "What is the official language of Brazil?",
    options: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: 1,
    subject: "Geography",
    explanation: "Brazil speaks Portuguese because it was colonized by Portugal, while most other South American countries speak Spanish. Brazil is the largest Portuguese-speaking country in the world!"
  },

  // English Questions (20)
  {
    id: 61,
    question: "What is the plural of 'child'?",
    options: ["Childs", "Children", "Childes", "Childrens"],
    correctAnswer: 1,
    subject: "English",
    explanation: "Some English words have irregular plurals that don't follow the normal '-s' rule. 'Child' becomes 'children,' just like 'foot' becomes 'feet' and 'mouse' becomes 'mice'!"
  },
  {
    id: 62,
    question: "Which word is a synonym for 'happy'?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    correctAnswer: 1,
    subject: "English",
    explanation: "A synonym is a word that means the same or nearly the same as another word. 'Joyful' and 'happy' both describe feeling good and pleased!"
  },
  {
    id: 63,
    question: "Identify the verb in this sentence: 'The cat sleeps on the mat.'",
    options: ["cat", "sleeps", "on", "mat"],
    correctAnswer: 1,
    subject: "English",
    explanation: "A verb is an action word that tells what someone or something does. 'Sleeps' is the verb because it describes what the cat is doing!"
  },
  {
    id: 64,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1,
    subject: "English",
    explanation: "William Shakespeare wrote 'Romeo and Juliet' around 1595. He's one of the greatest writers in the English language and invented many words we still use today!"
  },
  {
    id: 65,
    question: "What is an antonym of 'hot'?",
    options: ["Warm", "Cold", "Cool", "Freezing"],
    correctAnswer: 1,
    subject: "English",
    explanation: "An antonym is a word that means the opposite of another word. 'Cold' is the direct opposite of 'hot,' while 'warm' and 'cool' are in between."
  },
  {
    id: 66,
    question: "Which is the correct spelling?",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    correctAnswer: 1,
    subject: "English",
    explanation: "Remember the rule: 'I before E except after C.' Since 'receive' has a C before the 'ei', we write 'ei' not 'ie'!"
  },
  {
    id: 67,
    question: "What part of speech is the word 'quickly'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correctAnswer: 3,
    subject: "English",
    explanation: "An adverb describes how, when, or where an action happens. 'Quickly' tells us HOW something is done, and many adverbs end in '-ly'!"
  },
  {
    id: 68,
    question: "Which sentence is grammatically correct?",
    options: ["She don't like pizza", "She doesn't likes pizza", "She doesn't like pizza", "She not like pizza"],
    correctAnswer: 2,
    subject: "English",
    explanation: "When using 'doesn't' (does not), the main verb stays in its base form without an 's'. Use 'doesn't' with he, she, or it, and 'don't' with I, you, we, or they."
  },
  {
    id: 69,
    question: "What is the past tense of 'run'?",
    options: ["Runned", "Run", "Ran", "Running"],
    correctAnswer: 2,
    subject: "English",
    explanation: "'Run' is an irregular verb, so we don't just add '-ed' to make the past tense. The past tense is 'ran,' as in 'Yesterday I ran to school.'"
  },
  {
    id: 70,
    question: "Which word is an adjective in the sentence: 'The blue car is fast'?",
    options: ["blue", "car", "is", "fast"],
    correctAnswer: 0,
    subject: "English",
    explanation: "An adjective describes a noun by telling what kind, which one, or how many. 'Blue' describes the car by telling what color it is!"
  },
  {
    id: 71,
    question: "What is a metaphor?",
    options: ["A comparison using 'like' or 'as'", "A direct comparison without 'like' or 'as'", "An exaggeration", "A sound imitation"],
    correctAnswer: 1,
    subject: "English",
    explanation: "A metaphor directly compares two things without using 'like' or 'as.' For example, 'Time is money' or 'She is a shining star' are metaphors that make writing more interesting!"
  },
  {
    id: 72,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
    correctAnswer: 0,
    subject: "English",
    explanation: "Harper Lee wrote 'To Kill a Mockingbird' in 1960. This classic American novel teaches important lessons about justice, empathy, and standing up for what's right!"
  },
  {
    id: 73,
    question: "What is the superlative form of 'good'?",
    options: ["Gooder", "Goodest", "Better", "Best"],
    correctAnswer: 3,
    subject: "English",
    explanation: "'Good' is an irregular adjective. 'Better' compares two things, and 'best' compares three or more things. For example: 'This is good, that is better, but this one is the best!'"
  },
  {
    id: 74,
    question: "Which punctuation mark is used to show possession?",
    options: ["Comma", "Apostrophe", "Period", "Colon"],
    correctAnswer: 1,
    subject: "English",
    explanation: "An apostrophe (') shows that something belongs to someone, like 'Sarah's book' or 'the dog's collar.' It's also used in contractions like 'don't' and 'can't'!"
  },
  {
    id: 75,
    question: "What is a noun?",
    options: ["An action word", "A describing word", "A person, place, or thing", "A connecting word"],
    correctAnswer: 2,
    subject: "English",
    explanation: "Nouns name people (teacher), places (school), things (book), or ideas (happiness). They're the building blocks of sentences and tell us who or what the sentence is about!"
  },
  {
    id: 76,
    question: "Which word is a preposition?",
    options: ["Run", "Happy", "Under", "Quickly"],
    correctAnswer: 2,
    subject: "English",
    explanation: "A preposition shows the relationship between a noun and other words, often describing position or direction. Other prepositions include 'on,' 'in,' 'above,' 'through,' and 'beside'!"
  },
  {
    id: 77,
    question: "What is alliteration?",
    options: ["Repetition of vowel sounds", "Repetition of consonant sounds at the start of words", "A comparison", "An exaggeration"],
    correctAnswer: 1,
    subject: "English",
    explanation: "Alliteration repeats the same beginning sound in nearby words, like 'Peter Piper picked a peck of pickled peppers.' It makes writing fun to say and memorable!"
  },
  {
    id: 78,
    question: "Which is the correct use of 'there', 'their', or 'they're'? '_____ going to the store.'",
    options: ["There", "Their", "They're", "Theyre"],
    correctAnswer: 2,
    subject: "English",
    explanation: "'They're' is short for 'they are.' Use 'there' for places (over there), 'their' for ownership (their dog), and 'they're' for 'they are' (they're happy)!"
  },
  {
    id: 79,
    question: "What is the main idea of a story called?",
    options: ["Plot", "Theme", "Setting", "Character"],
    correctAnswer: 1,
    subject: "English",
    explanation: "The theme is the central message or lesson of a story, like 'friendship is important' or 'be kind to others.' It's the big idea the author wants you to remember!"
  },
  {
    id: 80,
    question: "Which sentence uses correct capitalization?",
    options: ["i went to paris in may.", "I went to Paris in May.", "I Went To Paris In May.", "i Went to paris in May."],
    correctAnswer: 1,
    subject: "English",
    explanation: "Always capitalize 'I,' the first word of a sentence, proper nouns (like Paris), and months (like May). Don't capitalize common words in the middle of sentences!"
  },
  // Gymnastics Questions (20)
  {
    id: 81,
    question: "What is the term for a sideways hand-over-hand rotation?",
    options: ["Handstand", "Cartwheel", "Round-off", "Walkover"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "A cartwheel is one of the first skills gymnasts learn where you move sideways with your hands and feet touching the ground one at a time. It builds strength, coordination, and confidence!"
  },
  {
    id: 82,
    question: "How many events are in women's artistic gymnastics?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    subject: "Gymnastics",
    explanation: "Women's artistic gymnastics has four events: vault, uneven bars, balance beam, and floor exercise. Each event tests different skills like power, grace, balance, and artistry!"
  },
  {
    id: 83,
    question: "Who is the most decorated gymnast in World Championship history?",
    options: ["Nadia Comăneci", "Simone Biles", "Gabby Douglas", "Mary Lou Retton"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "Simone Biles has won more World Championship medals than any gymnast in history! Her incredible skills, hard work, and determination make her an inspiration to gymnasts everywhere."
  },
  {
    id: 84,
    question: "What should you always do before practicing gymnastics?",
    options: ["Eat a big meal", "Warm up and stretch", "Practice your hardest skills", "Watch TV"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "Warming up and stretching prepares your muscles and joints for exercise, helping prevent injuries. It's one of the most important safety rules in gymnastics!"
  },
  {
    id: 85,
    question: "What apparatus do gymnasts use to perform flips and tumbling passes with a spring?",
    options: ["Balance Beam", "Floor Exercise Mat", "Vault", "Trampoline"],
    correctAnswer: 2,
    subject: "Gymnastics",
    explanation: "The vault has a springboard that helps gymnasts gain height and power to perform amazing flips and twists in the air. Gymnasts run fast, jump off the springboard, and push off the vault table!"
  },
  {
    id: 86,
    question: "Which gymnast was the first to score a perfect 10 at the Olympics?",
    options: ["Simone Biles", "Nadia Comăneci", "Shannon Miller", "Dominique Dawes"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "Nadia Comăneci from Romania scored the first perfect 10 at the 1976 Olympics when she was just 14 years old! She went on to score seven perfect 10s at those Olympics."
  },
  {
    id: 87,
    question: "What is the narrow apparatus that gymnasts perform on, requiring excellent balance?",
    options: ["Uneven Bars", "Balance Beam", "Parallel Bars", "High Bar"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "The balance beam is only 4 inches wide and stands about 4 feet high! Gymnasts perform jumps, turns, and acrobatic skills on it, showing incredible balance and bravery."
  },
  {
    id: 88,
    question: "What do we call the floor routine music length limit in competitions?",
    options: ["30 seconds", "60 seconds", "90 seconds", "120 seconds"],
    correctAnswer: 2,
    subject: "Gymnastics",
    explanation: "Floor exercise routines must be 90 seconds (1 minute and 30 seconds) long. Gymnasts choreograph their tumbling passes and dance moves to fit perfectly within this time!"
  },
  {
    id: 89,
    question: "Which of these is an important skill for all gymnasts to develop?",
    options: ["Running fast", "Flexibility", "Swimming", "Singing"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "Flexibility allows gymnasts to perform splits, leaps, and other moves with greater range of motion. Regular stretching helps improve flexibility and prevents injuries!"
  },
  {
    id: 90,
    question: "What equipment helps gymnasts grip the bars better?",
    options: ["Tape", "Grips", "Gloves", "Socks"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "Grips are leather handguards that protect gymnasts' hands from blisters and help them hold onto the bars better. They're especially important for swinging skills on uneven bars and high bar!"
  },
  {
    id: 91,
    question: "In gymnastics, what does a back handspring involve?",
    options: ["Jumping forward", "Flipping backward from your feet to your hands and back to your feet", "Doing a split", "Standing on one leg"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "A back handspring is an exciting skill where you jump backward, land on your hands briefly, then flip back to your feet. It takes practice, strength, and proper coaching to learn safely!"
  },
  {
    id: 92,
    question: "What year did gymnastics become an Olympic sport?",
    options: ["1896", "1920", "1950", "1984"],
    correctAnswer: 0,
    subject: "Gymnastics",
    explanation: "Gymnastics has been part of the modern Olympic Games since the very first Olympics in 1896! Women's gymnastics was added later in 1928, and the sport has grown tremendously since then."
  },
  {
    id: 93,
    question: "Which American gymnast won the all-around gold medal at the 2012 Olympics?",
    options: ["Simone Biles", "Gabby Douglas", "Aly Raisman", "McKayla Maroney"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "Gabby Douglas made history in 2012 as the first African American to win the Olympic all-around title! Her achievement inspired countless young gymnasts around the world."
  },
  {
    id: 94,
    question: "What is the highest score a gymnast can achieve under the current scoring system?",
    options: ["10.0", "15.0", "There is no maximum", "100"],
    correctAnswer: 2,
    subject: "Gymnastics",
    explanation: "The current scoring system has no maximum score! Gymnasts earn points for difficulty and execution, so more difficult skills can lead to higher scores, encouraging innovation in the sport."
  },
  {
    id: 95,
    question: "What do gymnasts use to help absorb impact and prevent injuries?",
    options: ["Helmets", "Mats", "Shin guards", "Knee pads"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "Mats are essential safety equipment in gymnastics, cushioning landings and protecting gymnasts while they learn new skills. Different thickness mats are used for different skills and levels!"
  },
  {
    id: 96,
    question: "Which gymnastics move starts with your hands on the ground and your feet in the air?",
    options: ["Cartwheel", "Split", "Handstand", "Bridge"],
    correctAnswer: 2,
    subject: "Gymnastics",
    explanation: "A handstand is a fundamental gymnastics skill where you balance upside down on your hands. It builds arm strength, core strength, and body awareness for more advanced skills!"
  },
  {
    id: 97,
    question: "What is the name of the apparatus with two bars at different heights?",
    options: ["Parallel Bars", "Uneven Bars", "High Bar", "Pommel Horse"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "The uneven bars have one high bar and one low bar that gymnasts swing between. This apparatus requires tremendous upper body strength and courage to perform flying releases and catches!"
  },
  {
    id: 98,
    question: "How wide is a balance beam?",
    options: ["2 inches", "4 inches", "8 inches", "12 inches"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "The balance beam is only 4 inches wide—about as wide as a smartphone! Performing flips, jumps, and turns on such a narrow surface requires amazing balance and focus."
  },
  {
    id: 99,
    question: "What type of training helps gymnasts build the strength needed for their sport?",
    options: ["Only cardio", "Only flexibility", "Strength and conditioning", "Only balance exercises"],
    correctAnswer: 2,
    subject: "Gymnastics",
    explanation: "Strength and conditioning exercises build the muscles gymnasts need for powerful skills. This includes core work, leg exercises, and arm strength training—all important for gymnastics success!"
  },
  {
    id: 100,
    question: "What is a 'round-off' in gymnastics?",
    options: ["A type of jump", "A cartwheel that lands with both feet together", "A flip", "A spin"],
    correctAnswer: 1,
    subject: "Gymnastics",
    explanation: "A round-off is like a cartwheel, but you land facing the direction you came from with both feet together. It's used to generate power for back handsprings and other backward tumbling skills!"
  }
];
