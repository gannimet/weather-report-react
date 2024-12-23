import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import WeatherPage from './weather/WeatherPage'
import TodosPage from './todos/TodosPage'
import NavBar from './navigation/NavBar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route path="weather" element={<WeatherPage />} />
          <Route path="todo" element={<TodosPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>,
)
