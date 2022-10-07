import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Content from './components/Content';
import Highlights from './components/Highlights';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      
<Routes>
  <Route path='/' element={<Content/>}/>
  <Route path='highlights' element={<Highlights/>}/>

</Routes>
      
      

      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
