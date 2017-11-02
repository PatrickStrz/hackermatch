import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {palette} from 'styles/theme/colors'
import {PROFILE_CARD_SHADOW, PROFILE_CARD_SHADOW_FOCUSED} from 'styles/shadows'
import {bounceIn} from 'styles/animations/keyframes'

export default class UserCard extends Component {
  static PropTypes = {
    badgeValue: PropTypes.string,
    tagline: PropTypes.string.isRequired,
  }

  render(){
    const {badgeValue} = this.props
    return(
      <div>
        <Box>
          <Avatar>
            {badgeValue && <Badge>{badgeValue}</Badge> }
          </Avatar>
          <br/>
          <br/>
          <br/>
          <Text>{this.props.tagline}</Text>
      </Box>
      </div>
    )
  }
}

const Box = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  padding: 10px;
  word-wrap: break-word;
  background-color: ${palette.primary2};
  border-radius: 2px;
  ${PROFILE_CARD_SHADOW}
  transition: all .2s ease-in-out;
  :hover {
    ${PROFILE_CARD_SHADOW_FOCUSED}
    transform: scale(1.1);
  }
`
const Avatar = styled.div`
  position: absolute;
  top: -25px;
  left: 95px;
  border-radius: 50%;
  border: 8px solid white;
  height: 50px;
  width: 50px;
  background-image: url("https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14079619_10154275347846251_1836046172102598566_n.jpg?oh=3523f954198098d7892a1af82eb14711&oe=5AA4C81C");
`

const Badge = styled.div`
  position: absolute;
  top: -5px;
  left: 30px;
  text-align: center;
  color: white;
  background-color: rgb(72, 230, 173);
  border-radius: 50%;
  border: 2px solid white;
  height: 20px;
  width: 20px;
  animation: ${bounceIn} 0.25s;
`

const Text = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${palette.secondary};
`
