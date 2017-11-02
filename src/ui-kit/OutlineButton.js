import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {palette} from 'styles/theme/colors'

const OutlineButton = (props) => {
  return(
    <Box onClick={props.onClick} size={props.size}>
      {props.name}
    </Box>
  )
}

const mainColor = palette.accent

const Box = styled.div`
  height: auto;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  border: solid 3px ${mainColor};
  border-radius: 1px;
  color: ${mainColor};
  transition: all .2s ease-in-out;
  :hover{
    color: white;
    background-color: ${mainColor};
    transform: scale(1,1.1);
  }
  font-size: ${props => {
    switch (props.size) {
    case 'xs':
      return '12px'
    case 'sm':
      return '18px'
    case 'md':
      return '25px'
    case 'lg':
      return '30px'
    case 'xl':
      return '40px'
    default:
      return '20px'
    }
    }};
`

OutlineButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
}

export default OutlineButton
