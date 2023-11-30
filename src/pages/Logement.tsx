import { redirect, useLoaderData } from "react-router-dom";
import logements from "../data/logements.json";

import logement from "../data/logement-type";

import Accordion from "../components/Accordion";
import Ratings from "../components/Ratings";
import Owner from "../components/Owner";
import TagList from "../components/TagList";
import Carousel from "../components/Carousel";

export default function Logement() {
  const logement = useLoaderData() as logement;

  return (
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
          {logement.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      </Accordion>
    </>
  );
}

export function logementLoader({ params }: { params: { id: string } }) {
  const logement = logements.find((logement) => logement.id === params.id);
  if (!logement) {
    console.log("something went wrong");
    return redirect("/404");
  }
  return logement as logement;
}
