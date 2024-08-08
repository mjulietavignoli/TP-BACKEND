const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postTareaFn = async (data) => {
  const token = sessionStorage.getItem('token');

  const res = await fetch(`${BACKEND_URL}/tareas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Ocurrió un error guardando la entrada');
  }
};

export const getTareasFn = async () => {
  const res = await fetch(`${BACKEND_URL}/tareas`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Ocurrió un error leyendo las entradas del blog');
  }

  return data;
};

export const getTareaFn = async (tareaId) => {
  const res = await fetch(`${BACKEND_URL}/tareas/${tareaId}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      'Ocurrió un error leyendo la entrada de la tarea seleccionada'
    );
  }

  return data;
};

export const deleteTareaFn = async (tareaId) => {
  const token = sessionStorage.getItem('token');

  const res = await fetch(`${BACKEND_URL}/tareas/${tareaId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(
      'Ocurrió un error intentando eliminar la tarea seleccionada'
    );
  }
};

export const putTareaFn = async ({ tareaId, data }) => {
  const token = sessionStorage.getItem('token');

  const res = await fetch(`${BACKEND_URL}/tareas/${tareaId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Ocurrió un error intentando editar la tarea seleccionada');
  }
};