import axios, { AxiosError } from 'axios'; 
import { API_URL, options } from './config';
//import type { NoteFormT } from '../../components/NoteForm';

export const searchNotes = async (keyword: string) => {
  const url = `${API_URL}/notes/search/?keyphrase=${encodeURIComponent(keyword)}`;
  return axios.get(url, options);
}
