import axios, { AxiosError } from 'axios'; 
import { API_URL, options } from './config';
//import type { NoteFormT } from '../../components/NoteForm';

export const getNotes = async () => {
  const url = `${API_URL}/notes`;
  return axios.get(url, options);
}
