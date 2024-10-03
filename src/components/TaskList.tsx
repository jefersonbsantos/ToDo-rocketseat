import Task, { TaskType } from "./Task";

interface TaskListProps {
  tasks: TaskType[];
  toggleComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleComplete,
  removeTask,
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
