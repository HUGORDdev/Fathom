import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './component/Form';
import Hero from './component/Hero';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App