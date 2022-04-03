
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>this is television app</h1>
      <Routes>
        <Route path='/home' element={<h2>my name is roy</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
