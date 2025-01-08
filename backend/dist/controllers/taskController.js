"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTasks = exports.createTask = void 0;
const ormconfig_1 = require("../ormconfig");
const Task_1 = require("../entities/Task");
const User_1 = require("../entities/User");
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, completed } = req.body;
        const userId = req.userId;
        const connection = yield ormconfig_1.AppDataSource;
        const taskRepository = connection.getRepository(Task_1.Task);
        const userRepository = connection.getRepository(User_1.User);
        const user = yield userRepository.findOne({ where: { id: userId } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const task = taskRepository.create({ title, description, completed, user });
        yield taskRepository.save(task);
        res.status(201).json(task);
    }
    catch (error) {
        next(error);
    }
});
exports.createTask = createTask;
const getTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const connection = yield ormconfig_1.AppDataSource;
        const taskRepository = connection.getRepository(Task_1.Task);
        const tasks = yield taskRepository.find({ where: { user: { id: userId } }, relations: ['user'] });
        res.json(tasks);
    }
    catch (error) {
        next(error);
    }
});
exports.getTasks = getTasks;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const { title, description, completed } = req.body;
        const connection = yield ormconfig_1.AppDataSource;
        const taskRepository = connection.getRepository(Task_1.Task);
        const task = yield taskRepository.findOne({ where: { id }, relations: ['user'] });
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }
        task.title = title;
        task.description = description;
        task.completed = completed;
        yield taskRepository.save(task);
        res.json(task);
    }
    catch (error) {
        next(error);
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const connection = yield ormconfig_1.AppDataSource;
        const taskRepository = connection.getRepository(Task_1.Task);
        const task = yield taskRepository.findOne({ where: { id: Number(id) }, relations: ['user'] });
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return;
        }
        yield taskRepository.remove(task);
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTask = deleteTask;
