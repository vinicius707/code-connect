import { CardPost } from "@/components/CardPost";

async function getPosts() {
  const response = await fetch("http://localhost:3042/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </main>
  );
}
