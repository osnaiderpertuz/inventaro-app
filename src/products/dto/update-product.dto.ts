import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty({ example: 'Nombre actualizado', description: 'Nuevo nombre del producto' })
        @IsString()
        @IsNotEmpty()
        nombre: string;
      
        @ApiProperty({ example: 'Descripción actualizada', description: 'Nueva descripción del producto', required: false })
        @IsString()
        @IsOptional()
        descripcion?: string;
      
        @ApiProperty({ example: 2000.50, description: 'Nuevo precio del producto' })
        @IsNumber()
        @IsPositive()
        @IsNotEmpty()
        precio: number;
      
        @ApiProperty({ example: 20, description: 'Nueva cantidad disponible del producto' })
        @IsNumber()
        @IsPositive()
        @IsNotEmpty()
        cantidad: number;
}
