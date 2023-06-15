/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  todoList = [];

  #checkValidIndex(indexOfTodo) {
    try {
      if(indexOfTodo >= this.todoList.length) {
        throw new Error("no task at this position")
      }
    } catch (err) {
      throw err;
    }
  }

  add (task) {
    try {
      this.todoList.push(task);
    } catch(e) {
      console.error(e);
    }
  }

  remove(indexOfTodo) {
    try {
      this.#checkValidIndex(indexOfTodo);

      this.todoList = [...this.todoList.splice(0, indexOfTodo), ...this.todoList.splice(indexOfTodo+1, this.todoList.length)];
    } catch (err) {
      console.error(err);
    }
  }

  update(index, updatedTodo) {
    try {
      this.#checkValidIndex(index);

      this.todoList[index] = updatedTodo;
    } catch (err) {
      console.error(err);
    }
  }

  getAll() {
    try {
      return this.todoList;
    } catch (err) {
      console.error(err);
    }
  }

  get(indexOfTodo) {
    try {
      this.#checkValidIndex(indexOfTodo);

      return this.todoList[indexOfTodo];
    } catch (err) {
      console.error(err);
    }
  }

  clear() {
    try {
      this.todoList = [];
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = Todo;
