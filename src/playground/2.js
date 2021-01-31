const app = {
    title: 'Indesition App',
    subTitle: 'This is my subtitle',
    options: ['one', 'two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p> {app.subTitle} </p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options!'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>                                        
        </ol>               

    </div>                       
)

let count=0
const addOne = () => {
    console.log(count)
    count = count + 1
}
const minusOne = () => console.log('minus one')
const reset = () => console.log('reset')
const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick= {addOne}>+1</button>
        <button onClick= {minusOne}>-1</button>
        <button onClick= {reset}>Reser</button>
    </div>
)

const appRoot = document.getElementById('app')
const appRoot2 = document.getElementById('app2')
ReactDOM.render(template, appRoot)
ReactDOM.render(template2, appRoot2)




