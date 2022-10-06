# ABM de Productos
**********************

## Tecnologías utilizadas:
Con arquitectura API Rest.
Se utilizaron NPM, Node.js, Express.js
La base de datos de Mongo Atlas no relacional.
************
### Utilizamos también un archivo dontenv para declarar variables externas y proteger la seguridad del usuario

#### Descripción
El proyecto trata de realizar una serie de endpoints con arquitectura API REST utilizando modelo, controladora y rutas, en la cual consiste en hacer un CRUD de productos, haciendo prueba mediante la aplicación postman para obtener y enviar los datos a la base de datos MoongoDB y poder así obtener, agregar, modificar y eliminar un producto. Utilizamos la terminal NPM e instalamos los paquetes Node.js, Express.js y Moongose. Por último subimos los cambios a github, en dónde quedará como repositorio online para el uso en cualquier computadora.
##### EndPoints
Se implementaron metodos GET, PUT, DELETE, POST cpara cumplir con los requisitos del ABM de Productos.
***********
###### Estructura del proyecto

/src
    /models
        Products.js
        ...
    /controllers
        products.js
        ...
    /routes
        index.js
        products.js
        ...
    index.js
    ...
    package.json
    Readme.md

####### Esquema de los productos
Tipo de datos de cada objeto:
- id
- name
- price
- stock
- description

