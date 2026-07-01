import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import QuoteRequestPage from "@/pages/QuoteRequestPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote-request" element={<QuoteRequestPage />} />
      </Route>
    </Routes>
  );
}
