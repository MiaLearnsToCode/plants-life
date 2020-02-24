import styled from 'styled-components';


const StyledModal = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Raleway&display=swap');
  
  .modal-card-head, .modal-card-foot, .modal-card-body {
    background-color: transparent;
    border: none;
  }

  .modal-card-title {
    color: #ebddca;
    font-family: 'Raleway' ;
    font-size: 40px;
    font-weight:bold;
  }

  .input {
    font-family: 'Raleway' ;
    border-radius: 0;
    font-size: 22px;
    border: 2px solid black;
  }

  small {
    color: red;
  }
`;

export default StyledModal;