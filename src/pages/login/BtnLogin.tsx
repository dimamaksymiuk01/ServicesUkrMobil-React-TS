import {Link} from "react-router-dom";

function BtnLogin() {

  return (
      <div className="form-item">
          <p className="pull-left">
              <span>
                  <small>Register</small>
              </span>
          </p>
          <Link to="/markets">
              <input type="submit" className="login pull-right" value="LogIn" />
          </Link>
          <div className="clear-fix"></div>
      </div>
  )
}

export default BtnLogin