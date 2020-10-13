import React, { useState } from "react";
import PropTypes from "prop-types";

function MultipleCustomerModal({ isOpen, onCancelClickListner}) {
    return isOpen ? (
        <div
        className={`modal fade ${isOpen ? "show" : ""}`}
        id="client-data-import" 
        tabIndex={-1} 
        role="dialog" 
        aria-labelledby="client-data-importTitle"
        aria-hidden="true">
        <div 
        className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Import Client Data</h5>
        <button type="button"
        className="close" 
        data-dismiss="modal" 
        aria-label="Close"
        onClick={() => onCancelClickListner()}>
        <span aria-hidden="true">×</span>
        </button>
       </div>
      <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 text-center my-5" style={{ borderRight: '1px solid #ccc' }}>
                                <h6 className="my-3">Download Example of Excel File Demo</h6>
                                <form method="GET" action="./assets/images/Financial Sample.xlsx">
                                    <button className="btn-secondery btn-dwnl-excel my-3" type="submit">Download Excel File &nbsp; <i className="fa fa-download" /> </button>
                                </form>
                            </div>
                            <div className="col-md-6 my-5">
                                <h6 htmlFor="Email" className="text-center my-3">Upload Multiple Client Data (Excel File Only)</h6>
                                <div className="tab_file_Upload ">
                                    <div className="resume_upload">
                                        <input type="file" id="real-file" hidden="hidden" />
                                        <button type="button" id="custom-button-upload" className="my-3">Choose Documents &nbsp; <i className="fa fa-upload" /></button>
                                        <span id="custom-text">(No files Chosen)</span>
                                    </div>
                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondery" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" id="next-one">Save</button>
                    </div>
                </div>
            </div>
        </div>) : (
            <></>
        );
}


export default MultipleCustomerModal;
