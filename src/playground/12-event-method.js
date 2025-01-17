class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subTitle ='Put your life in the hand of computer'
        let options = ['ssss', 'aaaa']
        return (
        <div>
            <Header title = {title} subTitle = {subTitle}/>
            <Action />
            <Options options={options}/>
            <AddOption />
        </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
        </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
        <div>
            <button onClick={this.handlePick}>What should I do?</button>
        </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('handleRemoveAll')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.length>0 ? <p>Options component here</p> : <p>No option</p>}
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        if (option) {
            alert(option)
        }
        e.target.elements.option.value = ''
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))