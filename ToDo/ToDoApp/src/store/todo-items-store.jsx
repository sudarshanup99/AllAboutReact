import { createContext } from "react";

export const ToDoItemsContext = createContext({
    todoitems:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
  });