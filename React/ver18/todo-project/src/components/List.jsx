import React, { useCallback, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// List 컴포넌트: 개별 할 일 관리
function List({ item, todoData, setTodoData }) {
  const [isEdit, setIsEdit] = useState(false); // 수정 모드 여부
  const [editValue, setEditValue] = useState(item.title); // 수정 중 입력 값

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // 삭제 함수
  const handleRemove = useCallback(() => {
    const newData = todoData.filter((todo) => todo.id !== item.id);
    setTodoData(newData);
  }, [todoData, setTodoData, item.id]);

  // 체크 박스 클릭 시 완료 여부 토글
  const handleCheck = useCallback(() => {
    const newData = todoData.map((todo) =>
      todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoData(newData);
  }, [todoData, setTodoData, item.id]);

  // 수정 완료 함수
  const handleEdit = useCallback(() => {
    if (!editValue.trim()) return;
    const newData = todoData.map((todo) =>
      todo.id === item.id ? { ...todo, title: editValue } : todo
    );
    setTodoData(newData);
    setIsEdit(false); // 수정 모드 종료
  }, [editValue, todoData, setTodoData, item.id]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex justify-between items-center p-4 mb-2 bg-white rounded shadow"
    >
      <div className="flex items-center">
        {/* 완료 체크박스 */}
        <input
          type="checkbox"
          checked={item.completed}
          onChange={handleCheck}
          className="mr-2"
        />
        {isEdit ? (
          // 수정 모드: input 창
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            className="border px-1 rounded"
          />
        ) : (
          // 기본 모드: 더블 클릭 시 수정 모드 진입
          <span
            onDoubleClick={() => setIsEdit(true)}
            className={`cursor-pointer ${
              item.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {item.title}
          </span>
        )}
      </div>

      {/* 삭제 버튼 */}
      <button
        onClick={handleRemove}
        className="text-red-500 hover:text-red-700"
      >
        삭제
      </button>
    </div>
  );
}

export default React.memo(List);
