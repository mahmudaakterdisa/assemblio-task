import './App.css';
import Toolbar from './components/toolbar/Toolbar';
import Editor from './components/editor/Editor';
import { TextStyleProvider } from './context/TextStyleContext';

function App() {
  return (
    <TextStyleProvider>
      <div className='bg-blue-200 min-h-screen flex' >
        <Editor />
        <Toolbar />
      </div>
    </TextStyleProvider>
  );
}

export default App;