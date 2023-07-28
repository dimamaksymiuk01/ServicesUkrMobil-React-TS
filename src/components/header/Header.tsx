import '../style/header.scss'

function Header() {

  return (
    <div className={'navigateMenu'}>
          <details>
      <summary></summary>
      <nav className="menu">
        <a href="#link">Home</a>
        <a href="#link">Work</a>
        <a href="#link">Links</a>
        <a href="#link">Contact</a>
        <a href="#link">About</a>
      </nav>
    </details>
    </div>
  )
}

export default Header