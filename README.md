# Proyecto de API con Express, MySQL y Autenticación JWT

Este proyecto es una API RESTful construida con Express.js que se conecta a una base de datos MySQL y utiliza autenticación JWT para proteger ciertas rutas. El proyecto sigue una estructura de carpetas organizada en un directorio `src`, que incluye los siguientes directorios y archivos:

- `controllers`: Contiene los controladores para la lógica de negocio.
- `database`: Contiene la configuración de la base de datos.
- `middleware`: Contiene middleware personalizado, como la autenticación JWT.
- `routes`: Define las rutas de la API y vincula los controladores.
- `services`: Ofrece servicios para interactuar con la base de datos.
- `app.js`: El archivo principal de la aplicación Express.
- `config.js`: Almacena configuraciones, como la clave secreta JWT.
- `index.js`: El punto de entrada de la aplicación.

## Requisitos

Asegúrate de tener instalados los siguientes paquetes y dependencias:

- Node.js
- MySQL
- Bibliotecas y paquetes mencionados en el archivo `package.json`

## Configuración

Antes de ejecutar la aplicación, debes crear un archivo en la raiz del proyecto .env y debes asignarle las siguientes variables de acuerdo a la configuración que establezcas para configurar la base de datos

HOST
DATABASE
USER
PASSWORD
SECRET_KEY

## Ejecución

Para ejecutar la aplicación en modo de desarrollo con nodemon:

npm run dev

## Documentación API

http://localhost:4000/api/users/docs
