function TokenSale() {
  return (
    <section
      className="section section-tokensale tc-light bg-theme-dark"
      id="token"
    >
      <div className="container">
        <div className="section-head text-center wide-auto-sm tc-light">
          <h2 className="title title-s4" title="TOKEN">
          TOKENOMICS
          </h2>
        </div>
        <div className="nk-block nk-block-token mgb-m30">
          <div className="row align-items-center justify-content-between gutter-vr-50px">
            <div className="col-lg-6">
              <div className="row gutter-vr-30px">
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">Minting is stable at 10 k per day up to a lifetime total of 5 million token.</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">First emission 1,000,000 token split as follows, 500k to initial funder, and 500k to founders. To compensate the funding.</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">10,000 tokens to be minted daily untill completion of full 5,000,000 token.</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">Airdrops: each user will receive a % of token added to his wallet automatically. From real life sales recorded by the apk.</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="token-status token-status-s5 bg-theme-alt round no-bd">
                <div className="token-box token-box-s3">
                  <div
                    className="countdown-s3 countdown-s4 countdown"
                    data-date="2021/08/10"
                  ></div>
                </div>
                <div className="token-action">
                  <button className="btn btn-md btn-grad btn-grad-alternet btn-round">
                    Join &amp; Buy Token
                  </button>
                </div>
                <ul className="icon-list">
                  <li>
                    <em className="fab fa-bitcoin"></em>
                  </li>
                  <li>
                    <em className="fas fa-won-sign"></em>
                  </li>
                  <li>
                    <em className="fab fa-cc-visa"></em>
                  </li>
                  <li>
                    <em className="fab fa-cc-mastercard"></em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-block">
          <div className="row justify-content-center gutter-vr-40px">
            <div className="col-md-6 col-mb-8">
              <div className="single-chart">
                <h3 className="mgb-l text-center title-lg">
                  Distribution <br />
                  of tokens
                </h3>
                <div className="chart">
                  <img src="images/dark/e-dark.png" alt="chart" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-mb-8">
              <div className="single-chart">
                <h3 className="mgb-l text-center title-lg">
                  Use <br />
                  of proceeds
                </h3>
                <div className="chart">
                  <img src="images/dark/f-dark.png" alt="chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenSale;
