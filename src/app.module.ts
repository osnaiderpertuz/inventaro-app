import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

// @Module({
//   imports: [ProductsModule],
// })
// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'pertuz2025',
//       database: 'inventario',
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true, // Set to false in production
//     }),
//     ProductsModule,
//   ],
// })

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: parseInt(configService.get('DB_PORT', '5432'), 10),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'pertuz2025'),
        database: configService.get('DB_NAME', 'inventario'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('DB_SYNC', 'true') === 'true', // Set to false in production
      }),
    }),
    ProductsModule,
  ],
})
export class AppModule {}
