import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Context/theme";
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)

