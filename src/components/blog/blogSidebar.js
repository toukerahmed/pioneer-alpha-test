import React from 'react';

const BlogSidebar = (props) => {
	const { onSelect, blogs, selectedId } = props;

	const onSelectBlog = (id) => () => {
		onSelect(id);
	};

	return (
		<div className="sidebar">
			<div className="blog-list">
				{blogs.map((blog) => {
					return (
						<div className="blog-item" onClick={onSelectBlog(blog.id)} key={blog.id}>
							<div className="blog-avatar">
								<div className="image-inside">
									<img src={blog.image} alt={blog.title} />
								</div>
							</div>
							<div className="blog-text">
								<h4 className="title">{blog.title}</h4>
								<p>{blog.exerpt}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BlogSidebar;
