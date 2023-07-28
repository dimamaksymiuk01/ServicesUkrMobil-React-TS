import {Link} from "react-router-dom";
import '../style/navigate.scss'

function Navigate() {

  return (
      <div className={'navigateMenu'}>
        <nav className="navMenu">
          <Link to="/markets">Markets</Link>
          <Link to="/archive">Archive</Link>
          <Link to="/repairs">Repairs</Link>
          <Link to="/storage">Storage</Link>
          <Link to="/clientlist">Client list</Link>
          <Link to="/admin">Admin panel</Link>
          <div className="dot"></div>
        </nav>
          <div className={'line'}></div>
      </div>
  )
}

export default Navigate