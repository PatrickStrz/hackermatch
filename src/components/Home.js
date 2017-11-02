import React,{Component} from 'react'
import styled from 'styled-components'
import {palette} from 'styles/theme/colors'
//components
import {OutlineButton} from 'ui-kit'
import {withRouter} from 'react-router-dom'

class Home extends Component {
  redirect = (route) => {
    this.props.history.push(route)
  }
  render(){
    return(
      <PageBox>
        <Header>
          where <strong>developers</strong> and <strong>partners</strong> find each other
            to build profitable side businesses.
        </Header>
        <OutlineButton
          onClick={()=>this.redirect('/createprofile')}
          name="Start Your Journey"
          size="lg"
        />
      </PageBox>
    )
  }
}

const Header = styled.div`
  color: ${palette.secondary};
  font-size: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
`
const PageBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default withRouter(Home)
