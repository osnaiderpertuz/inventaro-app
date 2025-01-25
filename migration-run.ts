import { AppDataSource } from './ormconfig'; 

async function runMigrations() {
  try {
    // Conectar a la base de datos
    await AppDataSource.initialize();

    // Ejecutar migraciones
    await AppDataSource.runMigrations();
    console.log('Migrations ran successfully!');
  } catch (error) {
    console.error('Error running migrations:', error);
  } finally {
    // Cerrar la conexión a la base de datos
    await AppDataSource.destroy();
  }
}

runMigrations();
