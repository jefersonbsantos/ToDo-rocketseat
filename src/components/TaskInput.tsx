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
        className="flex-grow p-2 border rounded-l"
        placeholder="Adicionar nova tarefa"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Adicionar
      </button>
    </div>
  );
};

export default TaskInput;
