import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/login/Login.tsx";
import Archive from "./pages/archive/Archive.tsx";
import Markets from "./pages/markets/Markets.tsx";
import Storage from "./pages/storage/Storage.tsx";
import Repairs from "./pages/repairs/Repairs.tsx";


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/markets" element={<Markets/>} />
                <Route path="/archive" element={<Archive/>} />
                <Route path="/storage" element={<Storage/>} />
                <Route path="/repairs" element={<Repairs/>} />
                <Route path='*' element={<Navigate to="/login" />} />
            </Routes>
          </Router>
    </>
  )
}

export default App
