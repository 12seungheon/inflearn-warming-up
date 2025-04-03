// List.jsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable"; // 개별 아이템 정렬용 훅
import { CSS } from "@dnd-kit/utilities"; // transform → CSS로 변환하는 유틸

export default function List({ id, title, completed, todoData, setTodoData }) {
  // 👉 이 아이템이 드래그 대상임을 설정
  const {
    attributes, // 드래그 가능한 속성들
    listeners, // 드래그 이벤트 리스너들 (마우스 down 등)
    setNodeRef, // DOM 요소 등록 (드래그 대상)
    transform, // 현재 드래그 위치 정보
    transition, // 드래그 애니메이션 전환
  } = useSortable({ id: id.toString() }); // id는 문자열로 넘겨야 함

  // 👉 드래그 중일 때 스타일 적용
  const style = {
    transform: CSS.Transform.toString(transform), // 드래그 위치 적용
    transition,
  };

  // ✅ 체크박스 토글
  const handleCompleteChange = () => {
    const newTodoData = todoData.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoData(newTodoData);
  };

  // ✅ 삭제
  const handleClick = () => {
    const newTodoData = todoData.filter((item) => item.id !== id);
    setTodoData(newTodoData);
  };

  return (
    // 👉 드래그 가능한 영역 적용
    <div
      ref={setNodeRef} // 이 div가 드래그 대상이라는 걸 등록
      style={style} // 드래그 위치 스타일
      {...attributes} // 드래그 가능하게 만드는 속성들
      {...listeners} // 드래그 이벤트 연결
      className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 rounded"
    >
      <div className="items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompleteChange}
        />
        <span className={completed ? "line-through ml-2" : "ml-2"}>
          {title}
        </span>
      </div>
      <button className="px-4 py-2 float-right" onClick={handleClick}>
        x
      </button>
    </div>
  );
}
