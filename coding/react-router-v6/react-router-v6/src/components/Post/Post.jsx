import { useParams } from "react-router-dom";
import { BlogPosts } from "../../util";

export default function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];

  if (!post) {
    return <span>Request post not found</span>;
  }
  const { title, descrption } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{descrption}</p>
    </div>
  );
}
