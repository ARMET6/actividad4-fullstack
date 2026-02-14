# Actividad IV Full Stack - Gestion de Productos

Esta aplicacion es una plataforma web para la gestion de productos que integra un sistema CRUD completo. La seguridad esta gestionada mediante autenticacion JWT y la persistencia de datos se realiza en MongoDB. Este proyecto forma parte del programa Full Stack de la Universidad Tecmilenio.

## Tecnologias Utilizadas

* Backend: Node.js y Express.js
* Base de Datos: MongoDB Atlas utilizando la libreria Mongoose
* Seguridad: JSON Web Tokens (JWT) y cifrado de contrasenas con Bcryptjs
* Pruebas: Jest y Supertest para pruebas unitarias automatizadas
* CI/CD: Pipeline configurado en GitHub Actions
* Despliegue: Plataforma SaaS Vercel

## Instalacion y Configuracion Local

Siga estos pasos para ejecutar el proyecto en un entorno local utilizando Visual Studio Code:

1. Clonar el repositorio:
   git clone https://github.com/ARMET6/actividad4-fullstack.git
   cd actividad4-fullstack

2. Instalar las dependencias necesarias:
   npm install

3. Configurar las variables de entorno:
   Cree un archivo llamado .env en la raiz del directorio con el siguiente contenido:
   PORT=3000
   MONGO_URI=su_cadena_de_conexion_mongodb
   JWT_SECRET=su_clave_secreta_jwt

4. Iniciar la aplicacion en modo desarrollo:
   npm run dev

## Pruebas Unitarias

Para validar el correcto funcionamiento de los controladores y la integridad de las rutas, ejecute el siguiente comando:
npm test

## Descripcion de Endpoints

### Autenticacion
* POST /api/auth/register - Permite el registro de nuevos usuarios en la base de datos.
* POST /api/auth/login - Valida credenciales y retorna un token JWT para acceso autorizado.

### Gestion de Productos (Rutas Protegidas)
* GET /api/products - Recupera la lista de productos asociados al usuario autenticado.
* POST /api/products - Crea un nuevo registro de producto.
* PUT /api/products/:id - Actualiza los datos de un producto existente validando la propiedad del recurso.
* DELETE /api/products/:id - Elimina un producto de la base de datos.

## Pipeline de CI/CD

El repositorio incluye un flujo de trabajo automatizado mediante GitHub Actions. Este proceso se activa ante cada "push" a la rama principal (main), encargandose de:
1. Instalar el entorno de ejecucion.
2. Ejecutar las pruebas unitarias automatizadas.
3. Desplegar la version mas reciente en la plataforma Vercel si las pruebas resultan exitosas.

---
Datos del Estudiante:
Nombre: Adrian Razo Mandujano
ID: AL03050102
Institucion: Universidad Tecmilenio