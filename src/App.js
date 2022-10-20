import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <h1>Hello Bootstrap baia kemon Acho</h1>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
