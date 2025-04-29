import { OpenAPIV3 } from 'openapi-types';
import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Tracker Project API',
      description: `
        ## API documentation for Tracker project
        
        ### Rate Limits
        - Production server: 100 requests/hour (Free tier)
        - Development: No limits
        
        ### Free Tier Limitations
        - Instance hours: 750/month (1.35h used)
        - Bandwidth: 100GB/month
        - Pipeline minutes: 500/month
        
        ### Authentication
        Most endpoints require JWT in Authorization header.
      `,
      license: { name: 'MIT', url: 'https://opensource.org/licenses/MIT' },
      contact: {
        name: 'Tessa',
        email: 'a.m.nigomedzyanova@gmail.com',
        description: 'Email: a.m.nigomedzyanova@gmail.com (copy manually)',
      },
    },
    consumes: ['application/json', 'multipart/form-data'],
    produces: ['application/json'],
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Local development server',
      },
      {
        url: 'https://goosetrack-18hi.onrender.com/api/v1',
        description: 'Production server (rate limited)',
      },
    ],
    tags: [
      { name: 'Users', description: 'Users endpoints' },
      { name: 'Tasks', description: 'Tasks endpoints' },
      { name: 'Reviews', description: 'Reviews endpoints' },
    ],
    components: {
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description:
            'JWT token obtained from /auth/login\n\nExample: "Bearer {token}"',
        },
      },
    },
  },

  apis: [
    /** Endpoints */
    './src/routes/users.ts',
    './src/routes/tasks.ts',
    './src/routes/reviews.ts',
    /** Authentication. Request and Response */
    './src/dto/auth/register.dto.ts',
    './src/dto/auth/login.dto.ts',
    './src/dto/auth/userCurrent.dto.ts',
    './src/dto/auth/userUpdate.dto.ts',
    /** Tasks. Request and Response */
    './src/dto/tasks/getTasks.dto.ts',
    './src/dto/tasks/postTask.dto.ts',
    './src/dto/tasks/patchTask.dto.ts',
    './src/dto/tasks/deleteTask.dto.ts',
    /** Reviews. Request and Response */
    './src/dto/reviews/getAllReviews.dto.ts',
    './src/dto/reviews/getOwnReview.dto.ts',
    './src/dto/reviews/postOwnReview.dto.ts',
    './src/dto/reviews/patchOwnReview.dto.ts',
    './src/dto/reviews/deleteOwnReview.dto.ts',
  ],
};

export const swaggerSpec: OpenAPIV3.Document = swaggerJSDoc(
  options,
) as OpenAPIV3.Document;
