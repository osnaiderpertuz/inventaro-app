import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false })
    nombre: string;
  
    @Column({ nullable: true })
    descripcion: string;
  
    @Column('decimal', { nullable: false })
    precio: number;
  
    @Column('int', { nullable: false })
    cantidad: number;
  
    @CreateDateColumn()
    fecha_creacion: Date;
  
    @UpdateDateColumn()
    fecha_actualizacion: Date;
}
