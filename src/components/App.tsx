import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "reactjs-popup/dist/index.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoContainer = styled.div`
  width: 80%;
  height: 3rem;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const ToDoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 5px;
`;

const RadioBtn = styled.input`
  cursor: pointer;
  width: 1.5rem;
`;

const ToDoColumn = styled.div`
  display: flex;
  align-items: center;
`;

function App() {
  let toDos: any;
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos) {
    toDos = JSON.parse(loadedToDos);
  } else {
    toDos = [];
  }
  const onClick = (e: any) => {
    const container = e.target.parentNode;
    const title = container.innerText;
    const cleanToDos = toDos.filter(function (toDo: any) {
      return toDo.title !== title;
    });
    toDos = cleanToDos;
    localStorage.setItem("toDos", JSON.stringify(toDos));
    const fading = () => {
      if (!container.style.opacity) {
        container.style.opacity = 1;
      }
      if (container.style.opacity > 0) {
        container.style.opacity -= 0.1;
      } else {
        clearInterval(fadeEffect);
      }
    };
    const fadeEffect = setInterval(fading, 50);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Body>
          {toDos &&
            toDos.map((toDo: toDoObjType) => (
              <TodoContainer>
                <ToDoColumn>
                  <RadioBtn type="radio" onClick={onClick} />
                  <ToDoTitle>{toDo.title}</ToDoTitle>
                </ToDoColumn>
                <ToDoColumn></ToDoColumn>
              </TodoContainer>
            ))}
        </Body>
      </Wrapper>
      <ToastContainer hideProgressBar={true} />
    </ThemeProvider>
  );
}

export default App;
