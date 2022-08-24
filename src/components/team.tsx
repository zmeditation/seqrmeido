import React, { useState } from "react";
import DetailModal from "./Base/Modal";

function Team() {
  const [openModal, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <section className="section bg-theme-dark tc-light ov-h pdb-0" id="team">
      <div className="container">
        <div className="section-head text-center wide-auto-sm tc-light">
          <h2 className="title title-s4" title="team">
            Powered by a team
          </h2>
        </div>
        <div className="nk-block nk-block-team-list team-list">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s3 team-s3-alt">
                <div
                  className="team-photo round-full team-photo-bg cursor-pointer"
                  onClick={() => handleModalOpen()}
                >
                  {/* <a
                    href="team-popup-1"
                    className="team-show content-popup"
                    data-overlay="bg-theme-grad-alternet"
                  ></a> */}
                  <img
                    src="images/team/sq-a.jpg"
                    alt="team"
                    className="round-full"
                  />
                </div>
                <h5 className="team-name title title-sm">Iffgd</h5>
                <span className="team-position">CEO</span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="https://www.linkedin.com">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="team-popup-1" className="team-popup mfp-hide">
                {/* <a title="Close" className="mfp-close">
                  ×
                </a> */}
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/a-color.jpg" alt="team" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">fffgd</h3>
                      <p className="team-position mb-1">CEO</p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="https://www.facebook.com">
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <em className="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                      <div className="progress-list">
                        <div className="progress-wrap">
                          <div className="progress-title">
                            Blockchain{" "}
                            <span className="progress-amount">85%</span>
                          </div>
                          <div className="progress-bar progress-bar-xs bg-black-10">
                            <div
                              className="progress-percent bg-theme-grad-alternet"
                              data-percent="85"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-wrap">
                          <div className="progress-title">
                            Decentralization{" "}
                            <span className="progress-amount">68%</span>
                          </div>
                          <div className="progress-bar progress-bar-xs bg-black-10">
                            <div
                              className="progress-percent bg-theme-grad-alternet"
                              data-percent="68"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s3 team-s3-alt">
                <div
                  className="team-photo round-full team-photo-bg cursor-pointer"
                  onClick={() => handleModalOpen()}
                >
                  {/* <a
                    href="#team-popup-2"
                    className="team-show content-popup"
                    data-overlay="bg-theme-grad-alternet"
                  ></a> */}
                  <img
                    src="images/team/sq-b.jpg"
                    alt="team"
                    className="round-full"
                  />
                </div>
                <h5 className="team-name title title-sm">PPp od</h5>
                <span className="team-position">
                  Grand Admiral Milord Android Developer
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="https://www.linkedin.com">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="team-popup-2" className="team-popup mfp-hide">
                {/* <a title="Close" className="mfp-close">
                  ×
                </a> */}
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/b-color.jpg" alt="team" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">
                        Jonathan Rios
                      </h3>
                      <p className="team-position mb-1">
                        CTO &amp; Software Engineer
                      </p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="https://www.facebook.com">
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <em className="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s3 team-s3-alt">
                <div
                  className="team-photo round-full team-photo-bg cursor-pointer"
                  onClick={() => handleModalOpen()}
                >
                  {/* <a
                    href="#team-popup-3"
                    className="team-show content-popup"
                    data-overlay="bg-theme-grad-alternet"
                  ></a> */}
                  <img
                    src="images/team/sq-c.jpg"
                    alt="team"
                    className="round-full"
                  />
                </div>
                <h5 className="team-name title title-sm">fffff</h5>
                <span className="team-position">Grand Designer Master</span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="https://www.linkedin.com">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="team-popup-3" className="team-popup mfp-hide">
                {/* <a title="Close" className="mfp-close">
                  ×
                </a> */}
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/c.jpg" alt="team" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">ffffff</h3>
                      <p className="team-position mb-1">Sr.Backend developer</p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="https://www.facebook.com">
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <em className="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s3 team-s3-alt">
                <div
                  className="team-photo round-full team-photo-bg cursor-pointer"
                  onClick={() => handleModalOpen()}
                >
                  {/* <a
                    href="#team-popup-4"
                    className="team-show content-popup"
                    data-overlay="bg-theme-grad-alternet"
                  ></a> */}
                  <img
                    src="images/team/sq-d.jpg"
                    alt="team"
                    className="round-full"
                  />
                </div>
                <h5 className="team-name title title-sm">ffffff</h5>
                <span className="team-position">Grand Senior QA Engineer</span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="https://www.linkedin.com">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="team-popup-4" className="team-popup mfp-hide">
                {/* <a title="Close" className="mfp-close">
                  ×
                </a> */}
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/d-color.jpg" alt="team" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">ffffff</h3>
                      <p className="team-position mb-1">Software Engineer</p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="https://www.facebook.com">
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <em className="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-block nk-block-team-list">
          <div className="section-head section-head-sm text-center wide-auto-sm">
            <h2 className="title-lg-2 title-semibold">ADVISORS</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s3 team-s3-alt">
                <div
                  className="team-photo round-full team-photo-bg cursor-pointer"
                  onClick={() => handleModalOpen()}
                >
                  {/* <a
                    href="#team-popup-1"
                    className="team-show content-popup"
                    data-overlay="bg-theme-grad-alternet"
                  ></a> */}
                  <img
                    src="images/team/sq-e.jpg"
                    alt="team"
                    className="round-full"
                  />
                </div>
                <h5 className="team-name title title-sm">fffffff</h5>
                <span className="team-position">CEO</span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="https://www.linkedin.com">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="team-popup-5" className="team-popup mfp-hide">
                {/* <a title="Close" className="mfp-close">
                  ×
                </a> */}
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/e-color.jpg" alt="team" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">
                        ffffffff
                      </h3>
                      <p className="team-position mb-1">CEO</p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="https://www.facebook.com">
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <em className="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                      <div className="progress-list">
                        <div className="progress-wrap">
                          <div className="progress-title">
                            Blockchain{" "}
                            <span className="progress-amount">85%</span>
                          </div>
                          <div className="progress-bar progress-bar-xs bg-black-10">
                            <div
                              className="progress-percent bg-theme-grad-alternet"
                              data-percent="85"
                            ></div>
                          </div>
                        </div>
                        <div className="progress-wrap">
                          <div className="progress-title">
                            Decentralization{" "}
                            <span className="progress-amount">68%</span>
                          </div>
                          <div className="progress-bar progress-bar-xs bg-black-10">
                            <div
                              className="progress-percent bg-theme-grad-alternet"
                              data-percent="68"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s3 team-s3-alt">
                <div
                  className="team-photo round-full team-photo-bg cursor-pointer"
                  onClick={() => handleModalOpen()}
                >
                  {/* <a
                    href="#team-popup-2"
                    className="team-show content-popup"
                    data-overlay="bg-theme-grad-alternet"
                  ></a> */}
                  <img
                    src="images/team/sq-f.jpg"
                    alt="team"
                    className="round-full"
                  />
                </div>
                <h5 className="team-name title title-sm">ffffff</h5>
                <span className="team-position">
                  CTO &amp; Software Engineer
                </span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="https://www.linkedin.com">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="team-popup-6" className="team-popup mfp-hide">
                {/* <a title="Close" className="mfp-close">
                  ×
                </a> */}
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/f-color.jpg" alt="team" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">fffffff</h3>
                      <p className="team-position mb-1">
                        CTO &amp; Software Engineer
                      </p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="https://www.facebook.com">
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <em className="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-mb-6">
              <div className="team team-s3 team-s3-alt">
                <div
                  className="team-photo round-full team-photo-bg cursor-pointer"
                  onClick={() => handleModalOpen()}
                >
                  {/* <a
                    href="#team-popup-3"
                    className="team-show content-popup"
                    data-overlay="bg-theme-grad-alternet"
                  ></a> */}
                  <img
                    src="images/team/sq-g.jpg"
                    alt="team"
                    className="round-full"
                  />
                </div>
                <h5 className="team-name title title-sm">fffffff</h5>
                <span className="team-position">Sr.Backend developer</span>
                <ul className="team-social team-social-s2">
                  <li>
                    <a href="https://www.linkedin.com">
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <em className="fab fa-facebook-f"></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <em className="fab fa-twitter"></em>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="team-popup-7" className="team-popup mfp-hide">
                {/* <a title="Close" className="mfp-close">
                  ×
                </a> */}
                <div className="row align-items-start">
                  <div className="col-md-6">
                    <div className="team-photo">
                      <img src="images/team/g-color.jpg" alt="team" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-popup-info pl-md-3">
                      <h3 className="team-name title title-lg pt-4">fffffff</h3>
                      <p className="team-position mb-1">Sr.Backend developer</p>
                      <ul className="team-social team-social-s2 mb-4">
                        <li>
                          <a href="https://www.facebook.com">
                            <em className="fab fa-facebook-f"></em>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <em className="fab fa-linkedin-in"></em>
                          </a>
                        </li>
                      </ul>
                      <p>
                        He is a great man to work Lorem ipsum dolor sit amet,
                        consec tetur adipis icing elit. Simi lique, autem.{" "}
                      </p>
                      <p>
                        Tenetur quos facere magnam volupt ates quas esse Sedrep
                        ell endus mole stiae tates quas esse Sed repell endus
                        molesti aela uda ntium quis quam iusto minima thanks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailModal openModal={openModal} handleModalClose={handleModalClose} />
    </section>
  );
}

export default Team;
