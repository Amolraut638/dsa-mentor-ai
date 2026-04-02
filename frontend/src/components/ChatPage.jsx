/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'
import EmptyState from './EmptyState'
import { SendHorizonal } from 'lucide-react'
import './ChatPage.css'
import Navbar from './Navbar'

const SUGGESTIONS = [
  "Explain Binary Search Tree",
  "What is Dynamic Programming?",
  "How does QuickSort work?",
  "Explain Graph BFS vs DFS",
  "What is a Sliding Window?",
  "When to use a Min Heap?",
]

export default function ChatPage({ initialMessage = '' }) {

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const bottomRef = useRef(null)
  const initialSent = useRef(false)

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('dsa-chat-history')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('dsa-chat-history', JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Auto-send initial message from landing page chip
  useEffect(() => {
    if (initialMessage && !initialSent.current) {
      initialSent.current = true
      sendMessage(initialMessage)
    }
  }, [])

  const sendMessage = async (text) => {
    const userMessage = text || input.trim()
    if (!userMessage || loading) return

    setInput('')
    setError(null)

    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setLoading(true)

    const history = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.content
    }))

    try {
      const res = await axios.post('https://dsa-mentor-ai-ten.vercel.app/api/chat', {
        message: userMessage,
        history,
      })
      setMessages([...newMessages, { role: 'assistant', content: res.data.reply }])
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="chat-page">
      <div className="mesh-bg" />
      <div className="chat-glow-orb" />

      <Navbar showOnline={true} onClear={() => {
        setMessages([])
        localStorage.removeItem('dsa-chat-history')
      }} />

      <div className="chat-container">
        <div className="messages-area">
          {messages.length === 0 && !loading ? (
            <EmptyState onSuggest={sendMessage} suggestions={SUGGESTIONS} />
          ) : (
            <>
              {messages.map((msg, i) => (
                <MessageBubble key={i} role={msg.role} content={msg.content} />
              ))}
              {loading && <TypingIndicator />}
              {error && (
                <div className="error-state">
                  <span>{error}</span>
                  <button onClick={() => sendMessage(messages[messages.length - 1]?.content)}>
                    Retry
                  </button>
                </div>
              )}
            </>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="input-area">
          <div className="input-wrapper">
            <textarea
              className="chat-input"
              placeholder="Ask anything about DSA..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={loading}
            />
            <button
              className={`send-button ${loading ? 'disabled' : ''}`}
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
            >
              {loading ? <span className="sending-dots">...</span> : <SendHorizonal size={18} />}
            </button>
          </div>
          <p className="input-hint">Press Enter to send · Shift+Enter for new line</p>
        </div>
      </div>
    </div>
  )
}