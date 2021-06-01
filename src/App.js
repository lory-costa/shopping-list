import React from "react";
import AddList from "./components/AddList";
import ShoppingLists from "./components/ShoppingLists";

function App() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mt-4 w-1/3 p-4 border-2 border-gray-200 rounded bg-gray-100'>
        <h1 className='text-blue-700 text-2xl mb-2 text-center'>
          Shopping Lists
        </h1>
        <AddList />
        <ShoppingLists />
      </div>
    </div>
  );
}

export default App;
