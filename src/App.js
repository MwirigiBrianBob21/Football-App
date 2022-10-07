import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Content from './components/Content';
import Highlights from './components/Highlights';
// import Login from './components/Login';
// import Preferences from './components/Preferences';
// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken))
// }

// function getToken() {
// }

function App() {
  // const [token, setToken] = useState();
  // const token = getToken();
  // if(!token) {
  //   return  <Login setToken={setToken}/>
  // }
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>
        
      
<Routes>

        
        
  <Route path='/' element={<Content/>}/>
  <Route path='/highlights' element={<Highlights/>}/>

</Routes>
      
      

      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
