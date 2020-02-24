import React from 'react';
import StyledButton from './../../styled/StyledButton'
import StyledModal from './../../styled/StyledModal'

const ModalForm = ({error, name, fields, handleChange, handleSubmit, onClose}) => {
  return (
    <StyledModal className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{name}</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <form onSubmit={(e) => handleSubmit(e, name)}>
          <section className="modal-card-body">
              {
                fields.map((field, i) => {
                  return <div key={i} className="field">
                    <div className="control">
                      <input 
                        className="input" 
                        type="text" 
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)} 
                        onChange={handleChange}
                        type={field === 'password' || field === 'password_confirmation' ? 'password' : 'text'}
                        />
                    </div>
                  </div>
                    
                })
              }
          <small>{error}</small>
          </section>
          <footer className="modal-card-foot">
            <StyledButton type="submit">Submit</StyledButton>
            <StyledButton onClick={onClose}>Cancel</StyledButton>
          </footer>
        </form>
      </div>
    </StyledModal>
  )
}

export default ModalForm