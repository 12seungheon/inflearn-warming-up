// Lists.jsx
import React from "react";
import {
  DndContext, // 전체 DnD 영역 컨트롤
  closestCenter, // 가장 가까운 아이템 위로 드롭
  PointerSensor, // 마우스로 드래그 인식
  useSensor, // 센서 등록
  useSensors, // 여러 센서 묶음
} from "@dnd-kit/core";

import {
  SortableContext, // 정렬 가능한 리스트 설정
  verticalListSortingStrategy, // 세로 방향 정렬 전략
  arrayMove, // 배열 순서 바꾸는 유틸
} from "@dnd-kit/sortable";

export default function Lists({ todoData, setTodoData }) {
  // 👉 마우스 센서를 등록 (필수로 해줘야 드래그 작동함)
  const sensors = useSensors(useSensor(PointerSensor));

  // 👉 드래그가 끝났을 때 순서 바꾸는 함수
  const handleDragEnd = (event) => {
    const { active, over } = event;

    // 자기 자신 위로 놓으면 아무 일도 안 함
    if (!over || active.id === over.id) return;

    const oldIndex = todoData.findIndex((item) => item.id === active.id);
    const newIndex = todoData.findIndex((item) => item.id === over.id);

    // 순서 변경
    setTodoData(arrayMove(todoData, oldIndex, newIndex));
  };

  return (
    // 👉 전체 DnD 영역 설정
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      {/* 👉 정렬 가능한 리스트 설정 */}
      <SortableContext
        items={todoData.map((item) => item.id.toString())} // id 목록 넘김
        strategy={verticalListSortingStrategy}
      >
        {/* 👉 각 아이템은 개별 List 컴포넌트로 렌더링 */}
        {todoData.map((item) => (
          <List
            key={item.id.toString()} // key는 문자열로 넘겨야 함
            id={item.id.toString()} // id는 문자열로 넘겨야 함
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
