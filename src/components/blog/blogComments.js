import React from 'react';
import { useState } from 'react/cjs/react.development';

const CommentItem = ({ comment }) => {
	const [open, setOpen] = useState(false);

	const onOpen = () => {
		setOpen(!open);
	};
	return (
		<div className="comment">
			<div className="comment-avatar">
				<img src={comment.avatar} alt={comment.user} />
			</div>
			<div className="comment-box">
				<div className="comment-header">
					<h3 className="username">{comment.user}</h3>
					<span className="time">{comment.time}</span>
				</div>
				<div className="comment-text" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
				{comment.replay && comment.replay.length && (
					<div className="replay-comments">
						<div className="hide-title" onClick={onOpen}>
							{open ? 'Hide' : 'Show'} {comment.replay.length} Comments
						</div>
						{open && <Comments comments={comment.replay} />}
					</div>
				)}
			</div>
		</div>
	);
};

const Comments = ({ comments }) => {
	return (
		<div className="comment-list">
			{comments.map((comment) => {
				return <CommentItem comment={comment} key={comment.id} />;
			})}
		</div>
	);
};

const BlogComments = ({ comments }) => {
	return (
		<div className="blog-comments">
			<h3 className="title">Comments</h3>
			<div className="comment-field">
				<textarea className="comment-text-field" placeholder="Enter your message" />
			</div>
			<Comments comments={comments} />
		</div>
	);
};

export default BlogComments;
