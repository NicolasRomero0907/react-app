import React from 'react'
import { connect } from 'react-redux'
import { agregarUsuario } from '../redux/acciones/accionesFormulario'

const Formulario = ({ usuario,agregarUsuario }) => {

    const nombre = React.createRef()
    const apellido = React.createRef()

    const handleChangeNombre = (e) => {

		console.log(e.target.value)
        var nombre = e.target.value
		usuario.nombre = nombre

    }

    const handleChangeApellido = (e) => {

        console.log(e.target.value)
        var apellido = e.target.value
        usuario.apellido = apellido

    }

    const crear = (e) => {

        
		e.preventDefault()
        //console.log(e)
        fetch('http://localhost:3000/api/proyecto/nuevoUsuario', {
            method: 'post',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        nombre.current.value = ''
        apellido.current.value = ''

    }

	return(

        <div>
            <form onSubmit={crear}>

            <div className="form-row">

                <div className="col-sm-6">
                    <label htmlFor="nombreUsuario">Nombre</label>
                        <input type="text" className="form-control" ref={nombre} id="nombreUsuario" onChange={handleChangeNombre} />
				</div>

                <div className="col-sm-6">
                    <label htmlFor="usuarioApellido">Apellido</label>
                    <input type="text" className="form-control" id="usuarioApellido" onChange={handleChangeApellido} ref={apellido} />
                </div>

            </div>
                <div className="form-row">
                    <button type="submit" className="btn btn-dark" onClick={crear}>Crear</button>
			</div>

	</form>
        </div>

	)

}

const mapStateToProps = (state) => {

    return {usuario: state.usuario}

}

const mapDispatchToProps = (dispatch) => {

    return {

		agregarUsuario: (usuario) => dispatch(agregarUsuario(usuario))

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Formulario)