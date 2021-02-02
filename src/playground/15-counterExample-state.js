class Header extends React.Component{
    constructor(props){
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0 //props.count
        }
    }

    componentDidMount() {
        console.log(localStorage.getItem('count'))
        const count = parseInt(localStorage.getItem('count'), 10)
        if (isNaN(count)){
            this.setState(() => ({ count }))
        } else {
            this.setState(() => ({ count: 0 }))
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }
        console.log(this.state.count)
    }

    addOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            }
        })
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }   
    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
        // this.setState({                              // alternative setState syntax
        //     count: 0                                 // doesnt work correctlly because setState is async so previous version is the best
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

// Header.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Header title="count"/>, document.getElementById('app'))