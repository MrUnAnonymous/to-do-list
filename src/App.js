import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <ToDoInput />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
