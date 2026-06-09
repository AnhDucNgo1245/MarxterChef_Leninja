import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage.tsx'
import ModulesHub from './pages/ModulesHub.tsx'
import ModuleIntro from './pages/ModuleIntro.tsx'
import ModuleCNDV from './pages/ModuleCNDV.tsx'
import ModulePBC from './pages/ModulePBC.tsx'
import ModuleNhanThuc from './pages/ModuleNhanThuc.tsx'
import ModuleCNDVLS1 from './pages/ModuleCNDVLS1.tsx'
import ModuleCNDVLS2 from './pages/ModuleCNDVLS2.tsx'
import AIPhilosopher from './pages/AIPhilosopher.tsx'
import PhilosopherProfile from './pages/PhilosopherProfile.tsx'
import SchoolProfile from './pages/SchoolProfile.tsx'
import CustomCursor from './components/ui/CustomCursor.tsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // setTimeout ensures that the browser has fully painted the new route 
    // and doesn't hijack the scroll position.
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
    }, 0)
  }, [pathname])

  return null
}

function GlobalBackground() {
  const location = useLocation()
  const isDark =
    location.pathname === "/" ||
    location.pathname.startsWith("/modules") ||
    location.pathname.startsWith("/ai")

  if (!isDark) return null

  return <div className="fixed inset-0 pointer-events-none z-[-10]" style={{ background: "#060912" }} />
}

function AppRoutes() {
  return (
    <div className="flex-1 flex flex-col">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/modules" element={<ModulesHub />} />
        <Route path="/modules/intro" element={<ModuleIntro />} />
        <Route path="/modules/cndv" element={<ModuleCNDV />} />
        <Route path="/modules/pbc" element={<ModulePBC />} />
        <Route path="/modules/nhanthuc" element={<ModuleNhanThuc />} />
        <Route path="/modules/cndvls-1" element={<ModuleCNDVLS1 />} />
        <Route path="/modules/cndvls-2" element={<ModuleCNDVLS2 />} />
        <Route path="/ai" element={<AIPhilosopher />} />
        <Route path="/philosopher/:id" element={<PhilosopherProfile />} />
        <Route path="/school/:id" element={<SchoolProfile />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <GlobalBackground />
      <div className="min-h-screen text-navy flex flex-col" style={{ cursor: 'none' }}>
        <Navbar />
        <div className="pt-24 flex-1 flex flex-col">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
