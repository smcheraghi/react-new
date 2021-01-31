const app = {
    title: 'Indesition App',
    subTitle: 'This is my subtitle',
    options: ['one', 'two']
}

// JSX -> JavaScript XML
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

    </div>                        // JSX -> javascript XML --> provide by react
)

const user ={
    name: 'Ali',
    age: 35,
    location: 'Tehran'
}

const getLocation = (location) => {
    if (location) {
        return <p>Location: {location} </p>
    } 
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {null}{true}{false}                 {/** JSX ignore true, false and null */}
        {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
// var template = React.createElement("p", null, "This is a test");    // changing by babel --> babel is a compiler, has no functionality --> npm i -g babel-cli --> npm init --> npm add babel-preset-react babel-preset-env 
// babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch 
const appRoot = document.getElementById('app')
const appRoot2 = document.getElementById('app2')

ReactDOM.render(template, appRoot)
ReactDOM.render(templateTwo, appRoot2)



