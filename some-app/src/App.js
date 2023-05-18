import Todo from './components/Todo.js'
import Modal from './components/Modal.js'
import Backdrop from './components/Backdrop.js'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react.js"/>
      <Todo text="learn next.js"/>
      <Todo text="learn node.js"/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
