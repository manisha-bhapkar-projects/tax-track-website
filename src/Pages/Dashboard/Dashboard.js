import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardListTable from "../../components/CardListTable/CardListTable";
import Card from "../Card/Card";
import USERDATA from "../../utils/demoData";
import Modal from "../../components/Modal/Modal";
import { useHistory } from 'react-router-dom';
import constants from "../../utils/constants";





const Dashboard = (props) => {
  const [isSearch, setSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [istoggle, setIsToggle] = useState(false);
  const history = useHistory();


  const handleToggle = (e) => {
    setIsToggle(!istoggle);
  };

  const handleSearch = (e) => {
    setSearch(!isSearch);
  };

  const handlePageChange = (e) => {
    console.log(e);
  };

  const handleIncomeDataClick = (e) => {
    setShowModal(true);
  };

  const card = [
    {
      title: "JOB UNDER REVIEW",
      value: "52"
    },
    {
      title: "JOB UNDER QUERY",
      value: "15"
    },
    {
      title: "JOB UNDER PROCESS",
      value: "15"
    },
    {
      title: "JOB UNDER COMPLETED",
      value: "120"
    },
  ]

  const columns = [
    {
      name: "No.",
      selector: "id",
      // sortable: true,
      grow: "0.1",
      cell: (row) => {
        return <div className="custome-row-style">{row.id}</div>;
      },
    },
    {
      name: "Client Name",
      selector: "name",
      //   sortable: true,
      grow: "3",
    },

    {
      name: "Tax Year",
      selector: "year",
      // sortable: true,
      grow: "1",
    },
    {
      name: "Phone Number",
      selector: "phone",
      // sortable: true,
      //   right: true,
      grow: "3",
    },
    {
      name: "Status",
      selector: "status",
      // sortable: true,
      //   right: true,
      grow: "3",
    },
    {
      name: "",
      selector: "",
      // sortable: true,
      right: true,
      grow: "3",
      cell: () => {
        return (
          <button
            className="view-page-details"
            onClick={() => {
              history.push(constants.ROUTE.SIDEBAR.VIEW);
            }} >
            <span> View </span>
          </button>
        );
      },
    },
    {
      name: "",
      selector: "",
      // sortable: true,
      right: true,
      grow: "5",
      cell: () => {
        return (
          <button
            className="add-data-income"
            onClick={handleIncomeDataClick}
          >
            <span> Add Income Data </span>
          </button>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <div className="row">
          {card.map((item) => {
            return (<Card title={item.title} value={item.value} />)
          })}
        </div>
        {/* table for client list */}
        <div className="main-card mb-3 card">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-md-6">
                <div className="row align-items-center ml-0 mr-0">
                  <h5 className="card-title mb-0">Client List</h5>
                  <button className="btn-secondery ml-4"
                    onClick={() => { history.push(constants.ROUTE.SIDEBAR.ADD_NEW_CLIENT) }}
                    style={{ cursor: 'pointer' }}>Add Client</button>
                </div>
              </div>

              <div
                onClick={handleSearch}
                className={`search-wrapper ${isSearch ? "active" : ""}`}>
                <div className="input-holder">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type to search"
                  />
                  <button className="search-icon">
                    <span />
                  </button>
                </div>
                <button className="close" />
              </div>
              <CardListTable
                columns={columns}
                data={USERDATA.USERDATA}
                pending={false}
                pagination={false}
                custompagination
                paginationServer={false}
                noDataString={"No data found"}
                totalListCount={USERDATA.USERDATA.length}
                paginationTotalRows={USERDATA.USERDATA.length}
                paginationPerPage={10}
                onPageChangedCalled={handlePageChange}
                inputClassName="mt-3"
              // sortFunction={customSort}
              />
            </div>
          </div>
        </div>
        <Modal
          isOpen={showModal}
          onCancelClickListner={() => setShowModal(false)}
          title="Add Income Data"
          body="Add Income From Employment Data"
        />
      </div>
    </>
  );
};

export default Dashboard;
