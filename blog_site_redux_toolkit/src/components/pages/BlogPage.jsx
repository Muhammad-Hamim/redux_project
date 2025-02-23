import { useParams } from "react-router";
import DetailedBlog from "../Blog/DetailedBlog";
import RelatedPosts from "../Blog/RelatedPosts";
import GoHomeButton from "../UI/GoHomeButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPost } from "../../redux/features/blogPost/blogPostAPI";
import { useEffect } from "react";
import PropTypes from "prop-types";

const BlogPage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, post, isError, error } = useSelector(
    (state) => state.blogPost
  );

  useEffect(() => {
    // fetch post by id
    dispatch(fetchBlogPost(postId || post.id));
  }, [dispatch, postId, post?.id]);
  if (isLoading) {
    return <div className="text-center text-2xl text-red-500">Loading...</div>;
  }
  if (isError) {
    return <div className="text-center text-2xl text-red-500">{error}</div>;
  }
  if (!post) {
    return (
      <div className="text-center text-2xl text-red-500">No post available</div>
    );
  }
  return (
    <div>
      {/* go back button */}
      <GoHomeButton />
      {/* go back button */}

      {/* main section */}
      <section className="post-page-container">
        <DetailedBlog post={post} />
        <RelatedPosts postId={post.id} tags={post.tags} />
      </section>
      {/* main section */}
    </div>
  );
};

DetailedBlog.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    likes: PropTypes.number.isRequired,
    isSaved: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

RelatedPosts.propTypes = {
  postId: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogPage;
