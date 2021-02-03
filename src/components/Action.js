import React from 'react'

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

export default Action