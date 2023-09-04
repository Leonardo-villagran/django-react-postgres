import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function TaskCard({ task }) {
    const navigate = useNavigate();

    return (
        <Card
            style={{ cursor: 'pointer', background: 'grey' }}
            onClick={() => navigate(`/proyectos/${task.id}`)}
            className="custom-card my-3 shadow" // Clases de Bootstrap para sombra y margen vertical
        >
            <Card.Body>
                <Card.Title className="h5">{task.name}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text style={{color:'white'}}>Tecnología: {task.technology}</Card.Text>
                <hr className="my-2" /> {/* Margen superior e inferior para la línea horizontal */}
            </Card.Body>
        </Card>
    );
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technology: PropTypes.string.isRequired,
    }).isRequired,
};

export default TaskCard;

