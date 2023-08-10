import React from 'react';
import { getNotes, searchNotes } from '../datasource';
import type { Note } from 'solace-demo-common/dist/types';

export type NotesControls = {
  fetchAll: () => Promise<Note[]>
  list: Note[]
  keyword: string
  search: (s: string) => Promise<Note[]>
  setKeyword: (s: string) => void
}

export const useNotes = () => {

  const [list, setList] = React.useState<Note[]>([]);
  const [keyword, setKeyword] = React.useState<undefined|string>(undefined);

  const fetchAll = () => {
    return getNotes().then(response => {
      const { notes } = response.data;
      console.log("Notes", notes);
      setList(notes);
      return notes;
    })
      .catch(e => {});
  }

  const search = async (k: string) => {
    return searchNotes(k).then(response => {
      const { notes } = response.data;
      console.log("Notes", notes);
      setList(notes);
      return notes;
    })
      .catch(e => {});
  }

  return {
    fetchAll,
    keyword,
    list,
    search,
    setKeyword
  }
}

