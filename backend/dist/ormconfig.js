"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Task_1 = require("./entities/Task");
exports.AppDataSource = (0, typeorm_1.createConnection)({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'generic_user',
    password: 'generic_password',
    database: 'your_database',
    entities: [User_1.User, Task_1.Task],
    synchronize: true,
});
