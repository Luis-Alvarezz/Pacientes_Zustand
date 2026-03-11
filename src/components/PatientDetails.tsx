// * rafc (export const nombreConstante(metodo) = ({}: firma o type)) o rfc para (export default function nombreMetodo({}){})  para mostrar el componente principal

import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProp = {
  patient: Patient
}

// export default function PatientDetails({}){}
export const PatientDetails = ({ patient }: PatientDetailsProp) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem
        label={'ID'}
        data={patient.id}
      />

      <PatientDetailItem
        label={'Nombre'}
        data={patient.name}
      />

      <PatientDetailItem
        label={'Propietario'}
        data={patient.caretaker}
      />

      <PatientDetailItem
        label={'Email'}
        data={patient.email}
      />

      <PatientDetailItem
        label={'Fecha Alta'}
        data={patient.date.toString()}
      />

      <PatientDetailItem
        label={'Simtomas'}
        data={patient.symtoms}
      />

      <div className="flex justify-between items-center mt-10">
        <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
          Editar
        </button>

        <button className="py-2 px-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
          Eliminar
        </button>
      </div>
    </div>
  )
}
