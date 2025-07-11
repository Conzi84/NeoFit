import React, { useState, useEffect } from 'react'
import './styles/neobrutal.css'

const App: React.FC = () => {
  const [trainings, setTrainings] = useState<string[]>([])
  const [input, setInput] = useState('')

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('neofit-trainings')
    if (saved) setTrainings(JSON.parse(saved))
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('neofit-trainings', JSON.stringify(trainings))
  }, [trainings])

  const addTraining = () => {
    if (input.trim()) {
      setTrainings([...trainings, input.trim()])
      setInput('')
    }
  }

  const deleteTraining = (index: number) => {
    setTrainings(trainings.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="neo-container py-8 space-y-8">
        
        <header className="neo-header">
          <h1 className="heading-1">NEOFIT TRACKER 🏋️</h1>
          <p className="text-neo-base text-black">Import & Track Your Workouts</p>
        </header>

        {/* Training Input */}
        <section className="neo-card p-6">
          <h2 className="heading-2 mb-4">ADD TRAINING</h2>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Bankdrücken 3x8 80kg&#10;Kniebeugen 3x10 100kg&#10;Kreuzheben 1x5 120kg"
            className="neo-textarea w-full mb-4"
            rows={4}
          />
          <button 
            onClick={addTraining}
            className="neo-btn neo-btn-primary"
          >
            ADD WORKOUT
          </button>
        </section>

        {/* Training List */}
        <section className="neo-card p-6">
          <h2 className="heading-2 mb-4">YOUR WORKOUTS ({trainings.length})</h2>
          {trainings.length === 0 ? (
            <p className="font-bold">No workouts yet. Add one above!</p>
          ) : (
            <div className="space-y-3">
              {trainings.map((training, index) => (
                <div key={index} className="neo-card-cyan p-4 flex justify-between items-start">
                  <pre className="font-bold text-black whitespace-pre-wrap flex-1">
                    {training}
                  </pre>
                  <button
                    onClick={() => deleteTraining(index)}
                    className="neo-btn neo-btn-danger neo-btn-sm ml-4"
                  >
                    DELETE
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Actions */}
        <section className="flex gap-4">
          <button 
            onClick={() => setTrainings([])}
            className="neo-btn neo-btn-warning"
          >
            CLEAR ALL
          </button>
          <button 
            onClick={() => {
              const data = JSON.stringify(trainings, null, 2)
              navigator.clipboard.writeText(data)
              alert('Copied to clipboard!')
            }}
            className="neo-btn neo-btn-info"
          >
            EXPORT DATA
          </button>
        </section>

      </div>
    </div>
  );
}

export default App;
