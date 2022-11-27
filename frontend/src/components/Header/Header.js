import React from "react";
import "./Header.css";
import Particles from "react-particles";
import Particle from "../Particle/Particle";


function Header() {
	return (
		<div className="header__container">
			<div style={{ position: "absolute" }}>
				<Particles height="150vh" width="100vw" params={Particle} />
			</div>
			<header className="masthead  text-white text-center">
				<div className="container d-flex align-items-center flex-column">
					{/* Masthead Avatar Image*/}
					<img
						className="masthead-avatar mb-5"
						src="assets/img/portfolio_pic.jpg"
						alt="project"
						id="header__img"
					/>

					{/* Masthead Heading*/}
					<h1 className="masthead-heading text-uppercase mb-0" id="header__name">
						Austine Blaise
					</h1>
					{/* Icon Divider*/}
					<div className="divider-custom divider-light">
						<div className="divider-custom-line" />
						<div className="divider-custom-icon">
							<i className="fas fa-star" />
						</div>
						<div className="divider-custom-line" />
					</div>
					{/* Masthead Subheading*/}

					

					<p className="masthead-subheading font-weight-light mb-0">
								Web Developer  -  React Addict  - Javascript Enthusiast
							</p>
				</div>
			</header>
		</div>
	);
}

export default Header;
