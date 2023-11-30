export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="tagList">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}
