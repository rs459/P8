export default function Owner({
  name,
  picture,
}: {
  name: string;
  picture: string;
}) {
  return (
    <div className="host">
      <p>{name}</p>
      <img src={picture} alt=""></img>
    </div>
  );
}
