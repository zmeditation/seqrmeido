function Contact() {
  return (
    <section className="section section-contact bg-theme tc-light" id="contact">
      <div className="container">
        <div className="section-head text-center wide-auto-sm">
          <h2 className="title title-s4" title="Contact">
            Contact Xentrica
          </h2>
          <p>
            Any question? Reach out to us and we’ll get back to you shortly.
          </p>
        </div>
        <div className="nk-block block-contact">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8 col-lg-10">
              <ul className="contact-list contact-list-s1 flex-wrap flex-md-nowrap pdb-l">
                <li>
                  <em className="contact-icon fas fa-phone"></em>
                  <div className="contact-text">
                    <span>+44 0123 4567</span>
                  </div>
                </li>
                <li>
                  <em className="contact-icon fas fa-envelope"></em>
                  <div className="contact-text">
                    <span>info@company.com</span>
                  </div>
                </li>
                <li>
                  <em className="contact-icon fas fa-paper-plane"></em>
                  <div className="contact-text">
                    <span>Join us on Telegram</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-8 col-lg-10">
              <div className="contact-wrap p-0">
                <form
                  id="contact-form-01"
                  className="contact-form nk-form-submit"
                  action="form/contact.php"
                  method="post"
                >
                  <div className="field-item field-item-center">
                    <input
                      name="contact-name"
                      type="text"
                      className="input-line required"
                    />
                    <label className="field-label field-label-line">
                      Your Name
                    </label>
                  </div>
                  <div className="field-item field-item-center">
                    <input
                      name="contact-email"
                      type="email"
                      className="input-line input-line-center required email"
                    />
                    <label className="field-label field-label-line">
                      Your Email
                    </label>
                  </div>
                  <div className="field-item field-item-center">
                    <textarea
                      name="contact-message"
                      className="input-line input-line-center input-textarea required"
                    ></textarea>
                    <label className="field-label field-label-line">
                      Your Message
                    </label>
                  </div>
                  <input
                    type="text"
                    className="d-none"
                    name="form-anti-honeypot"
                    value=""
                  />
                  <div className="field-wrap">
                    <button
                      type="submit"
                      className="btn btn-round btn-lg btn-grad"
                    >
                      Submit
                    </button>
                    <div className="form-results"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
