export const crearUsuario = "CREAR-USUARIO"

export const agregarUsuario = (usuario) => ({

    type: crearUsuario,
    payload: {

        usuario

    }

})