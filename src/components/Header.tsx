import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { BsPlus } from "react-icons/bs";

const Header = styled.div`
  width: 100%;
  height: 4rem;
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
`;

const FormContainer = styled.div`
  height: 60vh;
`;

const Form = styled.form`
  padding: 1.5rem;
  height: 100%;
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
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.lightGreyColor};
`;

export default () => {
  let toDos: any[];
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setTitle("");
    setStart("");
    setEnd("");
  };
  const onChange = (e: any) => {
    const {
      target: { value, name },
    } = e;
    if (name === "title") {
      setTitle(value);
    } else if (name === "start") {
      setStart(value);
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
                name="start"
                value={start}
                onChange={onChange}
                type="datetime-local"
                placeholder="할 일"
                maxLength={120}
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
