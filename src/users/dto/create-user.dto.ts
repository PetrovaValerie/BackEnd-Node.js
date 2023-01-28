import { ApiProperty } from "@nestjs/swagger";
// эти объекты предназначены для обмена данными между подсистемами
// н-р клиент и сервер.Или сервер-сервер

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    readonly email: string;
    @ApiProperty({example: '1234567', description: 'Пароль'})
    readonly password: string;
}