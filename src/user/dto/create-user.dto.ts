import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from 'src/auth/validations/UniqueValidation';
import { UserEntity } from '../entities/user.entity';
export class CreateUserDto {
  @Length(3, 32, { message: 'имя должно быть в диапазоне 3-32 символов' })
  fullName: string;

  @IsEmail(undefined, { message: 'Неверная почта' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Такая почта уже зарегистрированна',
  })
  email: string;

  @Length(6, 32, { message: 'Нужно добавить пароль' })
  password?: string;
}
