import React from 'react'
import PropTypes from 'prop-types'
//other
import styled from 'styled-components'
import {withRouter} from 'react-router'
import {muiColors, palette} from 'styles/theme/colors'
//components
import UserIconMenu from './UserIconMenu'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'

const Navbar = (props) => {

  const handleTouchTap = () => props.history.push('/')
  const {
    handleLogin,
    handleLogout,
    profile,
    isAuthenticated
  } = props

  const styles = {
    accountCircleIcon: {
      width: 30,
      height: 30,
    },
  }
  const renderUserControls = () => {
    if (isAuthenticated) {
      return (
        <RightElementBox>
        <UserIconMenu picture={profile.picture} handleLogout={handleLogout}/>
      </RightElementBox>
      )
    }
    else {
      return (
        // call clear profile
        <IconButton
          onTouchTap={()=>handleLogin()}
          iconStyle={styles.accountCircleIcon}
          tooltip="Login Signup"
        >
          <AccountCircle
            // color={muiColors.primary1}
            color="#363636"
            hoverColor={muiColors.secondary1}
          />
        </IconButton>
      )
    }
  }

  return(
    <AppBar>
      <Title onClick={()=>handleTouchTap()}>
        HackerMatch
      </Title>
      <div>{renderUserControls()}</div>
    </AppBar>

  )
}
const AppBar = styled.div`
  margin-top: 15px;
  padding: 10px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  display: inline;
  color: ${palette.primary2};
  cursor: pointer;
  font-size: 30px;
`

const RightElementBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px; /*match left offset of appbar */
`

Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
}

export default withRouter(Navbar)
