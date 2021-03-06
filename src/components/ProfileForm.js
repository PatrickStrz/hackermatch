import React, {Component} from 'react'
import styled from 'styled-components'
//components
import {InputWithCharLimit} from 'ui-kit'
import Checkbox from 'material-ui/Checkbox'
import {OutlineButton} from 'ui-kit'
import {UserCard} from 'ui-kit'

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
  getBadgeValue = () => {
    return this.state.hackerChecked && 'H'
  }
  render(){
    return(
      <div>
        <FormBox>
        <br/>
        <br/>
        <div>
          <Checkbox
            label="I'm a Developer"
            onCheck={this.updateCheck}
          />
        </div>
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
          <UserCard
            tagline={this.state.tagline}
            badgeValue={this.getBadgeValue()}
          />
          <br/>
          <br/>
          <OutlineButton
            name="Complete Profile"
            size="md"
            onClick={()=>console.log('mutate')}
          />
        </FormBox>
      </div>
    )
  }
}


const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`
