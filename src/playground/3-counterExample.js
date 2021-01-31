let count=0
const addOne = () => {
    count++
    renderCounterApp()
}
const minusOne = () => {
    count--
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}

const appRoot2 = document.getElementById('app2')



const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick= {addOne}>+1</button>
            <button onClick= {minusOne}>-1</button>
            <button onClick= {reset}>Reser</button>
        </div>
    )
    ReactDOM.render(template2, appRoot2)
}

renderCounterApp()