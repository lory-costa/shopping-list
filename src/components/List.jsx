import React, { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import deleteIcon from "./../delete.png";

const itemsUrl =
  "https://yyd2hz04yf.execute-api.ap-southeast-2.amazonaws.com/prod/items";
const listsUrl =
  "https://yyd2hz04yf.execute-api.ap-southeast-2.amazonaws.com/prod/lists";

function List(props) {
  const { id, title } = props.list;
  const [items, setItems] = useState([]);

  const handleClick = () => {
    axios.delete(listsUrl, { id });
  };

  useEffect(() => {
    axios.get(itemsUrl).then((response) => {
      const itemsData = response.data;
      setItems(itemsData);
    });
  }, []);
  return (
    <>
      <div className='flex mt-2'>
        <h2 className='text-blue-500 text-xl mr-2'>{title}</h2>
        <button onClick={handleClick}>
          <img src={deleteIcon} alt='delete icon' width='15' />
        </button>
      </div>
      <ul className=''>
        {items.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
      </ul>
      <input
        className='px-2 rounded'
        type='text'
        name='add-item'
        id='add-item'
        placeholder='Add item'
      />
    </>
  );
}

export default List;
