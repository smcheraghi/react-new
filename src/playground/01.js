const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
} 

//passing children to component
ReactDOM.render((
    <Layout>
        <div>
            <h1>Page title</h1>
            <h3>This is the text</h3>
        </div>
    </Layout>
), document.getElementById('app'))