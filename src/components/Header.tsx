import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { BsPlus } from "react-icons/bs";
import { toast } from "react-toastify";

const Header = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddBtn = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  :hover {
    transform: scale(1.2);
  }
`;

const FormContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPopup = styled(Popup)`
  &-content {
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

const Input = styled.input`
  width: 90%;
  height: 2rem;
  padding: 1rem;
  border: 1.5px solid ${(props) => props.theme.lightGreyColor};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 1rem;
`;

const SubmitBtn = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  cursor: pointer;
`;

export default () => {
  let toDos: toDoObjType[] = [];
  const [title, setTitle] = useState("");
  const [end, setEnd] = useState("");
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const loadedToDos = localStorage.getItem("toDos");
    if (loadedToDos) {
      toDos = JSON.parse(loadedToDos);
    }
    if (title === "") {
      toast.error("Title is required");
    } else {
      const toDoObj: toDoObjType = {
        title,
        end,
        notified: false,
      };
      toDos.push(toDoObj);
      localStorage.setItem("toDos", JSON.stringify(toDos));
      setTitle("");
      setEnd("");
      window.location.reload();
    }
  };
  const onChange = (e: any) => {
    const {
      target: { value, name },
    } = e;
    if (name === "title") {
      setTitle(value);
    } else {
      setEnd(value);
    }
  };
  return (
    <Header>
      <StyledPopup
        trigger={
          <AddBtn>
            <BsPlus />
          </AddBtn>
        }
        modal={true}
      >
        {
          <FormContainer>
            <Form onSubmit={onSubmit}>
              <Input
                value={title}
                onChange={onChange}
                type="text"
                placeholder="할 일"
                maxLength={120}
                name="title"
              />
              <Input
                name="end"
                value={end}
                onChange={onChange}
                type="datetime-local"
                placeholder="할 일"
                maxLength={120}
              />
              <SubmitBtn type={"submit"}>생성</SubmitBtn>
            </Form>
          </FormContainer>
        }
      </StyledPopup>
    </Header>
  );
};
