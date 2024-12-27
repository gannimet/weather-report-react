import { memo, useState } from 'react';
import './TodosPage.scss';
import { Todo } from './model/data-model';
import TodoList from './todo-list/TodoList';

function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Essen machen',
      description: 'Lecker kochen',
      dueDate: new Date('2025-01-17'),
      isDone: true
    },
    {
      id: '2',
      title: 'Abwaschen',
      description: 'Schön sauber machen',
      dueDate: new Date('2025-01-18'),
      isDone: false
    },
    {
      id: '3',
      title: 'Sport machen',
      description: 'Laufen gehen, Fußball spielen, Gewichte stemmen.',
      dueDate: new Date('2025-02-03'),
      isDone: false
    }
  ]);

  return (
    <div className='todos-page'>
      <div className="list-head">
        <span className='count'>{todos.length} Todo(s)</span>
        <button>Ein TODO hinzufügen</button>
      </div>

      <div className="todo-list-wrapper">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default memo(TodosPage)