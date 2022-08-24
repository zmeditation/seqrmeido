function MobileApp() {
  return (
    <section className="section bg-theme-dark-alt tc-light">
      <div className="container">
        <div className="section-head text-center wide-auto-sm tc-light">
          <div className="section-head-line">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
            <span className="line-4"></span>
            <span className="line-5"></span>
            <span className="line-6"></span>
            <span className="line-7"></span>
            <span className="line-8"></span>
          </div>
          <h2 className="title title-s4" title="APPS">
            The SeqrMe App
          </h2>
          <p>
            SeqrMe app is the first product/stage to launch from within the SeqrMe envierment.
          </p>
        </div>
        <div className="nk-block nk-block-text-wrap">
          <div className="row align-items-center justify-content-center justify-content-md-between gutter-vr-30px">
            <div className="col-mb-9 col-sm-7 col-md-6">
              <div className="nk-block-img">
                <img src="images/dark/gfx-z-c.png" alt="app" />
              </div>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-5">
              <div className="nk-block-text ml-lg-3 ml-xl-0">
                <p>
                The app targets security and privacy as maine opejectives.
                It includes environment functions as stealth, where users can make the app disappear untraceable from preying eyes or hackers / bad players.
                Using latest encryption and algorythm, we strive to build a multifunction apps envierment within the secured envierment of SeqrMe. As the below road map.
                </p>
                <ul className="list list-dot pdb-r">
                  <li>Stealth Mode and Super Stealth Mode to protect data from physical and/or remote access to the device</li>
                  <li>Audio calls SIP / PSTN, Video calls / conference, Voice-messages, Video-messages</li>
                  <li>E-mail, universal chat</li>
                  <li>VPN support (enabled / disabled based on country regulation)</li>
                </ul>
                <ul className="btn-grp justify-content-center justify-content-md-start">
                  <li>
                    <a href="/" className="btn btn-grad btn-round btn-md">
                      Get the app now
                    </a>
                  </li>
                  <li>
                    <ul className="btn-grp tc-primary gutter-15px">
                      <li>
                        <a href="/">
                          <em className="fab fa-android"></em>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApp;
