import React from 'react'
import axios from 'axios'
import StyledNav from './../../styled/StyledNav'
import StyledButton from '../../styled/StyledButton'
import ModalForm from '../forms/ModalForm'
import Cookies from 'js-cookie'

class Navbar extends React.Component {
  state = { 
    toggle: false, 
    fields: [], 
    formName: '',
    data: {}
  }
  
  toggleModal = ({target: { value }}) => {
    if(value) {
      const fields = value === 'Login' ? ['email', 'password'] : ['username', 'email', 'password', 'password_confirmation']
      this.setState({ toggle: !this.state.toggle, fields: fields, formName: value })
    } else {
      this.setState({ toggle: !this.state.toggle, fields: [], formName: '', data: {}})
    }
  }

  handleSubmit = async (e, name) => {
    e.preventDefault()
    const url = `/api/${name.toLowerCase()}`
    try {
      const csrftoken = Cookies.get('csrftoken')
     
      const headers = {
        common: {
          'X-CSRF-TOKEN': csrftoken
        }
      }

      const { data } = await axios.post(url, this.state.data, headers)
      console.log(data)

    } catch(err) {
      console.log(err)
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }
  
  render() {
    return (
      <>
        <StyledNav>
          <StyledButton value='Login' onClick={this.toggleModal}>
            Login
          </StyledButton>
          <StyledButton value='Register' onClick={this.toggleModal}>
            Register
          </StyledButton>
        </StyledNav>
        {
          this.state.toggle &&
          <ModalForm 
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

export default Navbar