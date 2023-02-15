import { Route,Routes } from "react-router-dom";
import { Homepage } from "./pages/Home";
import { Roompage } from "./pages/Room";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/room/:roomID" element ={<Roompage/>}/>
     
    </Routes>
    
  );
}

export default App;
