import React, { useState } from 'react';

const ChangePassword = () => {


    return (
<div className="main-card mb-3 card">
  <div className="card-body">
    <div className="row d-flex align-items-center justify-content-between">
      <div className="col-md-6">
        <div className="row align-items-center ml-0 mr-0">
          <h5 className="card-title mb-5">Change Password</h5>
        </div>
      </div>
    </div>
    <div className>
      <div className>
        <div className="row align-items-center disable-company-profile" id="mydivenable">
          {/* <div class="col-md-4">
                          <div class="company-profile-logo">
                              <img src="assets/images/dummy-logo.png" alt="" class="img-fuild">
                                  <div class="tab_file_Upload">
                                      <div class="resume_upload">
                                          <input type="file" id="real-file" hidden="hidden" disabled />
                                          <button type="button" id="custom-button"><i class="fa fa-upload"></i></button>
                                          <span id="custom-text" class="text-center">(No files Chosen)</span>
                                      </div>
                                  </div>
                      </div>
                          </div> */}
          <div className="col-md-12">
            <form action className="company-profile-form ">
              <div className="form-group">
                <label htmlFor>Old Password</label>
                <input type="password" className="form-control" name="CompanyPass" placeholder="Enter Old Password" />
              </div>
              <div className="form-group">
                <label htmlFor>New Password</label>
                <input type="password" className="form-control" name="CompanyNewPassword" placeholder="Enter New Password" />
              </div>
              <div className="form-group">
                <label htmlFor>Confirm Password</label>
                <input type="password" className="form-control" name="CompanyEmail" placeholder="Enter Confirm Password" />
              </div>
              <div className="form-group text-center">
                <input type="submit" defaultValue="Change" className="btn-secondery" />
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



export default ChangePassword;
