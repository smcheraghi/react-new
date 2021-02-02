'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: [] //props.options
        };
        return _this;
    }

    // =======================Life Cycle Methods /\ stateless function doesnt have any life cycle methods


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // it fires when the component first get mounted to the dom --> Only access in class base component -> this one of the reason that stateless func is so fast
            console.log('fetching data');
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                console.log('saving data'); // Fire after the component update -> after the state or props value changes
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
            // have access to this.props or this.state
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Fire just before the component goes away
            console.log('componentWillUnmount');
        }
        // =============================================

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     }
            // })
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            console.log(option);
            this.setState(function (preState) {
                return { options: preState.options.filter(function (eachOption) {
                        return eachOption !== option;
                    }) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNumber]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            // this.setState((preState)=>{
            //     return{
            //         options: preState.options.concat(option)
            //     }
            // })
            this.setState(function (preState) {
                return { options: preState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subTitle = 'Put your life in the hand of computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, { hasOption: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions, handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

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

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
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

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOption, onClick: props.handlePick },
            'What should I do?'
        )
    );
};

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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.length > 0 ? React.createElement(
            'p',
            null,
            'Options component here'
        ) : React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });
        })
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            e.target.elements.option.value = '';
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Family: ',
            props.family
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
