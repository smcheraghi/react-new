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
                <p>Option component here</p>
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

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))