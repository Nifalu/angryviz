// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.jsx'
import { ThemeProvider } from './components/colortheme/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <App />
        </ThemeProvider>
    </StrictMode>,
)