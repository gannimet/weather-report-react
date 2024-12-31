import { format } from "date-fns";
import { memo } from "react";
import { Todo } from "../model/data-model";
import "./TodoList.scss";

type TodoListProps = {
  todos: Todo[];
  onDeleteClicked(todo: Todo): void;
  onDoneClicked?(todo: Todo): void;
};

export default memo<TodoListProps>(
  ({ todos, onDeleteClicked, onDoneClicked }) => {
    return todos.length > 0 ? (
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-list-item" key={todo.id}>
            <div className="item-head">
              <h3 className="todo-title">{todo.title}</h3>

              <div className="meta-area">
                <span className="todo-due-date">
                  Fällig: {format(todo.dueDate, "dd.MM.yyyy")}
                </span>

                {onDoneClicked && (
                  <button onClick={() => onDoneClicked(todo)}>Erledigt</button>
                )}
                <button onClick={() => onDeleteClicked(todo)}>Löschen</button>
              </div>
            </div>

            <p className="todo-description">{todo.description}</p>
          </li>
        ))}
      </ul>
    ) : (
      <div className="empty-list">Keine TODOs vorhanden.</div>
    );
  }
);
