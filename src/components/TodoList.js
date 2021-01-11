import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <List>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </List>
  );
};

export default TodoList;
