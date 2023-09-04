import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/task.api';
import TaskCard from './TaskCard';
import Container from 'react-bootstrap/Container'; // Importa el componente de contenedor
import Row from 'react-bootstrap/Row'; // Importa el componente de fila
import Col from 'react-bootstrap/Col'; // Importa el componente de columna

function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data);
        }
        loadTasks();
    }, []);

    return (
        <Container>
            <h1 className="mt-4">Lista de Proyectos</h1>
            <Row>
                {tasks.map(task => (
                    <Col xs={12} md={6} lg={4} key={task.id} className="mb-4">
                        <TaskCard task={task} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default TasksList;
