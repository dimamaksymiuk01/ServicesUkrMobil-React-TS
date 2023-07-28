import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/login/Login.tsx";
import Archive from "./pages/archive/Archive.tsx";
import Markets from "./pages/markets/Markets.tsx";
import Storage from "./pages/storage/Storage.tsx";
import Repairs from "./pages/repairs/Repairs.tsx";
import NotFound from "./pages/notFound/NotFound.tsx";
import AdminPanel from "./pages/admin/AdminPanel.tsx";
import ClientList from "./pages/clientList/ClientList.tsx";


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/Login"} />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/markets" element={<Markets/>} />
                <Route path="/archive" element={<Archive/>} />
                <Route path="/storage" element={<Storage/>} />
                <Route path="/repairs" element={<Repairs/>} />
                <Route path="/admin" element={<AdminPanel/>} />
                <Route path="/clientlist" element={<ClientList/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
          </Router>
    </>
  )
}

export default App
