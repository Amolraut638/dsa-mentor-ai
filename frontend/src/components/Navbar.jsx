import { Circle } from 'lucide-react'
import './Navbar.css'

export default function Navbar({ showOnline = false, onClear }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-dsa">DSA</span>
                <span className="logo-mentor">Mentor.ai</span>
            </div>
            <div className="nav-right">
                {showOnline && (
                    <div className="nav-badge">
                        <Circle size={10} fill="#4ade80" color="#4ade80" className='green-dot' />
                        Online
                    </div>
                )}
                {onClear && (
                    <button className="clear-btn" onClick={onClear}>
                        Clear Chat
                    </button>
                )}
            </div>
        </nav>
    )
}