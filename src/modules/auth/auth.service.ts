import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { IUserRegisterPayload } from "./auth.interface";

const userRegister = async (payload: IUserRegisterPayload) => {
  const { name, email, passwordHash, phone, studentId, department } = payload;

  // check if user already exists
  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExist) {
    throw new Error("User already exists");
  }

  // password hashing
  const hashedPassword = await bcrypt.hash(passwordHash, 10);

  // create new user
  const result = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash: hashedPassword,
      phone,
      studentId,
      department,
    },
    omit: {
      passwordHash: true,
    },
  });

  return result;
};

const userLogin = async (payload: IUserRegisterPayload) => {
  const { email, passwordHash } = payload;

  // check if user exists
  const userExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!userExist) {
    throw new Error("User does not exist");
  }

  if (userExist.isActive === false) {
    throw new Error("User is not active, please contact the administrator");
  }

  // check password
  const isPasswordValid = await bcrypt.compare(
    passwordHash,
    userExist.passwordHash,
  );

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return userExist;
};

export const authService = {
  userRegister,
  userLogin,
};
