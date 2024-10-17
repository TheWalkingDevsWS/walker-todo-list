import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  const [tasks, setTasks] = useLocalStorage('tasklarim', []);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        text: text,
        completed: false
      }
    ])
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  };

  const taskEdit = (id, text) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text } : task
    ))
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do Listesi</h1>
      <ToDoInput onAddTask={addTask} />
      <ToDoList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} onTaskEdit={taskEdit} />
    </div>
  );
}

export default App;
