# 🧠 DsaMentor.ai

> Your personal DSA & LeetCode mentor, powered by AI. Built to teach — not just answer.

![DsaMentor.ai](https://img.shields.io/badge/DsaMentor.ai-Live-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_AI-FF6A00?style=for-the-badge)

---

## 🚀 Live Demo

🔗 **[dsamentor.vercel.app](https://dsamentor.vercel.app)**

---

## 📌 What is DsaMentor.ai?

DsaMentor.ai is a purpose-built chatbot for developers who want to get better at Data Structures & Algorithms. Unlike a generic AI wrapper, this bot has a specific persona and teaching philosophy:

- When you ask about a **DSA concept** -> it explains clearly with code examples and complexity analysis
- When you paste a **LeetCode problem** -> it does NOT give you the answer. Instead, it guides you like a mentor - asking clarifying questions, identifying patterns, giving progressive hints

The goal is to make you **think**, not just copy-paste solutions.

---

## ✨ Features

- 🎯 **Topic-focused** - Only answers DSA & algorithm questions. Politely redirects everything else
- 🧑‍🏫 **Mentor mode** - For LeetCode problems, guides you step by step instead of giving direct answers
- 💡 **Suggested questions** - Empty state shows quick-start prompts to get going instantly
- ⚡ **Chip navigation** - Click any suggestion on the landing page to auto-send and jump straight into chat
- 💾 **Chat persistence** - Conversations saved in localStorage, survive page refresh
- 🗑️ **Clear chat** - One-click reset to start fresh
- 🌙 **Premium dark UI** - Code-editor aesthetic with red/orange glow, mesh background, glassmorphism
- 🖥️ **Syntax highlighting** - Code blocks render with full syntax highlighting
- ⌨️ **Typing indicator** - Animated dots while the mentor is thinking
- ❌ **Error state** - Friendly error message with a retry button
- 📱 **Fully responsive** - Works on mobile and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Styling | CSS (custom, no framework) |
| Icons | Lucide React |
| Markdown | react-markdown |
| Syntax Highlighting | react-syntax-highlighter |
| Backend | Node.js + Express |
| AI | Groq API (llama-3.3-70b-versatile) |
| Deployment | Vercel |

---

## 🗂️ Project Structure

```
dsa-mentor-ai/
├── frontend/                  # React + Vite
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx         # Shared navbar
│       │   ├── LandingPage.jsx    # Hero / entry page
│       │   ├── ChatPage.jsx       # Main chat interface
│       │   ├── MessageBubble.jsx  # User & assistant messages
│       │   ├── TypingIndicator.jsx
│       │   └── EmptyState.jsx     # Suggestion chips
│       ├── App.jsx
│       └── index.css             # Global styles + CSS variables
└── backend/                   # Node.js + Express
    ├── routes/
    │   └── chat.js               # Groq API + system prompt
    └── index.js
```

---

## ⚙️ Running Locally

### Prerequisites
- Node.js v18+
- Groq API key (free at [console.groq.com](https://console.groq.com))

### 1. Clone the repo
```bash
git clone https://github.com/Amolraut638/dsa-mentor-ai.git
cd dsa-mentor-ai
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create `.env` file:
```
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
```

Start backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🤖 How the AI Works

The bot uses a carefully crafted system prompt with two modes:

**Concept mode** — triggered when you ask about a DSA topic:
- Explains the concept clearly
- Provides a code example (C++ by default)
- Always includes time & space complexity

**Mentor mode** — triggered when you paste a LeetCode problem:
- Asks clarifying questions first
- Helps identify the core pattern
- Gives progressive hints only
- Never gives the full solution unless you explicitly ask

---

## 💭 Why I Built This

Most developers struggle with DSA not because they lack intelligence, but because they never learned how to **think through problems**. Generic AI tools make this worse — they just hand you the answer.

DsaMentor.ai is built around the idea that the best way to get good at DSA is to have a patient mentor who guides you, not one who solves things for you. The UI is intentionally built to feel like a focused learning environment — dark, distraction-free, with a code-editor aesthetic that puts you in the right headspace.

---

MIT — feel free to use, modify, and build on this.

---

<p align="center">Built with ❤️ for developers who want to actually get good at DSA</p>
