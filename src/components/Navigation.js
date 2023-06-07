import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	return (
		<div className="navigation">
			<Link className="navigation__link" to="/">
				Главная
			</Link>
			<Link className="navigation__link" to="/about">
				О проекте
			</Link>
		</div>
	);
};

export default Navigation;
