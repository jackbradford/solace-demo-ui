import React from 'react';
import { useHistory } from 'react-router-dom';
import { addNote, updateNote } from '../../lib/datasource';
import { noteIsValid } from 'solace-demo-common/dist';

export type NoteFormT = {
  title: string
  body: string
  id?: number
}

type NoteFormProps = {
  initialState?: NoteFormT
  noteId?: number
}

const initialForm = {
  title: "",
  body: ""
}

const ERR_MSG = "Title is required. Content must be at least 20 characters, and not more than 300.";

export const NoteForm = (props?: NoteFormProps) => {

  const history = useHistory();
  const init = props?.initialState || initialForm;
  const update: boolean = !!props?.initialState;
  const [form, setForm] = React.useState<NoteFormT>(init);
  const [error, setError] = React.useState<undefined|string>(undefined);

  const onChange = (key: keyof NoteFormT) => (
    (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      e.preventDefault();
      setForm(prev => ({ ...prev, [key]: e.target.value }));
    }
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(undefined);
    const isValid = await noteIsValid(form);
    if (!isValid) {
      setError(ERR_MSG);
      return;
    }
    if (update) {
      updateNote({ id: props.noteId, ...form })
        .then(() => {
          history.push("/");
        })
        .catch(e => setError(ERR_MSG))
    }
    else {
      addNote(form)
        .then(() => {
          history.push("/");
        })
        .catch(e => setError(ERR_MSG));
    }
  }

  return (
    <form className="add-note" onSubmit={onSubmit}>
      <label htmlFor="title">{"Title"}</label>
      <input
        id="title"
        onChange={onChange("title")}
        type="text"
        value={form.title}
      />
      <label htmlFor="body">{"Note"}</label>
      <textarea
        id="body"
        onChange={onChange("body")}
        value={form.body}
      />
      <button className="submit-note" type="submit">{"Submit"}</button>
      {error && (
        <p className="error">{error}</p>
      )}
    </form>
  );
}

