class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props)
        this.handleClickButton = this.handleClickButton.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleClickButton() {
        this.setState((preVisibility) => {
            return {
                visibility: !preVisibility.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleClickButton}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>This is the details</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))