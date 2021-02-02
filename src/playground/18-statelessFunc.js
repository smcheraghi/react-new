const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Family: {props.family}</p>
        </div>
    )
}

ReactDOM.render(<User name="Ali" family="Cheraghi" />, document.getElementById('app'))