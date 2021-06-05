import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navigate() {
	return (
		<div className="list">
			<ul>
				<li>
					<NavLink to="/">الرئيسية</NavLink>
				</li>
				<li>
					<NavLink to="/">الاذاعة</NavLink>
				</li>
				<li>
					<NavLink to="/">تصفح القرآن</NavLink>
				</li>
				<li>
					<NavLink to="/">التلاوات المرئية</NavLink>
				</li>
				<li>
					<NavLink to="/huson">حصن المسلم</NavLink>
				</li>
				<li>
					<NavLink to="/favorites">المفضلة</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navigate;
