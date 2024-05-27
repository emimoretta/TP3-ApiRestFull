import ModelMem from '../model/DAOs/librosMem.js'

class Servicio {
    constructor() {
        this.model = new ModelMem()

    }

    obtenerLibros = async id => {
        if(id) {
            const libro = await this.model.obtenerLibro(id)
            return libro
        }
        else {
            const libros = await this.model.obtenerLibros()
            return libros
        }
    }

    guardarLibro = async libro => {
        const libroGuardado = await this.model.guardarLibro(libro)
        return libroGuardado
    }

    actualizarLibro = async (id, libro) => {
        const libroActualizado = await this.model.actualizarLibro(id, libro)
        return libroActualizado
    }

    borrarProducto = async id => {
        const libroEliminado = await this.model.borrarLibro(id)
        return libroEliminado
    }
}

export default Servicio