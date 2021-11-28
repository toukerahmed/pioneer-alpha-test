import React from 'react';
import './context-style.css';

const user = {
	name: 'AmariSchool',
	email: 'candidate@amarischool.com',
};

const ContextMenu = (props) => {
	const { open } = props;
	return (
		<div className={`context-menu ${open ? 'menu-open' : 'menu-close'}`}>
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
				<div className="mobile-menu">
					<a href="#">Test1</a>
					<a href="#">Test2</a>
				</div>
				<a href="#">Edit Profile</a>
				<a href="#" className="logout">
					Logout
				</a>
			</div>
		</div>
	);
};

export default ContextMenu;
