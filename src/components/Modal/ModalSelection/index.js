import React from "react";
import styled from "styled-components";

import RadioButton from "./RadioButton";

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Nunito Sans";

  .modal-title {
    margin-top: 24px;
    margin-left: 32px;
    margin-bottom: 16px;

    font-size: 12px;
    color: rgba(38, 37, 37, 0.7);
  }

  .modal-cancel {
    width: 327px;
    height: 48px;
    margin-left: 24px;
    margin-top: 27px;
    background: #6fe2e6;
    border-radius: 100px;
    border: none;
    font-weight: bold;
    font-size: 16px;
  }

  &:not(:last-child):after {
    margin-bottom: 32px;
  }
`;

function ModalSelection({ options, filterSelection, onChange, onCancel }) {
  function displayRadioButtons() {
    let radios = [];

    for (const option in options) {
      const radio = (
        <RadioButton
          key={option}
          classname="RadioButton"
          id={option}
          handleChange={onChange}
          value={option}
          label={options[option]}
          isSelected={filterSelection === option}
        />
      );
      radios.push(radio);
    }
    return radios;
  }

  return (
    <StyledOptions>
      <p className="modal-title">Ordernar por</p>
      {options && displayRadioButtons()}
      <button className="modal-cancel" onClick={onCancel}>
        Cancelar
      </button>
    </StyledOptions>
  );
}

export default ModalSelection;
