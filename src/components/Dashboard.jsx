import React from "react";

function Dashboard() {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div classname="card border-left-primary shadow h-100 py-2">
            <div classname="card-body">
              <div classname="row no-gutters align-items-center">
                <div classname="col mr-2">
                  <div classname="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Earnings (Monthly)
                  </div>
                  <div classname="h5 mb-0 font-weight-bold text-gray-800">
                    $40,000
                  </div>
                </div>
                <div classname="col-auto">
                  <i classname="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classname="col-xl-3 col-md-6 mb-4">
          <div classname="card border-left-success shadow h-100 py-2">
            <div classname="card-body">
              <div classname="row no-gutters align-items-center">
                <div classname="col mr-2">
                  <div classname="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Earnings (Annual)
                  </div>
                  <div classname="h5 mb-0 font-weight-bold text-gray-800">
                    $215,000
                  </div>
                </div>
                <div classname="col-auto">
                  <i classname="fas fa-dollar-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classname="col-xl-3 col-md-6 mb-4">
          <div classname="card border-left-info shadow h-100 py-2">
            <div classname="card-body">
              <div classname="row no-gutters align-items-center">
                <div classname="col mr-2">
                  <div classname="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Tasks
                  </div>
                  <div classname="row no-gutters align-items-center">
                    <div classname="col-auto">
                      <div classname="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        50%
                      </div>
                    </div>
                    <div classname="col">
                      <div classname="progress progress-sm mr-2">
                        <div
                          classname="progress-bar bg-info"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div classname="col-auto">
                  <i classname="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div classname="col-xl-3 col-md-6 mb-4">
          <div classname="card border-left-warning shadow h-100 py-2">
            <div classname="card-body">
              <div classname="row no-gutters align-items-center">
                <div classname="col mr-2">
                  <div classname="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Pending Requests
                  </div>
                  <div classname="h5 mb-0 font-weight-bold text-gray-800">18</div>
                </div>
                <div classname="col-auto">
                  <i classname="fas fa-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
