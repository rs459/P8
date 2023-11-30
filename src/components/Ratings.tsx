export default function Ratings({ rating }: { rating: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }

  return (
    <>
      <div className="visually-hidden">score de {rating} sur 5</div>
      <div className="rating" aria-hidden="true">
        {stars}
      </div>
    </>
  );
}
