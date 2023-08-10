import React from 'react';
import { SearchFilter } from '../../components/filters';
import { AddNoteButton } from '../../components/buttons';

export const Home = () => {

  return (
    <main>
      <header>
        <h1>{"Solace Notes"}</h1>
        <p className="subtitle">{"The quick, no nonsense scribbler."}</p>
      </header>
      <nav>
        <SearchFilter />
      </nav>
      <AddNoteButton />
    </main>
  );
}

