import { ThumbsUp } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateLikePost } from "../../redux/features/blogPost/blogPostAPI";
import PropTypes from "prop-types";

const DetailedBlog = ({ post }) => {
  const dispatch = useDispatch();
  const { title, image, likes, isSaved, description, tags } = post;

  const handleLikePost = () => {
    dispatch(updateLikePost(post));
  };

  return (
    <main className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.length && tags.map((tag) => <span key={tag}>#{tag}</span>)}
        </div>
        <div className="btn-group">
          <button
            type="button" // Prevent form submission behavior
            onClick={handleLikePost}
            className="like-btn"
            id="lws-singleLinks"
          >
            <p className="lws-likeCount flex items-center gap-2">
              <ThumbsUp />
              {likes}
            </p>
          </button>
          <button className="active save-btn" id="lws-singleSavedBtn">
            {isSaved && <span className="lws-badge"> Saved </span>}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

DetailedBlog.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    isSaved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default DetailedBlog;
