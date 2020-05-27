import { todoItemTemplate } from '../../utils/templates.js';
import { KEY_TYPE } from '../../utils/constants.js';

export class TodoList {
  constructor({ onToggle }) {
    this.$todoList = document.querySelector("#todo-list");
    this.$todoList.addEventListener(KEY_TYPE.CLICK, event => this.selectCheckItem(event));
    this.onToggle = onToggle;
  }

  selectCheckItem(event) {
    const $target = event.target;
    const isCheckButton = $target.classList.contains("toggle");
    if (!isCheckButton) {
      return;
    }
    const todoItem = $target.closest(".todo-item");
    this.onToggle(todoItem.dataset.id);
  }

  setState(updatedTodoItems) {
    this.todoItems = updatedTodoItems;
    this.render(this.todoItems);
  };

  render(items) {
    const template = items.map(todoItemTemplate);
    this.$todoList.innerHTML = template.join("");
  };
}