import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default function ModalComponent() {
  const StyledModal = styled.div`
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(26, 39, 156, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      background: white;
      padding: 1rem;
      border: 1px solid black;
    }
    #closeIcon {
      color: red;
      position: relative;
      top: -25px;
      right: 13px;
      font-size: 1.5rem;
      :hover {
        cursor: pointer;
      }
    }
  `

  return (
    <StyledModal>
      <p>Votre réservation a bien été reçue. Merci beaucoup !</p>

      {/* TO DO fermeture modal */}
      <FontAwesomeIcon
        icon={faTimesCircle}
        id="closeIcon"
        onClick={() => {
          console.log('fermeture')
        }}
      />
    </StyledModal>
  )
}