import { useContext } from "react";
import { ToDoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = ( ) => {
    const {todoitems}=useContext(ToDoItemsContext)
    return (
        todoitems.length === 0 && <h1>Have a good day</h1>
    );
}
export default WelcomeMessage;