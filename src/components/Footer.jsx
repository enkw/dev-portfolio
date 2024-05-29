// Exports my footer
const Footer = () => {
  return (
    <div className="container text-light">
      <div className="row justify-content-center" id="foot">
        <div className="col-auto">
          <a href='https://github.com/enkw' className="text-center d-block">
            <h3>
              <i class="bi bi-github text-secondary" />
            </h3>
          </a>
        </div>
        <div className="col-auto">
          <a href='https://www.linkedin.com/in/iankwolfe/' className="text-center d-block">
            <h3>
              <i class="bi bi-linkedin text-secondary" />
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
