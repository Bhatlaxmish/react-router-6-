import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';/* its a hook  */

import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
const loaderdata=useLoaderData();

/*   const [error, setError] = useState();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadPosts();
  }, []); */

  return (
    <>
      <h1>Our Blog Posts</h1>
      {isLoading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {!error && posts && <Posts blogPosts={posts} />}
    </>
  );
}

export default BlogPostsPage;

export function loader(){
  return getPosts();
}