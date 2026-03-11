// rafc - Para los componentes instantaneos
import { useForm } from 'react-hook-form'
import { Error } from './Error'
import type { DraftPatient } from '../types'
import { usePatientStore } from '../store'

export const PatientForm = () => {
  const { addPatient } = usePatientStore() // * Forma 1 de extraer STATE y Funciones
  // const addPatient = usePatientStore((state) => state.addPatient) // * Forma 2 de extraer STATE y Funciones

  const {register, handleSubmit, formState: { errors }, reset } = useForm<DraftPatient>()
  // console.log(errors)

  const registerPatient = (data: DraftPatient) => { // * date recuperamos la informacion del formulario
    // console.log('Nuevo Paciente...');
    // console.log(data);
    // * Almacenar los pacientes con Zustand (Estado Global)
    addPatient(data) // * Se manda informacion al STORE de Zustand

    // * Reiniciar el Formulario
    reset()
  }

  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit(registerPatient)}>
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input 
            id="name"
            type="text"
            className="w-full p-3 border border-gray-100"
            placeholder="Nombre del Paciente"
            {...register('name', { // * Nombre para recuperar los datos que ingreso el usuario
              required: 'El nombre del Paciente es obligatorio'
            })}
          />
          {errors.name && (
            <Error>
              {/* { errors.name?.message as string} */}
              { errors.name?.message?.toString()}
            </Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input 
            id="caretaker"
            type="text"
            className="w-full p-3 border border-gray-100"
            placeholder="Nombre del propietario"
            {...register('caretaker', { // * Nombre para recuperar los datos que ingreso el usuario
              required: 'El Propietario es obligatorio'
            })}
          />
          {errors.caretaker && (
            <Error>{errors.caretaker?.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input 
            id="email"
            type="email"
            className="w-full p-3 border border-gray-100"
            placeholder="Email del propietario"
            {...register('email', { // * Nombre para recuperar los datos que ingreso el usuario
              required: 'El Email es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+[A-Z0-9.-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i,
                message: 'El Email no es válido'
              }
            })}
          />
          {errors.email && (
            <Error>{errors.email?.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha de Alta
          </label>
          <input 
            id="date"
            type="date"
            className="w-full p-3 border border-gray-100"
            {...register('date', { // * Nombre para recuperar los datos que ingreso el usuario
              required: 'La Fecha de Alta es obligatoria'
            })}
          />
          {errors.date && (
            <Error>{errors.date?.message?.toString()}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symtoms" className="text-sm uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="symtoms"
            className="w-full p-3 border border-gray-100"
            placeholder="Describe los síntomas del paciente"
            {...register('symtoms', { // * Nombre para recuperar los datos que ingreso el usuario
              required: 'Los Simtomas son obligatorio'
            })}
          />
          {errors.symtoms && (
            <Error>{errors.symtoms?.message?.toString()}</Error>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value='Guardar Paciente'
        />
      </form>
    </div>
  )
}
