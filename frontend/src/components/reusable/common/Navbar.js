import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import StyledNav from './../../styled/StyledNav'
import StyledButton from '../../styled/StyledButton'
import ModalForm from '../forms/ModalForm'
import { headers } from './../../../lib/headers'
import { setToken, isAuthenticated, logout } from './../../../lib/auth'

class Navbar extends React.Component {
  state = { 
    toggle: false, 
    fields: [], 
    formName: '',
    data: {},
    error: ''
  }
  
  toggleModal = ({target: { value }}) => {
    if(value) {
      const fields = value === 'Login' ? ['email', 'password'] : ['username', 'email', 'password', 'password_confirmation']
      this.setState({ toggle: !this.state.toggle, fields: fields, formName: value })
    } else {
      this.setState({ toggle: !this.state.toggle, fields: [], formName: '', data: {}, error: ''})
    }
  }

  navigate = (url) => {
    this.props.history.push(url)
  }

  handleSubmit = async (e, name) => {
    e.preventDefault()
    const url = `/api/${name.toLowerCase()}`
    try {
      const { data } = await axios.post(url, this.state.data, headers)
      if (name === 'Login') setToken(data.token)
      this.toggleModal({ target: { value:'' } })
      
    } catch(err) {
      this.setState({ error: 'Invalid Crendentials' })
    }
    if (name === 'Login') this.navigate('/plants')
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  logoutNav = () => {
    logout()
    this.navigate('/')
  }
  
  render() {
    return (
      <>
        <StyledNav>
          {
            !isAuthenticated() &&
            <>
              <StyledButton value='Login' onClick={this.toggleModal}>
                Login
              </StyledButton>
              <StyledButton value='Register' onClick={this.toggleModal}>
                Register
              </StyledButton>
            </>
          } 
          {
            isAuthenticated() &&
            <>
              <StyledButton value='Homepage' onClick={() => this.navigate('/plants')}>
                Homepage
              </StyledButton>
              <StyledButton value='Logout' onClick={this.logoutNav}>
                Logout
              </StyledButton>
            </>
          } 
        </StyledNav>
        {
          this.state.toggle &&
          <ModalForm 
            error={this.state.error}
            name={this.state.formName} 
            fields={this.state.fields} 
            onClose={this.toggleModal}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        }
      </>
    )
  }
  
}

export default withRouter(Navbar)