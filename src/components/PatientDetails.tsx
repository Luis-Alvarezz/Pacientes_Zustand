// * rafc (export const nombreConstante(metodo) = ({}: firma o type)) o rfc para (export default function nombreMetodo({}){})  para mostrar el componente principal

import type { Patient } from "../types"

type PatientDetailsProp = {
  patient: Patient
}

// export default function PatientDetails({}){}
export const PatientDetails = ({patient}: PatientDetailsProp) => {
  return (
    <div>
      {patient.name}
    </div>
  )
}
