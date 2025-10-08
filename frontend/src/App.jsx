import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
 return (
   <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signup" element={<Signup />} />
     </Routes>
   </BrowserRouter>
 );
}
export default App;