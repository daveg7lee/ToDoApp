import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "reactjs-popup/dist/index.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../toDo.utils";

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

const End = styled.h1`
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.darkGreyColor};
`;

const App = () => {
  let toDos: any;
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos) {
    toDos = JSON.parse(loadedToDos);
  } else {
    toDos = [];
  }
  const checkEnd = () => {
    toDos.map((toDo: toDoObjType) => {
      let now: Date = new Date();
      const hour = now.getHours() - 1;
      const toDoHour = new Date(toDo.end).getHours();
      if (hour + 1 === toDoHour) {
        if (!toDo.notified) {
          notify(toDo.title);
          toDo.notified = true;
        }
      }
    });
  };
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
  setInterval(checkEnd, 1000);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Body>
          {toDos &&
            toDos.map((toDo: toDoObjType) => (
              <TodoContainer key={toDo.title}>
                <ToDoColumn>
                  <RadioBtn type="radio" onClick={onClick} />
                  <ToDoTitle>{toDo.title}</ToDoTitle>
                </ToDoColumn>
                <ToDoColumn>
                  {toDo.end ? <End>{toDo.end} 까지</End> : <End>기한 없음</End>}
                </ToDoColumn>
              </TodoContainer>
            ))}
        </Body>
      </Wrapper>
      <ToastContainer hideProgressBar={true} />
    </ThemeProvider>
  );
};

export default App;
