// TODO: Import necessary components from react-router-dom
// You need: BrowserRouter, Routes, Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: Import your components
// You need: Navbar, Home, Tasks, TaskDetail
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TaskDetail from './pages/TaskDetails';

function App() {
  return (
    // TODO: Wrap everything in BrowserRouter
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* TODO: Add Navbar component here */}
        <Navbar />
        
        {/* TODO: Create Routes wrapper */}
        <Routes>
        {/* TODO: Add Route for Home page - path should be "/" */}
        <Route path="/" element={<Home />} />
        
        {/* TODO: Add Route for Tasks page - path should be "/tasks" */}
        <Route path="/tasks" element={<Tasks />} />
        
        {/* TODO: Add Route for TaskDetail page - path should be "/tasks/:id" */}
        <Route path="/tasks/:id" element={<TaskDetail />} />
      {/* TODO: Close Routes */}
      </Routes>
    </div>
    {/* TODO: Close BrowserRouter */}
    </BrowserRouter>
  );
}

export default App;