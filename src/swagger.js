const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerJsdocOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/app*.js'], // files containing annotations as above
};

var swaggerUIOoptions = {
  explorer: true,
};

const openapiSpecification = swaggerJsdoc(swaggerJsdocOptions);

module.exports = [swaggerUi.serve, swaggerUi.setup(openapiSpecification, swaggerUIOoptions)];