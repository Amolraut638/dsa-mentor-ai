import './EmptyState.css'
import { BrainCircuitIcon } from 'lucide-react'

export default function EmptyState({ onSuggest, suggestions }) {
    return (
        <div className="empty-state">
            <div className="empty-icon">
                <BrainCircuitIcon size={52} color="#ff6a00" strokeWidth={1.5} />
            </div>
            <h2 className="empty-title">What do you want to master today?</h2>
            <p className="empty-subtitle">
                Ask me anything about Data Structures, Algorithms, Complexity Analysis, or Coding Patterns.
            </p>
            <div className="empty-chips">
                {suggestions.map((s, i) => (
                    <button key={i} className="empty-chip" onClick={() => onSuggest(s)}>
                        {s}
                    </button>
                ))}
            </div>
        </div>
    )
}