import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PortfolioUpload = () => {
	const [name, setName] = useState("");

	const [description, setDescription] = useState("");
	const [gitHubLink, setGitHubLink] = useState("");
	const [projectLink, setProjectLink] = useState("");
	const [filename, setFileName] = useState("");

	const onChangeFile = (e) => {
		setFileName(e.target.files[0]);
	};

	const changeOnClick = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", name);
		formData.append("description", description);
		formData.append("gitHubLink", gitHubLink);
		formData.append("projectLink", projectLink);
		formData.append("image", filename);

		setName("");
		setDescription("");
		setGitHubLink("");
		setProjectLink("");

		axios
			.post("/api/portfolio/", formData)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container">
			<div  className="d-flex justify-content-center my-3">
			<Link to="/" type="button" className="btn btn-secondary btn-lg ">
					{" "}
					Back Home
				</Link>
			</div>
			<div className="d-flex justify-content-center my-3">
				<Link to="/adminpage" type="button" className="btn btn-primary btn-lg">
					{" "}
					Back to Admin page
				</Link>
			</div>
			
			<h2 className="d-flex justify-content-center my-3">Upload Portfolio</h2>
			
			<form onSubmit={changeOnClick} encType="multipart/form-data">
				<div className="form-group">
					<label htmlFor="inputAddress">Project Link</label>
					<input
						type="text"
						className="form-control"
						id="inputAddress"
						placeholder="http://github.com/"
						name="projectLink"
						value={projectLink}
						onChange={(e) => setProjectLink(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputAddress2">gitHub Link </label>
					<input
						type="text"
						className="form-control"
						id="inputAddress2"
						placeholder="http://github.com/"
						name="gitHubLink"
						value={gitHubLink}
						onChange={(e) => setGitHubLink(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="exampleFormControlTextarea1">Description</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows={3}
						defaultValue={""}
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<div className="form-row">
					<div className="form-group">
						<label htmlFor="exampleFormControlFile1">Upload Image</label>
						<input
							type="file"
							className="form-control-file"
							id="exampleFormControlFile1"
							accept=".png, .jpg, .jpeg"
							name="image"
							filename="image"
							onChange={onChangeFile}
						/>
					</div>

					<div className="form-group col-md-2">
						<label htmlFor="inputZip">name</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlTextarea1"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="form-group"></div>
				<button type="submit" className="btn btn-primary">
					Post
				</button>
			</form>
		</div>
	);
};

export default PortfolioUpload;
