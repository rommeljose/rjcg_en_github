import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"


function Repo(props) {
    // console.log(props.userElement.name)

    const params = useParams()

    const { id } =useParams()
    console.log(id)
    return (

        <div className="repo-card">
            <Link to={`/repodetails/${props.userElement.id}`}><h2 className="repo-name">{props.userElement.name}</h2></Link>
            {/* <a href={`repodetails`}><h2 className="repo-name">{props.userElement.name}</h2></a> */}
            <p className="language">Langauge: {props.userElement.language === null ? "none" : props.userElement.language}</p>
            <p className="date">Start date & time: {props.userElement.created_at}</p>
            <p className="visibility">Visibility: {props.userElement.visibility}</p>
        </div>
        
    )
}

export default Repo
