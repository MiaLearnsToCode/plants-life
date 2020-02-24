import styled from 'styled-components';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Raleway&display=swap');
  font-family: 'Raleway' ;
  min-height: 90vh;
  background-color: #ebddca;

  .flex-homepage {
    display: flex;
    text-align: right;
    margin-top: 50px;
    div {
      width: 50%;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        margin-right: 100px;
        width: 60%;
        border: 2px solid black;
      }

      h1 {
        font-family: 'Abril Fatface' ;
        font-size: 180px;
        line-height: 100px;
        strong {
          opacity: 0.7;
        }
      }
    }
  }
`;

export default Container