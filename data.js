/* ============================================================
   ДАНІ САЙТУ / SITE DATA
   Змінюйте тільки текст у лапках "..." — решту не чіпайте.
   Кожен блок має українську (ua) та англійську (en) версію.
   Щоб додати пункт у список — скопіюйте рядок і вставте нижче.
   Щоб видалити — видаліть рядок цілком.
   ============================================================ */
const DATA = {

  /* ---------- ШАПКА / HEADER ---------- */
  header: {
    photo: "photo.jpg",                       // файл з фото (поруч з index.html)
    name:  { ua: "Пономаренко Олена Володимирівна", en: "Olena Ponomarenko" },
    role:  { ua: "Вчитель англійської мови",        en: "English Teacher" },
    quote: { ua: "Ніколи не зупиняюся на досягнутому!", en: "I never stop at what I have achieved!" },
    footer:{ ua: "Мотивація. Професіоналізм. Натхнення. Результат.",
             en: "Motivation. Professionalism. Inspiration. Results." }
  },

  /* ---------- НАЗВИ ВКЛАДОК / TAB TITLES ---------- */
  tabs: {
    about:      { ua: "Про мене",              en: "About me" },
    education:  { ua: "Освіта",                en: "Education" },
    courses:    { ua: "Підвищення кваліфікації", en: "Professional development" },
    experience: { ua: "Досвід роботи",         en: "Experience" },
    achievements:{ ua: "Досягнення",           en: "Achievements" },
    skills:     { ua: "Навички",               en: "Skills" }
  },

  /* ---------- ПРО МЕНЕ / ABOUT ---------- */
  about: {
    text: {
      ua: "Я — енергійна вчителька англійської мови, яка ніколи не зупиняється на досягнутому. Постійно вдосконалюю професійні компетентності, впроваджую інноваційні методики, цифрові інструменти та інтерактивні форми навчання. Моєю метою є створення мотивуючого освітнього середовища, де кожна дитина розкриває свої здібності, впевнено спілкується англійською мовою та навчається із задоволенням. Вірю, що сучасний учитель надихає власним прикладом, підтримує кожного учня та перетворює навчання на цікаву подорож до нових знань.",
      en: "I am an energetic English teacher who never stops at what she has achieved. I constantly improve my professional competencies and introduce innovative methods, digital tools and interactive forms of learning. My goal is to create a motivating educational environment where every child discovers their abilities, communicates confidently in English and enjoys learning. I believe a modern teacher inspires by example, supports every student and turns learning into an exciting journey to new knowledge."
    }
  },

  /* ---------- ОСВІТА / EDUCATION ---------- */
  education: {
    items: [
      { label: { ua: "Освіта", en: "Education level" },
        value: { ua: "вища", en: "Higher education" } },
      { label: { ua: "Що закінчила", en: "University" },
        value: { ua: "МДПУ імені В. О. Сухомлинського", en: "Mykolaiv V. O. Sukhomlynskyi National University" } },
      { label: { ua: "№ диплома, дата видачі", en: "Diploma no., date of issue" },
        value: { ua: "МК №19809567", en: "MK No. 19809567" } },
      { label: { ua: "Спеціальність за дипломом", en: "Specialty" },
        value: { ua: "вчитель початкових класів та англійської мови і зарубіжної літератури",
                 en: "Primary school teacher; teacher of English and world literature" } },
      { label: { ua: "Педагогічний стаж роботи", en: "Teaching experience" },
        value: { ua: "24 роки", en: "24 years" } }
    ]
  },

  /* ---------- ПІДВИЩЕННЯ КВАЛІФІКАЦІЇ / COURSES ---------- */
  courses: {
    items: [
      { title: { ua: "«Сучасні підходи до розвитку комунікативної компетентності учнів 9 класу НУШ у процесі вивчення англійської мови»",
                 en: "“Modern approaches to developing communicative competence of 9th-grade NUS students while learning English”" },
        place: { ua: "освітня платформа hub.atoms", en: "hub.atoms educational platform" },
        hours: { ua: "30 годин", en: "30 hours" }, date: "02.05.2026" },

      { title: { ua: "Курси для вчителів загальної середньої освіти «СЕН «Зерна»: розвиток соціально-емоційних навичок та підтримка благополуччя дітей і педагогів»",
                 en: "Course for secondary school teachers “SEL ‘Zerna’: developing social-emotional skills and supporting the well-being of children and teachers”" },
        place: { ua: "МОІППО", en: "MOIPPO" },
        hours: { ua: "8 годин", en: "8 hours" }, date: "10.04.2026" },

      { title: { ua: "«Цифрова грамотність педагога. Штучний інтелект в освіті.»",
                 en: "“Teacher’s digital literacy. Artificial intelligence in education.”" },
        place: { ua: "Заклад вищої освіти «Дніпровська академія неперервної освіти»", en: "Dnipro Academy of Continuing Education" },
        hours: { ua: "3 години", en: "3 hours" }, date: "05.08.2025" },

      { title: { ua: "«Цифрограм для вчителів»", en: "“Digital Gram for teachers”" },
        place: { ua: "онлайн платформа Дія. Освіта.", en: "Diia. Education online platform" },
        hours: { ua: "", en: "" }, date: "28.07.2025" },

      { title: { ua: "Подяка вчителю за підготовку учнів до участі в олімпіаді «Весна-2026»",
                 en: "Letter of appreciation for preparing students for the “Spring-2026” olympiad" },
        place: { ua: "освітня платформа JustClass", en: "JustClass educational platform" },
        hours: { ua: "", en: "" }, date: "20.03.2026" }
    ]
  },

  /* ---------- ДОСВІД РОБОТИ / EXPERIENCE ---------- */
  experience: {
    intro: {
      ua: "Працюю в загальноосвітньому закладі вчителем англійської мови понад 24 роки. Маю досвід викладання в різних вікових групах (1–11 класи).",
      en: "I have worked as an English teacher at a secondary school for over 24 years. I have experience teaching different age groups (grades 1–11)."
    },
    items: [
      { ua: "Планування та проведення сучасних, цікавих уроків;", en: "Planning and delivering modern, engaging lessons;" },
      { ua: "Використання інтерактивних методів і технологій;", en: "Using interactive methods and technologies;" },
      { ua: "Підготовка учнів до олімпіад, конкурсів, проєктів;", en: "Preparing students for olympiads, contests and projects;" },
      { ua: "Розвиток комунікативних навичок учнів;", en: "Developing students’ communication skills;" },
      { ua: "Індивідуальний підхід до кожної дитини;", en: "An individual approach to every child;" },
      { ua: "Співпраця з батьками та колегами.", en: "Cooperation with parents and colleagues." }
    ]
  },

  /* ---------- ДОСЯГНЕННЯ / ACHIEVEMENTS ---------- */
  achievements: {
    items: [
      { ua: "Підготовка учнів – переможців та призерів шкільних та міських олімпіад з англійської мови.",
        en: "Preparing winners and prize-winners of school and city English olympiads." },
      { ua: "Активне впровадження цифрових інструментів в освітній процес.",
        en: "Actively introducing digital tools into the learning process." },
      { ua: "Постійне підвищення професійного рівня та участь у навчальних заходах.",
        en: "Continuously raising professional level and taking part in training events." },
      { ua: "Створення позитивного, мотивуючого освітнього середовища.",
        en: "Creating a positive, motivating learning environment." }
    ]
  },

  /* ---------- ЦИФРОВІ ІНСТРУМЕНТИ / DIGITAL TOOLS ---------- */
  /* level — відсотки 0–100; color — колір позначки;
     logo — необов'язково: шлях до файлу логотипа, напр. "logos/canva.png" */
  tools: {
    title: { ua: "Володіння цифровими інструментами", en: "Digital tools" },
    items: [
      { name: "Canva",            level: 90,  color: "#00c4cc", logo: "" },
      { name: "Google Classroom", level: 95,  color: "#0f9d58", logo: "" },
      { name: "Google Forms",     level: 90,  color: "#7248b9", logo: "" },
      { name: "Zoom",             level: 100, color: "#0b5cff", logo: "" },
      { name: "Mentimeter",       level: 85,  color: "#e8465f", logo: "" },
      { name: "Quizizz",          level: 90,  color: "#7a2a9a", logo: "" },
      { name: "Wordwall",         level: 90,  color: "#1b8bd6", logo: "" },
      { name: "LearningApps.org", level: 85,  color: "#e58a1f", logo: "" },
      { name: "YouTube",          level: 90,  color: "#e52d27", logo: "" }
    ]
  },

  /* ---------- SOFT SKILLS ---------- */
  /* level — від 1 до 5 (кількість заповнених точок) */
  soft: {
    title: { ua: "Мої «soft skills» (навички)", en: "My soft skills" },
    items: [
      { icon: "communication",        level: 4, name: { ua: "Комунікабельність",  en: "Communication" } },
      { icon: "creativity",           level: 4, name: { ua: "Креативність",       en: "Creativity" } },
      { icon: "responsibility",       level: 4, name: { ua: "Відповідальність",   en: "Responsibility" } },
      { icon: "leadership",           level: 4, name: { ua: "Лідерство",          en: "Leadership" } },
      { icon: "flexibility",          level: 4, name: { ua: "Гнучкість",          en: "Flexibility" } },
      { icon: "teamwork",             level: 4, name: { ua: "Робота в команді",   en: "Teamwork" } },
      { icon: "critical-thinking",    level: 4, name: { ua: "Критичне мислення",  en: "Critical thinking" } },
      { icon: "emotional-intelligence",level: 4, name: { ua: "Емоційний інтелект", en: "Emotional intelligence" } },
      { icon: "self-development",     level: 4, name: { ua: "Саморозвиток",       en: "Self-development" } },
      { icon: "organization",         level: 3, name: { ua: "Організованість",    en: "Organization" } }
    ]
  }
};
