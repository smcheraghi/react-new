const app = {
    title: 'Indesition App',
    subTitle: 'This is my subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderTemplate()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderTemplate()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    alert(app.options[randomNum])
}
const appRoot = document.getElementById('app')

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p> {app.subTitle} </p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options!'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>               
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
        </div>                       
    )
    ReactDOM.render(template, appRoot)
}

renderTemplate()