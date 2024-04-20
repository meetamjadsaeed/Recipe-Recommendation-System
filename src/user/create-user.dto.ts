export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly preferences: {
    cuisine: string[];
    dietaryRestrictions: string[];
  };
}
