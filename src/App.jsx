import { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    // Bu kısımda yeni bir görev eklemeniz gerekecek
  };

  const deleteTask = (id) => {
    // Bu kısımda görevi silmeniz gerekecek
  };

  const toggleComplete = (id) => {
    // Bu kısımda görevin durumunu değiştirmeniz gerekecek
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do Listesi</h1>
      <ToDoInput /*Bu kısımda prop göndermeniz gerekecek*/ />
      <ToDoList tasks={tasks} /*Bu kısımda prop göndermeniz gerekecek*/ />
    </div>
  );
}

export default App;
