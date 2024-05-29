// Exports my About Me page with a photo of myself and a brief intro and skill list
export default function About() {
  return (
    <div className="container">
      {/* <h1>About Me</h1> */}
      <div className="row">
        <div className="col-md-6" id="image-box">
          <img src="./assets/images/me.png" alt="Picture of myself" className="img-fluid rounded-circle" id="selfie" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              <p className="text-md-start" id="text-box">
              My name is Ian Wolfe and I'm a full stack developer! Still new to this, but I'm having a lot of fun learning. In the past I've dabbled in game development, and I have a Bachelor's degree in Media Arts & Studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
