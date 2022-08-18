function TokenSale() {
  return (
    <section
      className="section section-tokensale tc-light bg-theme-dark"
      id="token"
    >
      <div className="container">
        <div className="section-head text-center wide-auto-sm tc-light">
          <h2 className="title title-s4" title="TOKEN">
            Token Sale
          </h2>
          <p>
            The Cryptocurrency industry is one of the Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="nk-block nk-block-token mgb-m30">
          <div className="row align-items-center justify-content-between gutter-vr-50px">
            <div className="col-lg-6">
              <div className="row gutter-vr-30px">
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">Start</h6>
                    <p>Feb 8, 2018 (9:00AM GMT)</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">
                      Number of tokens for sale
                    </h6>
                    <p>900,000 ICC (9%)</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">End</h6>
                    <p>Feb 20, 2018 (11:00AM GMT)</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">
                      Tokens exchange rate
                    </h6>
                    <p>1 ETH = 650 ICC, 1 BTC = 1940 ICC</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">
                      Acceptable currencies
                    </h6>
                    <p>ETH, BTC, LTC</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stage-info">
                    <h6 className="title title-s6 title-xs-s2">
                      Minimal transaction amount
                    </h6>
                    <p>1 ETH/ 1 BTC/ 1 LTC</p>
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
