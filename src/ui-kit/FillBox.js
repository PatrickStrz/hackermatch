import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

/*
  Like a checkbox but instead the box fills.
  Calls a function on Select
 */

export default class FillBox extends Component {
  propTypes = {
    size: PropTypes.string.isRequired, // values: sm,xs,md,ls.xl
  }

  state = {
    isSelected:false
  }

   toggleSelect = () => {
     this.setState({isSelected: !this.state.isSelected})
   }

  render(){
    const {size} = this.props
    return(
      <Box size={size} onClick={this.toggleSelect}>
          <Text>wassup? from box skjdnfjksndkfnjsnfjn jksndfkjnjkn fjknsfjkdjk sfnkjsnd</Text>
      </Box>
    )
  }
}

const getSize = size => {
  switch (size) {
  case 'xs':
    return '60px'
  case 'sm':
    return '100px'
  case 'md':
    return '150px'
  case 'lg':
    return '140px'
  case 'xl':
    return '180px'
  default:
    return '100px'
  }
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
  ${props =>{
    const size = getSize(props.size)
    return css`
        height: ${size};
        width: ${size};
      `
    }
  }
  background-color: red;
`
const Text = styled.div`
  font-size: 18px;
  text-align: center;
  color: white;
`
