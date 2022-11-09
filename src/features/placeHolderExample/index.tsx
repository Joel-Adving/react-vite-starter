import { useFetchPosts } from './hooks/useFetchPosts';

export default function PlaceHolderExample() {
  const { posts } = useFetchPosts();

  return (
    <div>
      <h2>Posts</h2>
      {posts?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
