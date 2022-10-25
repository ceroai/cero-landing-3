import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  casosDeUsoVisibles: false,
  integracionesVisibles: false,
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    mostrarCasosDeUso: (state) => {
      state.casosDeUsoVisibles = true
    },
    esconderCasosDeUso: (state) => {
      state.casosDeUsoVisibles = false
    },
    mostrarIntegraciones: (state) => {
      state.integracionesVisibles = true
    },
    esconderIntegraciones: (state) => {
      state.integracionesVisibles = false
    },
  },
})

export const { mostrarCasosDeUso, esconderCasosDeUso, mostrarIntegraciones, esconderIntegraciones } = modalsSlice.actions

export default modalsSlice.reducer