// * Similar a useReducer, donde colocaremos e STATE y Dispatch (metodos)
import { create } from "zustand"
import type { DraftPatient, Patient } from "./types"
import { v4 as uuidv4 } from 'uuid'

type PatientState = {
  patients: Patient[] // * Forma de arreglo, porque van a ser varios PACIENTES
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
  return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>((set) => ({ // ! usePatientStore -> equivalente a crear el Custom Hook en useReducer
  // * colocamos STATE y Funciones que MOdifican el STATE
  patients: [], // ! STATE
  // ! Metodos: 
  addPatient: (data) => {
    // console.log(data)
    const newPatient = createPatient(data)
    set((state) => ({ // * Callback -> () => | Similar al return en useReducer en las Acciones
      patients: [...state.patients, newPatient] // * Setteamos o Midificamos el STATE en Zustand equiv al return {...state}
    }))
    // console.log(data)
  },

  deletePatient: (id) => {
    // console.log(id)
    set((state) => ({
      patients: state.patients.filter((patient) => patient.id !== id)
    }))
  }
}))