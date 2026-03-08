
// * 1.- Type cuando YA registremos un paciente (con ID - Se manejara con el store de Zustand)
export type Patient = {
  id: string,
  name: string,
  caretaker: string,
  email: string,
  date: Date,
  symtoms: string
}

// * 2.- Type cuando aun no registremos un paciente (SIN ID)
export type DraftPatient = Omit<Patient, 'id'> // * Utility Type - Omite el ID del Type Patient
