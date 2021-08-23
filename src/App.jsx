import React from 'react'

import Header from './components/Header'
import Home from './pages/Home'

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="main">
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default App
