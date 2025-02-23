import { Link } from "react-router";
import { ThumbsUp } from "lucide-react";
const BlogCard = (post) => {
  const { title, id, image, likes, isSaved, createdAt, tags } = post.post;
  return (
    <div className="lws-card">
      <Link to={`/blog/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount flex items-center gap-2">
            <ThumbsUp />
            {likes}
          </p>
        </div>
        <Link to={`/blog/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags?.length && tags.map((tag) => <span key={tag}>#{tag}</span>)}
        </div>
        {/* Show this element if post is saved */}
        <div className="flex gap-2 mt-4">
          {isSaved && <span className="lws-badge"> Saved </span>}
        </div>
        {/* Show this element if post is saved Ends */}
      </div>
    </div>
  );
};

export default BlogCard;
