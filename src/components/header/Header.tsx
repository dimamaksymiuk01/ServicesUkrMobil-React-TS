import Burger from "./BurgerMenu.tsx";
import Navigate from "./NabigateMenu.tsx";
import '../style/header.scss'

function Header() {

  return (
      <div className={'header'}>
          <Burger/>
          <Navigate/>
      </div>
  )
}

export default Header