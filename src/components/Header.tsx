import React from "react";
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

const Form = styled.form``;

const StyledPopup = styled(Popup)`
  &-content {
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

export default () => {
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
        {(close: any) => (
          <FormContainer>
            <Form></Form>
          </FormContainer>
        )}
      </StyledPopup>
    </Header>
  );
};
