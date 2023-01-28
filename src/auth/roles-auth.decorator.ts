import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = 'roles';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
// логика элементарно простая: мы просто прокидываем роли (массив ролей)