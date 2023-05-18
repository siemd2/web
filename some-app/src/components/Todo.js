function Todo(props) {
    function deleteHandler() {  // standard convention to use nested functions to be used as props
        
    }
    return (
        <div className = "card">
            <h2>{props.text}</h2>
            <div className = "actions">
                <button className = "btn" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;