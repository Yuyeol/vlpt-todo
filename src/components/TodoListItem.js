import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";

const Item = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;
const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
`;
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  /* 체크되었을때 보여줄 스타일? 이거 styled에서 될지모르겟다*/
  &.checked {
    svg {
      color: #22b8cf;
      text-decoration: line-through;
    }
  }
`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = () => {
  return (
    <Item>
      <CheckBox>
        <MdCheckBoxOutlineBlank />
        <Text>할 일</Text>
      </CheckBox>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </Item>
  );
};

export default TodoListItem;
