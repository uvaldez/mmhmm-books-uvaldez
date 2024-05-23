import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton from "../buttons/Primary";
import CloseIcon from "../icons/Close";

interface IModalProps {
  onClose: () => void;
  onConfirm: () => void;
  confirmLabel: string;
  title: string;
  message: string;
}
const Modal = ({ onClose, onConfirm, confirmLabel, title, message }: IModalProps) => {
    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                      <CloseIcon onClick={onClose} fill="none"/>
                    </div>
                    <h1>{title}</h1>
                    <div className="modal-body">{message}</div>
                    <div className="float-right">
                      <PrimaryButton label={confirmLabel} type="button" handleOnClick={onConfirm}/>
                    </div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as Element,
    );
};

export default Modal
