
import '../../components/style/loginPage.scss';


function BtnLogin() {

  return (
      <div className="form-item">
          <p className="pull-left">
              <span>
                  <small>Register</small>
              </span>
          </p>
          <input type="submit" className="login pull-right" value="LogIn" />

          <div className="clear-fix"></div>
      </div>
  )
}

export default BtnLogin