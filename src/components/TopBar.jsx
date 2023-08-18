import React from "react";

function TopBar() {
  return (
    <div>
      <nav classname="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          classname="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i classname="fa fa-bars"></i>
        </button>

        <form classname="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div classname="input-group">
            <input
              type="text"
              classname="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div classname="input-group-append">
              <button classname="btn btn-primary" type="button">
                <i classname="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <ul classname="navbar-nav ml-auto">
          <li classname="nav-item dropdown no-arrow d-sm-none">
            <a
              classname="nav-link dropdown-toggle"
              href="#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i classname="fas fa-search fa-fw"></i>
            </a>

            <div
              classname="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form classname="form-inline mr-auto w-100 navbar-search">
                <div classname="input-group">
                  <input
                    type="text"
                    classname="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div classname="input-group-append">
                    <button classname="btn btn-primary" type="button">
                      <i classname="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li classname="nav-item dropdown no-arrow mx-1">
            <a
              classname="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i classname="fas fa-bell fa-fw"></i>

              <span classname="badge badge-danger badge-counter">3+</span>
            </a>

            <div
              classname="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 classname="dropdown-header">Alerts Center</h6>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="mr-3">
                  <div classname="icon-circle bg-primary">
                    <i classname="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div classname="small text-gray-500">December 12, 2019</div>
                  <span classname="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="mr-3">
                  <div classname="icon-circle bg-success">
                    <i classname="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div classname="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="mr-3">
                  <div classname="icon-circle bg-warning">
                    <i classname="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div classname="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a classname="dropdown-item text-center small text-gray-500" href="#">
                Show All Alerts
              </a>
            </div>
          </li>

          <li classname="nav-item dropdown no-arrow mx-1">
            <a
              classname="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i classname="fas fa-envelope fa-fw"></i>

              <span classname="badge badge-danger badge-counter">7</span>
            </a>

            <div
              classname="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 classname="dropdown-header">Message Center</h6>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="dropdown-list-image mr-3">
                  <img
                    classname="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div classname="status-indicator bg-success"></div>
                </div>
                <div classname="font-weight-bold">
                  <div classname="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div classname="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="dropdown-list-image mr-3">
                  <img
                    classname="rounded-circle"
                    src="img/undraw_profile_2.svg"
                    alt="..."
                  />
                  <div classname="status-indicator"></div>
                </div>
                <div>
                  <div classname="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div classname="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="dropdown-list-image mr-3">
                  <img
                    classname="rounded-circle"
                    src="img/undraw_profile_3.svg"
                    alt="..."
                  />
                  <div classname="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div classname="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div classname="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a classname="dropdown-item d-flex align-items-center" href="#">
                <div classname="dropdown-list-image mr-3">
                  <img
                    classname="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div classname="status-indicator bg-success"></div>
                </div>
                <div>
                  <div classname="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div classname="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a classname="dropdown-item text-center small text-gray-500" href="#">
                Read More Messages
              </a>
            </div>
          </li>

          <div classname="topbar-divider d-none d-sm-block"></div>

          <li classname="nav-item dropdown no-arrow">
            <a
              classname="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span classname="mr-2 d-none d-lg-inline text-gray-600 small">
                Douglas McGee
              </span>
              <img
                classname="img-profile rounded-circle"
                src="img/undraw_profile.svg"
              />
            </a>

            <div
              classname="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a classname="dropdown-item" href="#">
                <i classname="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a classname="dropdown-item" href="#">
                <i classname="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a classname="dropdown-item" href="#">
                <i classname="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div classname="dropdown-divider"></div>
              <a
                classname="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i classname="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
