import React from "react";
import ShoppingLists from "./components/ShoppingLists";

function App() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mt-4 w-1/3 p-4 border-2 border-gray-200 rounded bg-gray-100'>
        <ShoppingLists />
      </div>
    </div>
  );
}

export default App;
