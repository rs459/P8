import Logement from "../types/Logement-type";

import { Link } from "react-router-dom";

import s from "./Home.module.scss";
import useData from "../hooks/useData";

export default function Home() {
  const { data } = useData();

  return (
    <>
      <div className={s.homeIntro}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <section className={s.logementGallery}>
        {data?.map((logement: Logement) => (
          <div className={s.logementCard} key={logement.id}>
            <Link to={`/logement/${logement.id}`} className={s.links}>
              <h2>{logement.title}</h2>
            </Link>

            <img src={logement.cover} alt={logement.title} />
          </div>
        ))}
      </section>
    </>
  );
}
