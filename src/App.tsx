import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Archive from './pages/archive/Archive.tsx';
import Markets from './pages/markets/Markets.tsx';
import Storage from './pages/storage/Storage.tsx';
import Repairs from './pages/repairs/Repairs.tsx';
import NotFound from './pages/notFound/NotFound.tsx';
import AdminPanel from './pages/admin/AdminPanel.tsx';
import ClientList from './pages/clientList/ClientList.tsx';
import { ROUTES } from './shared/types/enums.ts';


import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.LOGIN} />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.MARKETS} element={<Markets />} />
          <Route path={ROUTES.ARCHIVE} element={<Archive />} />
          <Route path={ROUTES.STORAGE} element={<Storage />} />
          <Route path={ROUTES.REPAIRS} element={<Repairs />} />
          <Route path={ROUTES.ADMIN} element={<AdminPanel />} />
          <Route path={ROUTES.CLIENTLIST} element={<ClientList />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
