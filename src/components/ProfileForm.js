import React, {Component} from 'react'
import styled from 'styled-components'
import {palette} from 'styles/theme/colors'
//components
import {InputWithCharLimit} from 'ui-kit'
import Checkbox from 'material-ui/Checkbox'
import {OutlineButton} from 'ui-kit'

/* Only render if logged in with Auth0 */
export default class ProfileForm extends Component {
  state = {
    tagline:'',
    tagglineError:'',
    hackerChecked: false,
  }

  updateCheck = () => {
    console.log('clicked')
    this.setState({
        hackerChecked: !this.state.hackerChecked,
    })
  }

  handleTaglineChange = (input) => {
    this.setState({tagline: input})
  }

  handleTaglineError = errorMsg => {
  if (errorMsg !== this.state.taglineError) {
    this.setState({taglineError:errorMsg})
  } // prevent infinite loop
}
  render(){
    return(
      <PageBox>
        <br/>
        <br/>
        <Checkbox
          label="I'm a Developer"
          onCheck={this.updateCheck}
        />
        <br/>
        <br/>
        <InputWithCharLimit
          onChange={this.handleTaglineChange}
          value={this.state.tagline}
          charMax={80}
          placeholder="Your tagline here"
          onError={this.handleTaglineError}
        />
        <br/>
        <br/>
        <OutlineButton
          name="Complete Profile"
          size = "md"
          onClick={()=>console.log('mutate')}
        />
      </PageBox>
    )
  }
}

const PageBox = styled.div`
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonBox = styled.div`
  width: 100px;
`
