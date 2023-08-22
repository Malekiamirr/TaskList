import { TodoBoard, Header } from './components';

function App() {
  return (
    <div className="w-[1060px] h-[862px] mt-[70px] mx-auto">
      <Header />
      <div className="flex justify-between mt-[46px]">
        <TodoBoard />
      </div>
    </div>
  );
}

export default App;
