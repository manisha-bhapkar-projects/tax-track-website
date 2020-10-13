import React from 'react';



const ContactUs = () => {


return (


<div className="main-card mb-3 card">
  <div className="card-body">
    <div className="row d-flex align-items-center justify-content-between">
      <div className="col-md-6">
        <div className="row align-items-center ml-0 mr-0">
          <h5 className="card-title mb-5">Contact Us</h5>
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
                <label htmlFor>Subject</label>
                <input type="text" className="form-control" name="CompanyPass" placeholder="Enter Subject" />
              </div>
              <div className="form-group">
                <label htmlFor>Message</label>
                <textarea name="messageConatct" className="form-control" id="messageConatct" rows={5} placeholder="Enter Messages" defaultValue={""} />
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



export default ContactUs;
