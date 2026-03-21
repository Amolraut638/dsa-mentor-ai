import { useState } from 'react'
import LandingPage from './components/LandingPage'
import ChatPage from './components/ChatPage'

function App() {
  const [started, setStarted] = useState(false)
  const [initialMessage, setInitialMessage] = useState('')

  const handleStart = (message = '') => {
    setInitialMessage(message)
    setStarted(true)
  }

  return (
    <>
      {!started ? (
        <LandingPage onStart={handleStart} />
      ) : (
        <ChatPage initialMessage={initialMessage} />
      )}
    </>
  )
}

export default App