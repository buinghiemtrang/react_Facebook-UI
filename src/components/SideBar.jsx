import React from "react";
import PropTypes from "prop-types";

function SideBar(props) {
	return (
		<div className="sidebar">
			<div className="sidebar__icon">
				<img src={props.icon} alt="" />
			</div>
			<div className="sidebar__title">
				<h3>{props.title}</h3>
			</div>
		</div>
	);
}

SideBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default SideBar;
