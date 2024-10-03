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
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">Lista de Tarefas</h1>
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
