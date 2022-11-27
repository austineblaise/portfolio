import React from "react";
import "./LoadingBox.css";

function LoadingBox() {
	return (
		// <div className="loading">
		// 	<i className="fa fa-spinner fa-spin>"></i> Loading...
		// </div>

		<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
	
  </div>
  
</div>

	
	);
}

export default LoadingBox;
