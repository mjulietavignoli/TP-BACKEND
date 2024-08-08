import { useQuery } from '@tanstack/react-query';

import { getTareasFn } from '../api/tarea.js';

import TareaCard from '../components/Home/TareaCard';

const HomeView = () => {
  const {
    data: tareas,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['tareas'],
    queryFn: getTareasFn,
  });
  console.log(tareas);

  if (isLoading) {
    return <p className='mt-3 text-center'>Cargando entradas...</p>;
  }

  if (isError) {
    return (
      <div className='alert alert-danger'>
        Ocurrió un error leyendo las entradas de tarea
      </div>
    );
  }

  if (tareas && tareas.data.length === 0) {
    return (
      <div className='alert alert-danger'>
        No se encontraron entradas de tarea para mostrar
      </div>
    );
  }

  return (
    <section className='row'>
      {tareas.data.map((tarea) => (
        <article className='col-12 col-md-4 col-lg-3' key={tarea.id}>
          <TareaCard tarea={tarea} />
        </article>
      ))}
    </section>
  );
};
export default HomeView;