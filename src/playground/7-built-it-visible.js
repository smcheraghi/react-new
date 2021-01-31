let Visibility = false

const toggleVisibility = () => {
    Visibility = !Visibility
    render()
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={toggleVisibility}>
                {Visibility ? 'Hide details' : 'Show details'}
            </button>
            {Visibility && (
                <div>
                    <p>This is my text</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
}

render()
