
import {  BrowserRouter , Routes, Route,Navigate} from 'react-router-dom';
import TasksPage from './views/TaskPage';
import TaskformPage from './views/TaskFormPage';
import { Navigation } from './components/Navigation';
import {Toaster} from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.css';

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  console.log('El modo es: ' + import.meta.env.MODE);
  console.log('La dirección es: ' + apiUrl);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/proyectos"/>} />
        <Route path="/proyectos" element={<TasksPage />} />
        <Route path="/crear-proyecto" element={<TaskformPage />} />
        <Route path="/proyectos/:id" element={<TaskformPage />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App