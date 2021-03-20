import React, { useState } from "react";
import "./Tarea.scss";

const Tarea = ({ id, tarea, deleteElement, editElement }) => {
  const [completada, setCompletada] = useState(false);

  const handleClick = () => {
    setCompletada(true);
  };

  const handleClickBorrar = () => {
    deleteElement(id);
  };

  const handleClickModificar = () => {
    editElement(id);
  };

  return (
    <>
      <li className={completada ? "completada" : ""} id={id}>
        {tarea}
      </li>
      <button onClick={handleClick}>Completar tarea</button>
      <button onClick={handleClickBorrar}>Borrar tarea</button>
      <button onClick={handleClickModificar}>Modificar tarea</button>
    </>
  );
};

export default Tarea;
