import logo from './logo.svg';
import './App.css';
import Project from './components/Project.js'


function App() {
  return (
    <div className="App">
      <a className="noLink" href="/">
      <div className="title">
        Meimar.Dev
      </div>
      </a>
     
      <Project></Project>
    </div>
  );
}

export default App;
