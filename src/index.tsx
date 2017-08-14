import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import {Router, Route, Switch} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Components
import App from './components/app'
import Signin from './components/signIn'
import Sider from './components/sider'
import Home from './components/home'
import Profile from './components/profile'

import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'

import './scss/index.scss'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(middleware),
))

// Needed for onTouchTap
injectTapEventPlugin()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider>
                <App>
                    <Switch>
                        <Route exact={true} path="/signin" component={Signin}/>
                        <Route path="/" component={Sider}/>
                    </Switch>
                    <div style={{marginLeft: 120}}>
                        <Route path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/profile" component={Profile}/>
                    </div>
                </App>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
