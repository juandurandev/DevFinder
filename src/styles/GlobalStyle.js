import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height:100vh;
    background-color:${props => props.dark ? "#E4ECFF" : "#141C2F"};
    overflow-x:hidden;  
  }
`;
 
export default GlobalStyle;