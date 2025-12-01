
import { LessonSection, QuizQuestion, DiscoveryPair, SpeakingQuestion, CampaignLevel } from './types';

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
  campaignMode: { en: "Campaign", ru: "Кампания", uz: "Kampaniya" },
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
  },
  {
    title: "55.4 Three-Part Verbs",
    subtitle: "Advanced Complexity",
    content: [
      {
        id: "tp1",
        type: "definition",
        en: "Some verbs have TWO particles. They are never separable.",
        ru: "У некоторых глаголов ДВЕ частицы. Они никогда не разделяются.",
        uz: "Ba'zi fe'llarda IKKITA yuklama bor. Ular hech qachon ajralmaydi.",
        image: "3️⃣"
      },
      {
        id: "ex_tp1",
        type: "example",
        en: "I look forward to the party.",
        ru: "Я с нетерпением жду вечеринки.",
        uz: "Men bazmni intizorlik bilan kutaman.",
        image: "🎉",
        highlight: ["forward", "to"],
        interactiveTarget: "to"
      },
      {
        id: "ex_tp2",
        type: "example",
        en: "I get along with my sister.",
        ru: "Я лажу со своей сестрой.",
        uz: "Men singlim bilan chiqishaman.",
        image: "🤝",
        highlight: ["along", "with"],
        interactiveTarget: "along"
      }
    ]
  }
];

// --- GENERATING THE MASSIVE QUESTION POOL ---

const BASE_QUESTIONS: QuizQuestion[] = [
  // Original 5
  { id: "q1", question: "I usually ____ up at 7:00 AM.", options: ["getting", "get", "gets", "got"], correctAnswer: 1, explanation: "Present Simple: I get up.", explanationRu: "Я встаю.", explanationUz: "Men turaman." },
  { id: "q2", question: "She ____ out at the gym yesterday.", options: ["work", "works", "worked", "working"], correctAnswer: 2, explanation: "Past Simple: worked.", explanationRu: "Прошедшее время.", explanationUz: "O'tgan zamon." },
  { id: "q3", question: "Can you turn ____ the light?", options: ["on", "in", "at", "by"], correctAnswer: 0, explanation: "Turn on = activate.", explanationRu: "Включить.", explanationUz: "Yoqmoq." },
  { id: "q4", question: "Please pick ____.", options: ["up it", "it up", "it on", "on it"], correctAnswer: 1, explanation: "Pronoun 'it' goes in the middle.", explanationRu: "Местоимение посередине.", explanationUz: "Olmosh o'rtada." },
  { id: "q5", question: "We ran ____ of coffee!", options: ["away", "in", "out", "over"], correctAnswer: 2, explanation: "Run out of = have none left.", explanationRu: "Закончилось.", explanationUz: "Tugab qoldi." },
];

const NEW_QUESTIONS: QuizQuestion[] = [
  { id: "nq1", question: "I can't ____ up with this noise anymore!", options: ["put", "get", "let", "make"], correctAnswer: 0, explanation: "Put up with = tolerate.", explanationRu: "Терпеть.", explanationUz: "Chidamoq." },
  { id: "nq2", question: "Don't ____ up! You can do it!", options: ["give", "go", "get", "grow"], correctAnswer: 0, explanation: "Give up = quit.", explanationRu: "Сдаваться.", explanationUz: "Taslim bo'lmoq." },
  { id: "nq3", question: "The plane will ____ off in 5 minutes.", options: ["take", "get", "fly", "go"], correctAnswer: 0, explanation: "Take off = depart (for planes).", explanationRu: "Взлетать.", explanationUz: "Uchib ketmoq." },
  { id: "nq4", question: "I need to ____ for my keys.", options: ["look", "see", "watch", "view"], correctAnswer: 0, explanation: "Look for = search.", explanationRu: "Искать.", explanationUz: "Qidirmoq." },
  { id: "nq5", question: "Can you ____ after my dog while I'm away?", options: ["look", "take", "get", "run"], correctAnswer: 0, explanation: "Look after = take care of.", explanationRu: "Присматривать.", explanationUz: "G'amxo'rlik qilmoq." },
  { id: "nq6", question: "The meeting was ____ off due to rain.", options: ["called", "made", "turned", "gone"], correctAnswer: 0, explanation: "Call off = cancel.", explanationRu: "Отменять.", explanationUz: "Bekor qilmoq." },
  { id: "nq7", question: "I ____ into an old friend yesterday.", options: ["ran", "walked", "jumped", "saw"], correctAnswer: 0, explanation: "Run into = meet unexpectedly.", explanationRu: "Случайно встретить.", explanationUz: "Duch kelmoq." },
  { id: "nq8", question: "Please ____ on your coat, it's cold.", options: ["put", "get", "take", "have"], correctAnswer: 0, explanation: "Put on = dress.", explanationRu: "Надевать.", explanationUz: "Kiymoq." },
  { id: "nq9", question: "You should ____ down sugar to lose weight.", options: ["cut", "chop", "break", "let"], correctAnswer: 0, explanation: "Cut down on = reduce.", explanationRu: "Сократить потребление.", explanationUz: "Kamaytirmoq." },
  { id: "nq10", question: "Did you ____ up the story?", options: ["make", "do", "get", "take"], correctAnswer: 0, explanation: "Make up = invent/create.", explanationRu: "Выдумывать.", explanationUz: "To'qib chiqarmoq." },
  { id: "nq11", question: "The car ____ down on the highway.", options: ["broke", "fell", "went", "crash"], correctAnswer: 0, explanation: "Break down = stop working (machine).", explanationRu: "Сломаться.", explanationUz: "Buzilib qolmoq." },
  { id: "nq12", question: "I ____ up early even on Sundays.", options: ["get", "stand", "rise", "go"], correctAnswer: 0, explanation: "Get up = leave bed.", explanationRu: "Вставать.", explanationUz: "O'rnidan turmoq." },
  { id: "nq13", question: "Never ____ down on people.", options: ["look", "see", "go", "take"], correctAnswer: 0, explanation: "Look down on = feel superior to.", explanationRu: "Смотреть свысока.", explanationUz: "Mensimaslik." },
  { id: "nq14", question: "I really ____ up to my father.", options: ["look", "see", "watch", "go"], correctAnswer: 0, explanation: "Look up to = admire/respect.", explanationRu: "Уважать.", explanationUz: "Hurmat qilmoq." },
  { id: "nq15", question: "The bomb might ____ off!", options: ["go", "fly", "take", "run"], correctAnswer: 0, explanation: "Go off = explode.", explanationRu: "Взорваться.", explanationUz: "Portlamoq." },
  { id: "nq16", question: "Can you ____ me up at the station?", options: ["pick", "take", "get", "bring"], correctAnswer: 0, explanation: "Pick up = collect someone.", explanationRu: "Забрать.", explanationUz: "Olib ketmoq." },
  { id: "nq17", question: "The milk has ____ off.", options: ["gone", "been", "turned", "run"], correctAnswer: 0, explanation: "Go off = become bad (food).", explanationRu: "Испортиться.", explanationUz: "Aynib qolmoq." },
  { id: "nq18", question: "Hold ____ a minute, please.", options: ["on", "in", "at", "up"], correctAnswer: 0, explanation: "Hold on = wait.", explanationRu: "Подождать.", explanationUz: "Kutib turmoq." },
  { id: "nq19", question: "The firemen ____ out the fire.", options: ["put", "get", "took", "made"], correctAnswer: 0, explanation: "Put out = extinguish.", explanationRu: "Тушить.", explanationUz: "O'chirmoq." },
  { id: "nq20", question: "I want to ____ up a new hobby.", options: ["take", "get", "make", "do"], correctAnswer: 0, explanation: "Take up = start a hobby.", explanationRu: "Начать заниматься.", explanationUz: "Shug'ullanishni boshlamoq." },
  { id: "nq21", question: "____ out! There's a car coming.", options: ["Watch", "See", "Look", "View"], correctAnswer: 0, explanation: "Watch out = be careful.", explanationRu: "Осторожно!", explanationUz: "Ehtiyot bo'l!" },
  { id: "nq22", question: "I need to ____ in at the hotel.", options: ["check", "get", "sign", "log"], correctAnswer: 0, explanation: "Check in = register arrival.", explanationRu: "Зарегистрироваться.", explanationUz: "Ro'yxatdan o'tmoq." },
  { id: "nq23", question: "Let's ____ out tonight.", options: ["eat", "food", "cook", "meal"], correctAnswer: 0, explanation: "Eat out = eat at a restaurant.", explanationRu: "Есть в ресторане.", explanationUz: "Ko'chada ovqatlanmoq." },
  { id: "nq24", question: "Please ____ out this form.", options: ["fill", "write", "do", "make"], correctAnswer: 0, explanation: "Fill out/in = complete a form.", explanationRu: "Заполнить.", explanationUz: "To'ldirmoq." },
  { id: "nq25", question: "He ____ up smoking last year.", options: ["gave", "took", "put", "let"], correctAnswer: 0, explanation: "Give up = stop a habit.", explanationRu: "Бросить (привычку).", explanationUz: "Tashlamoq (odatni)." },
  { id: "nq26", question: "I can't ____ it out.", options: ["figure", "do", "make", "take"], correctAnswer: 0, explanation: "Figure out = understand/solve.", explanationRu: "Понять/Решить.", explanationUz: "Tushunib yetmoq." },
  { id: "nq27", question: "Don't let me ____.", options: ["down", "up", "in", "off"], correctAnswer: 0, explanation: "Let down = disappoint.", explanationRu: "Подвести.", explanationUz: "Uyatga qo'ymoq." },
  { id: "nq28", question: "The thief ____ away with the money.", options: ["got", "run", "took", "went"], correctAnswer: 0, explanation: "Get away = escape.", explanationRu: "Сбежать.", explanationUz: "Qochib qolmoq." },
  { id: "nq29", question: "Turn ____ the music, it's too loud!", options: ["down", "up", "in", "out"], correctAnswer: 0, explanation: "Turn down = reduce volume.", explanationRu: "Убавить (звук).", explanationUz: "Pasaytirmoq." },
  { id: "nq30", question: "Turn ____ the volume, I can't hear.", options: ["up", "down", "in", "out"], correctAnswer: 0, explanation: "Turn up = increase volume.", explanationRu: "Прибавить (звук).", explanationUz: "Ko'tarmoq (ovozni)." },
  { id: "nq31", question: "She ____ after her mother.", options: ["takes", "gets", "looks", "goes"], correctAnswer: 0, explanation: "Take after = resemble.", explanationRu: "Быть похожим.", explanationUz: "O'xshamoq." },
  { id: "nq32", question: "We need to ____ up the house.", options: ["clean", "do", "make", "get"], correctAnswer: 0, explanation: "Clean up = make tidy.", explanationRu: "Убраться.", explanationUz: "Tozalamoq." },
  { id: "nq33", question: "Did you ____ back the money?", options: ["pay", "give", "take", "get"], correctAnswer: 0, explanation: "Pay back = return money.", explanationRu: "Вернуть долг.", explanationUz: "Qaytarib to'lamoq." },
  { id: "nq34", question: "The deal ____ through.", options: ["fell", "went", "got", "came"], correctAnswer: 0, explanation: "Fall through = fail to happen.", explanationRu: "Сорваться (о сделке).", explanationUz: "Amalga oshmay qolmoq." }
];

export const KAHOOT_QUESTIONS = [...BASE_QUESTIONS, ...NEW_QUESTIONS];

export const DISCOVERY_PAIRS: DiscoveryPair[] = [
  { id: '1', verb: 'Get up', meaning: 'Leave bed', meaningRu: 'Вставать с постели', meaningUz: "O'rnidan turmoq" },
  { id: '2', verb: 'Give up', meaning: 'Quit/Stop', meaningRu: 'Сдаваться/Бросать', meaningUz: "Taslim bo'lmoq" },
  { id: '3', verb: 'Look for', meaning: 'Search', meaningRu: 'Искать', meaningUz: "Qidirmoq" },
  { id: '4', verb: 'Turn on', meaning: 'Start machine', meaningRu: 'Включать', meaningUz: "Yoqmoq" },
  { id: '5', verb: 'Run out', meaning: 'Have none left', meaningRu: 'Заканчиваться', meaningUz: "Tugab qolmoq" },
  { id: '6', verb: 'Put off', meaning: 'Postpone', meaningRu: 'Откладывать', meaningUz: "Keyinga qoldirmoq" },
  { id: '7', verb: 'Take off', meaning: 'Depart (plane)', meaningRu: 'Взлетать', meaningUz: "Uchib ketmoq" },
  { id: '8', verb: 'Get on', meaning: 'Enter bus/train', meaningRu: 'Садиться (транспорт)', meaningUz: "Chiqmoq (transportga)" }
];

export const BOSS_CONFIG = {
  name: "The Phrasal Phantom",
  hp: 500,
  maxHp: 500,
  avatar: "👻"
};

export const SPEAKING_QUESTIONS: SpeakingQuestion[] = [
  {
    id: 's1',
    category: 'Daily Routine',
    question: 'What time do you usually wake up?',
    targetVerb: { en: 'wake up', ru: 'просыпаться', uz: "uyg'onmoq" },
    modelAnswer: {
      answer: 'I usually wake up at 7:00 AM.',
      reason: 'I need to get ready for school.',
      example: 'For example, yesterday I woke up at 7:00 and had breakfast.'
    }
  },
  {
    id: 's2',
    category: 'Free Time',
    question: 'Do you hang out with friends often?',
    targetVerb: { en: 'hang out', ru: 'тусоваться/проводить время', uz: "vaqt o'tkazmoq" },
    modelAnswer: {
      answer: 'Yes, I hang out with my friends every weekend.',
      reason: 'We like to play video games together.',
      example: 'Last Saturday, we hung out at the park.'
    }
  },
  {
    id: 's3',
    category: 'Sports',
    question: 'Do you work out at the gym?',
    targetVerb: { en: 'work out', ru: 'тренироваться', uz: "shug'ullanmoq" },
    modelAnswer: {
      answer: 'I work out three times a week.',
      reason: 'It helps me stay healthy.',
      example: 'I usually work out on Mondays, Wednesdays, and Fridays.'
    }
  },
  {
    id: 's4',
    category: 'Video Games',
    question: 'When do you log in to play games?',
    targetVerb: { en: 'log in', ru: 'входить в систему', uz: "tizimga kirmoq" },
    modelAnswer: {
      answer: 'I log in after I finish my homework.',
      reason: 'I enjoy playing online with friends.',
      example: 'I usually log in around 8 PM.'
    }
  },
  {
    id: 's5',
    category: 'Reading',
    question: 'Do you look up words you don\'t know?',
    targetVerb: { en: 'look up', ru: 'искать (в словаре)', uz: "qidirmoq (lug'atdan)" },
    modelAnswer: {
      answer: 'Yes, I look up new words in the dictionary.',
      reason: 'It helps me improve my vocabulary.',
      example: 'I looked up "phrasal verb" yesterday.'
    }
  },
  {
    id: 's6',
    category: 'Fun',
    question: 'Do you dress up for parties?',
    targetVerb: { en: 'dress up', ru: 'наряжаться', uz: "yasanmoq" },
    modelAnswer: {
      answer: 'I dress up for special occasions.',
      reason: 'It is fun to wear nice clothes.',
      example: 'I dressed up as a superhero for Halloween.'
    }
  }
];

export const CAMPAIGN_LEVELS: CampaignLevel[] = [
  { id: 1, title: 'The Awakening', questions: KAHOOT_QUESTIONS.slice(0, 5) },
  { id: 2, title: 'Daily Grind', questions: KAHOOT_QUESTIONS.slice(5, 10) },
  { id: 3, title: 'Travel Troubles', questions: KAHOOT_QUESTIONS.slice(10, 15) },
  { id: 4, title: 'Social Life', questions: KAHOOT_QUESTIONS.slice(15, 20) },
  { id: 5, title: 'Emergency!', questions: KAHOOT_QUESTIONS.slice(20, 25) },
  { id: 6, title: 'The Boss Run', questions: KAHOOT_QUESTIONS.slice(25, 35) },
];
