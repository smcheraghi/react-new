import React from 'react'

export default class AddOption extends React.Component {
    state = {                                                               // new syntax
        error: undefined
    }
    
    // constructor(props) {                                                         //old syntax
    //     super(props)
    //     this.handleAddOption = this.handleAddOption.bind(this)                   // old syntax
    //     // this.state = {                                                      // old syntax
    //     //     error: undefined
    //     // }
    // }
    handleAddOption = (e) => {
        e.preventDefault()
        console.log('testting')
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        e.target.elements.option.value = ''
        this.setState(() => ({ error }))
    }
    render() {
        return (
            <div>
            {this.state.error && <p className="add-optin-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="add-option__input" type="text" name="option"></input>
                <button className="button">Add option</button>
            </form>
            </div>
        )
    }
}