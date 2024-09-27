import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import RoutineList from './pages/RoutineList/RoutineList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="routine/:routineId" element={<RoutineList />} />
        <Route path='settings' element={<Settings />} />
        <Route path="*" element={<div>No match</div>} />
      </Route>
    </Routes>
  );
}

export default App;
