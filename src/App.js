import Homepage from './homepage.js';
import './App.css';
import Places from '/home/mntwana/metabnb/src/components/Places.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </Router>
  );
}

export default App;
