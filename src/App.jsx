import { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';



function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    // Bu kısımda yeni bir görev eklemeniz gerekecek
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    }

    setTasks([...tasks, newTask]);
    console.log (tasks);
  };

  const deleteTask = (id) => {
    // Bu kısımda görevi silmeniz gerekecek
    setTasks(tasks.filter(task => task.id !== id))
  };

  const toggleComplete = (id) => {
    // Bu kısımda görevin durumunu değiştirmeniz gerekecek
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  };



  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do Listesi</h1>
      <ToDoInput onAddTask={addTask}/*Bu kısımda prop göndermeniz gerekecek*/ />
      <ToDoList tasks={tasks} onDeleteTask={deleteTask} onToggleComplete={toggleComplete} /*Bu kısımda prop göndermeniz gerekecek*/ />
    </div>
  );
}

export default App;
