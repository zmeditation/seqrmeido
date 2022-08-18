function Platform() {
  return (
    <section
      className="section mask-c-blend-dark bg-theme-dark-alt tc-light ov-h"
      id="ico"
    >
      <div className="container">
        <div className="nk-block nk-block-text-wrap">
          <div className="row align-items-center justify-content-center justify-content-md-between gutter-vr-30px">
            <div className="col-mb-9 col-sm-7 col-md-6 col-lg-5 order-md-last">
              <div className="nk-block-img">
                <img src="images/dark/gfx-z-a.png" alt="app" />
              </div>
            </div>
            <div className="col-sm-10 col-md-6 text-center text-md-left">
              <div className="nk-block-text">
                <h2 className="title">
                  We’ve built a platform <br />
                  to buy and sell shares.
                </h2>
                <p className="lead">
                  We’re reinventing the global equity blockchian – that is
                  secure, smart and easy-to-use platform, and completely
                  disrupting the way businesses raise capital and the way
                  investors buy and sell shares.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
                  className="video-popup btn-play-wrap btn-play-wrap-s1"
                >
                  <div className="btn-play btn-play-sm btn-play-s2">
                    <em className="btn-play-icon"></em>
                  </div>
                  <div className="btn-play-text">
                    <span className="text-sm">Watch Video</span>
                    <span className="text-xs">What and How it work</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
