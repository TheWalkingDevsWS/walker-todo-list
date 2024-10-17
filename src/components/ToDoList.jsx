import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, onDeleteTask, onToggleComplete, onTaskEdit }) => {
    return (
        <div>
            {tasks.map((task) => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onTaskDelete={onDeleteTask}
                    onTaskEdit={onTaskEdit}
                />
            ))}
        </div>
    );
};

export default ToDoList;
