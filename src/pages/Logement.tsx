import { useNavigate, useParams } from "react-router-dom";

import useData from "../hooks/useData";

import Accordion from "../components/Accordion";
import Ratings from "../components/Ratings";
import Owner from "../components/Owner";
import TagList from "../components/TagList";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import LogementType from "../types/Logement-type";

import s from "./Logement.module.scss";

export default function Logement() {
  const [logement, setLogement] = useState<LogementType | null>(null);
  const { data, isLoading } = useData();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const logement = data.find((logement) => logement.id === id);
      if (logement) {
        setLogement(logement);
      } else {
        navigate("/404");
      }
    }
  }, [data, id, logement, navigate]);

  return isLoading
    ? "Chargement en cours..."
    : logement && (
        <div className={s.logement}>
          <Carousel pictures={logement.pictures} />
          <div className={s.introOwnerRating}>
            <div className={s.intro}>
              <h1>{logement.title}</h1>
              <h2>{logement.location}</h2>
              <TagList tags={logement.tags} />
            </div>
            <div className={s.ownerAndRating}>
              <Owner
                name={logement.host.name}
                picture={logement.host.picture}
              />
              <Ratings rating={parseInt(logement.rating)} />
            </div>
          </div>
          <div className={s.desc}>
            <Accordion title="Description">
              <p>{logement.description}</p>
            </Accordion>
            <Accordion title="Equipements">
              <ul>
                {logement.equipments.map((equipment: string) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            </Accordion>
          </div>
        </div>
      );
}
