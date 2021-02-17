import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "reactjs-popup/dist/index.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Header from "./Header";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <Header></Header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
