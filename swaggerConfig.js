import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0', // Versión de Swagger
    info: {
      title: 'API REST Crud Usuarios',
      version: '1.0.0',
      description: 'API para la gestión de usuarios',
    },
    security: [
      {
        BearerAuth: [] 
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['src/routes/users.routes.js'],
};


const swaggerDocs = swaggerJSDoc(options);

export default swaggerDocs;
