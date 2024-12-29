import { FormEvent, memo, useState } from "react";
import { Todo } from "../../model/data-model";
import "./DialogForm.scss";

type DialogFormProps = {
  onCancel(): void;
  onSave(todo: Todo): void;
};

function toDateInputValue(date: Date) {
  return date.toISOString().substring(0, 10);
}

export default memo<DialogFormProps>(({ onCancel, onSave }) => {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dueDateValue, setDueDateValue] = useState(new Date());

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!titleValue || !descriptionValue || !dueDateValue) {
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue,
      isDone: false,
    };

    onSave(newTodo);
  }

  return (
    <form onSubmit={onSubmit}>
      <h1 className="header">TODO hinzufügen</h1>

      <section className="main-content">
        <div className="form-field">
          <span>Titel:</span>
          <input
            name="title"
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </div>

        <div className="form-field">
          <span>Beschreibung:</span>
          <textarea
            name="description"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </div>

        <div className="form-field">
          <span>Fällig am:</span>
          <input
            name="due-date"
            type="date"
            value={toDateInputValue(dueDateValue)}
            onChange={(e) => setDueDateValue(new Date(e.target.value))}
          />
        </div>
      </section>

      <div className="button-row">
        <button type="button" onClick={() => onCancel?.()}>
          Abbrechen
        </button>
        <button type="submit">Speichern</button>
      </div>
    </form>
  );
});
