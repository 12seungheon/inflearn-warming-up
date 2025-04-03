// src/components/Lists.jsx
import React from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import List from "./List"; // 이름 그대로 유지 👌

export default function Lists({ todoData, setTodoData }) {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = todoData.findIndex(
      (item) => item.id.toString() === active.id.toString()
    );
    const newIndex = todoData.findIndex(
      (item) => item.id.toString() === over.id.toString()
    );

    setTodoData((items) => arrayMove(items, oldIndex, newIndex));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={todoData.map((item) => item.id.toString())}
        strategy={verticalListSortingStrategy}
      >
        {todoData.map((item) => (
          <List
            key={item.id.toString()}
            id={item.id.toString()}
            title={item.title}
            completed={item.completed}
            todoData={todoData}
            setTodoData={setTodoData}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}
