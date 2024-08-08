import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import { getTareaFn } from '../api/tarea.js';

const DetailView = () => {
  const { id } = useParams();

  const {
    data: tarea,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`tarea-${id}`],
    queryFn: () => getTareaFn(id), 
  });

  if (isLoading) {
    return <p className='mt-3 text-center'>Cargando entrada...</p>;
  }

  if (isError) {
    return (
      <div className='alert alert-danger'>
        Ocurrió un error leyendo la entrada de tarea
      </div>
    );
  }

  return (
    <>
      <Link className='btn btn-secondary mb-3' to={-1}>
        Volver
      </Link>
      <section className='card p-3'>
        <section className='row g-4'>
          <article className='col-12 col-md-6'>
            <h1>{tarea.data.nombre}</h1>
          </article>
        </section>
      </section>
    </>
  );
};
export default DetailView;