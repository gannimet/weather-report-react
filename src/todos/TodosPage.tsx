import { memo, useMemo, useState } from "react";
import "./TodosPage.scss";
import { Todo } from "./model/data-model";
import TodoDialog from "./todo-dialog/TodoDialog";
import TodoList from "./todo-list/TodoList";

function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const onCancel = () => {
    setIsDialogOpen(false);
  };

  const onSave = (todoToSave: Todo) => {
    setIsDialogOpen(false);
    setTodos([...todos, todoToSave]);
  };

  const onDelete = (todo: Todo) => {
    const todosWithoutRemoved = todos.filter((currentTodo) => {
      return currentTodo.id !== todo.id;
    });

    setTodos(todosWithoutRemoved);
  };

  const onDone = (todo: Todo) => {
    todo.isDone = true;
    setTodos([...todos]);
  };

  return (
    <>
      <TodoDialog isOpen={isDialogOpen} onCancel={onCancel} onSave={onSave} />

      <main className="todos-page">
        <div className="list-head">
          <span className="count">{todos.length} Todo(s)</span>
          <button onClick={() => setIsDialogOpen(true)}>
            Ein TODO hinzufügen
          </button>
        </div>

        <div className="todo-list-wrapper">
          <h2>Zu erledigen:</h2>
          <TodoList
            todos={notDoneTodos}
            onDeleteClicked={onDelete}
            onDoneClicked={onDone}
          />

          <h2>Erledigt:</h2>
          <TodoList todos={doneTodos} onDeleteClicked={onDelete} />
        </div>
      </main>
    </>
  );
}

export default memo(TodosPage);
