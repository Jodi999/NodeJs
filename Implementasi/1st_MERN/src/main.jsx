import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Landing from './pages/landing'
import Browse from './pages/browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path    : "/",
    element : <Landing />
  },
  {
    path    : "/browse",
    element : <Browse />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
