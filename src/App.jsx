import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import CaseStudy from './pages/CaseStudy.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="case-studies/:slug" element={<CaseStudy />} />
      </Route>

      {/* Old static pages and the retired blog redirect to the home page. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
