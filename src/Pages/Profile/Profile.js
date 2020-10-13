import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';
import { useHistory } from 'react-router-dom'
const Profile = () => {
  const history = useHistory();

  return (
    <div className="main-card mb-3 card">
      <div className="card-body">
        <div className="row  align-items-center justify-content-between mb-4">
          <div className="col-md-6">
            <h5 className="card-title">Company Profile</h5>
          </div>
          <div className="col-md-3 text-right">
            <button onClick={() => { history.push(constants.ROUTE.SIDEBAR.CHANGE_PASSWORD) }}
              className="btn-primary">Change Password</button>
          </div>
        </div>
        <div className>
          <div className>
            <div className="row align-items-center disable-company-profile" id="mydivenable">
              <div className="col-md-4">
                <div className="company-profile-logo">
                  <img src={require('../../assets/images/dummy-logo.png')} alt className="img-fuild" />
                  <div className="tab_file_Upload">
                    <div className="resume_upload">
                      <input type="file" id="real-file" hidden="hidden" />
                      <button type="button" id="custom-button"><i className="fa fa-upload" /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <form action className="company-profile-form ">
                  <div className="form-group">
                    <label htmlFor>Company Name</label>
                    <input type="text" className="form-control" name="CompanyName" placeholder="Enter Company Name" defaultValue="Jhon" />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Company Owner Name</label>
                    <input type="text" className="form-control" name="CompanyOwnerName" placeholder="Enter Company Owner Name" defaultValue="Jhon Don" />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Company Email</label>
                    <input type="Email" className="form-control" name="CompanyEmail" placeholder="Enter Company Email Address" defaultValue="jhon@jhondon.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor>Company Number</label>
                    <input type="tel" className="form-control" name="CompanyTelNumber" placeholder="Enter Company Number" defaultValue="+1-12312321321" />
                  </div>
                  <div className="form-group text-center">
                    <input type="submit" defaultValue="Submit" className="btn-secondery" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )

}



export default Profile;
