import './App.css';
import Input from './components/input';
import Head from './components/head';
import Items from './components/todo-items';
import Welcome from './components/welcome';
import TodoItems from './store/TodoItems';
import { useSelector } from 'react-redux';

function App() {
  const todoItems = useSelector((state) => state.todo);
  return (
    <>
      <Head></Head>
      <Input></Input>
      {todoItems?.length === 0 && <Welcome></Welcome>}
      <Items></Items>
    </>
  )
}

export default App;