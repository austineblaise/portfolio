import React from "react";

function MessageBox(props) {
	return (
		<div className="alert alert-danger alert-dismissible fade show text-center container" role="alert">
               {props.children}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
</div>

	);
}

export default MessageBox;



