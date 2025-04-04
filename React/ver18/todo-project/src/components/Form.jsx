import React, { useState, useCallback } from "react";

// Form 컴포넌트: 새로운 할 일을 추가하는 입력 폼
function Form({ addTodo }) {
  const [value, setValue] = useState(""); // 입력 값 관리

  // 폼 제출 시 실행되는 함수
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 새로고침 방지
      if (!value.trim()) return; // 빈 값 추가 방지

      const newTodo = {
        id: Date.now().toString(), // 고유한 ID 생성
        title: value.trim(), // 할 일 텍스트
        completed: false, // 완료 여부 초기화
      };

      addTodo(newTodo); // 부모 컴포넌트로 전달
      setValue(""); // 입력 필드 초기화
    },
    [value, addTodo]
  );

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded px-3 py-2 mr-2"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        추가
      </button>
    </form>
  );
}

export default React.memo(Form);
