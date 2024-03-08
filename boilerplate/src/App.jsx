// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Suspense,useState,createContext } from 'react'
import { lazy } from 'react'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Admin from './components/Admin'
import Premium from './components/Premium'
import { useSelector } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
// import PageNotFound from './components/PageNotFound'
const Products = lazy(()=> import('./components/LazyComponent'))
const PageNotFound = lazy(()=> import('./components/PageNotFound'))
import HocHide from './components/HocHide'
import ReactSwitch from 'react-switch'


export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  const {isAuthenticated} = useSelector((state) => state.authenticationReducer)
  console.log(isAuthenticated)

  return (
    <BrowserRouter>
    {/* <Header/> */}
    <ThemeContext.Provider value ={{theme,toggleTheme}}>
      <div className={`app ${theme}`}>
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
    <Routes>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      {/* <Route path='/premium' 
      element={isAuthenticated ? <Premium/> : <Login/>}
      ></Route> */}  
      {/* issue with this approach : kitne pages me lagaoge :) */}
      <Route path='/premium' element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Premium/>
        </ProtectedRoute>
      }></Route>
      <Route path='/hochide' element={<HocHide/>}></Route>
      <Route path='/products' element={
        <Suspense fallback={<>...Lomding</>}>
          <Products/>
        </Suspense>
      }></Route>
      <Route path='*' element={
        <Suspense fallback={<>...Lomding</>}>
          <PageNotFound/>
        </Suspense>
      }></Route>
    </Routes>
    </div>
    </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
