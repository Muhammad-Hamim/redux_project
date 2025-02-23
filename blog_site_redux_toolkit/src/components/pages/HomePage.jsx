import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../Blog/BlogCard";
import { useEffect } from "react";
import { fetchBlogPosts } from "../../redux/features/blogPosts/blogPostsAPI";

const HomePage = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.blogPosts
  );
  const { sort, filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogPosts({ sort, isSaved: filter }));
  }, [dispatch, sort, filter]);
  // decide what to render
  if (isLoading) {
    return <div className="text-center text-2xl text-red-500">Loading...</div>;
  }
  if (isError) {
    return <div className="text-center text-2xl text-red-500">{error}</div>;
  }
  return (
    <main className="post-container" id="lws-postContainer">
      {posts?.length > 0 ? (
        posts.map((post) => <BlogCard key={post.id} post={post} />)
      ) : (
        <div>No posts available</div>
      )}
    </main>
  );
};

export default HomePage;
