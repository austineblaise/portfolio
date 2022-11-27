import React, { useEffect } from "react";
import "./Portfolio.css";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { portfolioList } from "../../Redux/actions/portfolioAction";

function Portfolio() {
	const dispatch = useDispatch();
	const listPortfolio = useSelector((state) => state.portfolioList);
	const { loading, error, portfolio } = listPortfolio;

	useEffect(() => {
		dispatch(portfolioList());
	}, [dispatch]);

	return (
		<section className="page-section portfolio" id="portfolio">
			<div className="container">
				{/* Portfolio Section Heading*/}
				<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
					Portfolio
				</h2>
			
				{/* Icon Divider*/}
				<div className="divider-custom">
					<div className="divider-custom-line" />
					<div className="divider-custom-icon">
						<i className="fas fa-star" />
					</div>
					<div className="divider-custom-line" />
				</div>
				{/* Portfolio Grid Items*/}

				{loading ? (
					<LoadingBox></LoadingBox>
				) : error ? (
					<MessageBox variant="danger">
						Looks like you lost your connection. Please check it and try again.
					</MessageBox>
				) : (
					<div className="row justify-content-center" id="portfolio__cards">
						{portfolio.map((project) => (
							<div
							key={ Math.random().toString(36).substr(2, 9) }
								className="card border-success mx-2 my-2"
								style={{ width: "18rem" }}
							>
								{/* <h5 className="card-title">Card title</h5> */}

								<div className="card-header text-center text-xl">
									<h5>{project.name}</h5>
								</div>
								{/* <img src={project.image} className="card-img-top " alt="..." /> */}
								<img src={`http://localhost:3000/${project.image}`} className="card-img-top " alt="..." />
								<div className="card-body">
									<p className="card-text">{project.description}</p>
									<div className="portfolio__buttons">
										<a
											href={project.projectLink}
											type="button"
											target="_blank"
											rel="noreferrer"
											className="btn btn-primary btn-sm "
										>
											view project
										</a>
										<a
											href={project.gitHubLink}
											type="button"
											target="_blank"
											rel="noreferrer"
											className="btn btn-secondary btn-sm "
										>
											Repository
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default Portfolio;
