Sistema de Gestion de Productos Full Stack
Este proyecto consiste en una API REST desarrollada con Node.js y Express, integrada con una base de datos NoSQL (MongoDB) y una interfaz de usuario construida con Bootstrap. El sistema incluye autenticacion mediante JSON Web Tokens (JWT) y pruebas unitarias automatizadas.

Requisitos Previos
Para ejecutar este proyecto localmente, es necesario contar con:

Node.js (Version 14 o superior)

MongoDB Community Server y MongoDB Compass

Un editor de codigo (recomendado Visual Studio Code)

Instalacion
Clonar el repositorio desde GitHub:
git clone 

Acceder al directorio del proyecto:
cd actividad4-fullstack

Instalar las dependencias necesarias:
npm install

Configuracion de Variables de Entorno
Crear un archivo llamado .env en la raiz del proyecto y configurar las siguientes variables:

PORT=3000
MONGO_URI=mongodb://localhost:27017/actividad4_fullstack
JWT_SECRET=clave_secreta_de_prueba

Nota: La variable MONGO_URI debe apuntar a la instancia local de MongoDB para asegurar la persistencia en entornos con restricciones de red.

Ejecucion del Proyecto
Existen dos comandos principales para iniciar la aplicacion:

Modo de desarrollo (con reinicio automatico):
npm run dev

Modo de produccion:
npm start

Una vez iniciado el servidor, la aplicacion sera accesible en: http://localhost:3000

Guia de Pruebas Locales
Para validar el funcionamiento completo del sistema, siga estos pasos:

Registro: Ingrese un nombre de usuario y contraseña en la seccion de Acceso y presione el boton Registrar.

Autenticacion: Introduzca las credenciales creadas y presione Login. El sistema almacenara el token JWT en memoria.

Gestion de Datos: Tras el inicio de sesion, el frontend realizara una peticion autorizada a la base de datos para listar los productos en la tabla.

Ejecucion de Pruebas Unitarias
Para verificar la integridad de las rutas y la seguridad de la API, ejecute el siguiente comando:

npm test

Este comando activara la suite de pruebas construida con Jest y Supertest, validando el registro, inicio de sesion y acceso a rutas protegidas.