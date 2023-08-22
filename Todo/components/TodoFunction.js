export const todos = [
    {'id':1,'title':'Pizza','description':'Amazing product','completed':false}
];

export const createTodo = (title, description) => {
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };
  todos.push(newTodo);
};

export const deleteTodo = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    if (index !== -1) {
      todos.splice(index, 1); // Remove the todo from the array
    }
  };
  