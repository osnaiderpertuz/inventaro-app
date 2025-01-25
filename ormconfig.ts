import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',   // Coloca tu usuario
  password: 'pertuz2025',   // Coloca tu contraseña
  database: 'inventario',   // Coloca tu nombre de base de datos
  entities: ["dist/**/*.entity{.ts,.js}"],            // Agrega todas tus entidades
  migrations: ['src/migrations/*.ts'],  // Ruta para tus migraciones
  synchronize: false,
});
