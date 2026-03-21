import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Bot, User } from 'lucide-react'
import './MessageBubble.css'

export default function MessageBubble({ role, content }) {
  const isUser = role === 'user'

  return (
    <div className={`bubble-wrapper ${isUser ? 'user' : 'assistant'}`}>
      {!isUser && (
        <div className="avatar">
          <Bot size={18} color="#ff6a00" />
        </div>
      )}
      <div className={`bubble ${isUser ? 'user-bubble' : 'assistant-bubble'}`}>
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    margin: '10px 0',
                    border: '1px solid rgba(255,69,0,0.2)',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className="inline-code" {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
      {isUser && (
        <div className="avatar user-avatar">
          <User size={18} color="#ffffff" />
        </div>
      )}
    </div>
  )
}