import axios, { AxiosError } from 'axios'; 
import { API_URL, options } from './config';
import type { NoteFormT } from '../../components/NoteForm';

export const updateNote = async (note: NoteFormT) => {
  const url = `${API_URL}/notes`;
  return axios.put(url, note, options);
}

