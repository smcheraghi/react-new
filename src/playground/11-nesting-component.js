class IndecisionApp extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <Action />
            <Options />
            <AddOption />
        </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hand of computer</h2>
        </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
        <div>
            <button>What should I do?</button>
        </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options component here</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>option component here</p>        
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
            <form>
                <input type="text"></input>
                <button>Add option</button>
            </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))