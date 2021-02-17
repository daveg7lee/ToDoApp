import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper></Wrapper>
    </ThemeProvider>
  );
}

export default App;
