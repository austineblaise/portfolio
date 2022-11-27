import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../Redux/actions/contactActions";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";


import "./AdminPage.css";

export default function AdminPage() {
	// const history = useHistory();
	const dispatch = useDispatch();
	const contactDetails = useSelector((state) => state.contactDetails);
	const { getcontactinfo, loading, error } = contactDetails;
	// const userSignin = useSelector((state) => state.userSignin);
	// const {isAdmin} = userSignin;
	//   const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContact());
		

	}, [dispatch]);

    // useEffect(() => {
	// 	if (!isAdmin) {
	// 		history.replace("/adminsignin");
	// 	}
	// }, [history, isAdmin]);
	
	return (
		<>
		<div  className="d-flex justify-content-center my-3">
			<Link to="/" type="button" className="btn btn-secondary btn-lg ">
					{" "}
					Back Home
				</Link>
			</div>
		<div className="d-flex justify-content-center my-3">
		<Link to="/porfolioupload" type="button" className="btn btn-primary btn-lg">Add Portfolio</Link>

		</div>
			<div className="container text-center">
				<h1>Contact Information</h1>
			</div>

			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox variant="danger">{error}</MessageBox>
			) : (
				<div class="table-responsive">
					<table className="table  text-wrap table-dark  table-hover table-bordered">
						<thead>
							<tr>
								<th scope="col">Date</th>
								<th scope="col">ID</th>
								<th scope="col">name</th>
								<th scope="col">email</th>
								<th scope="col">phone</th>
								<th scope="col">Contact message</th>
							</tr>
						</thead>

						<tbody>
							{getcontactinfo &&
								getcontactinfo.map((info) => (
									<tr key={info._id}>
										
										
										<td>{info.createdAt.substring(0, 10)}</td>
										<td>{info._id}</td>
										<td>{info.name}</td>
										<td>{info.email}</td>
										<td>{info.phoneNumber}</td>
										<td>{info.message}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
}
