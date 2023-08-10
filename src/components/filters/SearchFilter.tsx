import React from 'react';
import { SearchIcon } from '../icons';

export const SearchFilter = () => {

  const [keyword, setKeyword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit");
    // get notes search function from context
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

