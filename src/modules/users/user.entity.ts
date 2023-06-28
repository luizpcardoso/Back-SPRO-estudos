export class UserEntity {
  userId: string;
  name: string;
  email: string;
  password: string;

  constructor(userId: string, name: string, email: string, password: string) {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
