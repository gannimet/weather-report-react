import { memo, useMemo } from 'react';
import { Todo } from '../model/data-model';
import './TodoDialog.scss';

type TodoDialogProps = {
  isOpen: boolean;
  todo?: Todo;
  onCancel?(): void;
  onSave?(): void;
};

export default memo<TodoDialogProps>(({
  isOpen,
  todo,
  onCancel,
  onSave,
}) => {
  const isEditMode = useMemo(() => !!todo, [todo])

  return <dialog open={isOpen}>
    <h1>{isEditMode ? 'TODO editieren' : 'TODO hinzufügen'}</h1>

    <div className="title-field">
      <span>Titel:</span>
      <input name="title" type="text" />
    </div>

    <div className="description-field">
      <span>Beschreibung:</span>
      <textarea name="description" />
    </div>

    <div className="due-date-field">
      <span>Fällig am:</span>
      <input name="due-date" type="date" />
    </div>

    <div className='button-row'>
      <button onClick={() => onCancel?.()}>Abbrechen</button>
      <button onClick={() => onSave?.()}>Speichern</button>
    </div>
  </dialog>
})
