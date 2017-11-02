import React,{Component} from 'react'
import PropTypes from 'prop-types'
//redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {checkLogin, logout, userSyncSuccess} from 'actions/auth-actions'
//helpers + other
import {withRouter} from 'react-router-dom'
import {login} from 'lib/auth'
//components
import SyncUser from 'components/SyncUser'
import Alert from 'components/Alert'
import Navbar from 'components/navbar/Navbar'

class Site extends Component {

  static propTypes = {
    //redux
    auth0Authenticated: PropTypes.bool,
    userSynced: PropTypes.bool,
    userSyncRequired: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    profile: PropTypes.object,
  }

  constructor(props) {
    super(props)
    /* check is Auth0 lock is authenticating after calling AuthService login: */
    this.props.checkLogin()
  }

  shouldSyncUser = () => {
    if (this.props.auth0Authenticated && this.props.userSyncRequired){
      return true
    }
    else {
      return false
    }
  }

  render(){
    const {
      isAuthenticated,
      logout,
      profile,
      userSyncSuccess,
      children,
    } = this.props

    const renderSyncUser = () => {
        return(
          <SyncUser
          logout={logout}
          handleUserSyncSuccess={userSyncSuccess}
          profile={profile}
        />)
      }

    return(
      <div>
          <Navbar
            handleLogout={logout}
            handleLogin={login}
            isAuthenticated={isAuthenticated}
            profile={profile}
          />
        {/* component that syncs or creates a user depending on redux state: */}
        { this.shouldSyncUser() && renderSyncUser() }
        <div>
          {children}
        </div>
        <Alert />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth0Authenticated: state.app.auth.auth0Authenticated,
    userSynced: state.app.auth.userSynced,
    userSyncRequired: state.app.auth.userSyncRequired,
    isAuthenticated: state.app.auth.isAuthenticated,
    profile: state.app.auth.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      checkLogin,
      logout,
      userSyncSuccess,
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Site))
