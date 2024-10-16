import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, onDeleteTask, onToggleComplete }) => {
    return (
        <div>
            {tasks.map((task) => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onTaskDelete={onDeleteTask}
                />
            ))}
        </div>
    );
};

export default ToDoList;
