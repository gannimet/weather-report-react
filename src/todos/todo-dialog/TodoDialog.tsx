import { memo, useEffect, useRef } from "react";
import { Todo } from "../model/data-model";
import "./TodoDialog.scss";
import DialogForm from "./dialog-form/DialogForm";

type TodoDialogProps = {
  isOpen: boolean;
  onCancel(): void;
  onSave(todo: Todo): void;
};

export default memo<TodoDialogProps>(({ isOpen, onCancel, onSave }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog className="todo-dialog" ref={dialogRef}>
      <DialogForm
        key={crypto.randomUUID()}
        onCancel={onCancel}
        onSave={onSave}
      />
    </dialog>
  );
});
