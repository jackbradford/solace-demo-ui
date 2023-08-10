import React from 'react';
import { getNotes, searchNotes } from '../datasource';
import type { Note } from 'solace-demo-common/dist/types';

export type NotesControls = {
  fetchAll: () => Promise<Note[]>
  list: Note[]
  loading: boolean
  keyword: string
  search: (s: string) => Promise<Note[]>
  setKeyword: (s: string) => void
}

export const useNotes = (): NotesControls => {

  const [list, setList] = React.useState<Note[]>([]);
  const [keyword, setKeyword] = React.useState<undefined|string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchAll = () => {
    setLoading(true);
    return getNotes().then(response => {
      const { notes } = response.data;
      setList(notes);
      return notes;
    })
      .catch(e => {})
      .finally(() => setLoading(false));
  }

  const search = async (k: string) => {
    setLoading(true);
    return searchNotes(k).then(response => {
      const { notes } = response.data;
      setList(notes);
      return notes;
    })
      .catch(e => {})
      .finally(() => setLoading(false));
  }

  return {
    fetchAll,
    keyword,
    list,
    loading,
    search,
    setKeyword
  }
}

