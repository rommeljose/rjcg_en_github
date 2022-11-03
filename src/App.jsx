import "./css/index.css"
import Repo from "./components/Repo"
import Navbar from "./components/Navbar"



function App() {   

  return (
    <div className="App">
      <Navbar />
      <section className="repo-container">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </section>
      
      
    </div>
  )
}

export default App
