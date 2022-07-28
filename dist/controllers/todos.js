import { Todo } from "../models/todo";
const TODOS = [];
export const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res
        .status(201)
        .json({ message: "TODOを作成しました。", createTodo: newTodo });
};
export const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
export const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした。");
    }
    TODOS[todoIndex] = new Todo(todoId, updateText);
    res.json({ message: "更新しました", updatedTodo: TODOS[todoIndex] });
};
export const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("対象のTODOが見つかりませんでした。");
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "TODOを削除しました。" });
};
