import s from "./Owner.module.scss";

export default function Owner({
  name,
  picture,
}: {
  name: string;
  picture: string;
}) {
  return (
    <div className={s.host}>
      <p>{name}</p>
      <img src={picture} alt=""></img>
    </div>
  );
}
