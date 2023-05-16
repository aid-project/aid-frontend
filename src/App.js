import Router from './router/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
