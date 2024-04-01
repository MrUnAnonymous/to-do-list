import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { deleteTodo, toggleCompleted } from "../actions";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ToDoList = ({ todos }) => {
  const dispatch = useDispatch();

  console.log("TODOS------------------------>", todos);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className="todolist">
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <input
              className="checkbox"
              type="checkbox"
              onChange={() => handleToggleCompleted(todo.id)}
            />
            <span
              className="todoelement"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>
              <DeleteForeverIcon fontSize="medium" className="button"/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  deleteTodo,
  toggleCompleted
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
