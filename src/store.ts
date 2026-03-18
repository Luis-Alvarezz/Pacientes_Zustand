// * Similar a useReducer, donde colocaremos e STATE y Dispatch (metodos)
import { create } from "zustand"
import type { DraftPatient, Patient } from "./types"
import { v4 as uuidv4 } from 'uuid'
import { createJSONStorage, devtools, persist } from "zustand/middleware"

type PatientState = {
  patients: Patient[] // * Forma de arreglo, porque van a ser varios PACIENTES
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
  activeId: Patient['id']
  updatePatientById: (id: Patient['id']) => void
  updatePatientData: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(devtools(persist((set) => ({ // ! usePatientStore -> equivalente a crear el Custom Hook en useReducer
  // * colocamos STATE y Funciones que Modifican el STATE
  patients: [], // ! STATE
  activeId: '',

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
  },

  updatePatientById: (id: string) => {
    console.log('Actualizando...', id)
    set(() => ({
      activeId: id
      // patients: state.patients.map( patient => patient.id === id ? patient : [] )
    }))
  },

  updatePatientData: (data) => {
    set((state) => ({
      // * Zustand permite escribir en multiples STATEs al mismo tiempo
      patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
      activeId: ''
    }))
  }
}), {
  name: 'patient-storage',
  // storage: (() => sessionStorage)
  storage: createJSONStorage(() => localStorage)
})
))