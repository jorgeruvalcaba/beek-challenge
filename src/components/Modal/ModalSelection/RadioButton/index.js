import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRadios = styled.label`
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 32px;
  font-family: "Nunito Sans";
  font-size: 16px;
  line-height: 24px;
  color: #262525;

  input[type="radio"] {
    --active: #edf1f3;
    --active-inner: #000;
    --focus: 2px rgba(39, 94, 254, 0.3);
    --background: #edf1f3;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin-right: 8px;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
    &:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
        opacity var(--d-o, 0.2s);
    }
    &:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }
    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: 0.9;
      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
      & + label {
        cursor: not-allowed;
      }
    }
    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }
    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    &:not(.switch) {
      width: 21px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }
  input[type="radio"] {
    border-radius: 50%;
    &:after {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      transform: scale(var(--s, 0.7));
    }
    &:checked {
      --s: 0.5;
    }
  }
`;

const RadioButton = ({
  id,
  classname,
  handleChange,
  value,
  isSelected,
  label,
}) => {
  return (
    <StyledRadios htmlFor={id} className={classname}>
      <input
        id={id}
        onChange={handleChange}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <span className="checkmark"></span>
      {label}
    </StyledRadios>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default RadioButton;
