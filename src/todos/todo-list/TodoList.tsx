import { format } from 'date-fns';
import { memo, useMemo } from 'react';
import { Todo } from '../model/data-model';
import './TodoList.scss';

type TodoListProps = {
  todos: Todo[];
  onEdit(todo: Todo): void;
  onDelete(todo: Todo): void;
};

function renderTodoList(
  todos: Todo[],
  onEdit: (todo: Todo) => void,
  onDelete: (todo: Todo) => void,
) {
  return <ul className="todo-list">
    {todos.map((todo) => (
      <li className='todo-list-item' key={todo.id}>
        <div className="item-head">
          <h3 className='todo-title'>{todo.title}</h3>

          <div className='meta-area'>
            <span className='todo-due-date'>Fällig: {format(todo.dueDate, 'dd.MM.yyyy')}</span>

            <button onClick={() => onEdit(todo)}>Bearbeiten</button>
            <button onClick={() => onDelete(todo)}>Löschen</button>
          </div>
        </div>
        
        <p className='todo-description'>{todo.description}</p>
      </li>
    ))}
  </ul>;
}

export default memo<TodoListProps>(({ todos, onDelete, onEdit }) => {
  const notDoneTodos = useMemo(() => {
    return todos.filter((todo) => !todo.isDone);
  }, [todos]);

  const doneTodos = useMemo(() => {
    return todos.filter((todo) => todo.isDone);
  }, [todos]);

  return <>
    <h2>Zu erledigen:</h2>
    {renderTodoList(notDoneTodos, onEdit, onDelete)}

    <h2>Erledigt:</h2>
    {renderTodoList(doneTodos, onEdit, onDelete)}
  </>;
})
