const About = () => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                A Tech Consultant based in Portugal
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="static/img/Deloitte.jpg" alt="image" />
              <div className="nav social-icon">
                <a href="https://www.linkedin.com/in/pedrocerejeira/" target="_blank">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://www.salesforce.com/trailblazer/pcerejeira" target="_blank">
                  <i className="fab fa-salesforce" />
                </a>
                <a href="https://github.com/pcerejeira/Portfolio" target="_blank">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4>I'M Pedro Cerejeira</h4>
              <h6>
                A Tech <span className="theme-color">Consultant </span>
                based in <span className="theme-color">Portugal</span>
              </h6>
              <p>
                Data and AI enthusiast with experience as a Data Scientist, AI & Automation Lead, and Salesforce Consultant. 
                <br></br>
                I specialize in helping businesses thrive in the digital age through leveraging data, innovative technologies, and insightful visualizations. 
                <br></br><br></br>
                4x certified in Salesforce with broad experience implementing solutions for large international companies.
              </p>
              <div className="row about-list">
              <div className="col-3">
                  <div className="certification-logo">
                    <img src="static/img/Administrator.png" alt="Certificated Administrator" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="certification-logo">
                    <img src="static/img/Data Cloud Consultant.png" alt="Certificated Data Cloud Consultant" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="certification-logo">
                    <img src="static/img/Associate.png" alt="Certificated Associate" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="certification-logo">
                    <img src="static/img/AI Associate.png" alt="Certificated AI Associate" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
