import mongoose from 'mongoose';

import app from './app';

const DB_HOST = process.env.DB_HOST as string;
const PORT = process.env.PORT as string;

if (!DB_HOST || !PORT) {
  console.error('Missing required environment variables');
  process.exit(1);
}

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT, () => {
      console.log(`Server running. Use API on port: ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error(error.message);
    process.exit(1);
  });
