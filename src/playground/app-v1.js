class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []     //props.options
        }
    }

    // =======================Life Cycle Methods /\ stateless function doesnt have any life cycle methods
    componentDidMount() {                                       // it fires when the component first get mounted to the dom --> Only access in class base component -> this one of the reason that stateless func is so fast
        console.log('fetching data')
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => {
                    return ({options})
                })
            }
        } catch (e) {
            // Do nothing at all
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data');                       // Fire after the component update -> after the state or props value changes
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
        // have access to this.props or this.state
    }

    componentWillUnmount() {                            // Fire just before the component goes away
        console.log('componentWillUnmount')
    }
    // =============================================
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(option) {
        console.log(option)
        this.setState((preState) => ({ options: preState.options.filter((eachOption) => eachOption !== option) }))
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

        // this.setState((preState)=>{
        //     return{
        //         options: preState.options.concat(option)
        //     }
        // })
        this.setState((preState) => ({ options: preState.options.concat(option) }))
    }

    render() {
        const subTitle ='Put your life in the hand of computer';
        return (
        <div>
            <Header subTitle = {subTitle}/>
            <Action hasOption={this.state.options.length>0} handlePick={this.handlePick}/>
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
            <AddOption handleAddOption={this.handleAddOption}/>
        </div>
        );
    }
}

// IndecisionApp.defaultProps = {                  // because we add localStorage we dont need it
//     options: []
// }
// class Header extends React.Component {
//     render() {
//         return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subTitle}</h2>
//         </div>
//         );
//     }
// }

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
        );
}

Header.defaultProps = {
    title:'Indecision'
}
// class Action extends React.Component {
//     // handlePick() {
//     //     const randomNumber = Math.floor(Math.random() * this.props.options.length)
//     //     alert(this.props.options[randomNumber])
//     // }
//     render() {
//         return (
//         <div>
//             <button disabled={!this.props.hasOption} onClick={this.props.handlePick}>What should I do?</button>
//         </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOption} onClick={props.handlePick}>What should I do?</button>
        </div>
        );
}

// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     console.log(this.props.options);    {/**gives error --> add constructor and use binding method */}
//     // }
//     render() {
//         return (
//             <div>
//                 {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>*/}
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.length>0 ? <p>Options component here</p> : <p>No option</p>}
//                 {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>*/}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length>0 ? <p>Options component here</p> : <p>Please add an option to get started!</p>}
            {props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}/>)}
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>Remove</button>
        </div>
    );
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
        this.setState(() => ({ error }))
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

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Family: {props.family}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))