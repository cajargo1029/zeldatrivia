const questions = [
  {
    question: "¿Cómo se llama la espada principal de Link?",
    options: ["Master Sword", "Iron Sword", "Golden Sword", "Light Sword"],
    correct: 0
  },
  {
    question: "¿Quién es la princesa de Hyrule?",
    options: ["Midna", "Zelda", "Saria", "Ruto"],
    correct: 1
  },
  {
    question: "¿Cuál es la trifuerza que posee Ganondorf?",
    options: ["Sabiduría", "Valor", "Poder", "Oscuridad"],
    correct: 2
  },
  {
    question: "¿Cómo se llama el reino donde ocurren la mayoría de los juegos?",
    options: ["Termina", "Hyrule", "Holodrum", "Labrynna"],
    correct: 1
  },
  {
    question: "¿Quién es el creador de la serie Zelda?",
    options: ["Shigeru Miyamoto", "Hideo Kojima", "Satoshi Tajiri", "Masahiro Sakurai"],
    correct: 0
  },
  {
    question: "¿Cuál es el nombre de la ocarina en Ocarina of Time?",
    options: ["Ocarina del Tiempo", "Ocarina Dorada", "Ocarina de los Sabios", "Ocarina Sagrada"],
    correct: 0
  },
  {
    question: "¿Cómo se llama la nave hada que acompaña a Link en Ocarina of Time?",
    options: ["Tatl", "Midna", "Navi", "Fi"],
    correct: 2
  },
  {
    question: "¿Qué instrumento usa Link en Majora’s Mask?",
    options: ["Ocarina del Tiempo", "Guitarra Zora", "Tambores Goron", "Todos los anteriores"],
    correct: 3
  },
  {
    question: "¿Cómo se llama la luna que cae en Majora’s Mask?",
    options: ["Luna Roja", "Luna Maldita", "Luna de Termina", "No tiene nombre"],
    correct: 3
  },
  {
    question: "¿Qué animal acompaña a Link en Twilight Princess?",
    options: ["Caballo", "Lobo", "Águila", "Jabalí"],
    correct: 1
  },
  {
    question: "¿Cómo se llama el caballo de Link?",
    options: ["Epona", "Agro", "Spirit", "Storm"],
    correct: 0
  },
  {
    question: "¿Quién ayuda a Link en Wind Waker como un barco parlante?",
    options: ["El Rey Rojo de los Leones", "El Gran Árbol Deku", "El Pez Sabio", "Navi"],
    correct: 0
  },
  {
    question: "¿Cuál es el objeto que permite controlar el viento en Wind Waker?",
    options: ["Arpa de los Sabios", "Báculo del Viento", "Batuta de los Vientos", "Ocarina del Tiempo"],
    correct: 2
  },
  {
    question: "¿Cómo se llama la espada en Skyward Sword?",
    options: ["Fi", "Espada Maestra", "Espada de los Dioses", "Espada Celestial"],
    correct: 3
  },
  {
    question: "¿Qué raza vive en las montañas y ama las rocas?",
    options: ["Zoras", "Gerudo", "Kokiri", "Gorons"],
    correct: 3
  },
  {
    question: "¿Qué raza vive bajo el agua?",
    options: ["Kokiri", "Rito", "Zoras", "Sheikah"],
    correct: 2
  },
  {
    question: "¿Qué pueblo está compuesto solo por mujeres?",
    options: ["Sheikah", "Gerudo", "Zora", "Hyliano"],
    correct: 1
  },
  {
    question: "¿Cómo se llama el villano principal de la saga?",
    options: ["Vaati", "Ganondorf", "Majora", "Ghirahim"],
    correct: 1
  },
  {
    question: "¿Cuál es el nombre real de Sheik?",
    options: ["Ruto", "Zelda", "Impa", "Malon"],
    correct: 1
  },
  {
    question: "¿Cuál fue el primer juego de la saga The Legend of Zelda?",
    options: ["Ocarina of Time", "The Legend of Zelda (NES)", "A Link to the Past", "Adventure of Link"],
    correct: 1
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const quizContainer = document.getElementById("quiz-container");
const scoreEl = document.getElementById("score");
const rankEl = document.getElementById("rank");
const retryBtn = document.getElementById("retry-btn");

function loadQuestion() {
  let q = questions[currentIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => {
  // Quitar selección previa
  Array.from(optionsEl.children).forEach(b => b.classList.remove("selected"));
  // Marcar la opción actual
  btn.classList.add("selected");
  // Chequear si es correcta
  checkAnswer(i);
};

    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentIndex].correct) {
    score++;
  }
  // deshabilitar botones tras responder
  Array.from(optionsEl.children).forEach(b => b.disabled = true);
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

retryBtn.addEventListener("click", () => {
  score = 0;
  currentIndex = 0;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
});

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  scoreEl.textContent = `Tu score: ${score}/${questions.length}`;

  let rank = "";
  if (score <= 5) rank = "Eres un@ Bokoblin🪓  Algo social, pero muy despistad@. El conocimiento no es lo tuyo.";
  else if (score <= 10) rank = "Moblin 🛡️ Muy fuerte, muy grande, y con algo de conocimiento.";
  else if (score <= 15) rank = "Ganondorf 👑 Mucho poder, gran conocimiento, pero aún le falta para poder gobernar.";
  else if (score < questions.length) rank = "Link 🗡️ Elegido por las diosas, gran coraje y determinación, buen conocimiento, aún por aprender.";
  else rank = "Zelda 👸 LA princesa, la reencarnación de la diosa Hyilia, con gran sabiduría y determinación.";

  rankEl.textContent = `Eres: ${rank}`;
}

// iniciar
loadQuestion();
