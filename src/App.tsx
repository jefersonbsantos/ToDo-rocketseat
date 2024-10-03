import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import ProgressBar from "./components/ProgressBar";
import { TaskType } from "./components/Task";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (text: string) => {
    const newTask: TaskType = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="max-w-[768px] mx-auto mt-10 bg-gray-900 p-6 rounded-lg shadow-lg text-white">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="/logo.svg" alt="Logo ToDo" className="w-24 h-24" />
        <h1 className="text-3xl font-bold text-center text-white">
          Lista de Tarefas
        </h1>
      </div>
      <TaskInput addTask={addTask} />
      <ProgressBar totalTasks={tasks.length} completedTasks={completedTasks} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
      />
    </div>
  );
};

export default App;
