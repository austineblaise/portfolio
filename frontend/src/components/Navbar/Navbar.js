import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = (props) => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", null);
	}, []);

	return (
		<nav
			className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
			id="mainNav"
		>
			<div className="container text-primary">
				<Link className="navbar-brand text-primary" id="scroll__up" onClick={scrollToTop}>
					{" "}
					DevFolio{" "}
				</Link>
				<button
					className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setIsNavCollapsed(false)}
				>
					Menu
					<i className="fas fa-bars ml-1" />
				</button>
				{/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
				<div
					className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
					id="navbarResponsive"
				>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item mx-0 mx-lg-1">
							<Link
								className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
								data-toggle="collapse"
								data-target=".navbar-collapse.show"
								href="/about"
								to="about"
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onClick= {handleNavCollapse}
								onClick={() => setIsNavCollapsed(true)}
							>
								About
							</Link>
						</li>
						<li className="nav-item mx-0 mx-lg-1">
							<Link
								className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
								data-toggle="collapse"
								data-target=".navbar-collapse.show"
								href="/resume"
								to="resume"
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onClick={handleNavCollapse}
								onClick={() => setIsNavCollapsed(true)}
							>
								Resume
							</Link>
						</li>

						<li className="nav-item mx-0 mx-lg-1">
							<Link
								className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
								data-toggle="collapse"
								data-target=".navbar-collapse.show"
								href="/portfolio"
								to="portfolio"
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onClick={handleNavCollapse}
								onClick={() => setIsNavCollapsed(true)}
							>
								Portfolio
							</Link>
						</li>

						<li className="nav-item mx-0 mx-lg-1">
							<Link
								className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
								data-toggle="collapse"
								data-target=".navbar-collapse.show"
								href="/contact"
								to="contact"
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								// onClick={handleNavCollapse}
								onClick={() => setIsNavCollapsed(true)}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
