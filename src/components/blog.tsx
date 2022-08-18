function Blog() {
  return (
    <section
      className="section section-contact bg-theme-dark tc-light"
      id="blog"
    >
      <div className="container">
        <div className="section-head text-center wide-auto-sm">
          <h2 className="title title-s4" title="news">
            Xentrica News
          </h2>
        </div>
        <div className="nk-block nk-block-blog">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-9">
              <div className="blog blog-s2">
                <div className="blog-photo">
                  <img src="./images/blog/a.jpeg" alt="blog-thumb" />
                </div>
                <div className="blog-text">
                  <ul className="blog-meta">
                    <li>
                      <a href="/">12 Mar, 2018</a>
                    </li>
                    <li>
                      <a href="/">Blockchain</a>
                    </li>
                  </ul>
                  <h4 className="title title-sm">
                    <a href="/">The Intersection with Blockchain.</a>
                  </h4>
                  <p>
                    Blockchain Meets Energy Surplus of electrical energy is
                    sometimes ut perspiciatis unde omnis iste natus...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-9">
              <div className="blog blog-s2">
                <div className="blog-photo">
                  <img src="./images/blog/b.png" alt="blog-thumb" />
                </div>
                <div className="blog-text">
                  <ul className="blog-meta">
                    <li>
                      <a href="/">12 Mar, 2018</a>
                    </li>
                    <li>
                      <a href="/">Blockchain</a>
                    </li>
                  </ul>
                  <h4 className="title title-sm">
                    <a href="/">The Intersection with Blockchain.</a>
                  </h4>
                  <p>
                    Blockchain Meets Energy Surplus of electrical energy is
                    sometimes ut perspiciatis unde omnis iste natus...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-9">
              <div className="blog blog-s2">
                <div className="blog-photo">
                  <img src="./images/blog/c.jpeg" alt="blog-thumb" />
                </div>
                <div className="blog-text">
                  <ul className="blog-meta">
                    <li>
                      <a href="/">12 Mar, 2018</a>
                    </li>
                    <li>
                      <a href="/">Blockchain</a>
                    </li>
                  </ul>
                  <h4 className="title title-sm">
                    <a href="/">The Intersection with Blockchain.</a>
                  </h4>
                  <p>
                    Blockchain Meets Energy Surplus of electrical energy is
                    sometimes ut perspiciatis unde omnis iste natus...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pdt-r">
          <a href="/" className="link link-primary link-uc link-animate">
            <span>Read all News</span>{" "}
            <em className="link-icon ti ti-angle-right"></em>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
