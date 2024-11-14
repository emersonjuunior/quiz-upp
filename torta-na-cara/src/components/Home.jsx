import "./Home.css"

const Home = ({startGame}) => {
  return (
    <div id="home">
      <h1>Quiz<span>Upp</span></h1>
      <button onClick={startGame}>Jogar</button>
    </div>
  )
}

export default Home
