import LogoUkrMobil from "./logoUkrMobil.tsx";
// import InputGroup from "../../components/Input/Input.tsx";

import '../../components/style/loginPage.scss'
import BtnLogin from "./BtnLogin.tsx";

function LoginCard() {

  return (
      <>
        <div id="formWrapper">

          <div id="form">

            <LogoUkrMobil/>

            <div className="form-item">
              <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-style"
                  placeholder={'Login'}
              />
            </div>

            <div className="form-item">
              <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-style"
                  placeholder={'Password'}
              />
              <p>
                <span>Forgot Password ?</span>
              </p>
            </div>

            <BtnLogin/>

          </div>

        </div>

      </>
  )
}

export default LoginCard