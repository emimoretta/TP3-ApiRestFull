class ModelMem {
    #libros = []

    constructor() {
        this.#libros = [
            { id: '1', titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', anio: 1605 },
            { id: '2', nombre: 'Orgullo y prejuicio', autor: 'Jane Austen', anio: 1813 },
            { id: '3', nombre: 'Frankenstein', autor: 'Mary Shelley', anio: 1818 },
            { id: '4', nombre: 'Los tres mosqueteros', autor: 'Alexandre Dumas', anio: 1844 },
            { id: '5', nombre: 'Cumbres borrascosas', autor: 'Emily Brontë', anio: 1847 }
        ]
    }

    obtenerLibros = async () => this.#libros

    obtenerLibro = async id => {
        const libro = this.#libros.find( p => p.id === id )
        return libro || {}
    }

    guardarLibro = async libro => {
        const id = String(parseInt(this.#libros[this.#libros.length-1]?.id || 0) + 1)
        const libroConId = { id, ...libro }
        this.#libros.push(libroConId)

        return libroConId
    }

    actualizarLibro = async (id, libro) => {
        const index = this.#libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            const libroAnt = this.#libros[index]
            const libroAct = { ...libroAnt, ...libro }
            this.#libros.splice(index, 1, libroAct)
            return libroAct
        }
        else {
            return {}
        }
    }
    
    borrarLibro = async id => {
        let producto = {}

        const index = this.#libros.findIndex( libro => libro.id === id )
        if(index != -1) {
            libro = this.#libros.splice(index, 1)[0]
        }
        return libro
    }
}

export default ModelMem