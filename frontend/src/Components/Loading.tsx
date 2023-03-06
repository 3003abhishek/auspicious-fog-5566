import "../App.css"

const Loading = () => {
    return (
        <div>
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>Waiting for other player to join the room...</h1>
        </div>
    )
}

export default Loading