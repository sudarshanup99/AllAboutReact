import { MdDelete } from "react-icons/md";
function ToDoItem({ todoName, todoDate, handleDelete }) {

    return (
        <div className="container">
            <div className="row kg-row">
                <div className="col mt-3 mb-2">{ todoName}</div>
                <div className="col mt-3 mb-2">{todoDate}</div>
                <div className="col mt-3 mb-2">
                    <button type="button" className="btn btn-danger" onClick={()=>handleDelete(todoName)}><MdDelete /></button>
                </div>

            </div>

        </div>
    )
}
export default ToDoItem;