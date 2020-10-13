import React, { useState } from 'react';
import zip_blue from '../../assets/images/zip-blue.png';
import zip_yellow from '../../assets/images/zip-yellow.png';

const ViewFile = () => {

  return (



    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="container mt-3 file-details">
          <div className="row">
            <div className="col-md-2">
              <img src={zip_blue} alt="zip" className="zip-img" />
              <p>Employment</p>
            </div>
            <div className="col-md-2">
              <img src={zip_blue} alt="zip" className="zip-img" />
              <p> Self Employment</p>
            </div>
            <div className="col-md-2">
              <img src={zip_blue} alt="zip" className="zip-img" />
              <p>Pension</p>
            </div>
            <div className="col-md-2">
              <img src={zip_blue} alt="zip" className="zip-img" />
              <p>Bank &amp; Other Interest (UK)
            </p>
            </div>
            <div className="col-md-2">
              <img src={zip_blue} alt="zip" className="zip-img" />
              <p>Bank &amp; Other Interest (Foreign)</p>
            </div>
            <div className="col-md-2">
              <img src={zip_blue} alt="zip" className="zip-img" />
              <p>Dividend From UK Companies</p>
            </div>
            <div className="col-md-2">
              <img src={zip_blue} alt="zip" className="zip-img" />
              <p> Dividend From Foreign Companies</p>
            </div>
            <div className="col-md-2">
              <img src={zip_blue} alt="zip" className="zip-img" />
              <p>Other Foreign Income</p>
            </div>
            <div className="col-md-2 file-completed">
              <a href="#">
                <img src={zip_yellow} alt="zip" className="zip-img" />
                <p>Other Foreign Income</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div className="container mt-3 revision-logs">
          <div className="row revision-details">
            <div className="col-md-4">
              <h3>
                Date : 28-08-2020
            </h3>
              <h2>Employment</h2>
              <p>
                Self Employment
            </p>
              <p>
                Pansen
            </p>
            </div>
            <div className="col-md-4">
              <h3>
                Date : 27-08-2020
            </h3>
              <h2>Employment </h2>
              <p>
                Self Employment
            </p>
              <p>
                Bank &amp; Other Interest (UK)
            </p>
              <p>
                Bank &amp; Other Interest (Foreign)
            </p>
            </div>
            <div className="col-md-4">
              <h3>
                Date : 27-08-2020
            </h3>
              <h2> Other Foreign Income </h2>
              <p>
                Rental Income
            </p>
              <p>
                Capital Gain/Loss summary
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div className="message-section-view-page">
          <div className="chat-box-title">
            <h4>
              Messages
          </h4>
          </div>
          <div className="mesgs">
            <div className="msg_history" id="messages">
              <div className="message-blue">
                <p className="message-content">This is an awesome message!</p>
                <div className="message-timestamp-left">SMS 13:37</div>
              </div>
              <div className="message-orange">
                <p className="message-content">I agree that your message is awesome!</p>
                <div className="message-timestamp-right">SMS 13:37</div>
              </div>
              <div className="message-blue">
                <p className="message-content">Thanks!</p>
                <div className="message-timestamp-left">SMS 13:37</div>
              </div>
            </div>
            <div className="type_msg">
              <div className="input_msg_write">
                <input type="text" className="write_msg" placeholder="Enter message to send" id="send_text" />
                <button className="msg_send_btn" type="button" id="send_msg">
                  <img src="./assets/images/send.png" alt style={{ width: 35, margin: '10px 0px 10px -5px' }} />
                </button>
                <button className="msg_upload_btn" type="button" id="send_msg" data-toggle="modal" data-target="#data-add-modal-one">
                  <i className="fa fa-upload" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )

}



export default ViewFile;
