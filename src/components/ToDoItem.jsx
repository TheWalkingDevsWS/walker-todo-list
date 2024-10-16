const ToDoItem = ({ task, onToggleComplete, onTaskDelete }) => {
    return (
        <div className="flex items-center gap-2 mb-2">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.text}
            </span>
            <button
                onClick={() => onTaskDelete(task.id)}
                className="text-red-500">
                Sil
            </button>
        </div>
    );
};

export default ToDoItem;
