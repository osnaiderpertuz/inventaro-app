import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
    @ApiProperty({ example: 'Producto A', description: 'Nombre del producto' })
    @IsString()
    @IsNotEmpty()
    nombre: string;
  
    @ApiProperty({ example: 'Descripción del producto A', description: 'Descripción del producto', required: false })
    @IsString()
    @IsOptional()
    descripcion?: string;
  
    @ApiProperty({ example: 1000.50, description: 'Precio del producto' })
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    precio: number;
  
    @ApiProperty({ example: 10, description: 'Cantidad disponible del producto' })
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    cantidad: number;
}
