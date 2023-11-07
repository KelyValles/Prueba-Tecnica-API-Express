import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0', // Versión de Swagger
    info: {
      title: 'API REST Crud Usuarios',
      version: '1.0.0',
      description: 'API para la gestión de usuarios',
    },
  },
  apis: ['src/routes/users.routes.js']
};

const swaggerDocs = swaggerJSDoc(options);

export default swaggerDocs;
