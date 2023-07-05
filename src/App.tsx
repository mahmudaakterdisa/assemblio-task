import './App.css';
import Editor from './components/editor/Editor';
import Toolbar from './components/toolbar/Toolbar';

function App() {
  return (
    <div className='bg-blue-200 min-h-screen flex' >
      <Editor />
      <Toolbar />
    </div>
  );
}

export default App;
