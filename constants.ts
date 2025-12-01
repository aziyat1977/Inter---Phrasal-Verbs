
import { LessonSection, QuizQuestion, Achievement, DiscoveryPair, SpeakingQuestion } from './types';

export const UI_TEXT: Record<string, { en: string, ru: string, uz: string }> = {
  welcome: { en: "Welcome", ru: "Добро пожаловать", uz: "Xush kelibsiz" },
  start: { en: "Start Journey", ru: "Начать путь", uz: "Sayohatni boshlash" },
  continue: { en: "Continue", ru: "Продолжить", uz: "Davom etish" },
  correct: { en: "Correct!", ru: "Верно!", uz: "To'g'ri!" },
  wrong: { en: "Wrong!", ru: "Неверно!", uz: "Noto'g'ri!" },
  score: { en: "Score", ru: "Счет", uz: "Hisob" },
  level: { en: "Level", ru: "Уровень", uz: "Daraja" },
  victory: { en: "VICTORY!", ru: "ПОБЕДА!", uz: "G'ALABA!" },
  gameOver: { en: "Game Over", ru: "Конец игры", uz: "O'yin tugadi" },
  loading: { en: "Loading...", ru: "Загрузка...", uz: "Yuklanmoqda..." },
  findPairs: { en: "Find the pairs", ru: "Найди пары", uz: "Juftliklarni toping" },
  particleHunt: { en: "Click the particle!", ru: "Нажми на частицу!", uz: "Yuklamani bosing!" },
  bossBattle: { en: "Boss Battle", ru: "Битва с боссом", uz: "Boss bilan jang" },
  teacherMode: { en: "Teacher Dashboard", ru: "Панель учителя", uz: "O'qituvchi paneli" },
  studentMode: { en: "Student Adventure", ru: "Приключение", uz: "Talaba sarguzashti" },
  kahootMode: { en: "The Arena", ru: "Арена", uz: "Arena" },
  speakingMode: { en: "Speaking Corner", ru: "Разговорный клуб", uz: "So'zlashuv burchagi" },
  memoryMatch: { en: "Memory Match", ru: "Найди пару", uz: "Xotira o'yini" },
  locked: { en: "Locked", ru: "Закрыто", uz: "Qulflangan" },
  completeTask: { en: "Complete Task", ru: "Выполните задание", uz: "Vazifani bajaring" },
  speakTask: { en: "Record & Practice", ru: "Записать и практиковать", uz: "Yozib olish va mashq qilish" },
  showModel: { en: "Show Model Answer", ru: "Показать пример", uz: "Namunani ko'rsatish" },
  category: { en: "Category", ru: "Категория", uz: "Toifa" },
};

export const LESSON_DATA: LessonSection[] = [
  {
    title: "55.1 The Basics",
    subtitle: "What are Phrasal Verbs?",
    content: [
      {
        id: "intro",
        type: "definition",
        en: "Phrasal verbs = Verb + Particle (preposition/adverb).",
        ru: "Фразовые глаголы = Глагол + Частица.",
        uz: "Frazal fe'llar = Fe'l + Yuklama (predlog/ravish).",
        image: "🧩",
      },
      {
        id: "ex1",
        type: "example",
        en: "I get up early every day.",
        ru: "Я встаю рано каждый день.",
        uz: "Men har kuni erta turaman.",
        image: "🛌",
        highlight: ["up"],
        interactiveTarget: "up"
      },
      {
        id: "rule1",
        type: "rule",
        en: "The particle always comes AFTER the verb.",
        ru: "Частица всегда стоит ПОСЛЕ глагола.",
        uz: "Yuklama har doim fe'ldan KEYIN keladi.",
        image: "➡️"
      },
      {
        id: "warn1",
        type: "warning",
        en: "He get ups. (Incorrect!) -> The particle NEVER changes.",
        ru: "He get ups. (Неверно!) -> Частица НИКОГДА не меняется.",
        uz: "He get ups. (Xato!) -> Yuklama HECH QACHON o'zgarmaydi.",
        image: "🚫",
        highlight: ["ups"],
        interactiveTarget: "ups"
      }
    ]
  },
  {
    title: "55.2 Tense Master",
    subtitle: "Past, Present, and Future",
    content: [
      {
        id: "tense1",
        type: "rule",
        en: "Only the VERB changes tense. The particle stays the same.",
        ru: "Только ГЛАГОЛ меняет время. Частица остается прежней.",
        uz: "Faqat FE'L zamonda o'zgaradi. Yuklama o'zgarishsiz qoladi.",
        image: "⏳"
      },
      {
        id: "ex_past",
        type: "example",
        en: "I worked out yesterday.",
        ru: "Я тренировался вчера.",
        uz: "Men kecha shug'ullandim.",
        image: "🏋️",
        highlight: ["worked"],
        interactiveTarget: "worked"
      },
      {
        id: "ex_cont",
        type: "example",
        en: "I am working out right now.",
        ru: "Я тренируюсь прямо сейчас.",
        uz: "Men hozir shug'ullanyapman.",
        image: "💪",
        highlight: ["working"],
        interactiveTarget: "working"
      }
    ]
  },
  {
    title: "55.3 The Separables",
    subtitle: "Where does the object go?",
    content: [
      {
        id: "sep1",
        type: "definition",
        en: "Separable verbs allow the object in the middle.",
        ru: "Разделяемые глаголы допускают дополнение посередине.",
        uz: "Ajraladigan fe'llarda to'ldiruvchi o'rtada kelishi mumkin.",
        image: "↔️"
      },
      {
        id: "ex_sep1",
        type: "example",
        en: "He is picking the litter up.",
        ru: "Он поднимает мусор.",
        uz: "U musorni yerdan olayapti.",
        image: "🚮",
        highlight: ["litter"],
        interactiveTarget: "litter"
      },
      {
        id: "rule_pronoun",
        type: "warning",
        en: "PRONOUNS (it, them) MUST go in the middle!",
        ru: "МЕСТОИМЕНИЯ (it, them) ОБЯЗАНЫ стоять посередине!",
        uz: "OLMOSHLAR (it, them) o'rtada kelishi SHART!",
        image: "⚠️"
      },
      {
        id: "ex_pronoun",
        type: "example",
        en: "He picked it up.",
        ru: "Он поднял это.",
        uz: "U buni ko'tardi.",
        image: "✅",
        highlight: ["it"],
        interactiveTarget: "it"
      }
    ]
  }
];

export const KAHOOT_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "I usually ____ up at 7:00 AM.",
    options: ["getting", "get", "gets", "got"],
    correctAnswer: 1,
    explanation: "Present Simple: I get up.",
    explanationRu: "Present Simple: I get up (Я встаю).",
    explanationUz: "Present Simple: I get up (Men turaman)."
  },
  {
    id: "q2",
    question: "She ____ out at the gym yesterday.",
    options: ["work", "works", "worked", "working"],
    correctAnswer: 2,
    explanation: "Past Simple requires 'worked'.",
    explanationRu: "Past Simple требует 'worked'.",
    explanationUz: "O'tgan zamon (Past Simple) 'worked' talab qiladi."
  },
  {
    id: "q3",
    question: "Can you turn ____ the light?",
    options: ["on", "in", "at", "by"],
    correctAnswer: 0,
    explanation: "'Turn on' means to activate.",
    explanationRu: "'Turn on' означает включить.",
    explanationUz: "'Turn on' yoqish ma'nosini bildiradi."
  },
  {
    id: "q4",
    question: "Please pick ____.",
    options: ["up it", "it up", "it on", "on it"],
    correctAnswer: 1,
    explanation: "With pronouns (it), the object MUST go in the middle.",
    explanationRu: "С местоимениями (it) объект ДОЛЖЕН быть посередине.",
    explanationUz: "Olmoshlar (it) bilan to'ldiruvchi o'rtada bo'lishi SHART."
  },
  {
    id: "q5",
    question: "We ran ____ of coffee!",
    options: ["away", "in", "out", "over"],
    correctAnswer: 2,
    explanation: "'Run out of' means to have none left.",
    explanationRu: "'Run out of' означает, что что-то закончилось.",
    explanationUz: "'Run out of' tugab qolishni anglatadi."
  }
];

export const DISCOVERY_PAIRS: DiscoveryPair[] = [
  { id: '1', verb: 'Get up', meaning: 'Leave bed', meaningRu: 'Вставать с постели', meaningUz: 'O\'rnidan turmoq' },
  { id: '2', verb: 'Work out', meaning: 'Exercise', meaningRu: 'Тренироваться', meaningUz: 'Mashq qilmoq' },
  { id: '3', verb: 'Run out of', meaning: 'Have none left', meaningRu: 'Заканчиваться', meaningUz: 'Tugab qolmoq' },
  { id: '4', verb: 'Look up to', meaning: 'Respect', meaningRu: 'Уважать', meaningUz: 'Hurmat qilmoq' },
  { id: '5', verb: 'Turn up', meaning: 'Arrive late', meaningRu: 'Появляться (внезапно)', meaningUz: 'Paydo bo\'lmoq' },
  { id: '6', verb: 'Chill out', meaning: 'Relax', meaningRu: 'Расслабляться', meaningUz: 'Dam olmoq' },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_blood', title: 'First Steps', icon: '👶', description: 'Complete your first lesson.' },
  { id: 'boss_slayer', title: 'Boss Slayer', icon: '⚔️', description: 'Defeat the Phrasal Phantom.' },
  { id: 'streak_master', title: 'On Fire', icon: '🔥', description: 'Get a 5x Streak in Kahoot.' },
  { id: 'scholar', title: 'Scholar', icon: '📜', description: 'Use Teacher Mode.' },
  { id: 'orator', title: 'Orator', icon: '🎙️', description: 'Practice 10 Speaking Questions.' },
];

export const BOSS_CONFIG = {
  name: "The Phrasal Phantom",
  hp: 500,
  maxHp: 500,
  avatar: "👻"
};

export const SPEAKING_QUESTIONS: SpeakingQuestion[] = [
  // --- DAILY ROUTINE (Original 8) ---
  {
    id: 's1', category: 'Daily Routine',
    question: "What time do you usually get up?",
    targetVerb: { en: "get up", ru: "вставать", uz: "o'rnidan turmoq" },
    modelAnswer: { answer: "I usually get up at 7:00 AM.", reason: "Because I have classes in the morning.", example: "On weekends, however, I get up at 10 AM." }
  },
  {
    id: 's2', category: 'Daily Routine',
    question: "Do you wake up easily in the morning?",
    targetVerb: { en: "wake up", ru: "просыпаться", uz: "uyg'onmoq" },
    modelAnswer: { answer: "No, I don't wake up easily.", reason: "I love sleeping too much.", example: "I usually set three alarms to wake up." }
  },
  {
    id: 's3', category: 'Daily Routine',
    question: "Do you switch on the TV when you eat breakfast?",
    targetVerb: { en: "switch on", ru: "включать", uz: "yoqmoq" },
    modelAnswer: { answer: "I never switch on the TV.", reason: "I prefer to check my phone.", example: "I switch on YouTube on my phone instead." }
  },
  {
    id: 's4', category: 'Daily Routine',
    question: "What do you put on for school or work?",
    targetVerb: { en: "put on", ru: "надевать", uz: "kymoq" },
    modelAnswer: { answer: "I put on my uniform.", reason: "It is a rule at my school.", example: "Sometimes I put on a jacket if it is cold." }
  },
  {
    id: 's5', category: 'Daily Routine',
    question: "How often do you eat out with your family?",
    targetVerb: { en: "eat out", ru: "есть вне дома", uz: "ko'chada ovqatlanmoq" },
    modelAnswer: { answer: "We eat out once a week.", reason: "My mom likes to rest on Sundays.", example: "We usually eat out at a pizza place." }
  },
  {
    id: 's6', category: 'Daily Routine',
    question: "Do you clean up your room every day?",
    targetVerb: { en: "clean up", ru: "убирать", uz: "tozalamoq" },
    modelAnswer: { answer: "I clean up my room every evening.", reason: "I like it to be tidy.", example: "I clean up my desk after homework." }
  },
  {
    id: 's7', category: 'Daily Routine',
    question: "What time do you usually go out to school?",
    targetVerb: { en: "go out", ru: "выходить", uz: "chiqib ketmoq" },
    modelAnswer: { answer: "I go out at 8:00 AM.", reason: "The bus comes at 8:15.", example: "My brother goes out with me." }
  },
  {
    id: 's8', category: 'Daily Routine',
    question: "When do you come back home?",
    targetVerb: { en: "come back", ru: "возвращаться", uz: "qaytib kelmoq" },
    modelAnswer: { answer: "I come back at 3:00 PM.", reason: "School finishes at 2:30.", example: "On Fridays, I come back later." }
  },

  // --- DAILY ROUTINE (New 10) ---
  {
    id: 's51', category: 'Daily Routine',
    question: "Does your alarm go off loudly?",
    targetVerb: { en: "go off", ru: "срабатывать (о будильнике)", uz: "jiringlamoq" },
    modelAnswer: { answer: "Yes, my alarm goes off very loudly.", reason: "I am a heavy sleeper.", example: "It goes off at 6 AM sharp." }
  },
  {
    id: 's52', category: 'Daily Routine',
    question: "Do you sleep in on Sundays?",
    targetVerb: { en: "sleep in", ru: "поспать подольше", uz: "kechgacha uxlamoq" },
    modelAnswer: { answer: "I always sleep in on Sundays.", reason: "I am tired from the week.", example: "I usually sleep in until 11 AM." }
  },
  {
    id: 's53', category: 'Daily Routine',
    question: "Do you hurry up when you are late?",
    targetVerb: { en: "hurry up", ru: "торопиться", uz: "shoshilmoq" },
    modelAnswer: { answer: "I always hurry up in the morning.", reason: "I don't want to miss the bus.", example: "I hurry up to eat my breakfast." }
  },
  {
    id: 's54', category: 'Daily Routine',
    question: "Do you put away your clothes at night?",
    targetVerb: { en: "put away", ru: "убирать на место", uz: "joyiga olib qo'ymoq" },
    modelAnswer: { answer: "I put away my clothes before bed.", reason: "I like a clean room.", example: "I put away my jacket in the closet." }
  },
  {
    id: 's55', category: 'Daily Routine',
    question: "Who drops you off at school?",
    targetVerb: { en: "drop off", ru: "высаживать / завозить", uz: "tashlab o'tmoq" },
    modelAnswer: { answer: "My dad drops me off.", reason: "His work is near my school.", example: "He drops me off at the gate." }
  },
  {
    id: 's56', category: 'Daily Routine',
    question: "Who picks you up after classes?",
    targetVerb: { en: "pick up", ru: "забирать", uz: "olib ketmoq" },
    modelAnswer: { answer: "My mom picks me up.", reason: "She finishes work at 3 PM.", example: "She picks me up in her blue car." }
  },
  {
    id: 's57', category: 'Daily Routine',
    question: "What time do you set off for school?",
    targetVerb: { en: "set off", ru: "отправляться", uz: "yo'lga tushmoq" },
    modelAnswer: { answer: "I set off at 7:30.", reason: "It is a 30-minute walk.", example: "I set off with my neighbor." }
  },
  {
    id: 's58', category: 'Daily Routine',
    question: "Do you lie down for a nap in the afternoon?",
    targetVerb: { en: "lie down", ru: "прилечь", uz: "yotib dam olmoq" },
    modelAnswer: { answer: "I sometimes lie down.", reason: "I get tired after sports.", example: "I lie down for 20 minutes." }
  },
  {
    id: 's59', category: 'Daily Routine',
    question: "Do you stay up late on Fridays?",
    targetVerb: { en: "stay up", ru: "не спать допоздна", uz: "tunga qadar uxlamaslik" },
    modelAnswer: { answer: "I stay up very late.", reason: "I play games with friends.", example: "I stay up until 2 AM." }
  },
  {
    id: 's60', category: 'Daily Routine',
    question: "Do you doze off in class?",
    targetVerb: { en: "doze off", ru: "задремать", uz: "mudrab qolmoq" },
    modelAnswer: { answer: "I never doze off.", reason: "My teachers are strict.", example: "If I am tired, I drink water so I don't doze off." }
  },

  // --- FREE TIME (Original 8) ---
  {
    id: 's9', category: 'Free Time',
    question: "Who do you usually hang out with?",
    targetVerb: { en: "hang out", ru: "тусоваться / проводить время", uz: "vaqt o'tkazmoq" },
    modelAnswer: { answer: "I hang out with my best friend.", reason: "We live on the same street.", example: "We hang out in the park." }
  },
  {
    id: 's10', category: 'Free Time',
    question: "Do you invite friends over to your house?",
    targetVerb: { en: "invite over", ru: "приглашать в гости", uz: "mehmonga chaqirmoq" },
    modelAnswer: { answer: "I invite friends over on Saturdays.", reason: "We play video games together.", example: "I invite over my cousins too." }
  },
  {
    id: 's11', category: 'Free Time',
    question: "Do you prefer to go out or stay in?",
    targetVerb: { en: "stay in", ru: "оставаться дома", uz: "uyda qolmoq" },
    modelAnswer: { answer: "I prefer to stay in.", reason: "I like watching Netflix.", example: "I stay in when it rains." }
  },
  {
    id: 's12', category: 'Free Time',
    question: "How do you chill out after school?",
    targetVerb: { en: "chill out", ru: "расслабляться", uz: "hordiq chiqarmoq" },
    modelAnswer: { answer: "I chill out by listening to music.", reason: "It helps me relax.", example: "I chill out on the sofa." }
  },
  {
    id: 's13', category: 'Free Time',
    question: "Do you dress up for parties?",
    targetVerb: { en: "dress up", ru: "наряжаться", uz: "yasamoq / kiyinmoq" },
    modelAnswer: { answer: "I dress up for birthdays.", reason: "It is fun to look nice.", example: "I dress up in a suit sometimes." }
  },
  {
    id: 's14', category: 'Free Time',
    question: "What hobbies are you looking for?",
    targetVerb: { en: "look for", ru: "искать", uz: "qidirmoq" },
    modelAnswer: { answer: "I look for creative hobbies.", reason: "I want to learn to paint.", example: "I look for tutorials online." }
  },
  {
    id: 's15', category: 'Free Time',
    question: "Do you call back if you miss a call?",
    targetVerb: { en: "call back", ru: "перезванивать", uz: "qaytarib qo'ng'iroq qilmoq" },
    modelAnswer: { answer: "I always call back.", reason: "It might be important.", example: "I call back my mom immediately." }
  },
  {
    id: 's16', category: 'Free Time',
    question: "Do you catch up with old friends often?",
    targetVerb: { en: "catch up", ru: "наверстывать / болтать", uz: "suhbatlashmoq" },
    modelAnswer: { answer: "I catch up with them online.", reason: "They live far away.", example: "We catch up via Zoom." }
  },

  // --- FREE TIME (New 10) ---
  {
    id: 's61', category: 'Free Time',
    question: "Do you call up your friends on weekends?",
    targetVerb: { en: "call up", ru: "звонить", uz: "telefon qilmoq" },
    modelAnswer: { answer: "I call up my friends on Saturday.", reason: "We plan our day.", example: "I call up John to see if he is free." }
  },
  {
    id: 's62', category: 'Free Time',
    question: "Where do you meet up with friends?",
    targetVerb: { en: "meet up", ru: "встречаться", uz: "uchrashmoq" },
    modelAnswer: { answer: "We meet up at the mall.", reason: "There are many things to do.", example: "We meet up near the cinema." }
  },
  {
    id: 's63', category: 'Free Time',
    question: "How often do you get together with family?",
    targetVerb: { en: "get together", ru: "собираться вместе", uz: "yig'ilishmoq" },
    modelAnswer: { answer: "We get together every holiday.", reason: "Family is important.", example: "We get together for big dinners." }
  },
  {
    id: 's64', category: 'Free Time',
    question: "Do you drop in on your neighbors?",
    targetVerb: { en: "drop in", ru: "заскочить (в гости)", uz: "kirib o'tmoq" },
    modelAnswer: { answer: "I drop in sometimes.", reason: "They are very friendly.", example: "I drop in to give them cake." }
  },
  {
    id: 's65', category: 'Free Time',
    question: "Do you eat in or go out on Fridays?",
    targetVerb: { en: "eat in", ru: "есть дома", uz: "uyda ovqatlanmoq" },
    modelAnswer: { answer: "We usually eat in.", reason: "My mom cooks well.", example: "We eat in and watch a movie." }
  },
  {
    id: 's66', category: 'Free Time',
    question: "Do you look around shops without buying?",
    targetVerb: { en: "look around", ru: "осматриваться", uz: "aylanib qaramoq" },
    modelAnswer: { answer: "I look around the tech store.", reason: "I like new gadgets.", example: "I look around but everything is expensive." }
  },
  {
    id: 's67', category: 'Free Time',
    question: "Do you try on clothes before buying?",
    targetVerb: { en: "try on", ru: "примерять", uz: "kiyib ko'rmoq" },
    modelAnswer: { answer: "I always try on jeans.", reason: "Sizes are different.", example: "I try on three pairs usually." }
  },
  {
    id: 's68', category: 'Free Time',
    question: "Do you take off your shoes at home?",
    targetVerb: { en: "take off", ru: "снимать (одежду)", uz: "yechmoq" },
    modelAnswer: { answer: "I take off my shoes at the door.", reason: "It keeps the floor clean.", example: "I take off my coat too." }
  },
  {
    id: 's69', category: 'Free Time',
    question: "Where do you sit down in the park?",
    targetVerb: { en: "sit down", ru: "садиться", uz: "o'tirmoq" },
    modelAnswer: { answer: "I sit down on a bench.", reason: "I like to watch the birds.", example: "I sit down under a big tree." }
  },
  {
    id: 's70', category: 'Free Time',
    question: "Do you stand up when a teacher enters?",
    targetVerb: { en: "stand up", ru: "вставать", uz: "turmoq" },
    modelAnswer: { answer: "We stand up every time.", reason: "It shows respect.", example: "We stand up and say 'Good Morning'." }
  },

  // --- SPORTS (Original 8) ---
  {
    id: 's17', category: 'Sports',
    question: "How often do you work out?",
    targetVerb: { en: "work out", ru: "тренироваться", uz: "shug'ullanmoq" },
    modelAnswer: { answer: "I work out three times a week.", reason: "I want to be strong.", example: "I work out at the gym." }
  },
  {
    id: 's18', category: 'Sports',
    question: "Do you warm up before exercising?",
    targetVerb: { en: "warm up", ru: "разминаться", uz: "qizib olmoq" },
    modelAnswer: { answer: "I always warm up.", reason: "It prevents injuries.", example: "I warm up by running slowly." }
  },
  {
    id: 's19', category: 'Sports',
    question: "Do you join in when people play soccer?",
    targetVerb: { en: "join in", ru: "присоединяться", uz: "qo'shilmoq" },
    modelAnswer: { answer: "I join in if I have time.", reason: "I love soccer.", example: "I join in games at the park." }
  },
  {
    id: 's20', category: 'Sports',
    question: "Do you give up easily when sports are hard?",
    targetVerb: { en: "give up", ru: "сдаваться", uz: "taslim bo'lmoq" },
    modelAnswer: { answer: "I never give up.", reason: "I am very competitive.", example: "I don't give up even if I am losing." }
  },
  {
    id: 's21', category: 'Sports',
    question: "Do you cool down after running?",
    targetVerb: { en: "cool down", ru: "остывать", uz: "sovumoq / dam olmoq" },
    modelAnswer: { answer: "I cool down by walking.", reason: "It helps my heart rate.", example: "I cool down for 5 minutes." }
  },
  {
    id: 's22', category: 'Sports',
    question: "When do you speed up in a race?",
    targetVerb: { en: "speed up", ru: "ускоряться", uz: "tezlashmoq" },
    modelAnswer: { answer: "I speed up at the end.", reason: "I want to win.", example: "I speed up when I see the finish line." }
  },
  {
    id: 's23', category: 'Sports',
    question: "When do you slow down?",
    targetVerb: { en: "slow down", ru: "замедляться", uz: "sekinlashmoq" },
    modelAnswer: { answer: "I slow down on corners.", reason: "It is safer.", example: "I slow down if I am tired." }
  },
  {
    id: 's24', category: 'Sports',
    question: "Do you carry on if it rains?",
    targetVerb: { en: "carry on", ru: "продолжать", uz: "davom ettirmoq" },
    modelAnswer: { answer: "I carry on playing.", reason: "Rain is fun.", example: "We carry on until the match ends." }
  },

  // --- SPORTS (New 10) ---
  {
    id: 's71', category: 'Sports',
    question: "How do you burn off energy?",
    targetVerb: { en: "burn off", ru: "сжигать (энергию)", uz: "sarflamoq" },
    modelAnswer: { answer: "I burn off energy by swimming.", reason: "It is great cardio.", example: "I burn off calories fast in the pool." }
  },
  {
    id: 's72', category: 'Sports',
    question: "Do you try out for school teams?",
    targetVerb: { en: "try out", ru: "пробоваться (в команду)", uz: "sinovdan o'tmoq" },
    modelAnswer: { answer: "I try out for basketball.", reason: "I am tall.", example: "I try out every September." }
  },
  {
    id: 's73', category: 'Sports',
    question: "What time does the match kick off?",
    targetVerb: { en: "kick off", ru: "начинаться (о матче)", uz: "o'yinni boshlamoq" },
    modelAnswer: { answer: "It kicks off at 5 PM.", reason: "That is when the TV show starts.", example: "The final kicks off soon." }
  },
  {
    id: 's74', category: 'Sports',
    question: "Who do you cheer on?",
    targetVerb: { en: "cheer on", ru: "поддерживать (болеть)", uz: "olqishlamoq" },
    modelAnswer: { answer: "I cheer on Real Madrid.", reason: "They are the best team.", example: "I cheer on them loudly." }
  },
  {
    id: 's75', category: 'Sports',
    question: "Do you want to build up your muscles?",
    targetVerb: { en: "build up", ru: "наращивать", uz: "kuchaytirmoq" },
    modelAnswer: { answer: "I want to build up my arms.", reason: "I lift weights.", example: "Protein helps build up muscle." }
  },
  {
    id: 's76', category: 'Sports',
    question: "Do you stretch out after exercise?",
    targetVerb: { en: "stretch out", ru: "потягиваться / растягиваться", uz: "kerishmoq" },
    modelAnswer: { answer: "I stretch out my legs.", reason: "It stops the pain.", example: "I stretch out on the mat." }
  },
  {
    id: 's77', category: 'Sports',
    question: "Does running tire you out?",
    targetVerb: { en: "tire out", ru: "изматывать", uz: "holdan toydirmoq" },
    modelAnswer: { answer: "Yes, it tires me out quickly.", reason: "I am not fit.", example: "Sprinting tires me out the most." }
  },
  {
    id: 's78', category: 'Sports',
    question: "Can boxing knock you out?",
    targetVerb: { en: "knock out", ru: "нокаутировать", uz: "nokaut qilmoq" },
    modelAnswer: { answer: "A punch can knock you out.", reason: "It is a dangerous sport.", example: "Boxers try to knock out opponents." }
  },
  {
    id: 's79', category: 'Sports',
    question: "Can you keep up with the fastest runner?",
    targetVerb: { en: "keep up", ru: "не отставать", uz: "yetib olmoq" },
    modelAnswer: { answer: "I cannot keep up.", reason: "He is too fast.", example: "I try to keep up but I fail." }
  },
  {
    id: 's80', category: 'Sports',
    question: "Do you fall down often when skating?",
    targetVerb: { en: "fall down", ru: "падать", uz: "yiqilmoq" },
    modelAnswer: { answer: "I fall down a lot.", reason: "The ice is slippery.", example: "I fall down and laugh." }
  },

  // --- VIDEO GAMES (Original 8) ---
  {
    id: 's25', category: 'Video Games',
    question: "What time do you log in to your game?",
    targetVerb: { en: "log in", ru: "входить в систему", uz: "tizimga kirmoq" },
    modelAnswer: { answer: "I log in after dinner.", reason: "That is my free time.", example: "I log in to Minecraft at 8 PM." }
  },
  {
    id: 's26', category: 'Video Games',
    question: "Do you turn on the sound when you play?",
    targetVerb: { en: "turn on", ru: "включать", uz: "yoqmoq" },
    modelAnswer: { answer: "I turn on the sound.", reason: "I need to hear enemies.", example: "I turn on my headset." }
  },
  {
    id: 's27', category: 'Video Games',
    question: "When do you turn off the console?",
    targetVerb: { en: "turn off", ru: "выключать", uz: "o'chirmoq" },
    modelAnswer: { answer: "I turn off it at 10 PM.", reason: "I need to sleep.", example: "My mom makes me turn it off." }
  },
  {
    id: 's28', category: 'Video Games',
    question: "How fast do you level up?",
    targetVerb: { en: "level up", ru: "повышать уровень", uz: "darajani oshirmoq" },
    modelAnswer: { answer: "I level up quickly.", reason: "I play every day.", example: "I level up twice a week." }
  },
  {
    id: 's29', category: 'Video Games',
    question: "Do you team up with friends?",
    targetVerb: { en: "team up", ru: "объединяться в команду", uz: "jamoa tuzmoq" },
    modelAnswer: { answer: "I team up with my classmates.", reason: "We work well together.", example: "We team up in Fortnite." }
  },
  {
    id: 's30', category: 'Video Games',
    question: "Do you look out for traps?",
    targetVerb: { en: "look out", ru: "остерегаться", uz: "ehtiyot bo'lmoq" },
    modelAnswer: { answer: "I look out for everything.", reason: "I don't want to die.", example: "I look out for snipers." }
  },
  {
    id: 's31', category: 'Video Games',
    question: "Do you give up if the level is hard?",
    targetVerb: { en: "give up", ru: "сдаваться", uz: "tashlab qo'ymoq" },
    modelAnswer: { answer: "I don't give up.", reason: "I like challenges.", example: "I try 10 times before I give up." }
  },
  {
    id: 's32', category: 'Video Games',
    question: "Do you sign up for new games?",
    targetVerb: { en: "sign up", ru: "регистрироваться", uz: "ro'yxatdan o'tmoq" },
    modelAnswer: { answer: "I sign up for betas.", reason: "I like new things.", example: "I sign up using my email." }
  },

  // --- VIDEO GAMES (New 10) ---
  {
    id: 's81', category: 'Video Games',
    question: "When do you log out?",
    targetVerb: { en: "log out", ru: "выходить из системы", uz: "chiqib ketmoq" },
    modelAnswer: { answer: "I log out when I am tired.", reason: "My eyes hurt.", example: "I log out at 11 PM." }
  },
  {
    id: 's82', category: 'Video Games',
    question: "How do you sign in to your account?",
    targetVerb: { en: "sign in", ru: "войти в систему", uz: "kirish" },
    modelAnswer: { answer: "I sign in with a password.", reason: "It is secure.", example: "I sign in automatically." }
  },
  {
    id: 's83', category: 'Video Games',
    question: "Do you set up your own console?",
    targetVerb: { en: "set up", ru: "устанавливать / настраивать", uz: "o'rnatmoq" },
    modelAnswer: { answer: "I set up all the cables.", reason: "It is easy.", example: "I set up the TV and HDMI." }
  },
  {
    id: 's84', category: 'Video Games',
    question: "Do you plug in your controller?",
    targetVerb: { en: "plug in", ru: "включать в розетку", uz: "tokka ulamoq" },
    modelAnswer: { answer: "I plug in it to charge.", reason: "The battery is low.", example: "I plug in the USB cable." }
  },
  {
    id: 's85', category: 'Video Games',
    question: "Do you turn down the volume at night?",
    targetVerb: { en: "turn down", ru: "убавить звук", uz: "ovozni pasaytirmoq" },
    modelAnswer: { answer: "I turn down the music.", reason: "My parents are sleeping.", example: "I turn down the speakers." }
  },
  {
    id: 's86', category: 'Video Games',
    question: "Do you zoom in with the sniper?",
    targetVerb: { en: "zoom in", ru: "приближать", uz: "yaqinlashtirmoq" },
    modelAnswer: { answer: "I zoom in to see far away.", reason: "It helps me aim.", example: "I zoom in on the enemy base." }
  },
  {
    id: 's87', category: 'Video Games',
    question: "Do you shoot down planes in the game?",
    targetVerb: { en: "shoot down", ru: "сбивать", uz: "otib tashlamoq" },
    modelAnswer: { answer: "I shoot down enemy jets.", reason: "They attack me.", example: "I shoot down helicopters too." }
  },
  {
    id: 's88', category: 'Video Games',
    question: "Do cars blow up in this game?",
    targetVerb: { en: "blow up", ru: "взрываться", uz: "portlamoq" },
    modelAnswer: { answer: "Everything blows up.", reason: "It is an action game.", example: "Tanks blow up when I hit them." }
  },
  {
    id: 's89', category: 'Video Games',
    question: "Do you run away from bosses?",
    targetVerb: { en: "run away", ru: "убегать", uz: "qochmoq" },
    modelAnswer: { answer: "I run away to heal.", reason: "The boss is strong.", example: "I run away and hide." }
  },
  {
    id: 's90', category: 'Video Games',
    question: "Do you fight back when attacked?",
    targetVerb: { en: "fight back", ru: "давать сдачи", uz: "qarshi kurashmoq" },
    modelAnswer: { answer: "I always fight back.", reason: "I want to win.", example: "I fight back with my sword." }
  },

  // --- READING (Original 8) ---
  {
    id: 's33', category: 'Reading',
    question: "When do you pick up a book?",
    targetVerb: { en: "pick up", ru: "брать в руки", uz: "qo'lga olmoq" },
    modelAnswer: { answer: "I pick up a book on Sundays.", reason: "It is quiet then.", example: "I pick up mystery novels." }
  },
  {
    id: 's34', category: 'Reading',
    question: "Do you look up words you don't know?",
    targetVerb: { en: "look up", ru: "искать (в словаре)", uz: "lug'atdan qaramoq" },
    modelAnswer: { answer: "I look up new words.", reason: "I want to learn English.", example: "I look up words on Google." }
  },
  {
    id: 's35', category: 'Reading',
    question: "Do you read out loud?",
    targetVerb: { en: "read out", ru: "читать вслух", uz: "ovoz chiqarib o'qimoq" },
    modelAnswer: { answer: "I read out loud sometimes.", reason: "It helps my pronunciation.", example: "I read out dialogues." }
  },
  {
    id: 's36', category: 'Reading',
    question: "Do you write down interesting phrases?",
    targetVerb: { en: "write down", ru: "записывать", uz: "yozib olmoq" },
    modelAnswer: { answer: "I write down cool quotes.", reason: "I use them later.", example: "I write down phrases in my notebook." }
  },
  {
    id: 's37', category: 'Reading',
    question: "When do you put down your book?",
    targetVerb: { en: "put down", ru: "откладывать", uz: "olib qo'ymoq" },
    modelAnswer: { answer: "I put down my book when I am tired.", reason: "My eyes hurt.", example: "I put down the book at midnight." }
  },
  {
    id: 's38', category: 'Reading',
    question: "Do you flick through a book before buying it?",
    targetVerb: { en: "flick through", ru: "пролистывать", uz: "varaqab chiqmoq" },
    modelAnswer: { answer: "I flick through the pages.", reason: "I check the pictures.", example: "I flick through magazines too." }
  },
  {
    id: 's39', category: 'Reading',
    question: "Do you turn over the page quickly?",
    targetVerb: { en: "turn over", ru: "переворачивать", uz: "o'girmoq" },
    modelAnswer: { answer: "I turn over pages fast.", reason: "I read very quickly.", example: "I turn over the page to see what happens." }
  },
  {
    id: 's40', category: 'Reading',
    question: "Do you go over what you read?",
    targetVerb: { en: "go over", ru: "повторять / пересматривать", uz: "qayta ko'rib chiqmoq" },
    modelAnswer: { answer: "I go over the main ideas.", reason: "It helps me remember.", example: "I go over the chapter summary." }
  },

  // --- READING (New 10) ---
  {
    id: 's91', category: 'Reading',
    question: "Do you read through the whole chapter?",
    targetVerb: { en: "read through", ru: "прочитать от начала до конца", uz: "to'liq o'qib chiqmoq" },
    modelAnswer: { answer: "I read through it all.", reason: "I don't want to miss details.", example: "I read through the instructions." }
  },
  {
    id: 's92', category: 'Reading',
    question: "Do you thumb through magazines?",
    targetVerb: { en: "thumb through", ru: "бегло просматривать", uz: "ko'z yugurtirib chiqmoq" },
    modelAnswer: { answer: "I thumb through them at the clinic.", reason: "I am waiting for the doctor.", example: "I thumb through sports magazines." }
  },
  {
    id: 's93', category: 'Reading',
    question: "What do you look at on the cover?",
    targetVerb: { en: "look at", ru: "смотреть на", uz: "qaramoq" },
    modelAnswer: { answer: "I look at the title.", reason: "It tells me the topic.", example: "I look at the author's name too." }
  },
  {
    id: 's94', category: 'Reading',
    question: "Do you turn back to the first page?",
    targetVerb: { en: "turn back", ru: "возвращаться (к странице)", uz: "orqaga qaytmoq" },
    modelAnswer: { answer: "I turn back to check names.", reason: "I forget character names.", example: "I turn back to chapter one." }
  },
  {
    id: 's95', category: 'Reading',
    question: "Do you fill in the answers in your book?",
    targetVerb: { en: "fill in", ru: "заполнять", uz: "to'ldirmoq" },
    modelAnswer: { answer: "I fill in the blanks.", reason: "It is a workbook.", example: "I fill in the form with a pen." }
  },
  {
    id: 's96', category: 'Reading',
    question: "Do you rub out your mistakes?",
    targetVerb: { en: "rub out", ru: "стирать ластиком", uz: "o'chirg'ichda o'chirmoq" },
    modelAnswer: { answer: "I rub out pencil marks.", reason: "I want it to look clean.", example: "I rub out the wrong answer." }
  },
  {
    id: 's97', category: 'Reading',
    question: "Do you cross out wrong words?",
    targetVerb: { en: "cross out", ru: "зачеркивать", uz: "ustidan chizmoq" },
    modelAnswer: { answer: "I cross out bad ideas.", reason: "I write a better one.", example: "I cross out the sentence." }
  },
  {
    id: 's98', category: 'Reading',
    question: "Do you cut out pictures from papers?",
    targetVerb: { en: "cut out", ru: "вырезать", uz: "qirqib olmoq" },
    modelAnswer: { answer: "I cut out photos for my project.", reason: "I need images.", example: "I cut out a picture of a cat." }
  },
  {
    id: 's99', category: 'Reading',
    question: "How many books do you check out?",
    targetVerb: { en: "check out", ru: "брать (книгу в библиотеке)", uz: "rasmiylashtirib olmoq" },
    modelAnswer: { answer: "I check out two books.", reason: "That is the limit.", example: "I check out a history book." }
  },
  {
    id: 's100', category: 'Reading',
    question: "When do you bring back the books?",
    targetVerb: { en: "bring back", ru: "возвращать", uz: "qaytarib bermoq" },
    modelAnswer: { answer: "I bring back them in two weeks.", reason: "The library fines are expensive.", example: "I bring back them on Monday." }
  },

  // --- FUN (Original 10) ---
  {
    id: 's41', category: 'Fun',
    question: "What do you look forward to?",
    targetVerb: { en: "look forward to", ru: "ждать с нетерпением", uz: "intizorlik bilan kutmoq" },
    modelAnswer: { answer: "I look forward to the weekend.", reason: "I can relax.", example: "I look forward to summer break." }
  },
  {
    id: 's42', category: 'Fun',
    question: "Who do you get along with?",
    targetVerb: { en: "get along with", ru: "ладить с", uz: "chiqishmoq" },
    modelAnswer: { answer: "I get along with everyone.", reason: "I am friendly.", example: "I get along with my sister well." }
  },
  {
    id: 's43', category: 'Fun',
    question: "What do you do when you run out of money?",
    targetVerb: { en: "run out of", ru: "заканчиваться (о деньгах)", uz: "tugab qolmoq" },
    modelAnswer: { answer: "I ask my dad when I run out of money.", reason: "I don't have a job.", example: "I run out of cash often." }
  },
  {
    id: 's44', category: 'Fun',
    question: "Do you show off your skills?",
    targetVerb: { en: "show off", ru: "хвастаться", uz: "maqtamoq / ko'z-ko'z qilmoq" },
    modelAnswer: { answer: "I show off my dancing.", reason: "I am a good dancer.", example: "I show off at parties." }
  },
  {
    id: 's45', category: 'Fun',
    question: "What places do you check out?",
    targetVerb: { en: "check out", ru: "заценить / проверить", uz: "tekshirib ko'rmoq" },
    modelAnswer: { answer: "I check out new cafes.", reason: "I love food.", example: "I check out places in the mall." }
  },
  {
    id: 's46', category: 'Fun',
    question: "How do you cheer up your friends?",
    targetVerb: { en: "cheer up", ru: "подбадривать", uz: "ko'nglini ko'tarmoq" },
    modelAnswer: { answer: "I cheer up them with jokes.", reason: "Laughter is good.", example: "I buy them chocolate to cheer them up." }
  },
  {
    id: 's47', category: 'Fun',
    question: "Do you want to grow up fast?",
    targetVerb: { en: "grow up", ru: "взрослеть", uz: "ulg'aymoq" },
    modelAnswer: { answer: "I don't want to grow up.", reason: "Adult life is hard.", example: "I want to stay young." }
  },
  {
    id: 's48', category: 'Fun',
    question: "When do you calm down?",
    targetVerb: { en: "calm down", ru: "успокаиваться", uz: "tinchlanmoq" },
    modelAnswer: { answer: "I calm down when I listen to music.", reason: "It stops my stress.", example: "I calm down after a test." }
  },
  {
    id: 's49', category: 'Fun',
    question: "Do you take up new hobbies?",
    targetVerb: { en: "take up", ru: "браться за (хобби)", uz: "boshlamoq (mashg'ulot)" },
    modelAnswer: { answer: "I take up sports.", reason: "I like being active.", example: "I take up tennis in summer." }
  },
  {
    id: 's50', category: 'Fun',
    question: "Do you turn up late to parties?",
    targetVerb: { en: "turn up", ru: "появляться / приходить", uz: "yetib kelmoq" },
    modelAnswer: { answer: "I never turn up late.", reason: "I am punctual.", example: "I turn up 5 minutes early." }
  },

  // --- FUN (New 10) ---
  {
    id: 's101', category: 'Fun',
    question: "Do you look back at old photos?",
    targetVerb: { en: "look back", ru: "вспоминать прошлое", uz: "o'tmishni eslamoq" },
    modelAnswer: { answer: "I look back at baby photos.", reason: "They are funny.", example: "I look back and smile." }
  },
  {
    id: 's102', category: 'Fun',
    question: "What makes you crack up?",
    targetVerb: { en: "crack up", ru: "хохотать", uz: "qotib kulmoq" },
    modelAnswer: { answer: "Comedy movies make me crack up.", reason: "I love jokes.", example: "My friend makes me crack up." }
  },
  {
    id: 's103', category: 'Fun',
    question: "Do you burst out laughing often?",
    targetVerb: { en: "burst out", ru: "разразиться (смехом)", uz: "yorilib ketmoq (kulgi)" },
    modelAnswer: { answer: "I burst out laughing in class.", reason: "It was a mistake.", example: "I burst out crying sometimes too." }
  },
  {
    id: 's104', category: 'Fun',
    question: "Do you run into friends at the mall?",
    targetVerb: { en: "run into", ru: "случайно встретить", uz: "duch kelmoq" },
    modelAnswer: { answer: "I run into people often.", reason: "My town is small.", example: "I run into my teacher at the shop." }
  },
  {
    id: 's105', category: 'Fun',
    question: "Do you show up early for movies?",
    targetVerb: { en: "show up", ru: "появляться", uz: "paydo bo'lmoq" },
    modelAnswer: { answer: "I show up 20 minutes early.", reason: "I want popcorn.", example: "I show up before the trailers." }
  },
  {
    id: 's106', category: 'Fun',
    question: "Do you take part in school plays?",
    targetVerb: { en: "take part in", ru: "участвовать", uz: "ishtirok etmoq" },
    modelAnswer: { answer: "I take part in the drama club.", reason: "I like acting.", example: "I take part in the spring show." }
  },
  {
    id: 's107', category: 'Fun',
    question: "Do you go along with your friends' plans?",
    targetVerb: { en: "go along with", ru: "соглашаться", uz: "fikriga qo'shilmoq" },
    modelAnswer: { answer: "I go along with them.", reason: "I am easygoing.", example: "I go along with whatever they want." }
  },
  {
    id: 's108', category: 'Fun',
    question: "Can you hold on for a minute?",
    targetVerb: { en: "hold on", ru: "подождать", uz: "kutib turmoq" },
    modelAnswer: { answer: "I can hold on.", reason: "I am patient.", example: "Hold on, I am coming." }
  },
  {
    id: 's109', category: 'Fun',
    question: "Do you watch out for cars?",
    targetVerb: { en: "watch out", ru: "быть осторожным", uz: "ehtiyot bo'lmoq" },
    modelAnswer: { answer: "I watch out when crossing.", reason: "Safety is key.", example: "Watch out! A bike is coming." }
  },
  {
    id: 's110', category: 'Fun',
    question: "Do you mix up twins?",
    targetVerb: { en: "mix up", ru: "перепутать", uz: "adashtirib yubormoq" },
    modelAnswer: { answer: "I mix up them always.", reason: "They look the same.", example: "I mix up their names." }
  }
];
