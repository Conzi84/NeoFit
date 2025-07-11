import './styles/neobrutal.css'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="neo-container py-8 space-y-8">
        {/* Header */}
        <header className="neo-header">
          <h1 className="heading-1">NEOFIT PWA 🚀</h1>
          <p className="text-neo-base text-black">Modern Fitness mit Neobrutal Design</p>
        </header>

        {/* Button Showcase */}
        <section className="neo-card p-6">
          <h2 className="heading-2 mb-4">Button System</h2>
          <div className="flex flex-wrap gap-4">
            <button className="neo-btn neo-btn-primary">PRIMARY</button>
            <button className="neo-btn neo-btn-secondary">SECONDARY</button>
            <button className="neo-btn neo-btn-success">SUCCESS</button>
            <button className="neo-btn neo-btn-warning">WARNING</button>
            <button className="neo-btn neo-btn-danger">DANGER</button>
            <button className="neo-btn neo-btn-info">INFO</button>
          </div>
        </section>

        {/* Card Grid */}
        <section className="neo-grid neo-grid-3">
          <div className="neo-card neo-card-cyan p-6">
            <h3 className="heading-3 mb-2">WORKOUTS</h3>
            <p className="font-bold">Track deine Trainings</p>
            <div className="neo-status-dot neo-status-online mt-4"></div>
          </div>
          
          <div className="neo-card neo-card-pink p-6">
            <h3 className="heading-3 mb-2">NUTRITION</h3>
            <p className="font-bold">Ernährungs-Tracking</p>
            <div className="neo-status-dot neo-status-online mt-4"></div>
          </div>
          
          <div className="neo-card neo-card-yellow p-6">
            <h3 className="heading-3 mb-2">PROGRESS</h3>
            <p className="font-bold">Deine Fortschritte</p>
            <div className="neo-status-dot neo-status-away mt-4"></div>
          </div>
        </section>

        {/* Input Demo */}
        <section className="neo-card p-6">
          <h2 className="heading-2 mb-4">INPUT SYSTEM</h2>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="ENTER YOUR NAME" 
              className="neo-input w-full"
            />
            <textarea 
              placeholder="WORKOUT NOTES..."
              className="neo-textarea w-full"
            ></textarea>
          </div>
        </section>

        {/* Success Message */}
        <section className="neo-success">
          ✅ NEOBRUTAL DESIGN SYSTEM LOADED!
        </section>
      </div>
    </div>
  );
}

export default App;
