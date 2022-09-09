import React from "react";

import "./Button1.css";

export default function Button1({
  displayText,
  left,
  right,
}: {
  displayText: string;
  left?: boolean;
  right?: boolean;
}) {
  return (
    <button
      type="button"
      style={{
        fontWeight: "bolder",
        fontSize: "20px",
      }}
      className="btn"
      id="but"
    >
      {left && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
      )}
      {displayText}
      {right && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      )}
    </button>
  );
}
