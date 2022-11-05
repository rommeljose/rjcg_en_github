import "./css/index.css"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import RepoDetails from "./pages/Repodetails"
import { Route, Routes } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"



function App() {   

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/repodetails/:id" element={<RepoDetails />}  />   
        <Route path="*" element={<ErrorPage />}  />  
      </Routes>
    </>
  )
}

export default App
