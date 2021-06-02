import React, { useState } from "react";

function AddList(props) {
  const [newList, setNewList] = useState("");

  function handleChange(e) {
    setNewList(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addList(newList);
    setNewList("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='text-center'>
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
