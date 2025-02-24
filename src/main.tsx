import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

import HomeLayout from './HomeLayout.tsx'
import Home from './pages/Home.tsx'
import Quiz from './pages/Quiz.tsx'
import Result from './pages/Result.tsx'
import NotFound from './pages/NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="quiz/:category" element={<Quiz />} />
          <Route path="/results" element={<Result score={0} total={0} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
