import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import ProgressBar from "./ProgressBar";

import { COMPLETE, ZERO_PROGRESS, PROGRESS_BAR_MAX } from "../../../utils";

const StyledListItem = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const StyledListDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    width: 195px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .titles {
    font-family: "Nunito Sans Bold";
  }

  .title {
    font-size: 16px;
    line-height: 20px;
  }

  .author {
    font-size: 14px;
    line-height: 21px;
  }

  .narrators {
    font-family: "Nunito Sans";
    font-size: 12px;
    color: rgba(38, 37, 37, 0.7);
    line-height: 19px;
  }

  .runtime {
    font-family: "Nunito Sans";
    margin-top: 16px;
    width: 100%;
    text-align: right;
    font-size: 12px;
    color: rgba(38, 37, 37, 0.7);
  }

  .downloaded {
    display: flex;
    align-items: center;
    font-family: Nunito Sans;
    font-size: 12px;
    margin-top: 14px;
    color: rgba(38, 37, 37, 0.7);

    .check-icon {
      color: #36dca5;
      margin-right: 5px;
    }
  }
`;

const StyledCover = styled.div`
  min-width: 100px;
  min-height: 100px;
  margin-right: 12px;
  border: 1px solid rgba(38, 37, 37, 0.15);
  border-radius: 6px;
`;

function Audiobook({ item }) {
  const { cover_url: image } = item;

  function displayRuntime(runtime, progress) {
    if (progress === COMPLETE) return "Terminado";
    const [hours, minutes] = runtime.split(":");
    return `${progress > ZERO_PROGRESS ? "-" : ""}${
      hours | ZERO_PROGRESS
    }h ${minutes}m`;
  }

  return (
    <StyledListItem key={item.id}>
      <StyledCover
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <StyledListDetails>
        <div className="wrapper">
          <p className="titles title">{item.title}</p>
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
        <p className="titles author">{item.authors.join(", ")}</p>
        <p className="narrators">{item.narrators.join(", ")}</p>
        {item.progress > 0 && (
          <ProgressBar value={item.progress} max={PROGRESS_BAR_MAX} />
        )}
        <div className="wrapper">
          {item.isDownloaded && (
            <span className="downloaded">
              <FontAwesomeIcon className="check-icon" icon={faCheckCircle} />
              Descargado
            </span>
          )}
          <span className="runtime">
            {displayRuntime(item.runtime, item.progress)}
          </span>
        </div>
      </StyledListDetails>
    </StyledListItem>
  );
}

Audiobook.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Audiobook;
