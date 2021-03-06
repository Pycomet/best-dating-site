import SimpleBar from "simplebar-react";


const profile = 
  {
    name: 'Richard Okonicha',
    status: "Active",
    time: "12:40",
    location: "California, USA",
    email: "richardokonicha@gmail.com",
    about: "I'm a hopeless romantic and always strive to believe in the good within everyone. I'm looking for an equally positive partner who loves to try new experiences and is a great and open communicator."
  }

const SettingPane = () => {
    return (
          
      <div
      className="tab-pane active"
      id="pills-setting"
      role="tabpanel"
      aria-labelledby="pills-setting-tab"
    >
      <div>
        <div className="px-4 pt-4">
          <h4 className="mb-0">Settings</h4>
        </div>

        <div className="text-center border-bottom p-4">
          <div className="mb-4 profile-user">
            <img
              src="assets/images/users/avatar-1.jpg"
              className="rounded-circle avatar-lg img-thumbnail"
              alt=""
            />
            <button
              type="button"
              className="btn bg-light avatar-xs p-0 rounded-circle profile-photo-edit"
            >
              <i className="ri-pencil-fill"></i>
            </button>
          </div>

          <h5 className="font-size-16 mb-1 text-truncate">{profile.name}</h5>
          <div className="dropdown d-inline-block mb-1">
            <a
              className="text-muted dropdown-toggle pb-1 d-block"
              href="/chat"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Available <i className="mdi mdi-chevron-down"></i>
            </a>

            <div className="dropdown-menu">
              <a className="dropdown-item" href="/chat">
                Available
              </a>
              <a className="dropdown-item" href="/chat">
                Busy
              </a>
            </div>
          </div>
        </div>
        <SimpleBar className="p-4 user-profile-desc" data-simplebar>
          <div id="profile-setting-accordion" className="custom-accordion">
            <div className="card shadow-none border mb-2">
              <a
                href="#profile-setting-personalinfocollapse"
                className="text-dark"
                data-toggle="collapse"
                aria-expanded="true"
                aria-controls="profile-setting-personalinfocollapse"
              >
                <div
                  className="card-header"
                  id="profile-setting-personalinfoheading"
                >
                  <h5 className="font-size-14 m-0">
                    Personal Info
                    <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                  </h5>
                </div>
              </a>

              <div
                id="profile-setting-personalinfocollapse"
                className="collapse show"
                aria-labelledby="profile-setting-personalinfoheading"
                data-parent="#profile-setting-accordion"
              >
                <div className="card-body">
                  <div className="float-right">
                    <button type="button" className="btn btn-light btn-sm">
                      <i className="ri-edit-fill mr-1 align-middle"></i> Edit
                    </button>
                  </div>

                  <div>
                    <p className="text-muted mb-1">Name</p>
                    <h5 className="font-size-14">{profile.name}</h5>
                  </div>

                  <div className="mt-4">
                    <p className="text-muted mb-1">Email</p>
                    <h5 className="font-size-14">{profile.email}</h5>
                  </div>

                  <div className="mt-4">
                    <p className="text-muted mb-1">Time</p>
                    <h5 className="font-size-14">{profile.time}</h5>
                  </div>

                  <div className="mt-4">
                    <p className="text-muted mb-1">Location</p>
                    <h5 className="font-size-14 mb-0">{profile.location}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-2">
              <a
                href="#profile-setting-privacycollapse"
                className="text-dark collapsed"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="profile-setting-privacycollapse"
              >
                <div
                  className="card-header"
                  id="profile-setting-privacyheading"
                >
                  <h5 className="font-size-14 m-0">
                    Privacy
                    <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                  </h5>
                </div>
              </a>
              <div
                id="profile-setting-privacycollapse"
                className="collapse"
                aria-labelledby="profile-setting-privacyheading"
                data-parent="#profile-setting-accordion"
              >
                <div className="card-body">
                  <div className="py-3">
                    <div className="media align-items-center">
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 mb-0 text-truncate">
                          Profile photo
                        </h5>
                      </div>
                      <div className="dropdown ml-2">
                        <button
                          className="btn btn-light btn-sm dropdown-toggle w-sm"
                          type="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Everyone <i className="mdi mdi-chevron-down"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="/chat">
                            Everyone
                          </a>
                          <a className="dropdown-item" href="/chat">
                            selected
                          </a>
                          <a className="dropdown-item" href="/chat">
                            Nobody
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-3 border-top">
                    <div className="media align-items-center">
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 mb-0 text-truncate">
                          Last seen
                        </h5>
                      </div>
                      <div className="ml-2">
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="privacy-lastseenSwitch"
                            checked
                          />
                          <label
                            className="custom-control-label"
                            for="privacy-lastseenSwitch"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-3 border-top">
                    <div className="media align-items-center">
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 mb-0 text-truncate">
                          Status
                        </h5>
                      </div>
                      <div className="dropdown ml-2">
                        <button
                          className="btn btn-light btn-sm dropdown-toggle w-sm"
                          type="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Everyone <i className="mdi mdi-chevron-down"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="/chat">
                            Everyone
                          </a>
                          <a className="dropdown-item" href="/chat">
                            selected
                          </a>
                          <a className="dropdown-item" href="/chat">
                            Nobody
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-3 border-top">
                    <div className="media align-items-center">
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 mb-0 text-truncate">
                          Read receipts
                        </h5>
                      </div>
                      <div className="ml-2">
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="privacy-readreceiptSwitch"
                            checked
                          />
                          <label
                            className="custom-control-label"
                            for="privacy-readreceiptSwitch"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="py-3 border-top">
                    <div className="media align-items-center">
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 mb-0 text-truncate">
                          Groups
                        </h5>
                      </div>
                      <div className="dropdown ml-2">
                        <button
                          className="btn btn-light btn-sm dropdown-toggle w-sm"
                          type="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Everyone <i className="mdi mdi-chevron-down"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="/chat">
                            Everyone
                          </a>
                          <a className="dropdown-item" href="/chat">
                            selected
                          </a>
                          <a className="dropdown-item" href="/chat">
                            Nobody
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-none border mb-2">
              <a
                href="#profile-setting-securitynoticollapse"
                className="text-dark collapsed"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="profile-setting-securitynoticollapse"
              >
                <div
                  className="card-header"
                  id="profile-setting-securitynotiheading"
                >
                  <h5 className="font-size-14 m-0">
                    Security
                    <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                  </h5>
                </div>
              </a>
              <div
                id="profile-setting-securitynoticollapse"
                className="collapse"
                aria-labelledby="profile-setting-securitynotiheading"
                data-parent="#profile-setting-accordion"
              >
                <div className="card-body">
                  <div>
                    <div className="media align-items-center">
                      <div className="media-body overflow-hidden">
                        <h5 className="font-size-13 mb-0 text-truncate">
                          Show security notification
                        </h5>
                      </div>
                      <div className="ml-2">
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="security-notificationswitch"
                          />
                          <label
                            className="custom-control-label"
                            for="security-notificationswitch"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-none border mb-2">
              <a
                href="#profile-setting-helpcollapse"
                className="text-dark collapsed"
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="profile-setting-helpcollapse"
              >
                <div className="card-header" id="profile-setting-helpheading">
                  <h5 className="font-size-14 m-0">
                    Help
                    <i className="mdi mdi-chevron-up float-right accor-plus-icon"></i>
                  </h5>
                </div>
              </a>
              <div
                id="profile-setting-helpcollapse"
                className="collapse"
                aria-labelledby="profile-setting-helpheading"
                data-parent="#profile-setting-accordion"
              >
                <div className="card-body">
                  <div>
                    <div className="py-3">
                      <h5 className="font-size-13 mb-0">
                        <a href="/chat" className="text-body d-block">
                          FAQs
                        </a>
                      </h5>
                    </div>
                    <div className="py-3 border-top">
                      <h5 className="font-size-13 mb-0">
                        <a href="/chat" className="text-body d-block">
                          Contact
                        </a>
                      </h5>
                    </div>
                    <div className="py-3 border-top">
                      <h5 className="font-size-13 mb-0">
                        <a href="/chat" className="text-body d-block">
                          Terms & Privacy policy
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SimpleBar>
      </div>
    </div>
  
  
    )
}

export default SettingPane