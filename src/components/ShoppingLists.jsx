import React, { useState, useEffect } from "react";
import axios from "axios";
import AddList from "./AddList";
import List from "./List";
import { v4 as uuidv4 } from "uuid";

const baseUrl =
  "https://yyd2hz04yf.execute-api.ap-southeast-2.amazonaws.com/prod/lists";

function ShoppingLists() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    getLists();
  }, []);

  const getLists = () => {
    axios.get(baseUrl).then((response) => {
      const listData = response.data;
      setLists(listData);
    });
  };

  const addList = async (newList) => {
    await axios.post(baseUrl, { title: newList, id: uuidv4() });
    getLists();
  };

  const updateListTitle = async (id, newTitle) => {
    await axios.patch(baseUrl, {
      id: id,
      updateKey: "title",
      updateValue: newTitle,
    });
    getLists();
  };

  const deleteList = async (id) => {
    await axios.delete(baseUrl, { data: { id: id } });
    getLists();
  };

  return (
    <div className='ml-4'>
      <AddList addList={addList} />
      {lists.map((list) => {
        return (
          <List
            key={list.id}
            list={list}
            updateListTitle={updateListTitle}
            deleteList={deleteList}
          />
        );
      })}
    </div>
  );
}

export default ShoppingLists;
