import React from 'react'
import Option from './Option'

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
            <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3>
                {/*<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>*/}
                <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
           
            {props.options.length>0 ? <p className="widget__message">Options component here</p> : <p className="widget__message">Please add an option to get started!</p>}
            {props.options.map((option, index) => <Option key={option} optionText={option} count={index + 1} handleDeleteOption={props.handleDeleteOption}/>)}
        </div>
    );
}


export default Options