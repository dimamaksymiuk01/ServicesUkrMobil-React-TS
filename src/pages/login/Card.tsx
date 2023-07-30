import LogoUkrMobil from "./logoUkrMobil.tsx";
import InputGroup from "../../components/Input/Input.tsx";

import '../../components/style/loginPage.scss'

function LoginCard() {

  return (
      <>
          <div className={'loginCard'}>
              <p>WELCOME</p>
              <LogoUkrMobil/>
              <InputGroup/>
          </div>
      </>
  )
}

export default LoginCard