import './LandingPage.css'
import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'

const suggestions = [
  "Explain Binary Search",
  "What is Dynamic Programming?",
  "How does a HashMap work?",
  "Explain BFS vs DFS",
  "What is a Red-Black Tree?",
  "When to use a Heap?",
]

export default function LandingPage({ onStart }) {
  return (
    <div className="landing">
      {/* Mesh background */}
      <div className="mesh-bg" />

      {/* Glow orb */}
      <div className="glow-orb" />

      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <div className="hero">
        <div className="hero-badge">🚀 Powered by Groq AI</div>
        <h1 className="hero-title">
          Master DSA with your
          <span className="gradient-text"> Personal Mentor</span>
        </h1>
        <p className="hero-subtitle">
          Ask anything about Data Structures, Algorithms, Time Complexity,
          Coding Patterns and Problem Solving strategies.
        </p>

        <button className="cta-button" onClick={() => onStart()}>
          Start Learning
          <ArrowRight size={18} />
        </button>

        {/* Suggestion chips */}
        <div className="suggestion-chips">
          <p className="chips-label">Try asking:</p>
          <div className="chips-grid">
            {suggestions.map((s, i) => (
              <div key={i} className="chip" onClick={() => onStart(s)}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}