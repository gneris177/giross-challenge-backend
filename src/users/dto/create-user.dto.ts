import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsString()

  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  name: string;

  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo gễnero não pode ficar vazio' })
  gender: string;

  @IsPhoneNumber("BR", { message: 'Telefone inválido' })
  @IsNotEmpty({ message: 'O campo telefone não pode ficar vazio' })
  phone: string;

  @IsString()
  address: string;jx ggd
}
