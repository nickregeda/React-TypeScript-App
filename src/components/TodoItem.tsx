import React from 'react';
import {FC} from "react";
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{padding: 15, border: 'solid 1px gray'}}>
            <div>{todo.id}. {todo.title}</div>
            <div> Completed: <input type="checkbox" checked={todo.completed}/></div>
        </div>
    );
};

export default TodoItem;