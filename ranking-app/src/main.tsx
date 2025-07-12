import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// @ts-ignore
//import ShowLeaderBoard from "./components/ShowLeaderBoard"
import QuizSelector from "./components/QuizSelector"

// Routes
const router = createBrowserRouter([
    { path: "/", element: <QuizSelector /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
