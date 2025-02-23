import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPosts } from "../../redux/features/relatedPosts/relatedPostsAPI";
import { useEffect } from "react";
import PropTypes from "prop-types";

const RelatedPosts = ({ tags, postId }) => {
  const dispatch = useDispatch();
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.relatedPosts
  );
  useEffect(() => {
    dispatch(fetchRelatedPosts({ tags, postId }));
  }, [dispatch, tags, postId]);
  if (isLoading) {
    return <div className="text-center text-2xl text-red-500">Loading...</div>;
  }
  if (isError) {
    return <div className="text-center text-2xl text-red-500">{error}</div>;
  }
  if (!posts.length) {
    return (
      <div className="text-center text-2xl text-red-500">
        No related post available
      </div>
    );
  }
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {posts.map((post) => (
          <RelatedPostCard key={post.id} post={post} />
        ))}
      </div>
    </aside>
  );
};

RelatedPosts.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  postId: PropTypes.number.isRequired,
};

const RelatedPostCard = ({ post }) => {
  const { title, tags, createdAt, image, id } = post;
  return (
    <div className="card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blog/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags?.length && tags.map((tag) => <span key={tag}>#{tag}</span>)}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

RelatedPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RelatedPosts;
