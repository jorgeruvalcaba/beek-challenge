import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: "Nunito Sans";
  font-size: 12px;
  line-height: 19px;
  border-radius: 6px;
  width: 231px;

  progress[value] {
    width: ${(props) => props.width};
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 4px;
    border-radius: 6px;
    background-color: #edf1f3;
  }

  progress[value]::-webkit-progress-value {
    height: 4px;
    border-radius: 6px;
    background-image: ${(props) => props.color};
  }
`;

function ProgressBar({ value, max, width }) {
  const color =
    value === 100
      ? "linear-gradient(to right, #36dca5 , #36dca5)"
      : "linear-gradient(to right, #53c2f2 , #35d7dc)";

  return (
    <StyledProgressBar color={color}>
      <span>{value}%</span>
      <progress value={value} max={max} style={{ width: "187px" }} />
    </StyledProgressBar>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  width: "187px",
};

export default ProgressBar;
