import React, { useState } from "react";

function ListItem(props) {
  const { id, item } = props.item;
  return <li className='list-disc list-inside'>{item}</li>;
}

export default ListItem;
