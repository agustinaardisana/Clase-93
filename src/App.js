import React, { useState } from "react";
import Tarea from "./components/Tarea";
import "./App.scss";

const App = () => {
  const [valorDelInput, setValorDelInput] = useState("");

  const [lista, setLista] = useState([
    "Lavar ropa",
    "Corregir TPS",
    "Desarmar cajas",
    "Cepillar gatos",
    "Insultar a Pepo",
    "Putear a d1sn3y mientras mando CVs a otras empresas",
  ]);

  const handleClick = () => {
    setLista([...lista, valorDelInput]);
    setValorDelInput("");
  };

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const deleteElement = (id) => {
    const listaFiltrada = lista.filter((tarea, i) => i != id);
    setLista(listaFiltrada);
  };

  const [editedElement, setEditElement] = useState(false);
  const editElement = (id) => {
    console.log("quiero editar", id);
    setEditElement(true);
  };

  const [newValue, setNewValue] = useState("");

  const handleChangeEdit = (e) => {
    setNewValue(e.target.value);
    console.log(newValue);
  };

  const handleClickEdit = () => {
    console.log("editar");
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
            placeholder="Por ej, putear a Pepo"
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
                placeholder=""
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
