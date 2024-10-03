import { useState } from "react";

interface TaskInputProps {
  addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="flex my-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-3 border border-gray-700 bg-gray-800 text-white rounded-l focus:outline-none"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-600 text-white p-3 rounded-r hover:bg-blue-700 transition"
      >
        Criar <span className="ml-2">+</span>
      </button>
    </div>
  );
};

export default TaskInput;
