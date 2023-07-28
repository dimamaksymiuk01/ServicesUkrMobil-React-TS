import '../style/burger.scss'
import {Link} from "react-router-dom";

function Burger() {

  return (
      <>
          <div className={'burgerMenu'}>
              <details>
                  <summary></summary>
                  <nav className="menu">
                      <p><Link to="/markets">Markets</Link></p>
                      <p><Link to="/archive">Archive</Link></p>
                      <p><Link to="/repairs">Repairs</Link></p>
                      <p><Link to="/storage">Storage</Link></p>
                      <p><Link to="/clientlist">Client list</Link></p>
                      <p><Link to="/admin">Admin panel</Link></p>
                  </nav>
              </details>
          </div>
      </>
  )
}

export default Burger


