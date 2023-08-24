import { TodoBoard, Header, DoingBoard, DoneBoard } from './components';
import { useState } from 'react';
import initialData from './Data/initial-data';
function App() {
  const [todo, setTodo] = useState(initialData.todo);
  const [doing, setDoing] = useState(initialData.doing);
  const [done, setDone] = useState(initialData.done);

  // Function to move a task from one board to another
  const moveTask = (taskId, sourceBoard, destination) => {
    // Find the task in the source board
    const taskIndex = sourceBoard.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
      // Task not found in the source board
      return;
    }

    // Remove the task from the source board
    const updatedSourceBoard = [...sourceBoard];
    updatedSourceBoard.splice(taskIndex, 1);

    // Add the task to the destination board
    if (destination === 'done') {
      const updatedDestinationBoard = [sourceBoard[taskIndex], ...done];
      setDone(updatedDestinationBoard);
    }
    if (destination === 'todo') {
      const updatedDestinationBoard = [sourceBoard[taskIndex], ...todo];
      setTodo(updatedDestinationBoard);
    }

    // Update the state for boards
    switch (sourceBoard) {
      case todo:
        setTodo(updatedSourceBoard);
        break;
      case doing:
        setDoing(updatedSourceBoard);
        break;
      case done:
        setDone(updatedSourceBoard);
        break;
      default:
        break;
    }
  };

  const removeTask = (id, sourceBoard) => {
    // Remove the task from the source board
    const updatedSourceBoard = sourceBoard.filter((task) => task.id !== id);

    // Update the state based on the source board
    switch (sourceBoard) {
      case todo:
        setTodo(updatedSourceBoard);
        break;
      case doing:
        setDoing(updatedSourceBoard);
        break;
      case done:
        setDone(updatedSourceBoard);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[1060px] h-[862px] mt-[70px] mx-auto">
      <Header />
      <div className="flex justify-between mt-[46px]">
        <TodoBoard
          tasks={todo}
          setTasks={setTodo}
          moveTask={moveTask}
          removeTask={removeTask}
        />
        <DoingBoard
          tasks={doing}
          setTasks={setDoing}
          moveTask={moveTask}
          removeTask={removeTask}
        />
        <DoneBoard tasks={done} moveTask={moveTask} removeTask={removeTask} />
      </div>
    </div>
  );
}

export default App;
