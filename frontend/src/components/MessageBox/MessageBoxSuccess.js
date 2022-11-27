import React from "react";

function MessageBoxSucess(props) {
	return (
		<div className="alert alert-secondary alert-dismissible fade show text-center container" role="alert">
               {props.children}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
</div>

	);
}

export default MessageBoxSucess;
