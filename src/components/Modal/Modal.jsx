import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { Overlay, ModalWrapper, Img } from "./Modal.styled";


export const Modal = ({onClose, imgUrl, alt}) =>  {

   useEffect(() => {
    const closeModalonEsc = event => {
        if (event.code === "Escape") {
            onClose();
        }
    }
    document.addEventListener("keydown", closeModalonEsc);
   
    return () => {
        document.removeEventListener("keydown", closeModalonEsc);
    }
   }, [onClose]);

   const   closeModalOnClickBackdrop = event => {
    if (event.target === event.currentTarget) {
        onClose();
    }
}

   return (
    createPortal(
        <Overlay onClick={closeModalOnClickBackdrop}>
            <ModalWrapper>
            <Img src={imgUrl} alt={alt} />
            </ModalWrapper>
        </Overlay>,
       document.getElementById('modal-root')
    )
   ) 
    }


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}