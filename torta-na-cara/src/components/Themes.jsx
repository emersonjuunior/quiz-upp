import { useState } from "react";
import "./Themes.css";

const Themes = ({selectTheme}) => {

  return (
    <div id="select-theme">
      <h2>
        Selecione o <span>Tema</span>:
      </h2>
      <div id="themes-container">
        <div className="theme" id="conhecimentos-gerais" onClick={() => selectTheme("conhecimentosGerais")}>Conhecimentos Gerais</div>
        <div className="theme" id="geografia" onClick={() => selectTheme("geografia")}>Geografia</div>
        <div className="theme" id="entreterimento" onClick={() => selectTheme("entreterimento")}>Entreterimento</div>
        <div className="theme" id="ciencias" onClick={() => selectTheme("ciencias")}>Ciência e Natureza</div>
        <div className="theme" id="matematica" onClick={() => selectTheme("matematica")}>
          Matemática
        </div>
      </div>
    </div>
  );
};

export default Themes;
