import * as React from 'react'
import * as CSSModules from 'react-css-modules'
import { NavLink } from 'react-router-dom'

const styles = require('./index.scss')

interface Poprs {}

@CSSModules(styles)
class Sider extends React.Component<Poprs, {}> {
  render() {
    return (
      <div styleName="sider">
        <ul styleName="body">
          <li>
            <NavLink to="/home" styleName="link" activeClassName={styles['link-active']}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile" styleName="link" activeClassName={styles['link-active']}>Profile</NavLink>
          </li>
        </ul>
        <ul styleName="footer">
          <li>
            <NavLink to="/signin" styleName="link">Sign Out</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sider
