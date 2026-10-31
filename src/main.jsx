import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

// Original theme stylesheets, in the same order the legacy pages loaded them.
import './styles/legacy/fontello/css/fontello.css';
import './styles/legacy/core.portfolio.css';
import './styles/legacy/style.css';
import './styles/legacy/core.animation.css';
import './styles/legacy/shortcodes.css';
import './styles/legacy/skin.css';
import './styles/legacy/responsive.css';
import './styles/app.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
