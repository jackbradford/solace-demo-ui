import React from 'react';
import { Header } from '../../components/Header';
import { AppContext } from '../../';
import { NoteForm } from '../../components/NoteForm';
import { useParams } from 'react-router-dom';
import type { Note } from 'solace-demo-common/dist/types';

/**
 * This page is also used to update notes.
 **/
export const AddNote = () => {

  const { id } = useParams();
  const { notes } = React.useContext(AppContext);
  const [notFound, setNotFound] = React.useState<boolean>(false);

  const findNote = (n: Note[]): Note | undefined => {
    const match = n.find(note => note.id === parseInt(id));
    return match ? {
      id: match.id,
      body: match.body,
      title: match.title
    } : match;
  }

  const initNote = findNote(notes.list);

  React.useEffect(() => {
    if (id && !initNote) {
      notes.fetchAll().then(n => {
        if (!findNote(n)) {
          setNotFound(true);
        }
      });
    }
  }, []);

  return (
    <main>
      <Header />
      <section className="add-note">
        <h2>{id ? "Update note..." : "Add a note..."}</h2>
        {!id && <NoteForm />}
        {(id && initNote) && (
          <NoteForm initialState={initNote} noteId={initNote.id} />
        )}
        {(id && !initNote && !notFound) && (
          <div className="lds-ripple"><div></div><div></div></div>
        )}
        {notFound && <div>{"Not found."}</div>}
      </section>
    </main>
  );
}

