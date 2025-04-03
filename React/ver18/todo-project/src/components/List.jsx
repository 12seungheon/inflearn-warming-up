// src/components/List.jsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function List({ id, title, completed, todoData, setTodoData }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id.toString() });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleCompleteChange = () => {
    const newTodoData = todoData.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoData(newTodoData);
  };

  const handleClick = () => {
    const newTodoData = todoData.filter((item) => item.id !== id);
    setTodoData(newTodoData);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 rounded"
    >
      <div className="items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompleteChange}
        />
        <span className={completed ? "line-through " : "ml-2"}>{title}</span>
      </div>
      <button className="px-4 py-2 float-right" onClick={handleClick}>
        x
      </button>
    </div>
  );
}
