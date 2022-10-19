// import logo from './logo.svg';
import './App.css';
import Join from "./components/Join/Join" 
import Chat from "./components/Chat/Chat" 

import {
 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Join />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
