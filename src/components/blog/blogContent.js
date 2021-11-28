import React from 'react';

const BlogContent = ({ blog }) => {
	return (
		<>
			<div className="content-header">
				<a href="#">{blog.title}</a>
				<div className="blog-tags">
					<div className="tag">
						<span className="icon"></span>
						<span className="count">{blog.like || 0}</span>
					</div>
					<div className="tag">
						<span className="icon"></span>
						<span className="count">{blog.dislike || 0}</span>
					</div>
				</div>
			</div>
			<div className="content-body" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
		</>
	);
};

export default BlogContent;
