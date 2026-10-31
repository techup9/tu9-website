import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import './styles/app.css';

import App from './App.jsx';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Hydrate only when the prerendered markup belongs to this URL. Hosts that fall
// back to another page's HTML (or the empty 404 shell) get a fresh client render.
const path = window.location.pathname.replace(/\/+$/, '') || '/';
if (container.hasChildNodes() && container.dataset.path === path) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
