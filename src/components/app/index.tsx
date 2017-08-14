import * as React from 'react'
import * as CSSModules from 'react-css-modules'

const styles = require('./index.scss')

interface Poprs {

}

@CSSModules(styles)
class App extends React.Component<Poprs, {}> {
    render() {
        return (
            <div styleName="app">
                {this.props.children}
            </div>
        )
    }
}

export default App
