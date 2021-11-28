import React from 'react';
import './context-style.css';

const MobileMenu = (props) => {
	return (
		<div className="context-menu mobile-menu">
			<div className="context-avatar">
				<div className="user-avatar">
					<img src="https://avatars.dicebear.com/api/personas/john.svg?background=%230000ff" alt="User" />
				</div>
				<div className="user-info">
					<h3 className="title">{user.name}</h3>
					<p className="email">{user.email}</p>
				</div>
			</div>
			<div className="menu">
				<a href="#">Edit Profile</a>
				<a href="#" className="logout">
					Logout
				</a>
			</div>
		</div>
	);
};

export default MobileMenu;
