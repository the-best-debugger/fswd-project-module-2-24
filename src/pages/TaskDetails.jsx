// TODO: Import useState and useEffect from 'react'
import { useState, useEffect } from 'react';

// TODO: Import useParams and Link from 'react-router-dom'
import { useParams, Link } from 'react-router-dom';


export default function TaskDetail() {
  // TODO: Get the 'id' from URL using useParams()
  // const { id } = useParams();
  const { id } = useParams();
  
  
  // TODO: Create state for 'task' - initial value should be null
  const [task, setTask] = useState(null);
  
  // TODO: Create state for 'loading' - initial value should be true
  const [loading, setLoading] = useState(true);
  

  // TODO: Create useEffect hook
  useEffect(() => {
    // TODO: Fetch single task from API using the id
    // URL: `https://jsonplaceholder.typicode.com/todos/${id}`
    // Steps:
    // 1. Fetch the URL with the id
    // 2. Convert to JSON
    // 3. Update task state
    // 4. Set loading to false
    // 5. Add error handling
    const fetchTask = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error('Error fetching task:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
    
  }, [id]); // Re-run if id changes

  // TODO: Add loading check
  // If loading is true, return: <p className="p-8 text-gray-500">Loading task details...</p>
  if (loading) {
    return <p className="p-8 text-gray-500">Loading task details...</p>;
  };
  

  // TODO: Add null check
  // If task is null, return: <p className="p-8 text-red-500">Task not found!</p>
  if (!task) {
    return <p className="p-8 text-red-500">Task not found!</p>;
  };
  

  return (
    <div className="container mx-auto p-8">
      {/* TODO: Add a back button using Link */}
      {/* Link to="/tasks" with text "← Back to Tasks" */}
      {/* className="text-blue-600 hover:underline mb-4 inline-block" */}
      <Link to="/tasks" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Tasks
      </Link>
      
      
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        {/* TODO: Display task.title in h1 */}
        {/* className="text-2xl font-bold text-gray-800 mb-4" */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{task.title}</h1>
        
        
        <div className="space-y-3">
          {/* TODO: Display task.id */}
          {/* Format: <strong>Task ID:</strong> {task.id} */}
          {/* Wrap in <p className="text-gray-600"> */}
          <p className="text-gray-600">
            <strong>Task ID:</strong> {task.id}
          </p>
          
          
          {/* TODO: Display task.userId */}
          {/* Format: <strong>User ID:</strong> {task.userId} */}
          <p className="text-gray-600">
            <strong>User ID:</strong> {task.userId}
          </p>
          
          
          {/* TODO: Display task status with conditional styling */}
          {/* Show "Completed ✓" in green if completed */}
          {/* Show "Pending" in orange if not completed */}
          <p className="text-gray-600">
            <strong>Status:</strong>{task.completed ? (
              <span className="text-green-600 font-semibold"> Completed ✓</span>
            ) : (
              <span className="text-orange-600 font-semibold"> Pending</span>
            )}
            {/* TODO: Add conditional span here */}
          </p>
        </div>
      </div>
    </div>
  );
}