import React, { useState } from "react";
import ReactDOM from "react-dom";
import Globe from "./Globe";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="title">
        <h1> 🌎 Países da Mercosul, Unasul e Prosul 🌎 </h1>
      </div>
      <div className="integrantes">
        <div>
          <h3>Integrantes</h3>
          <ul>
            <li>Wendell de Sousa</li>
            <li>Kauã Sabino</li>
            <li>Pedro Henrique Marques</li>
            <li>Alex Corte</li>
            <li>Beatriz Fonseca</li>
          </ul>
        </div>
      </div>
      <div className="listas">
        <div>
          <h3>Mercosul</h3>
          <ul>
            <li>Brasil</li>
            <li>Argentina</li>
            <li>Paraguai</li>
            <li>Uruguai</li>
            <li>Venezuela (Suspensa)</li>
          </ul>
        </div>
        <div>
          <h3>Unasul</h3>
          <ul>
            <li>Brasil</li>
            <li>Argentina</li>
            <li>Paraguai</li>
            <li>Uruguai</li>
            <li>Venezuela</li>
            <li>Bolívia</li>
            <li>Chile</li>
            <li>Colômbia</li>
            <li>Guiana</li>
            <li>Equador</li>
            <li>Peru</li>
            <li>Suriname</li>
          </ul>
        </div>
        <div>
          <h3>Prosul</h3>
          <ul>
            <li>Brasil</li>
            <li>Argentina</li>
            <li>Paraguai</li>
            <li>Chile</li>
            <li>Colômbia</li>
            <li>Guiana</li>
            <li>Equador</li>
            <li>Peru</li>
          </ul>
        </div>
      </div>
      <Globe />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
