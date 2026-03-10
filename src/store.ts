// * Similar a useReducer, donde colocaremos e STATE y Dispatch (metodos)
import { create } from "zustand"
import type { DraftPatient, Patient } from "./types"

type PatientState = {
  patients: Patient[] // * Forma de arreglo, porque van a ser varios PACIENTES
  addPatient: (data: DraftPatient) => void
}

export const usePatientStore = create<PatientState>(() => ({ // ! usePatientStore -> equivalente a crear el Custom Hook en useReducer
  // * colocamos STATE y Funciones que MOdifican el STATE
  patients: [], // ! STATE
  // ! Metodos: 
  addPatient: (data) => {
    console.log(data)
  }
}))