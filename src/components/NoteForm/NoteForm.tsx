import React from 'react';
import { useHistory } from 'react-router-dom';
import { addNote, updateNote } from '../../lib/datasource';
//import type { Note } from 'solace-demo-common/dist/types';

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

export const NoteForm = (props?: NoteFormProps) => {

  const history = useHistory();
  const init = props?.initialState || initialForm;
  const update: boolean = !!props?.initialState;
  const [form, setForm] = React.useState<NoteFormT>(init);

  const onChange = (key: keyof NoteFormT) => (
    (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      e.preventDefault();
      setForm(prev => ({ ...prev, [key]: e.target.value }));
    }
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit...", form);
    if (update) {
      updateNote({ id: props.noteId, ...form })
        .catch(e => {})
        .finally(() => {
          history.push("/");
        });
    }
    else {
      addNote(form)
        .catch(e => {})
        .finally(() => {
          history.push("/");
        });
    }
  }

  return (
    <form className="add-note" onSubmit={onSubmit}>
      <label htmlFor="title">{"Note Title"}</label>
      <input
        id="title"
        onChange={onChange("title")}
        type="text"
        value={form.title}
      />
      <label htmlFor="body">{"Content"}</label>
      <textarea
        id="body"
        onChange={onChange("body")}
        value={form.body}
      />
      <button type="submit">{"Submit"}</button>
    </form>
  );
}

