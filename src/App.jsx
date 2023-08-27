import { TodoBoard, Header, DoingBoard, DoneBoard } from './components';
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import initialData from './Data/initial-data';

function App() {
  const [todo, setTodo] = useState(() => {
    // Load the todo data from localStorage, or use the initialData if it doesn't exist
    const savedTodo = localStorage.getItem('todo');
    return savedTodo && savedTodo.length
      ? JSON.parse(savedTodo)
      : initialData.todo;
  });

  const [doing, setDoing] = useState(() => {
    const savedDoing = localStorage.getItem('doing');
    return savedDoing ? JSON.parse(savedDoing) : initialData.doing;
  });

  const [done, setDone] = useState(() => {
    const savedDone = localStorage.getItem('done');
    return savedDone ? JSON.parse(savedDone) : initialData.done;
  });

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

    // After moving the task, update localStorage
    localStorage.setItem('todo', JSON.stringify(todo));
    localStorage.setItem('doing', JSON.stringify(doing));
    localStorage.setItem('done', JSON.stringify(done));
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

    // After removing the task, update localStorage
    localStorage.setItem('todo', JSON.stringify(todo));
    localStorage.setItem('doing', JSON.stringify(doing));
    localStorage.setItem('done', JSON.stringify(done));
  };

  useEffect(() => {
    // Save the tasks to localStorage whenever they change
    localStorage.setItem('todo', JSON.stringify(todo));
    localStorage.setItem('doing', JSON.stringify(doing));
    localStorage.setItem('done', JSON.stringify(done));
  }, [todo, doing, done]);

  return (
    <div className="w-[1060px] h-[862px] mt-[70px] mx-auto">
      <Header />
      <DndProvider backend={HTML5Backend}>
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
      </DndProvider>
    </div>
  );
}

export default App;
