import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/count";

function App() {
  const count = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #BCE6FF, #53A6D8)",
        color: "#000",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff4d",
          padding: 100,
          borderRadius: 20,
          width: "30%",
          height: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", fontWeight: 700 }}>Giá trị: {count}</h1>
        <div>
          <button className="btn-click" onClick={() => dispatch(increment())}>
            Tăng
          </button>
          <button className="btn-click" onClick={() => dispatch(decrement())}>
            Giảm
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
