import React from "react";
import styled from "styled-components";

import Audiobook from "./Audiobook";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 24px;
`;

function List({ audiobooks }) {
  return (
    <StyledList>
      {audiobooks.map((item) => (
        <Audiobook item={item} key={item.id} />
      ))}
    </StyledList>
  );
}

export default List;
