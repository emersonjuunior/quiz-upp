import "./Header.css"

const Header = ({startGame, goToHome}) => {
  return (
    <>
      <header>
    <div id="logo">
    <p onClick={goToHome}>Quiz<span>Upp</span></p>
    </div>
    <nav>
        <ul>
            <li onClick={goToHome}>Início</li>
            <li onClick={startGame}>Jogar</li>
        </ul>
    </nav>
      </header>
    </>
  )
}

export default Header
