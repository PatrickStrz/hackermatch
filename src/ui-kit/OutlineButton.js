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

const Box = styled.div`
  display: flex;
  padding: 5px;
  cursor: pointer;
  border: solid 3px ${palette.accent};
  border-radius: 1px;
  color: ${palette.accent};
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
