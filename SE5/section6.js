import React from 'react';
import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

// don't change the Component name "App"
export default function App() {
  return (
    <ul>
      {DUMMY_TODOS.map((todo, index) => (
        <Todo key={index} text={todo} />
      ))}
    </ul>
  );
}
// TOdo.js 파일

// import React from 'react';

// export default function Todo(props) {
//     return <li>{props.text}</li>;
// }