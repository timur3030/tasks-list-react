import React from "react";
import imgEmpty from "./../../img/leaf.svg";

function Empty({ tasks }) {
  return (
    <>
      {tasks.length > 0 ? null : (
        <li id="emptyList" className="list-group-item empty-list">
          <img src={imgEmpty} alt="Empty" width="48" className="mt-3" />
          <div className="empty-list__title">Список дел пуст</div>
        </li>
      )}
    </>
  );
}

export default Empty;
