const Services = () => {
  return (
    <section id="services" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Services</h3>
              <p className="text-uppercase small">
                A Tech Consultant based in Portugal
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-presentation" />
              </div>
              <div className="feature-content">
                <h5>Data Analytics & Business Intelligence</h5>
                <p>
                  Transforming data into actionable insights for strategic decisions.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-gears" />
              </div>
              <div className="feature-content">
                <h5>AI & Machine Learning Solutions</h5>
                <p>
                  Building custom AI and machine learning models to solve business challenges.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-hourglass" />
              </div>
              <div className="feature-content">
                <h5>Workflow Automation</h5>
                <p>
                  Automating workflows and connecting your applications to boost efficiency and productivity.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-layers" />
              </div>
              <div className="feature-content">
                <h5>API & Database Development</h5>
                <p>
                  Developing custom APIs and optimizing databases for seamless data exchange.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-lightbulb" />
              </div>
              <div className="feature-content">
                <h5>Salesforce Solutions</h5>
                <p>
                  Implementing and customizing Salesforce to enhance CRM capabilities.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
          {/* feaure box */}
          <div className="col-sm-6 col-lg-4 m-15px-tb">
            <div className="feature-box-1 box-shadow-lg">
              <div className="icon">
                <i className="icon-tools-2" />
              </div>
              <div className="feature-content">
                <h5>Advanced Options</h5>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
          {/* / */}
        </div>
      </div>
    </section>
  );
};
export default Services;
