export interface IUserRegisterPayload {
  name: string;
  email: string;
  passwordHash: string;
  phone?: string;
  studentId?: string;
  department?: string;
}

export interface IUserLoginPayload {
  email: string;
  passwordHash: string;
}
