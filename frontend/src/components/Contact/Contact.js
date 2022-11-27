import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import "./Contact.css";
import MessageBox from "../MessageBox/MessageBox";

import { contact } from "../../Redux/actions/contactActions";
import MessageBoxSucess from "../MessageBox/MessageBoxSuccess";

function Contact() {
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");

	const contactMe = useSelector((state) => state.contactMe);
	const { contactInfo, loading, error } = contactMe;
	const { register, handleSubmit, errors, reset } = useForm();

	// const submitHandler = (e) => {

	// 	e.preventDefault();
	// 	dispatch(contact(name, email, phoneNumber, message));
	// };

	const onSubmit = (formData) => {
		console.log(formData);

		dispatch(contact(name, email, phoneNumber, message));
		reset();
	};

	return (
		<>
			<section className="page-section" id="contact">
				<div className="container ">
					<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
						Contact Me
					</h2>

					<div className="divider-custom">
						<div className="divider-custom-line" />
						<div className="divider-custom-icon">
							<i className="fas fa-star" />
						</div>
						<div className="divider-custom-line" />
					</div>
					{/* {loading && <LoadingBox></LoadingBox>} */}
					{/* {contactInfo && (
						<MessageBox variant="danger">
							thank you for contacting me <h6> {contactInfo.name}</h6> i will
							surely get back to you through <h6>{contactInfo.phoneNumber}</h6>{" "}
							or <h6>{contactInfo.email}</h6>
						</MessageBox>
					)} */}
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<form
								onSubmit={handleSubmit(onSubmit)}
								// onSubmit={submitHandler}
								id="contactForm"
								name="sentMessage"
								noValidate="novalidate"
							>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls mb-0 pb-2">
										<label>Name</label>
										<input
											ref={register({ required: true })}
											className="form-control"
											id="name"
											type="text"
											placeholder="Name"
											// required="required"
											// data-validation-required-message="Please enter your name."
											name="name"
											onChange={(e) => setName(e.target.value)}
										/>
										{errors.name && (
											<p className="sendMail__error">please enter your name.</p>
										)}
										{/* <p className="help-block text-danger" /> */}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls mb-0 pb-2">
										<label>Email Address</label>
										<input
											// ref={register({ required: true })}
											ref={register({
												required: "Enter your e-mail",
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
													message: "Enter a valid e-mail address",
												},
											})}
											className="form-control"
											id="email"
											type="Email"
											placeholder="Email Address"
											// // required="required"
											// data-validation-required-message="Please enter your email address."
											name="email"
											onChange={(e) => setEmail(e.target.value)}
										/>
										{/* {errors.email && (
											<p className="sendMail__error">
												please enter your email address
											</p>
										)} */}

										{errors.email && (
											<p className="sendMail__error">{errors.email.message}</p>
										)}

										<p className="help-block text-danger" />
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls mb-0 pb-2">
										<label>Phone Number</label>
										<input
											ref={register({ required: true })}
											className="form-control"
											id="phone"
											type="number"
											
											placeholder="Phone Number"
											// required="required"
											// data-validation-required-message="Please enter your phone number."
											name="phoneNumber"
											onChange={(e) => setPhoneNumber(e.target.value)}
										/>
										{errors.phoneNumber && (
											<p className="sendMail__error">
												please enter your phone number.
											</p>
										)}
										{/* <p className="help-block text-danger" /> */}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls mb-0 pb-2">
										<label>Message</label>
										<textarea
											ref={register({ required: true })}
											className="form-control"
											id="message"
											rows={5}
											placeholder="Message"
											// required="required"
											// data-validation-required-message="Please enter a message."
											defaultValue={""}
											name="message"
											onChange={(e) => setMessage(e.target.value)}
										/>
										{errors.message && (
											<p className="sendMail__error">
												{" "}
												Please enter a message.
											</p>
										)}
										{/* <p className="help-block text-danger" /> */}
									</div>
								</div>
								<br />
								<div id="success" />

								{/* {loading && <LoadingBox></LoadingBox>} */}

								{contactInfo && (
									<MessageBoxSucess variant="info">
										<p>
											Message recieved successfully!!! Thank you{" "}
											<strong>{contactInfo.name}!</strong> I will surely get
											back to you through{" "}
											<strong>{contactInfo.phoneNumber}</strong> or{" "}
											<strong>{contactInfo.email}</strong>{" "}
										</p>
									</MessageBoxSucess>
								)}

								{error && (
									<MessageBox variant="danger">
										Looks like you lost your connection. Please check it and try
										again.
									</MessageBox>
								)}

								{loading ? (
									<button
										className="btn btn-primary btn-xl"
										type="button"
										disabled
									>
										<span
											className="spinner-border spinner-border-sm"
											role="status"
											aria-hidden="true"
										/>
										Loading...
									</button>
								) : (
									<div className="form-group">
										<button
											className="btn btn-primary btn-xl"
											id="sendMessageButton"
											type="submit"
										>
											Send
										</button>
									</div>
								)}
								{/* <div className="form-group">
									<button
										className="btn btn-primary btn-xl"
										id="sendMessageButton"
										type="submit"
									>
										Send
									</button>
								</div> */}
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
