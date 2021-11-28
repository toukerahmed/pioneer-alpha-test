import React, { useState } from 'react';
import ContextMenu from './contextMenu';
import './header-style.css';

const Header = () => {
	const [open, setOpen] = useState(false);
	const onOpen = () => {
		setOpen(!open);
	};
	return (
		<header>
			<div className="header-container container">
				<div className="logo">Test</div>
				<ul className="menu-list">
					<li>Test1</li>
					<li>Test2</li>
				</ul>
				<div className={`avatar-container ${open ? 'open' : ''}`} onClick={onOpen}>
					<div className="desktop">
						<div className="avatar" />
						<span>{'>'}</span>
					</div>
					<div className={`mobile-bar ${open ? 'open' : ''}`} onClick={onOpen}>
						
						<div className="avatar"/>
						<span>{'>'}</span>
						
					
					</div>
				</div>
				<ContextMenu open={open} />
			</div>
			<div className="side-slogan">
				<div className="container">
					<h3 className="title">Additional Test Chapters</h3>
					<p className="slogan">
						This chapter deals with various tests to determine how well a candidate performs. The objective is to check
						if the candidate has the required skills to implement a given Figma UI design with proper padding and
						responsiveness.
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
