import { Link } from 'react-router-dom';
import { ROUTES} from "../../shared/types/enums.ts";

import '../style/burger.scss';

function Burger() {
  return (
    <div className="burgerMenu">
      <details>
        <summary></summary>
        <nav className="menu">
          <p><Link to={ROUTES.MARKETS}>Markets</Link></p>
          <p><Link to={ROUTES.ARCHIVE}>Archive</Link></p>
          <p><Link to={ROUTES.REPAIRS}>Repairs</Link></p>
          <p><Link to={ROUTES.STORAGE}>Storage</Link></p>
          <p><Link to={ROUTES.CLIENTLIST}>Client list</Link></p>
          <p><Link to={ROUTES.ADMIN}>Admin panel</Link></p>
        </nav>
      </details>
    </div>
  );
}

export default Burger;
