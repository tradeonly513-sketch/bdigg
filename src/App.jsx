import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import LoadingFallback from './components/common/LoadingFallback'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Affiliates = lazy(() => import('./pages/Affiliates'))


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/affiliates' element={<Affiliates />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App