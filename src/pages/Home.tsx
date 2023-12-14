import Logement from "../types/Logement-type";

import { Link } from "react-router-dom";

import s from "./Home.module.scss";
import useData from "../hooks/useData";

export default function Home() {
  const { data } = useData();

  return (
    <section className={s.logementGallery}>
      {data?.map((logement: Logement) => (
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
