import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

const baseUrl =
  "https://yyd2hz04yf.execute-api.ap-southeast-2.amazonaws.com/prod/lists";

function ShoppingLists(props) {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      const listData = response.data;
      setLists(listData);
    });
  }, []);
  return (
    <div className=''>
      {lists.map((list) => {
        return <List key={list.id} list={list} />;
      })}
    </div>
  );
}

export default ShoppingLists;
