"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Task_1 = require("./entities/Task");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/api', taskRoutes_1.default);
(0, typeorm_1.createConnection)({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'generic_user',
    password: 'generic_password',
    database: 'your_database',
    entities: [User_1.User, Task_1.Task],
    synchronize: true,
}).then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error) => console.log(error));
