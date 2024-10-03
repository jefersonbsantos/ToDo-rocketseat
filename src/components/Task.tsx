interface TaskProps {
  task: TaskType;
  toggleComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

export interface TaskType {
  id: number;
  text: string;
  completed: boolean;
}

const Task: React.FC<TaskProps> = ({ task, toggleComplete, removeTask }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 my-2 rounded">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => removeTask(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Remover
      </button>
    </div>
  );
};

export default Task;
