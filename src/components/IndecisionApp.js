import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'
// import Option from './Option'

export default class IndecisionApp extends React.Component {
    
    // pull the stage out of constructor
    // convert all 4 event handlers to class properties (arrow functions)
    // delete the constructor completely
    // start with class properties and end with method
    
    // constructor(props) {                                                 // old syntax
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     this.state = {
    //         options: []     //props.options
    //     }
    // }
    state = {
        options: [],     //props.options
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })
        this.setState(() => ({ options: [] }))
    }
    
    handleDeleteOption = (option) => {
        console.log(option)
        this.setState((preState) => ({ options: preState.options.filter((eachOption) => eachOption !== option) }))
    }

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => {
            return {
                selectedOption: this.state.options[randomNumber]
            }
        })
        // alert(this.state.options[randomNumber])
    }

    handleAddOption = (option) => {
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

    handleClearSelectedOption = () => {
        this.setState(()=> {
            return {
                selectedOption: undefined
            }
        })
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
    

    render() {
        const subTitle ='Put your life in the hand of computer';
        return (
        <div>
            <Header subTitle = {subTitle}/>
            <div className="container">
                <Action hasOption={this.state.options.length>0} handlePick={this.handlePick}/>
                <div className="widget">
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
            </div>
            <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
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