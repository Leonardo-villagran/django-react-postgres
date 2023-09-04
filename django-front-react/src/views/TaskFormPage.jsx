import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/task.api';
import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function TaskformPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const navigate = useNavigate();
    const params = useParams();
    console.log(params);

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            const res = await updateTask(params.id, data);
            console.log('actualizando ', 'con id: ', params.id,' y data: ', res.data);
            toast.success('Tarea actualizada con éxito',{
                position:'bottom-right',
                style:{
                    background:'#363636',
                    color:'white'
                }

            });
        } else {
            const res = await createTask(data);
            console.log('creando ', res);
            toast.success('Tarea creada con éxito',{
                position:'bottom-right',
                style:{
                    background:'#363636',
                    color:'white'
                }

            });
        }
        navigate('/proyectos');

    });

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                console.log('obtienendo datos');
                const {data} = await getTask(params.id);
                console.log(data);
                setValue('name', data.name);
                setValue('description', data.description);
                setValue('technology', data.technology);
            }
        }
        loadTask();
    }, [params.id, setValue]);

    return (
        <div className="container mt-4">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-danger">Este campo es requerido</span>}
                </div>
                <div className="mb-3">
                    <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Descripción"
                        {...register("description", { required: true })}
                    />
                    {errors.description && <span className="text-danger">Este campo es requerido</span>}
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tecnología"
                        {...register("technology", { required: true })}
                    />
                    {errors.technology && <span className="text-danger">Este campo es requerido</span>}
                </div>               
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            {params.id && (
                <button
                    onClick={async () => {
                        const accepted = window.confirm('¿Estás seguro de eliminar?');
                        if (accepted){
                            await deleteTask(params.id);
                            console.log('Tarea eliminada.')
                            toast.success('Tarea eliminada',{
                                position:'bottom-right',
                                style:{
                                    background:'#363636',
                                    color:'white'
                                }
                            });
                            navigate('/proyectos');
                            
                
                        }
                    }}
                    className="btn btn-danger mt-3"
                >
                    Eliminar
                </button>
            )}
        </div>
    );
}

export default TaskformPage;