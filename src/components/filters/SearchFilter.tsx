import React from 'react';
import { SearchIcon } from '../icons';
import { AppContext } from '../../';

export const SearchFilter = () => {

  const { notes } = React.useContext(AppContext);
  const { keyword, setKeyword } = notes;
  const [loading, setLoading] = React.useState<boolean>(false);

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    notes.search(keyword);
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <input onChange={onChangeKeyword} type="text" value={keyword} />
      <button type="submit">
        <SearchIcon stroke="#555" />
      </button>
    </form>
  );
}

