import { OpenAPIV3 } from 'openapi-types';
import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Tracker Project API',
      description: 'API documentation for Tracker project',
      license: { name: 'MIT', url: 'https://opensource.org/licenses/MIT' },
    },
    consumes: ['application/json', 'multipart/form-data'],
    produces: ['application/json'],
    servers: [
      { url: 'https://goosetrack-18hi.onrender.com/api/v1' },
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
    tags: [{ name: 'Users', description: 'Users endpoints' }],
    components: {
      securitySchemes: {
        Bearer: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      },
    },
  },

  apis: [
    './src/routes/*.ts',
    /** Authentication */
    './src/dto/auth/register.dto.ts',
    './src/dto/auth/login.dto.ts',
    './src/dto/auth/userCurrent.dto.ts',
    './src/dto/auth/userUpdate.dto.ts',
  ],
};

// export const swaggerSpec = swaggerJSDoc(options);
export const swaggerSpec: OpenAPIV3.Document = swaggerJSDoc(
  options,
) as OpenAPIV3.Document;
// console.log(JSON.stringify(swaggerSpec, null, 2));
