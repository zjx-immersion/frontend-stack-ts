import * as React from 'react'
import * as CSSModules from 'react-css-modules'
import {connect} from 'react-redux'
import {History} from 'history'
import {Paper, RaisedButton, TextField} from 'material-ui'
import {changeSignInFrom, ChangeSignInFromAction} from '../../actions/signIn'
import {StoreState, SignInFrom} from '../../reducers/types'

const styles = require('./index.scss')

interface Props {
    history: History,
    signInFrom: SignInFrom
    changeSignInFrom: ChangeSignInFromAction,
}

@CSSModules(styles)
class Signin extends React.Component<Props, {}> {
    public render() {
        return (
            <Paper styleName="sign-box" zDepth={2}>
                <TextField
                    hintText="Type your user name"
                    floatingLabelText="User Name"
                    fullWidth={true}
                    onChange={this.changeInputFrom.bind(this, 'username')}
                />
                <TextField
                    hintText="Type your password"
                    floatingLabelText="Password"
                    fullWidth={true}
                    type="password"
                    onChange={this.changeInputFrom.bind(this, 'password')}
                />
                <RaisedButton
                    label="Sign In"
                    primary={true}
                    fullWidth={true}
                    style={{marginTop: 10}}
                    onTouchTap={this.signIn}
                />
            </Paper>
        )
    }

    private changeInputFrom = (field: string,
                               event: React.ChangeEvent<HTMLInputElement>) => {
        let fields = {}
        fields[field] = event.target.value
        this.props.changeSignInFrom(fields)
    }

    private signIn = () => {
        this.props.history.push('/home')
    }
}

const mapStateToProps = (state: StoreState) => ({
    signInFrom: state.signInFrom,
})

const mapDispatchToProps = {
    changeSignInFrom
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
