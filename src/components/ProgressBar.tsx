interface ProgressBarProps {
  totalTasks: number;
  completedTasks: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalTasks,
  completedTasks,
}) => {
  const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="my-4">
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-center mt-2">
        {completedTasks} de {totalTasks} tarefas concluídas
      </p>
    </div>
  );
};

export default ProgressBar;
