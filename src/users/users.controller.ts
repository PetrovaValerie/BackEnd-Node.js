import { Body, Controller, Post, Get, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { RolesGuard } from "../auth/roles.guard";
import { Roles } from "../auth/roles-auth.decorator";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@ApiTags('Пользователи')
@Controller('users')
  export class UsersController {

  constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
      return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User] })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post()
    getAll() {
      return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status: 200 })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
      return this.usersService.addRole(dto);
    }
    // ф-я доступна только для админа

    @ApiOperation({summary: 'Забанить пользователя'})
    @ApiResponse({status: 200 })
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get('/ban')
    ban(@Body() dto: BanUserDto) {
      return this.usersService.ban(dto);
    }
}
