import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, onDeleteTask, onToggleComplete }) => {
    return (
        <div>
            {tasks.map((task) => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    /*Bu kısımda prop göndermeniz gerekecek*/
                    deleteTask={onDeleteTask}       ////
                    toggleComplete={onToggleComplete}       //////
                />
            ))}
        </div>
    );
};

export default ToDoList;
