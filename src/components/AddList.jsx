import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const baseUrl =
  "https://yyd2hz04yf.execute-api.ap-southeast-2.amazonaws.com/prod/lists";

function AddList(props) {
  const [newList, setNewList] = useState("");
  function handleChange(e) {
    setNewList(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(baseUrl, { title: newList, id: uuidv4() });
    setNewList("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='new-list'
          value={newList}
          onChange={handleChange}
          className='px-2 border-blue-500 rounded border-2'
          placeholder='Create a new list'
          autoFocus={true}
        />
      </form>
    </div>
  );
}

export default AddList;
