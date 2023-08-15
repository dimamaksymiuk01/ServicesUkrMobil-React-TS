import { LOGOUT } from '../../shared/consts/picturesUrl.ts'

import '../style/header.css'

function Logout() {

  return (
      <div className={'LogoutImg'}>
          <img src={LOGOUT}/>
      </div>
  )
}

export default Logout