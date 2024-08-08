import Joi from 'joi';

export const post_put_tareaValidationSchema = Joi.object({
    nombre: Joi.string().trim().min(3).required().messages({
        'string.min':"El campo 'nombre' debe tener como mínimo 3 caracteres",
        'any.required':"El campo 'nombre' es requerido",
        '*':"Revisa el campo 'nombre'",
    })
})