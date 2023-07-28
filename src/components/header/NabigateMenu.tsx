import {Link} from "react-router-dom";
import '../style/navigate.scss'
import Logo from "./Logo.tsx";

function Navigate() {

  return (
      <div className={'navigateMenu'}>
          {/*<Logo/>*/}
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



          // <div className={'burgerMenu'}>
          //     <details>
          //         <summary></summary>
          //         <nav className="menu">
          //             <p><Link to="/markets">Markets</Link></p>
          //             <p><Link to="/archive">Archive</Link></p>
          //             <p><Link to="/repairs">Repairs</Link></p>
          //             <p><Link to="/storage">Storage</Link></p>
          //             <p><Link to="/clientlist">Client list</Link></p>
          //             <p><Link to="/admin">Admin panel</Link></p>
          //         </nav>
          //     </details>
          // </div>