import React, { useState } from "react";
import Tarea from "./components/Tarea";
import "./App.scss";

const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");
  const [newValue, setNewValue] = useState("");
  const [editedElement, setEditElement] = useState(false);
  const [id, setId] = useState("");

  const [lista, setLista] = useState([
    "Lavar ropa",
    "Corregir TPS",
    "Desarmar cajas",
    "Cepillar gatos",
    "Insultar a Pepo",
    "Putear a d1sn3y mientras mando CVs a otras empresas",
  ]);

  const handleClick = () => {
    valorDelInput && setLista([...lista, valorDelInput]);
    setValorDelInput("");
  };

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const deleteElement = (id) => {
    setLista([...lista].filter((tarea, i) => i !== id));
  };

  const editElement = (id) => {
    setEditElement(true);
    setId(id);
  };

  const handleChangeEdit = (e) => {
    setNewValue(e.target.value);
  };

  const handleClickEdit = () => {
    const nuevaLista = [...lista];
    nuevaLista.splice(id, 1, newValue);
    setLista(nuevaLista);
    setEditElement(false);
  };

  return (
    <>
      <div>
        <ul>
          {lista.map((tarea, i) => (
            <Tarea
              key={i}
              id={i}
              tarea={tarea}
              deleteElement={deleteElement}
              editElement={editElement}
            />
          ))}
        </ul>

        <label>
          Agregar tarea...
          <input
            value={valorDelInput}
            onChange={handleChange}
            type="text"
            placeholder="Agrega una tare nueva"
          />
        </label>
        <button onClick={handleClick}>Agregar tarea</button>
      </div>
      <div>
        {editedElement && (
          <>
            <label>
              Modificar tarea...
              <input
                value={newValue}
                onChange={handleChangeEdit}
                type="text"
                placeholder="Modifica una tarea existente"
                id={id}
              />
            </label>
            <button onClick={handleClickEdit}>Modificar tarea</button>
          </>
        )}
      </div>
    </>
  );
};

export default App;
