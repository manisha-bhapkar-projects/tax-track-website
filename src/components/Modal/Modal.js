import React, { useState } from "react";

function Modal({ isOpen, onCancelClickListner, title, body })
{
  return isOpen ? (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      id="data-add-modal-one"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-modal="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="myModalLabel">
              {title}
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => onCancelClickListner()}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-split">
              <h2>{body}</h2>
              <div className="custom-file-upload">
                <input type="file" id="file" name="myfiles[]" multiple />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/*Nothing Goes Here but is needed! */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}


export default Modal;
