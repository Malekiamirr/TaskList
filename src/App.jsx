import { TodoBoard, Header } from './components';

function App() {
  const data = {
    todo: [
      {
        id: 1,
        task: 'Start with meditation, exercise & breakfast for a productive day',
      },
      {
        id: 2,
        task: 'Read to learn something new every day',
      },
      {
        id: 3,
        task: 'Learn something fresh & relevant',
      },
    ],
    doing: [
      {
        id: 1,
        task: 'Engage & question in meetings',
      },
      {
        id: 2,
        task: 'Use time-blocking for effective days',
      },
    ],
    done: [
      {
        id: 1,
        task: 'Finished online course - check!',
      },
      {
        id: 2,
        task: 'Congratulate yourself for incorporating healthier habits into your lifestyle, like regular exercise or mindful eating',
      },
    ],
  };
  return (
    <div className="w-[1060px] h-[862px] mt-[70px] mx-auto">
      <Header />
      <div className="flex justify-between mt-[46px]">
        <TodoBoard data={data.todo} />
      </div>
    </div>
  );
}

export default App;
