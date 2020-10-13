import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MultipleCustomerModal from '../../components/Modal/MultipleCostomerModal';

const AddNewClient = (props) => {
    const [showModal, setShowModal] = useState(false);
    const handleModelClick = (e) => {
        setShowModal(true);
       };
    return (
        <div className="main-card mb-3 card">
            <div className="card-body">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-12 pb-3" style={{ borderBottom: '1px solid #ccc' }}>
                        <div className="row align-items-center ml-0 mr-0 justify-content-between">
                            <h5 className="card-title mb-0">Add New Customer</h5>
                            <button   onClick={handleModelClick}
                            className="btn-secondery btn-creat-new btn-multiple-customer" data-toggle="modal" data-target="#client-data-import"> <span>Add Multiple Customers</span></button>
                        </div>
                    </div>
                </div>
                <div className="pt-3">
                    <div className="container ">
                        <div className="row align-items-center disable-company-profile " id>
                            <form className="w-100 add-client needs-validation" noValidate>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor>Client Code</label>
                                            <input type="text" className="form-control" name="CompanyName" placeholder="Enter Client Code" required />
                                            <div className="invalid-feedback">
                                                Please provide Client code
                  </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor>Client Name</label>
                                            <input type="text" className="form-control" name="CompanyOwnerName" placeholder="Enter Client Name" required />
                                            <div className="invalid-feedback">
                                                Please provide Client Name
                  </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor="exampleSelect" className>Tax Year</label>
                                            <select name="select" id="exampleSelect" className="form-control" required>
                                                <option value={2020}>2020</option>
                                                <option value={2019}>2019</option>
                                                <option value={2018}>2018</option>
                                                <option value={2019}>2017</option>
                                                <option value={2016}>2016</option>
                                                    Please Select Tax Year
                  </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor>Post Code</label>
                                            <input type="text" className="form-control" name="CompanyEmail" placeholder="Enter Post Code" required />
                                            <div className="invalid-feedback">
                                                Please Provide Post Code
                  </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor>Phone Number</label>
                                            <input type="tel" className="form-control" name="CompanyEmail" placeholder="Enter Phone Number" required />
                                            <div className="invalid-feedback">
                                                Please Provide Phone Number
                  </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor>Date of Birth</label>
                                            <input type="date" className="form-control" name="CompanyTelNumber" placeholder="Enter Company Number" required />
                                            <div className="invalid-feedback">
                                                Please Provide Date of Birth
                  </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleAddress" className>Address</label>
                                    <input name="address" id="exampleAddress" placeholder="Enter Address" type="text" className="form-control" required />
                                    <div className="invalid-feedback">
                                        Please Provide Address
              </div>
                                </div>
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleAddress2" className>Maritral Status</label>
                                    <div className="col-sm-10 d-flex">
                                        <div className="position-relative form-check mr-2"><label className="form-check-label"><input name="radio2" type="radio" className="form-check-input" required /> Single</label></div>
                                        <div className="position-relative form-check mr-2"><label className="form-check-label"><input name="radio2" type="radio" className="form-check-input" required /> Married</label></div>
                                        <div className="position-relative form-check mr-2"><label className="form-check-label"><input name="radio2" type="radio" className="form-check-input" required /> Widowed</label></div>
                                        <div className="position-relative form-check mr-2"><label className="form-check-label"><input name="radio2" type="radio" className="form-check-input" required /> Divorced</label></div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor>National Insurance Number</label>
                                            <input type="text" className="form-control" name="CompanyName" placeholder="Enter Insurence Number" required />
                                            <div className="invalid-feedback">
                                                Please Provide National Insurance Number
                  </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="position-relative form-group">
                                            <label htmlFor>UTR (Unique Tax Reference)</label>
                                            <input type="text" className="form-control" name="CompanyOwnerName" placeholder="Enter UTR Number" required />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="position-relative form-group">
                                            <label htmlFor>Tax Office Address</label>
                                            <input type="text" className="form-control" name="CompanyOwnerName" placeholder="Enter Tax Office Address" required />
                                            <div className="invalid-feedback">
                                                Please Provide Tax Office Address
                  </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="position-relative form-group">
                                            <label htmlFor>Postal Code</label>
                                            <input type="text" className="form-control" name="CompanyOwnerName" placeholder="Enter Postal Code" required />
                                            <div className="invalid-feedback">
                                                Please Provide Postal Code
                  </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="position-relative form-group">
                                            <label htmlFor="exampleSelect" className>Tax Return Software</label>
                                            <select name="select" id="exampleSelect" className="form-control" required>
                                                <option>IRIS</option>
                                                <option>TAXCALC</option>
                                                <option>Client RDP</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-2 btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          <MultipleCustomerModal
          isOpen={showModal}
          onCancelClickListner={() => setShowModal(false)}
         
        />
        </div>


    )

}



export default AddNewClient;
