import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppSidebar from "./components/Home/AppSidebar";

// import './scss/style.scss'


function App() {
  return (
    <>
    
        <AppSidebar/>
     
         <Header/>
        
        <Outlet/>
      
        <Footer/>
    


    </>
  );
}

export default App;
