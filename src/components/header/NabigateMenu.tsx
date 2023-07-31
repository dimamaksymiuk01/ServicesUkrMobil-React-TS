import { Link } from 'react-router-dom';
import { ROUTES} from "../../shared/types/enums.ts";

import '../style/navigate.scss';

function Navigate() {
  return (
    <div className="navigateMenu">
      <nav className="navMenu">
        <Link to={ROUTES.MARKETS}>Markets</Link>
        <Link to={ROUTES.ARCHIVE}>Archive</Link>
        <Link to={ROUTES.REPAIRS}>Repairs</Link>
        <Link to={ROUTES.STORAGE}>Storage</Link>
        <Link to={ROUTES.CLIENTLIST}>Client list</Link>
        <Link to={ROUTES.ADMIN}>Admin panel</Link>
        <div className="dot"></div>
      </nav>
      <div className="line"></div>
    </div>
  );
}

export default Navigate;
