import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TareaCard = (props) => {
  const { tarea } = props;
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-description'>{tarea.nombre}</h5>
        <div className='text-end'>
          <Link className='btn btn-dark' to={`/detail/${tarea.id}`}>
            <i className='bi bi-arrow-up-right me-2'></i>
            Ir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TareaCard;

TareaCard.propTypes = {
  tarea: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
  }),
};