import React, { useState } from 'react';
import blogs from './blog.json';
import BlogContent from './blogContent';
import BlogComments from './blogComments';
import BlogSidebar from './blogSidebar';

import './blog-style.css';

const Blog = () => {
	const [blog, setBlog] = useState(blogs[0]);
	const [blogId, setBlogId] = useState(1);

	const onSlectBlog = (id) => {
		if (id !== blogId) {
			const _blog = blogs.find((item) => item.id === id);
			setBlog(_blog);
			setBlogId(id);
		}
	};
	return (
		<div className="container blog-container">
			<div className="blog-avatar">
				<img src={blog.image} alt={blog.title} />
			</div>
			<div className="d-flex">
				<div className="blog-side">
					<div className="content">
						<BlogContent blog={blog} />
						<BlogComments comments={blog.comments} />
					</div>
				</div>
				<BlogSidebar onSelect={onSlectBlog} selectedId={blogId} blogs={blogs} />
			</div>
		</div>
	);
};
export default Blog;
