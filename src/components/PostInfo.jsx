import { Fragment } from 'react';

export default function PostInfo({ post }) {
  return (
    <div className="post_info">
      <div className="post_info_item post_info_categories">
        {post.categories.map((category) => (
          <Fragment key={category}>
            <a href="#">{category} </a>{' '}
          </Fragment>
        ))}
      </div>
      <div className="post_info_item post_info_posted">{post.date}</div>
      <div className="post_info_item post_info_counters">
        <a className="post_counters_item post_counters_comments icon-speech-bubble25" title={`Comments - ${post.comments}`} href="#">
          <span className="post_counters_number">{post.comments}</span>
        </a>
        <a className="post_counters_item post_counters_likes icon-heart369 enabled" title="Like" href="#">
          <span className="post_counters_number">{post.likes}</span>
        </a>
      </div>
    </div>
  );
}
