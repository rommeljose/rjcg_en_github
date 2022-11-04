

function Repo(props) {
    console.log(props.userElement.name)
    return (

        <div className="repo-card">
            <h2 className="repo-name">{props.userElement.name}</h2>
            <p className="language">Langauge: {props.userElement.language === null ? "none" : props.userElement.language}</p>
            <p className="date">Start date & time: {props.userElement.created_at}</p>
            <p className="visibility">Visibility: {props.userElement.visibility}</p>
        </div>
        
    )
}

export default Repo
