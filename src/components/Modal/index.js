import React from "react";
import Sheet from "react-modal-sheet";

import ModalSelection from "./ModalSelection";

import { OPTIONS, SNAP_POINTS, INITIAL_SNAP } from "../../utils";

function Modal({ isOpen, onClose, filter, onChange }) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={SNAP_POINTS}
      initialSnap={INITIAL_SNAP}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <ModalSelection
            options={OPTIONS}
            filterSelection={filter}
            onCancel={onClose}
            onChange={onChange}
          />
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} />
    </Sheet>
  );
}

export default Modal;
