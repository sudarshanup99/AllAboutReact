import { useState } from "react";
import AddToDO from "./Component/AddTodo";
import AppName from "./Component/AppName";
import WelcomeMessage from "./Component/WelcomeMessage";
import { ToDoItemsContext } from "./store/todo-items-store";

import ToDoItems from "./Component/ToDoItems";
function Apps() {
 

  const initialToDoitems=[
    {
      name:'BuyMilk',
    dueDate:"4/10/2023",
    },
    {
      name:'GoToCOLLEGE',
    dueDate:"4/10/2023",
    },
  

  ];
  const [todoitems, setToDoitems] = useState(initialToDoitems);
 
  const addNewItem = (todoName,todoDate) => {
    const newitemsadded = [...todoitems, { name: todoName, dueDate: todoDate },];
    setToDoitems(newitemsadded)


  }
  const deleteItem = (todoName) => {
    console.log(`items deleted ${todoName}`)
    const handlearray = todoitems.filter(item=>item.name !==todoName)
    setToDoitems(handlearray)
  }

  return (
   
    <>
      <ToDoItemsContext.Provider value={{
        todoitems,
        addNewItem,
        deleteItem
      }}>
      <center className="todo-container">
      <AppName />
        <AddToDO  />
        <WelcomeMessage todoItems={todoitems}/>
        <ToDoItems ToDoitems={todoitems} />
        
        </center>
        </ToDoItemsContext.Provider>
     
    </>
  )
  
  
}
export default Apps;
