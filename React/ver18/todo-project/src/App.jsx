import React, { useState, useEffect, useCallback, useMemo } from "react";
import Form from "./components/Form";
import Lists from "./components/Lists";

// App 컴포넌트: Todo 앱의 루트 컴포넌트
function App() {
  // todoData: 전체 할 일 목록을 관리하는 state
  const [todoData, setTodoData] = useState(() => {
    // localStorage 에서 저장된 데이터를 불러옴 (새로고침해도 유지)
    const storedData = localStorage.getItem("todoData");
    return storedData ? JSON.parse(storedData) : [];
  });

  // todoData 가 변경될 때마다 localStorage 에 저장
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  // 새로운 할 일 추가 함수
  const addTodo = useCallback((newTodo) => {
    setTodoData((prev) => [...prev, newTodo]);
  }, []);

  // todoData 업데이트 함수
  const updateTodoData = useCallback((newData) => {
    setTodoData(newData);
  }, []);

  // 총 할 일 개수 계산 (성능 최적화용 useMemo)
  const totalCount = useMemo(() => todoData.length, [todoData]);

  // 전체 할 일 삭제 함수
  const clearAll = () => {
    setTodoData([]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-2 text-center">📝 Todo App</h1>
        <p className="text-center mb-4">총 할 일: {totalCount}개</p>

        {/* 할 일 추가 폼 */}
        <Form addTodo={addTodo} />

        {/* 전체 삭제 버튼 */}
        {todoData.length > 0 && (
          <button
            onClick={clearAll}
            className="mb-4 bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
          >
            전체 삭제
          </button>
        )}

        {/* 할 일 목록 */}
        <Lists todoData={todoData} setTodoData={updateTodoData} />
      </div>
    </div>
  );
}

export default App;
