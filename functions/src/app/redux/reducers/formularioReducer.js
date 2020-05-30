import { crearUsuario } from '../acciones/accionesFormulario'

const initialState = {}

function  usuario(state = initialState, action){

    switch (action.type) {

        case crearUsuario: return state.usuario = action.payload.usuario

        default: return state

    }

}

export default usuario