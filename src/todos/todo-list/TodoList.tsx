import { format } from "date-fns";
import { memo, useMemo } from "react";
import { Todo } from "../model/data-model";
import "./TodoList.scss";

type TodoListProps = {
  todos: Todo[];
  onDeleteClicked(todo: Todo): void;
  onDoneClicked(todo: Todo): void;
};

function renderTodoList(
  todos: Todo[],
  onDeleteClicked: (todo: Todo) => void,
  onDoneClicked: (todo: Todo) => void,
  isDoneList = false
) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className="todo-list-item" key={todo.id}>
          <div className="item-head">
            <h3 className="todo-title">{todo.title}</h3>

            <div className="meta-area">
              <span className="todo-due-date">
                Fällig: {format(todo.dueDate, "dd.MM.yyyy")}
              </span>

              {!isDoneList && (
                <button onClick={() => onDoneClicked(todo)}>Erledigt</button>
              )}
              <button onClick={() => onDeleteClicked(todo)}>Löschen</button>
            </div>
          </div>

          <p className="todo-description">{todo.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default memo<TodoListProps>(
  ({ todos, onDeleteClicked, onDoneClicked }) => {
    const notDoneTodos = useMemo(() => {
      return todos
        .filter((todo) => !todo.isDone)
        .toSorted((a, b) => {
          return a.dueDate.getTime() - b.dueDate.getTime();
        });
    }, [todos]);

    const doneTodos = useMemo(() => {
      return todos
        .filter((todo) => todo.isDone)
        .toSorted((a, b) => {
          return a.dueDate.getTime() - b.dueDate.getTime();
        });
    }, [todos]);

    return (
      <>
        <h2>Zu erledigen:</h2>
        {renderTodoList(notDoneTodos, onDeleteClicked, onDoneClicked)}

        <h2>Erledigt:</h2>
        {renderTodoList(doneTodos, onDeleteClicked, onDoneClicked, true)}
      </>
    );
  }
);
