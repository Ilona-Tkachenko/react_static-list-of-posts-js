/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import { UserInfo } from './UserInfo';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { CommentList } from './CommentList';
import './PostInfo.scss';


export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={post.ser} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    {post.comments.length > 0 ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);
