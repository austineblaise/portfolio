import React from 'react'
import Particles from "react-particles";
import Particle from "../Particle/Particle";




function Footer() {
    return (
      <>
        <div style={{ position: "relative", overflow: "hidden" }}>
<div style={{ position: "absolute" }}>
				<Particles height="250vh" width="100vw" params={Particle} />
			</div>

            <footer className="footer text-center">
  <div className="container">
    <div className="row">
      {/* Footer Location*/}
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">Location</h4>
        <p className="lead mb-0">
          Maxwell Khobe Cantonment
          <br />
          Rukuba Barracks, 3DIV Jos.
        </p>
      </div>
      {/* Footer Social Icons*/}
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h4 className="text-uppercase mb-4">Around the Web</h4>
        <a className="btn btn-outline-light btn-social mx-1" href="https://m.facebook.com/austine.blaise.9" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-facebook-f" /></a>
        <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/austineblaise" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-twitter" /></a>
        <a className="btn btn-outline-light btn-social mx-1" href="https://linkedin.com/in/austine-blaise-63b081206" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-linkedin-in" /></a>
        <a className="btn btn-outline-light btn-social mx-1" href="https://dev.to/austineblaise" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-dev" /></a>
      </div>
      {/* Footer About Text*/}
      <div className="col-lg-4">
        <h4 className="text-uppercase mb-4">Email / Call</h4>
        <p className="lead mb-0">austineblaise@gmail.com</p>
        
        <p className="lead  mb-0">07038633079</p>
      </div>
    </div>
  </div>
</footer>
</div>

<div>
  
  <div className="copyright py-4 text-center text-white">
    <div className="container"><small>Copyright &copy; {new Date().getFullYear()} austineblaise</small></div>
  </div>
  {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
  <div className="scroll-to-top d-lg-none position-fixed">
    <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up" /></a>
  </div>
</div>
</>


    )
}

export default Footer
