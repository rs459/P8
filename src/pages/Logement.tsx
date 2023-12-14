import { useNavigate, useParams } from "react-router-dom";

import useData from "../hooks/useData";

import Accordion from "../components/Accordion";
import Ratings from "../components/Ratings";
import Owner from "../components/Owner";
import TagList from "../components/TagList";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import LogementType from "../types/Logement-type";

export default function Logement() {
  const [logement, setLogement] = useState<LogementType | null>(null);
  const { data } = useData();
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

  return (
    <>
      {logement ? (
        <>
          <Carousel pictures={logement.pictures} />
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <TagList tags={logement.tags} />
          <Owner name={logement.host.name} picture={logement.host.picture} />
          <Ratings rating={parseInt(logement.rating)} />
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
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
