
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import App from './App';
import Login from './Authentication/Login';
import './scss/style.scss'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
         <Route path='' element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='contact' element={<Contact/>}/>
         <Route path='gallery' element={<Gallery/>}/>
         <Route path='login' element={<Login/>}/>
      </Route>
    )
  )

  export default router;