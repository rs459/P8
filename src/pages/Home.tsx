import logement from "../data/logement-type";

import { Link, useLoaderData } from "react-router-dom";
import logements from "../data/logements.json";

import s from "./Home.module.scss";

export default function Home() {
  const data = useLoaderData() as logement[];

  return (
    <section className={s.logementGallery}>
      {data.map((logement: logement) => (
        <Link
          to={`/logement/${logement.id}`}
          key={logement.id}
          className={s.links}
        >
          <h2>{logement.title}</h2>
          <img height="100" src={logement.cover} alt={logement.title} />
        </Link>
      ))}
    </section>
  );
}

export function homeLoader() {
  return logements;
}
