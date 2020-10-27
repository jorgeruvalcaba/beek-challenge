import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

const StyledNavbar = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-family: "SF Pro";
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(27.1828px);

  .sort-icon {
    position: absolute;
    right: 1rem;
  }
`;

function Navbar({ handleClick }) {
  return (
    <StyledNavbar>
      <span>
        <strong>Audiolibros</strong>
      </span>
      <FontAwesomeIcon
        className="sort-icon"
        icon={faSlidersH}
        onClick={handleClick}
      />
    </StyledNavbar>
  );
}

export default Navbar;
