import { useState } from 'react';

const ToDoInput = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (!taskText.length) return; // 

        onAddTask(taskText);
        setTaskText('')
    };

    return (
        <div className="flex gap-2 mb-4">
            <input
                type="text"
                className="border p-2 rounded w-full"
                placeholder="Yeni görev ekleyin..."
                /*Bu kısımda event ve value eklemeniz gerekecek*/
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button
                onClick={handleAddTask}
                disabled={!taskText}  /////
                /*Bu kısımda event eklemeniz gerekecek*/
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Ekle
            </button>
        </div>
    );
};

export default ToDoInput;
