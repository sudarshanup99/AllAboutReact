import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

import ToDoItem from "./ToDoItem";
const ToDoItems = () => {
    const { todoitems,deleteItem} = useContext(ToDoItemsContext);
   
    return(
        <>
            <div className="item-container">
                {todoitems.map((item) => (
                    <ToDoItem key={item} todoDate={item.dueDate} todoName={item.name} handleDelete={deleteItem}/>
                ))}

          </div>
    </>
        )
}
export default ToDoItems;