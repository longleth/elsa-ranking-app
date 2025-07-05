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
import ShowLeaderBoard from "./components/ShowLeaderBoard"

// Routes
const router = createBrowserRouter([
    { path: "/", element: <ShowLeaderBoard /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
