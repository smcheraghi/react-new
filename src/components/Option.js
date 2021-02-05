import React from 'react'
import Options from './Options'

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
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>            
            <button className="button button--link" onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>Remove</button>
        </div>
    );
}

export default Option