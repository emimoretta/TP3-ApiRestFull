TP3 – API REST con Servidor express

Crear un servidor http basado en express que escuche en el puerto 8080.
Esta app de servidor gestionará el recurso libros a través de las rutas GET, POST, PUT y
DELETE:
/libros GET (Obtiene todos los libros almacenados en un array en el servidor)
/libros:id GET (Obtiene un libro por su id)
/libros POST (Incorpora un libro)
libros:id PUT (Actualiza un libro por su id)
/libros:id DELETE (Borra un libro por su id)

Un libro será representado con una estructura JSON (dentro de un array de libros) con los
siguientes campos: id, titulo, autor, año.
El servidor tendrá en su espacio público un simple formulario de ingreso, que a través del
método POST le envié al servidor los campos requeridos para ingresar un libro.
La ruta GET y GET por ID se pueden probar directamente en el navegador, y el PUT y
DELETE utilizando POSTMAN

Estructurar el servidor en capas, persistiendo la información en memoria.
