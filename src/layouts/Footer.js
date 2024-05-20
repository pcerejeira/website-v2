const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 m-10px-tb">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="https://www.linkedin.com/in/pedrocerejeira/" target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://www.salesforce.com/trailblazer/pcerejeira" target="_blank">
                <i className="fab fa-salesforce" />
              </a>
              <a href="https://github.com/pcerejeira/Portfolio" target="_blank">
                <i className="fab fa-github" />
              </a>
              {/* <a href="#">
                <i className="fab fa-twitter" />
              </a> */}
            </div>
          </div>
          <div className="col-md-6 m-10px-tb text-center text-md-right">
            <p>© {new Date().getFullYear()} copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
