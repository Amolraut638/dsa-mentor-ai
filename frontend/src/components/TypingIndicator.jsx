import './TypingIndicator.css'
import { Bot } from 'lucide-react'

export default function TypingIndicator() {
  return (
    <div className="typing-wrapper">
      <div className="avatar">
        <Bot size={18} color="#ff6a00" />
      </div>
      <div className="typing-bubble">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </div>
  )
}