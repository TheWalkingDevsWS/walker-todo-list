import { useState } from "react";

const ToDoItem = ({ task, onToggleComplete, onTaskDelete, onTaskEdit }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(task.text)
    return (
        <div className="flex items-center gap-2 mb-2">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />


            {
                isEditing
                    ?
                    (<input type="text" className="border-2"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={() => {
                            onTaskEdit(task.id, editText)
                            setIsEditing(false)
                        }} />)
                    :
                    (<span
                        className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
                        onDoubleClick={() => setIsEditing(true)}
                    >
                        {task.text}
                    </span>)
            }




            <button
                onClick={() => onTaskDelete(task.id)}
                className="text-red-500">
                Sil
            </button>
        </div>
    );
};

export default ToDoItem;