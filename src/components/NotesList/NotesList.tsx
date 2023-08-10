import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../';
import { TrashIcon } from '../icons';
import { deleteNote as _deleteNote } from '../../lib/datasource';
import type { Note } from 'solace-demo-common/dist/types';

export const NotesList = () => {

  const { notes } = React.useContext(AppContext);
  const history = useHistory();

  const formatContent = (str: string) => {
    return (str.length < 100) ? str : str.slice(0, 100).trim()+"...";
  }

  const onClick = (note: Note) => (e: React.MouseEvent) => {
    e.preventDefault();
    history.push(`/update/${note.id}`);
  }

  const deleteNote = (note: Note) => (e: React.MouseEvent) => {
    e.preventDefault();
    _deleteNote(note.id).then(() => notes.fetchAll())
      .catch(e => console.error("Could not delete:", e));
  }

  React.useEffect(() => {
    notes.keyword && notes.keyword.trim() !== ""
      ? notes.search(notes.keyword)
      : notes.fetchAll().then(response => {});
  }, []);

  return (
    <ul>
      {notes.loading && (
        <div className="lds-ripple"><div></div><div></div></div>
      )}
      {!notes.loading && notes.list.map(note => (
        <li key={note.id}>
          <div onClick={onClick(note)}>
            <h3>{note.title}</h3>
            <p>{formatContent(note.body)}</p>
            <p className="date">{"Created: "+new Date(note.created_at).toLocaleString()}</p>
            <p className="date">{"Updated: "+new Date(note.updated_at).toLocaleString()}</p>
          </div>
          <div>
            <button onClick={deleteNote(note)}>
              <TrashIcon stroke={"maroon"} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

