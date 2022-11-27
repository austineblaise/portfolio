import React from "react";
import Particles from "react-particles";
import Particle from "../Particle/Particle";
import "./About.css";
import { Link } from "react-scroll";

function About() {
	return (
		<div className="about__shadow" style={{ position: "relative", overflow: "hidden" }}>
			<div style={{ position: "absolute" }}>
				<Particles height="250vh" width="100vw" params={Particle} />
			</div>
			<div>
				<section className="page-section  text-white mb-0" id="about">
					<div className="container">
						{/* About Section Heading*/}
						<h1 className="page-section-heading text-center text-uppercase text-white" id="about__intro">
							About
						</h1>
						{/* Icon Divider*/}
						<div className="divider-custom divider-light">
							<div className="divider-custom-line" />
							<div className="divider-custom-icon">
								<i className="fas fa-star" />
							</div>
							<div className="divider-custom-line" />
						</div>

						<div className="section-title">
							<p>Hello, my name is </p>
							<h6 className="mb-3 display-4 font-weight-bold" id="about_name">Austine Blaise</h6>
							<p className="about_p">
								I'm a Web Developer in a constant state of learning and
								exploring new things. Tech Enthusiast! another Dev guy who loves
								to hack with REACT...hahahahaha... My expertise is in the area of responsive design(front-end). I strive to
								build immersive and beautiful web applications  through carefully crafted code and user-centric design.

								{/* Want to know how I may help your project? Check out my project case studies and resume */}
								{/* I'm a full-stack developer specialised
							in frontend and backend development for complex scalable web apps.
							I write about web development on my blog and regularly speak at
							various web conferences and meetups. Want to know how I may help
							your project? Check out my project case studies and resume. */}
							</p>
						</div>
						<div className="row">
							<div className="col-lg-4 mt-2" data-aos="fade-right">
								<img
									src="assets/img/devv.jpg"
									className="img-fluid"
									alt="about"
									id="about__img"
								/>
							</div>
							<div
								className="col-lg-8 pt-4 pt-lg-0 content"
								data-aos="fade-left"
							>
								<h5>Here are the technologies I use:</h5>
								{/* <p className="font-italic">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p> */}
								<div className="row">
									<div className="col-lg-6">
										<ul>
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>HTML</strong>
											</li>
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>CSS</strong>
											</li>
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>
													Boostrap/UIKIT/Material UI/TailWind CSS/Semantic UI
												</strong>
											</li>
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>Javascript(ES6+)</strong>
											</li>

											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>ReactJs, Hooks</strong>
											</li>
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>Redux/Redux toolkit/React Context API</strong>
											</li>
										</ul>
									</div>
									<div className="col-lg-6" id="about__skills">
										<ul>
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>Jquery</strong>
											</li>
											{/* <li>
											<i className="icofont-rounded-right" />{" "}
											<strong>ReactJs, Hook</strong>
										</li> */}
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>Node.js</strong>
											</li>
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>Express</strong>
											</li>

											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>MongoDB</strong>
											</li>
											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>Firebase</strong>
											</li>

											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>Design: Figma</strong>
											</li>

											<li>
												<i className="icofont-rounded-right" />{" "}
												<strong>Tools and Platforms:</strong> Git, gitHub,
												Heroku, Netlify
											</li>
										</ul>
									</div>
								</div>
								<p>
									<strong>
										I am most interested in working with REACT. Want to know how
										I may help your project? Check out my{" "}
										<Link 
										className="about__cursor"
										href="/portfolio"
										to="portfolio"
										activeClass="active"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										>Project Case Studies</Link> and{" "}
										<Link href="/resume"
										className="about__cursor"
										to="resume"
										activeClass="active"
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										>Resume</Link>
									</strong>
								</p>
                                  
								  <div className="but">
								<Link
								     
									type="button"
									className="btn btn-primary mt-3"
									data-toggle="button"
									aria-pressed="false"
									autoComplete="off"
									id="but"
									href="/contact"
								to="contact"
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								>
									HIRE ME
								</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default About;
