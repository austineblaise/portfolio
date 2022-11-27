import React from "react";
import "./Resume.css";
import { Link } from "react-scroll";
function Resume() {
	return (
		
		<section className="page-section portfolio" id="resume">
			<div className="container">
				<h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">
					Resume
				</h1>

				<div className="divider-custom">
					<div className="divider-custom-line" />
					<div className="divider-custom-icon">
						<i className="fas fa-star" />
					</div>
					<div className="divider-custom-line" />
				</div>
				<article className="resume-wrapper text-center position-relative">
					<div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
						<header className="resume-header pt-4 pt-md-0">
							<div className="media flex-column flex-md-row">
								{/* <img className="mr-3 img-fluid picture mx-auto" src="assets/img/portfolio_pic.jpg" alt /> */}
								<div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
									<div className="primary-info">
										<h3
											className="name mt-0 mb-1 text-white text-uppercase text-uppercase"
											id="namee"
										>
											Austine Blaise Obaje Oguche
										</h3>
										<div className="title mb-3 text-light">
											Front End Junior Developer(React)
										</div>
										<ul className="list-unstyled">
											<li className="mb-2 text-primary">
												<i
													className="far fa-envelope fa-fw mr-2"
													data-fa-transform="grow-3"
												/>
												austineblaise@gmail.com
											</li>
											<li className="text-primary">
												<i
													className="fas fa-mobile-alt fa-fw mr-2 "
													data-fa-transform="grow-6"
												/>
												+2347038633079
											</li>
										</ul>
									</div>
									{/*//primary-info*/}
									<div className="secondary-info ml-md-auto mt-2">
										<ul className="resume-social list-unstyled">
											<li className="mb-3">
												<a
													href="https://github.com/austineblaise"
													target="_blank"
													rel="noreferrer"
												>
													<span className="fa-container text-center mr-2">
														<i className="fab fa-github-alt fa-fw" />
													</span>
													github.com/austineblaise
												</a>
											</li>
											<li className="mb-3">
												<a
													href="https://linkedin.com/in/austine-blaise-63b081206"
													target="_blank"
													rel="noreferrer"
												>
													<span className="fa-container text-center mr-2">
														<i className="fab fa-linkedin-in fa-fw" />
													</span>
													linkedin.com/in/austine-blaise-63b081206
												</a>
											</li>
											<li className="mb-3">
												<a
													href="https://twitter.com/austineblaise"
													target="_blank"
													rel="noreferrer"
												>
													<span className="fa-container text-center mr-2">
														<i className="fab fa-twitter fa-fw" />
													</span>
													twitter.com/austineblaise
												</a>
											</li>
											<li>
												<a
													href="https://dev.to/austineblaise"
													target="_blank"
													rel="noreferrer"
												>
													<span className="fa-container text-center mr-2">
														<i className="fab fa-dev" />
													</span>
													dev.to/austineblaise
												</a>
											</li>
										</ul>
									</div>
									{/*//secondary-info*/}
								</div>
								{/*//media-body*/}
							</div>
							{/*//media*/}
						</header>

						<div className="resume-body p-5 ">
							<div className="row">
								<div className="col-lg-9">
									<section className="resume-section experience-section mb-0">
										<h3 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3 ">
											Experience
										</h3>
										<div className="resume-section-content">
											<div className="resume-timeline position-relative">
												{/*//resume-timeline-item*/}
												<article className="resume-timeline-item position-relative pb-5">
													<div className="resume-timeline-item-header mb-2">
														<div className="d-flex flex-column flex-md-row">
															<h6 className="resume-position-title font-weight-bold mb-1">
																Coding Bootcamp
															</h6>
														</div>
														{/*//row*/}
														<div className="resume-position-time">
															2019 - 2021
														</div>
													</div>
													{/*//resume-timeline-item-header*/}
													<div className="resume-timeline-item-desc">
														<p>
															I started learning web development on my own in
															2019. That same year(May ), I got a "Tech
															Schoolarship" from the Plateau State Government
															and I was trained by a Tech Company{" "}
															<a
																href="http://nhubnigeria.com/"
																target="_blank"
																rel="noreferrer"
															>
																nHub
															</a>
															, a Tech Company based in Jos. I was trained for
															eight months in Front-End development(version
															control System ,design , HTML, CSS, Boostrap,
															UIKIT, SASS, Javascript and React)
														</p>
														<h6 className="resume-timeline-item-desc-heading font-weight-bold">
															Achievement
														</h6>
														<p>
															At the end of the training(january, 2019), I was
															employed by the same Tech Company{" "}
															<a
																href="http://nhubnigeria.com/"
																target="_blank"
																rel="noreferrer"
															>
																nHub
															</a>{" "}
															as an Instructor. so far, I have trained more than
															30 students in web development.
														</p>
														<h6 className="resume-timeline-item-desc-heading font-weight-bold">
															Technologies I have taught and used in my{" "}
															<Link
																href="#portfolio"
																to="portfolio"
																activeClass="active"
																spy={true}
																smooth={true}
																offset={-70}
																duration={500}
															>
																Projects
															</Link>{" "}
															:
														</h6>
														<ul className="list-inline">
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	git/gitHub
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	HTML
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	CSS
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	Boostrap
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	UIKIT
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	Tailwind CSS
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	Material UI
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	JavaScript(E6+)
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	Jquery
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	ReactJs, Hooks
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	React Context API
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	Redux
																</span>
															</li>

															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	Node.js
																</span>
															</li>
															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	Express
																</span>
															</li>

															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	MongoDB
																</span>
															</li>

															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	FireBase
																</span>
															</li>

															<li className="list-inline-item">
																<span className="badge badge-primary badge-pill">
																	Heroku/Netlify
																</span>
															</li>
														</ul>
													</div>
													{/*//resume-timeline-item-desc*/}
												</article>
												{/*//resume-timeline-item*/}
												<article className="resume-timeline-item position-relative pb-5">
													<section className="resume-section" id="education">
														<div className="resume-section-content">
															<h3 className="mb-4">Education</h3>
															<div className="d-flex flex-column flex-md-row justify-content-between">
																<div className="flex-grow-1">
																	<h5 className="mb-0">
																		Ahmadu Bello University, Zaria, Kaduna State
																	</h5>
																	<div className="subheading text-italics mb-2">
																		College Degree
																	</div>
																	<h6>BSC.Ed in Physics</h6>
																</div>
																<div className="flex-shrink-0">
																	<span className="text-primary">
																		January 2012 - january 2017
																	</span>
																</div>
															</div>
															<div className="d-flex flex-column flex-md-row justify-content-between mt-5">
																<div className="flex-grow-1">
																	<h5 className="mb-0">
																		A.B.U School Of Basic and Remedial
																		Studies(SBRS), Funtua
																	</h5>
																	<div className="subheading mb-2">Pre-Uni</div>
																	<h6>Remedial programme</h6>
																</div>
																<div className="flex-shrink-0">
																	<span className="text-primary">
																		September 2010 - November 2011
																	</span>
																</div>
															</div>

															<div className="d-flex flex-column flex-md-row justify-content-between mt-5">
																<div className="flex-grow-1">
																	<h5 className="mb-0">
																		St kizio Minor Seminary, Idah, Kogi State
																	</h5>
																	<div className="subheading mb-3">
																		Secondary school
																	</div>

																	<h6>WAEC, NECO, MOCK</h6>
																</div>
																<div className="flex-shrink-0">
																	<span className="text-primary">
																		September 2003 - July 2009
																	</span>
																</div>
															</div>

															<div className="d-flex flex-column flex-md-row justify-content-between mt-5">
																<div className="flex-grow-1">
																	<h5 className="mb-0">
																		St Anthony Nursery/Primary school, Okpo,
																		Kogi State
																	</h5>
																	<div className="subheading mb-2">
																		Nursery/Primary
																	</div>
																</div>
																<div className="flex-shrink-0">
																	<span className="text-primary">
																		September 1996 - June 2003
																	</span>
																</div>
															</div>
														</div>
													</section>
												</article>
											</div>
											{/*//resume-timeline*/}
										</div>
									</section>
									{/*//experience-section*/}
								</div>

								<div className="col-lg-3">
									<section className="resume-section skills-section mb-5">
										<h3 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
											Skills &amp; Tools
										</h3>
										<div className="resume-section-content">
											<div className="resume-skill-item">
												<h4 className="resume-skills-cat font-weight-bold">
													Frontend
												</h4>
												<ul className="list-unstyled mb-4">
													<li className="mb-2">
														<div className="resume-skill-name">HTML/CSS</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "80%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>

													<li className="mb-2">
														<div className="resume-skill-name">
															Boostrap/ UIKit /Material UI/Tailwind CSS/Semantic UI
														</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "82%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>

													<li className="mb-2">
														<div className="resume-skill-name">JavaScript</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "65%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>

													<li className="mb-2">
														<div className="resume-skill-name">JQuery</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "55%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">React.js</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "65%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">
															Redux/React Context API
														</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "60%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">
															React Native
														</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "10%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>
												</ul>
											</div>
											{/*//resume-skill-item*/}
											<div className="resume-skill-item">
												<h4 className="resume-skills-cat font-weight-bold">
													Backend
												</h4>
												<ul className="list-unstyled">
													<li className="mb-2">
														<div className="resume-skill-name">Node.js</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "35%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>
													<li className="mb-2">
														<div className="resume-skill-name">Firebase</div>
														<div className="progress resume-progress">
															<div
																className="progress-bar theme-progress-bar-dark"
																role="progressbar"
																style={{ width: "80%" }}
																aria-valuenow={25}
																aria-valuemin={0}
																aria-valuemax={100}
															/>
														</div>
													</li>
												</ul>
											</div>
											{/*//resume-skill-item*/}
											<div className="resume-skill-item">
												<h4 className="resume-skills-cat font-weight-bold">
													Others
												</h4>
												<ul className="list-inline">
													<li className="list-inline-item">
														<span className="badge badge-light">Git</span>
													</li>
													<li className="list-inline-item">
														<span className="badge badge-light">Figma</span>
													</li>

													<li className="list-inline-item">
														<span className="badge badge-light">
															Wireframing
														</span>
													</li>
													<li className="list-inline-item">
														<span className="badge badge-light">Sketch</span>
													</li>
												</ul>
											</div>
											{/*//resume-skill-item*/}
										</div>
										{/*resume-section-content*/}
									</section>
									{/*//skills-section*/}

									{/*//Reference-section*/}
									<section className="resume-section reference-section mb-0">
										<h3 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
											REFERENCE
										</h3>
										<div className="resume-section-content">
											<h6>
												Simon Reuben
												<span className="text-muted font-weight-normal">
													{" "}
													senior software developer
												</span>
											</h6>
											<ul>
												<li>simonreuben@gmail.com</li>
												<li>08104138618</li>
											</ul>

											<h6>
												Afe Badmus
												<span className="text-muted font-weight-normal">
													{" "}
													senior software developer
												</span>
											</h6>
											<ul>
												<li>aef@gmail.com</li>
												<li>09077300025</li>
											</ul>
											<h6>
												Kate Jonathan
												<span className="text-muted font-weight-normal">
													{" "}
													senior software developer
												</span>
											</h6>
											<ul>
												<li>kate@gmail.com</li>
												<li>09023781074</li>
											</ul>
										</div>
									</section>
									{/*//interests-section*/}
									{/* <section className="resume-section language-section mb-5">
										<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
											Language
										</h2>
										<div className="resume-section-content">
											<ul className="list-unstyled resume-lang-list">
												<li className="mb-2">
													<span className="resume-lang-name font-weight-bold">
														Igala
													</span>{" "}
													<small className="text-muted font-weight-normal">
														(Native)
													</small>
												</li>
												<li className="mb-2 align-middle">
													<span className="resume-lang-name font-weight-bold">
														English
													</span>{" "}
													<small className="text-muted font-weight-normal"></small>
												</li>
											</ul>
										</div>
									</section> */}
								</div>
							</div>
							{/*//row*/}
						</div>
						{/*//resume-body*/}
					</div>
				</article>
			</div>
		</section>
	);
}

export default Resume;
