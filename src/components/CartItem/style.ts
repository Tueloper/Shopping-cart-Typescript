import styled from 'styled-components';

// create styles as standalone

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding: 20px;

  div {
    flex: 1;
  }

  .information .button {
    display: flex;
    justtify-content: space-between;
  }  

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px
  }
`;