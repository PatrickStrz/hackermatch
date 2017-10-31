// react+redux
import React, {Component} from 'react'
import styled from 'styled-components'
import {PROFILE_CARD_SHADOW} from 'styles/shadows'

export class ProfileCardContainer extends Component {
  render(){
    return(
      <OuterBox>

      </OuterBox>
    )
  }
}

const OuterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(255, 255, 255);
  ${PROFILE_CARD_SHADOW}
  padding: 10px;
  min-height: 150px;
  min-width: 270px;
`

export default ProfileCardContainer
