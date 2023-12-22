const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side", isCorrect: false },
      { id: 1, text: "UI", isCorrect: true },
      { id: 2, text: "Both", isCorrect: false },
      { id: 3, text: "None", isCorrect: false },
    ],
  },

  {
    text: "React.js language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect: false },
      { id: 2, text: "C", isCorrect: false },
      { id: 3, text: "C++", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "Permanent storage", isCorrect: false },
      { id: 1, text: "Internal storage", isCorrect: true },
      { id: 2, text: "External storage", isCorrect: false },
      { id: 3, text: "None", isCorrect: false },
    ],
  },
  
  {
    text: "Return value of useState hook?",
    options: [
      { id: 0, text: "Pair of state and updater", isCorrect: true },
      { id: 1, text: "Current State", isCorrect: false },
      { id: 2, text: "Updater function", isCorrect: false },
      { id: 3, text: "No return", isCorrect: false },
    ],
  },
  {
    text: "Elements in a valid React component?",
    options: [
      { id: 0, text: "1", isCorrect: false },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "4", isCorrect: true },
    ],
  },

  // Additional Questions
  {
    text: "What does JSX stand for?",
    options: [
      { id: 0, text: "JavaScript XML", isCorrect: true },
      { id: 1, text: "Java XML", isCorrect: false },
      { id: 2, text: "JSX Extension", isCorrect: false },
      { id: 3, text: "Java Syntax Extension", isCorrect: false },
    ],
  },
  {
    text: "Purpose of useEffect hook?",
    options: [
      { id: 0, text: "Manage state", isCorrect: false },
      { id: 1, text: "Handle side effects", isCorrect: true },
      { id: 2, text: "Create class components", isCorrect: false },
      { id: 3, text: "Define propTypes", isCorrect: false },
    ],
  },
  {
    text: "What is the virtual DOM?",
    options: [
      { id: 0, text: "Alternative JSX syntax", isCorrect: false },
      { id: 1, text: "Lightweight DOM representation", isCorrect: true },
      { id: 2, text: "Physical DOM", isCorrect: false },
      { id: 3, text: "Built-in React component", isCorrect: false },
    ],
  },
  {
    text: "Purpose of prop-types library?",
    options: [
      { id: 0, text: "Define default props", isCorrect: false },
      { id: 1, text: "Check and document props", isCorrect: true },
      { id: 2, text: "Handle state", isCorrect: false },
      { id: 3, text: "Create higher-order components", isCorrect: false },
    ],
  },
  {
    text: "Significance of keys in lists?",
    options: [
      { id: 0, text: "Assign unique identifiers", isCorrect: true },
      { id: 1, text: "Set default prop values", isCorrect: false },
      { id: 2, text: "Define styles", isCorrect: false },
      { id: 3, text: "Handle lifecycle events", isCorrect: false },
    ],
  },
  {
    text: "Purpose of React Router library?",
    options: [
      { id: 0, text: "Handle form submissions", isCorrect: false },
      { id: 1, text: "Manage state", isCorrect: false },
      { id: 2, text: "Enable navigation and routing", isCorrect: true },
      { id: 3, text: "Define global styles", isCorrect: false },
    ],
  },
  {
    text: "Significance of 'key' prop in React lists?",
    options: [
      { id: 0, text: "Set initial state", isCorrect: false },
      { id: 1, text: "Identify changes, additions, or removals", isCorrect: true },
      { id: 2, text: "Define order", isCorrect: false },
      { id: 3, text: "Specify text color", isCorrect: false },
    ],
  },
  {
    text: "What is Redux used for?",
    options: [
      { id: 0, text: "Style React components", isCorrect: false },
      { id: 1, text: "Manage state predictably", isCorrect: true },
      { id: 2, text: "Define routes", isCorrect: false },
      { id: 3, text: "Create animations", isCorrect: false },
    ],
  },
  {
    text: "Purpose of 'create-react-app' command?",
    options: [
      { id: 0, text: "Install React globally", isCorrect: false },
      { id: 1, text: "Create new project with default config", isCorrect: true },
      { id: 2, text: "Build production-ready app", isCorrect: false },
      { id: 3, text: "Update existing project", isCorrect: false },
    ],
  },
  {
    text: "Role of 'render' method in React component?",
    options: [
      { id: 0, text: "Initialize state", isCorrect: false },
      { id: 1, text: "Handle input and events", isCorrect: false },
      { id: 2, text: "Define layout and structure", isCorrect: false },
      { id: 3, text: "Return JSX for component's UI", isCorrect: true },
    ],
  } 
];

export default questions;
