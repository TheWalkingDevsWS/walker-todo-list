const ToDoItem = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className="flex items-center gap-2 mb-2">
            <input
                type="checkbox"
                /*Bu kısımda check edilip edilmediği ve event eklemeniz gerekecek*/
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.text}
            </span>
            <button
                /*Bu kısımda event eklemeniz gerekecek*/
                onClick={() => deleteTask(task.id)}
                className="text-red-500">
                Sil
            </button>
        </div>
    );
};

export default ToDoItem;
