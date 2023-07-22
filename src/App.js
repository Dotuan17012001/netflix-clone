import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
const App = () => {
      return (
        <BrowserRouter>
           <Routes>
            <Route path='/login' element= {<Login/>}></Route>
            <Route path='/signup' element= {<SignUp/>}></Route>
            <Route path='/player' element= {<Player/>}></Route>
            <Route path='/' element= {<Netflix/>}></Route>
           </Routes>
        </BrowserRouter>
      )
}

export default App;
