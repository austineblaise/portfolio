import React from "react";

function Cards({imageURL, imageAlt}) {
	return (
		<div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
          </div>
          <img className="img-fluid" src={imageURL} alt={imageAlt} />
        </div>
	);
}

export default Cards;
