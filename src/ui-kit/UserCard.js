import React, {Component} from 'react'
import styled from 'styled-components'
import {palette} from 'styles/theme/colors'

export default class UserCard extends Component {
  render(){
    return(
      <div>
        <Box>
          <Avatar/>
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
  background-color: ${palette.primary2};
  border-radius: 2px;
`
const Avatar = styled.div`
  position: absolute;
  top: -25px;
  left: 85px;
  border-radius: 50%;
  border: 8px solid white;
  height: 50px;
  width: 50px;
  background-image: url("https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14079619_10154275347846251_1836046172102598566_n.jpg?oh=3523f954198098d7892a1af82eb14711&oe=5AA4C81C");
`

const Text = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${palette.secondary};
`
