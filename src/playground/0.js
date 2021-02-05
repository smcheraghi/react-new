const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.contents}
            <p>footer</p>
        </div>
    )
} 

const template = (
    <div>
        <h1>Page title</h1>
        <h3>This is the text</h3>
    </div>
)


ReactDOM.render(<Layout contents={template}/>, document.getElementById('app'))