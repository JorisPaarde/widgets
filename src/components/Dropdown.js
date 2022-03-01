import React from "react";

const Dropdown = ({ options, labelText }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={options.indexOf(option)} className="item">
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{labelText}</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">Selected color</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
