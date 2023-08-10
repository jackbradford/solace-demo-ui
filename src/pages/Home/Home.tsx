import React from 'react';
import { SearchFilter } from '../../components/filters';
import { AddNoteButton } from '../../components/buttons';
import { Header } from '../../components/Header';
import { NotesList } from '../../components/NotesList';

export const Home = () => {

  return (
    <main>
      <Header />
      <nav>
        <SearchFilter />
      </nav>
      <NotesList />
      <AddNoteButton />
    </main>
  );
}

