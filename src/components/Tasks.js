import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {/* the param in map can be anything */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
