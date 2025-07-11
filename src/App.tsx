import React from 'react'
import './styles/neobrutal.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="neo-container py-8 space-y-8">
        <header className="neo-header">
          <h1 className="heading-1">NEOFIT PWA 🚀</h1>
          <p className="text-neo-base text-black">Modern Fitness mit Neobrutal Design</p>
        </header>
        
        <section className="neo-success">
          ✅ NEOBRUTAL DESIGN SYSTEM LOADED!
        </section>
      </div>
    </div>
  );
}

export default App;
