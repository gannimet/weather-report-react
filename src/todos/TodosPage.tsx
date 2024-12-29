import { memo, useState } from "react";
import "./TodosPage.scss";
import { Todo } from "./model/data-model";
import TodoDialog from "./todo-dialog/TodoDialog";
import TodoList from "./todo-list/TodoList";

function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "Putzen",
      description: "Alles schön sauber machen",
      dueDate: new Date("2024-02-23"),
      isDone: false,
    },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

      <div className="todos-page">
        <div className="list-head">
          <span className="count">{todos.length} Todo(s)</span>
          <button onClick={() => setIsDialogOpen(true)}>
            Ein TODO hinzufügen
          </button>
        </div>

        <div className="todo-list-wrapper">
          <TodoList
            todos={todos}
            onDeleteClicked={onDelete}
            onDoneClicked={onDone}
          />
        </div>
      </div>
    </>
  );
}

export default memo(TodosPage);
