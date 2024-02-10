import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<div>No match</div>} />
      </Route>
    </Routes>
  );
}

export default App;
