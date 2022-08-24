function Footer() {
  return (
    <footer className="nk-footer bg-theme-alt section-connect">
      <div className="section section-m pb-0 tc-light ov-h">
        <div className="container py-4">
          <div className="nk-block pb-lg-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6 col-md-9">
                <div className="wide-auto-sm section-head section-head-sm pdb-r">
                  <h4 className="title title-md">
                    Don't miss out, Stay updated
                  </h4>
                </div>
                <form
                  action="form/subscribe.php"
                  className="nk-form-submit"
                  method="post"
                >
                  <div className="field-inline field-inline-round field-inline-s2-sm bg-theme-dark-alt shadow-soft">
                    <div className="field-wrap">
                      <input
                        className="input-solid input-solid-md required email"
                        type="text"
                        name="contact-email"
                        placeholder="Enter your email"
                      />
                      <input
                        type="text"
                        className="d-none"
                        name="form-anti-honeypot"
                        value=""
                      />
                    </div>
                    <div className="submit-wrap">
                      <button className="btn btn-md btn-round btn-grad h-100">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="form-results"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-ovm shape-contain shape-center-top shape-p"></div>
      </div>
      <div className="section section-footer section-s tc-light bg-transparent">
        <div className="container">
          <div className="nk-block block-footer">
            <div className="row">
              <div className="col">
                <div className="wgs wgs-text text-center mb-3">
                  <ul className="social pdb-m justify-content-center">
                    <li>
                      <a href="/">
                        <em className="social-icon fab fa-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <em className="social-icon fab fa-twitter"></em>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <em className="social-icon fab fa-youtube"></em>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <em className="social-icon fab fa-github"></em>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <em className="social-icon fab fa-bitcoin"></em>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <em className="social-icon fab fa-medium-m"></em>
                      </a>
                    </li>
                  </ul>
                  <div className="copyright-text copyright-text-s3 pdt-m">
                    <p>
                      <span className="d-sm-block">
                        Copyright &copy; 2022, IDO Crypto. Template Made By{" "}
                        <a href="./">Softnio</a> &amp; Handcrafted by iO.{" "}
                      </span>
                      All trademarks and copyrights belong to their respective
                      owners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
