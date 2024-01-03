import s from "./TagList.module.scss";

export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className={s.tagList}>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
