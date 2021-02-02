class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: ['ssss', 'aaaa111']
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomNumber])
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((preState)=>{
            return{
                options: preState.options.concat(option)
            }
        })
    }
    render() {
        const title = 'Indecision';
        const subTitle ='Put your life in the hand of computer';
        return (
        <div>
            <Header title = {title} subTitle = {subTitle}/>
            <Action hasOption={this.state.options.length>0} handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    // handlePick() {
    //     const randomNumber = Math.floor(Math.random() * this.props.options.length)
    //     alert(this.props.options[randomNumber])
    // }
    render() {
        return (
        <div>
            <button disabled={!this.props.hasOption} onClick={this.props.handlePick}>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll() {
    //     console.log(this.props.options);    {/**gives error --> add constructor and use binding method */}
    // }
    render() {
        return (
            <div>
                {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>*/}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.length>0 ? <p>Options component here</p> : <p>No option</p>}
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        e.target.elements.option.value = ''
        this.setState(() => {
            return { error }
        })
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))