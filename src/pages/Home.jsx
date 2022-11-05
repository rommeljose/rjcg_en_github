import "../css/index.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



function Home() {   
  const [user, setUser] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


  const fetchRepos = () => {
    fetch(`https://api.github.com/users/mbonamensa/repos?per_page=5&page=${currentPage}`)
    .then((response) => (response.json()))
    .then((data) => {
      setUser(prevUser => 
        [...prevUser, ...data])
        // debugger
    })
  }

  // useEffect(() => {
  //   if (currentPage > 1) {
  //     fetchRepos()
  //   }
  // }, [currentPage]) 

  useEffect(() => {
    if (user.length === 0) {
      fetchRepos()
      debugger
    }
    
  }, [])

  const viewMore = () => {
    setCurrentPage(prevPage => prevPage++)
  }


    const userElements = user.map((userElement) => {
        return (
            <div className="repo-card" key={userElement.id}>
                <Link to={`/repodetails/${userElement.name}`}><h2 className="repo-name">{userElement.name}</h2></Link>
                <p className="language">Langauge: {userElement.language === null ? "none" : userElement.language}</p>
                <p className="date">Start date & time: {userElement.created_at}</p>
                <p className="visibility">Visibility: {userElement.visibility}</p>
            </div>
        )
    })


    return (
        <section className="repo-container">
            {userElements}
            <p onClick={viewMore}>View More</p>
        </section>
    )
}

export default Home