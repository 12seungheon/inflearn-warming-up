import React, { useCallback } from "react";
import List from "./List";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

// 전체 할 일 목록 Lists 컴포넌트
function Lists({ todoData, setTodoData }) {
  // 드래그가 끝났을 때 실행
  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;

      if (active.id !== over?.id) {
        const oldIndex = todoData.findIndex((item) => item.id === active.id);
        const newIndex = todoData.findIndex((item) => item.id === over.id);

        // 기존 상태 유지 + 순서만 변경
        const newData = arrayMove(todoData, oldIndex, newIndex).map((item) => ({
          ...todoData.find((t) => t.id === item.id),
        }));

        setTodoData(newData);
      }
    },
    [todoData, setTodoData]
  );

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={todoData.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {todoData.map((item) => (
          <List
            key={item.id}
            item={item}
            todoData={todoData}
            setTodoData={setTodoData}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}

export default React.memo(Lists);
