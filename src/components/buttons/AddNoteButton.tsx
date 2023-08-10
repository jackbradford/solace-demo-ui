import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusIcon } from '../icons';

export const AddNoteButton = () => {

  const history = useHistory();

  const onClick = () => {
    history.push("/add");
  }

  return (
    <button className="add-note" onClick={onClick}>
      <PlusIcon stroke={"#fff"} />
    </button>
  );
}

