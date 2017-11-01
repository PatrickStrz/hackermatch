import React, {Component} from 'react'
import {Avatar} from 'ui-kit'
import styled from 'styled-components'
const imageUrl = 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14079619_10154275347846251_1836046172102598566_n.jpg?oh=3523f954198098d7892a1af82eb14711&oe=5AA4C81C'
import {InputWithCharLimit} from 'ui-kit'
import {FillBox} from 'ui-kit'
/* Only render if logged in with Auth0 */
export default class ProfileForm extends Component {
  state = {
    tagline:'',
    tagglineError:'',
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
        <Avatar size="80px" imageUrl={imageUrl}/>
        <FillBox size="xl"/>
        <InputWithCharLimit
          onChange={this.handleTaglineChange}
          value={this.state.tagline}
          charMax={80}
          placeholder="Your tagline here"
          onError={this.handleTaglineError}
        />
      </PageBox>
    )
  }
}

const PageBox = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
