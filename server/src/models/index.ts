import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { BookFactory } from './book.js'
import { UserFactory } from './user.js'

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const Book = BookFactory(sequelize);
const User = UserFactory(sequelize);

<<<<<<< HEAD
=======

>>>>>>> main
export { sequelize, Book, User };
