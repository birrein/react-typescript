import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const todos = [
    { id: 't1', text: 'Finish Typescript course' },
    { id: 't2', text: 'Finish React course' },
  ];

  const addTodo = (text: string) => {
    console.log(text);
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
