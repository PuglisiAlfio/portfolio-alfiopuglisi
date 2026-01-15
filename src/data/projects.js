import futuramaDexImg from "../assets/projects/futuramadex.png"
import nextStopImg from "../assets/projects/next-stop.png"
import tennisTrackerImg from "../assets/projects/tennis-tracker.png"
import stockifyImg from "../assets/projects/Stockify-login.png"
import cobolAgentImg from "../assets/projects/Cobol-agent.jpeg"


// title e description in questo file sono "inutili" in quanto la card prende le informazioni dal file translations.js

export const PROJECTS = [
  {
    id: "futuramadex",
    title: "FuturamaDex",
    description: "Tieni traccia dei tuoi personaggi preferiti di Futurama",
    image: futuramaDexImg,
    github: "https://github.com/PuglisiAlfio/FuturamaDex",
  },
  {
    id: "nextstop",
    title: "Next Stop",
    description: "Scegli dove vuoi andare per la tua prossima vacanza",
    image: nextStopImg,
    github: "https://github.com/PuglisiAlfio/NextStop",
  },
  {
    id: "tennistracker",
    title: "Tennis Tracker",
    description: "Segna. Vinci. Ricorda.",
    image: tennisTrackerImg,
    github: "https://github.com/PuglisiAlfio/tennis-match-tracker",
  },
  {
    id: "rubricaPython",
    title: "Rubrica in Python",
    description: "Applicazione backend per gestire una rubrica di contatti.",
    image: null,
    github: "https://github.com/PuglisiAlfio/rubrica_Python",
  },
  {
    id: "stockify",
    title: "Stockify",
    description: "Applicazione per prenotazioni e gestione magazzino di materiali idraulici ed elettrici.",
    image: stockifyImg,
    github: "https://github.com/PuglisiAlfio/stockify",
  },
  {
    id: "cobolAgent",
    title: "COBOL Doc Agent",
    description: "Sistema Multi-Agente per l’Analisi, il Censimento e la Documentazione di Applicazioni COBOL.",
    image: cobolAgentImg,
    github: "https://github.com/PuglisiAlfio/cobol-agentic-analyzer",
  },
];
