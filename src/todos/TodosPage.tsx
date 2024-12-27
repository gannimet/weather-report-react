import { memo, useState } from 'react';
import './TodosPage.scss';
import { Todo } from './model/data-model';
import TodoDialog from './todo-dialog/TodoDialog';
import TodoList from './todo-list/TodoList';

function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Putzen',
      description: 'Alles schön sauber machen',
      dueDate: new Date('2024-02-23'),
      isDone: false
    }
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>(undefined);

  const onCancel = () => {
    setIsDialogOpen(false);
  };

  const onSave = () => {
    setIsDialogOpen(false);
  };

  const openTodoDialog = (todo?: Todo) => {
    setEditingTodo(todo);
    setIsDialogOpen(true);
  };

  const onEdit = (todo: Todo) => {
    openTodoDialog(todo);
  };

  const onDelete = (todo: Todo) => {
    const todosWithoutRemoved = todos.filter((currentTodo) => {
      return currentTodo.id !== todo.id;
    });

    setTodos(todosWithoutRemoved);
  };

  return (
    <>
      <TodoDialog
        isOpen={isDialogOpen}
        todo={editingTodo}
        onCancel={onCancel}
        onSave={onSave}
      />

      <div className='todos-page'>
        <div className="list-head">
          <span className='count'>{todos.length} Todo(s)</span>
          <button onClick={() => openTodoDialog()}>Ein TODO hinzufügen</button>
        </div>

        <div className="todo-list-wrapper">
          <TodoList
            todos={todos}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </>
  );
}

export default memo(TodosPage)