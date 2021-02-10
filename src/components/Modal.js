import React from "react";
import ModalReact from "react-modal";
import { useSelector } from "react-redux";
import iconClose from "../assets/img/icon-close-popup.png"
import "../assets/styles.scss";

const customStyles = {
    content: {
      padding: "2.7vh 1.54vw",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.6)",
    },
  };
export const Modal = ({isOpen,onClose,title}) => {
    const info = useSelector((state) => state.info.info);
    return(
        <div>
        <ModalReact
          isOpen={isOpen}
          onRequestClose={false}
          style={customStyles}
        >
            <div className="modal-container">
                <div className="icon-close">
                    <img src={iconClose} alt="icon-close-popup" onClick={onClose}></img>
                </div>
                <p className="modal-title">{title}</p>
                <p><label>{"Suplier: "}</label>{info.supplier}</p>
                <p><label>{"Nme: "}</label>{info.name}</p>
                <p><label>{"Rate: "}</label>{"£"}{info.rate}</p>
                <p><label>{"Dailystandingcharge: "}</label>{"£"}{info.dailystandingcharge}</p>
                <p><label>{"Months: "}</label>{info.contractlength}{"months"}</p>
                <p><label>{"Renewable: "}</label>{info.renewable}{"%"}</p>
                <p><label>{"Status: "}</label>{info.status}</p>
            </div>
        </ModalReact>
        </div>
    )
}