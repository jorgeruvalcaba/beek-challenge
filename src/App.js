import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import List from "./components/List";
import Modal from "./components/Modal";

import data from "./data/audiobooks-data.json";
import { ORDER, DEFAULT_ORDER, DEFAULT_MODAL } from "./utils";

const StyledApp = styled.div`
  margin-top: 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

function App() {
  const [isOpen, setOpen] = React.useState(DEFAULT_MODAL);
  const [filter, setFilter] = React.useState(DEFAULT_ORDER);
  const [audiobooks, setAudiobooks] = React.useState(() =>
    data.audiobooks.sort(ORDER[DEFAULT_ORDER])
  );

  React.useEffect(() => {
    setAudiobooks((audiobooks) => audiobooks.sort(ORDER[filter]));
  }, [filter]);

  const handleClose = () => {
    setOpen(DEFAULT_MODAL);
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
    const compareFunction = ORDER[e.target.value];
    setAudiobooks(audiobooks.sort(compareFunction));
  };

  return (
    <StyledApp>
      <Navbar handleClick={() => setOpen(!DEFAULT_MODAL)} />
      <List audiobooks={audiobooks} />
      <Modal
        onClose={handleClose}
        onChange={handleChange}
        isOpen={isOpen}
        filter={filter}
      />
    </StyledApp>
  );
}

export default App;
