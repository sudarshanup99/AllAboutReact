import { useContext, useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { ToDoItemsContext } from "../store/todo-items-store";

function AddToDO() {
  const {addNewItem}=useContext(ToDoItemsContext)

  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const handleButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";

    addNewItem(todoName, todoDate)
   
  }
  
    return (
        <>
            <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
              <input type="text" placeholder="Enter Todo here" ref={todoNameElement} />
    </div>
    <div className="col">
              <input type="date" placeholder="Enter date" ref={todoDateElement} />
    </div>
    <div className="col ">
      <button className="btn btn-info px-3" onClick={handleButtonClicked}><IoAddCircleOutline/></button>
    </div>
  </div>
</div>
        </>
    )
}
export default AddToDO;