import "./css/index.css"
import Repo from "./components/Repo"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"



function App() {   

  const [repoName, setRepoName] = useState("")
  const [language, setLanguage] = useState("")
  const [date, setDate] = useState("")
  const [visibility, setVisibilitye] = useState("")
  const [user, setUser] = useState([])


  useEffect(() => {
    fetch("https://api.github.com/users/mbonamensa/repos")
    .then((response) => (response.json()))
    .then((data) => {
      setUser(data)
    })
  }, []) 

  const userElements = user.map((userElement) => {
    return <Repo 
              key={userElement.id}
              userElement={userElement}
            />
  })

  return (
    <div className="App">
      <Navbar />
      <section className="repo-container">
        {/* <Repo />
        <Repo />
        <Repo />
        <Repo /> */}
        {userElements}
      </section>      
    </div>
  )
}

export default App
