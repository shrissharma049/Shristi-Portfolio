import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CVStitch = lazy(() => import('./pages/CaseStudyCVStitch'));
const Galaxy360 = lazy(() => import('./pages/CaseStudyGalaxy360'));
const Orlando = lazy(() => import('./pages/CaseStudyOrlando'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/cvstitch" element={<CVStitch />} />
            <Route path="/case-study/galaxy360" element={<Galaxy360 />} />
            <Route path="/case-study/orlando" element={<Orlando />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
