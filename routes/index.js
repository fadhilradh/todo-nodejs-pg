const pool = require("../database/index.js");
const express = require("express");
const { getAllTodos, postTodo } = require("../controllers/todos.js");
const { getAllUsers, createUser } = require("../controllers/users.js");
const router = express.Router();

const TODO_BASE_PATH = "/todos";
router.get(TODO_BASE_PATH, getAllTodos);
router.post(TODO_BASE_PATH, postTodo);

const USER_BASE_PATH = "/user";
router.get(USER_BASE_PATH, getAllUsers);
router.post(USER_BASE_PATH, createUser);

module.exports = router;
