import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: '50',
    unique: false,
    nullable: false,
  })
  name: string;

  @Column({ name: 'email', type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ name: 'gender', type: 'varchar' })
  gender: string;

  @Column({ name: 'phone', type: 'varchar' })
  phone: string;

  @Column({ name: 'address', type: 'varchar' })
  address: string;

  @Column({ default: true })
  isActive: boolean;
}
