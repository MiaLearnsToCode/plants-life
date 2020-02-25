import styled from 'styled-components'

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Raleway&display=swap');
  font-family: 'Raleway' ;
  min-height: 90vh;
  background-color: #ebddca;

  h1 {
    font-family: 'Abril Fatface' ;
    font-size:80px;
    strong {
      opacity: 0.7;
    }
  }

  .flex {
    display: flex;
    margin-top: 50px;
    div {
      width: 50%;
      display:flex;
      flex-direction: column;
      
      align-items:center;
    }
  }

  .flex-homepage {
    text-align: right;
    div {
      justify-content: center;
      img {
        margin-right: 100px;
        width: 60%;
        border: 2px solid black;
      }

      h1 {
        font-size: 180px;
        line-height: 100px;
      }
    }
  }

  .flex-index {
    div {
      h1 {
      font-size: 100px;
      line-height: 60px;
      margin: 50px;
      strong {
        padding-left: 20px;
      }
    }
  }    

  .plant-flex {
    align-items: flex-end;
    width: 100%;
    padding: 50px;
  }
    
`;

export default Container