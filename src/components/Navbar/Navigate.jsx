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
					<NavLink to="/fullquran">القرآن كاملاً</NavLink>
				</li>

				<li>
					<NavLink to="/qurantext">سور القرآن</NavLink>
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
