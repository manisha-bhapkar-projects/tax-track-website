import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ViewFile from './ViewFiles';
import ViewRevisionLogs from './ViewRevisionLogs';
import ViewChats from './ViewChat';



const View = (props) => {
  const [isId, setId] = useState(1);


  const handleClick = (id) => {
    setId(id)
  }
  return (
    <>
      <div className="main-card mb-3 card">
        <div className="card-body">
          <h5 className="card-title">Weidong <span>(05)</span></h5>
          <div className="row">
            <div className="col-md-6">
              <table className="mb-0 table table-bordered">

                <tbody>
                  <tr>
                    <td> <b> Client Code :</b></td>
                    <td>05</td>
                  </tr>
                  <tr>
                    <td><b>Client name :</b></td>
                    <td>Weidong weidong </td>
                  </tr>
                  <tr>
                    <td><b>Phone Number :</b></td>
                    <td>1234567890</td>
                  </tr>
                  <tr>
                    <td><b>Address :</b></td>
                    <td>104, Apartment , Bosten, NewYork</td>
                  </tr>
                  <tr>
                    <td><b>Date of Birth :</b></td>
                    <td>09/08/1991</td>
                  </tr>
                  <tr>
                    <td><b>Marital Satus :</b></td>
                    <td>Single</td>
                  </tr>
                  <tr>
                    <td><b>Job Status :</b></td>
                    <td> Job Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="mb-0 table table-bordered">
                <tbody>
                  <tr>
                    <td> <b>Tax Year : </b> </td>
                    <td>2020</td>
                  </tr>
                  <tr>
                    <td> <b>Submission Date : </b> </td>
                    <td>2020/05/03</td>
                  </tr>
                  <tr>
                    <td><b>Acceptance Date :</b></td>
                    <td>2020/05/03</td>
                  </tr>
                  <tr>
                    <td><b>Address :</b></td>
                    <td>104, Apartment , Bosten, NewYork</td>
                  </tr>
                  <tr>
                    <td><b>National Insurance Number :</b></td>
                    <td>09/08/1991</td>
                  </tr>
                  <tr>
                    <td><b>UTR (Unique Tax Reference) :</b></td>
                    <td>1234568523</td>
                  </tr>
                  <tr>
                    <td><b>Tax Office Address :</b></td>
                    <td>1234568523</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 card">
        <div className="card-header-tab card-header">

          <div className="btn-actions-pane">
            <div className="nav">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a 
                   className={`nav-link  ${isId == 1 ? 'active' : ''}`}
                  onClick={() => handleClick(1)} 
                  id="home-tab" data-toggle="tab"
                  role="tab" aria-controls="home" 
                  aria-selected="true">Files</a>
                </li>
                <li className="nav-item">
                  <a 
                   className={`nav-link ${isId == 2 ? 'active' : ''}`}
                  id="profile-tab" data-toggle="tab"  onClick={() => handleClick(2)}
                  role="tab" 
                   aria-controls="profile" aria-selected="false">Document Log</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${isId == 3 ? 'active' : ''}`}
                  id="contact-tab" data-toggle="tab"  onClick={() => handleClick(3)}
                   role="tab" 
                   aria-controls="contact" aria-selected="false">Chat</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isId === 1 ? <ViewFile /> :
          isId === 2 ? <ViewRevisionLogs /> : <ViewChats />}

      </div>

    </>


  )

}



export default View;
