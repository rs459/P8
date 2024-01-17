import { ReactNode, useId, useState } from "react";
import s from "./Accordion.module.scss";

// @see https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/
export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const accordionId = useId();
  const accordionPanelId = useId();

  return (
    <div className={s.accordion}>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          className={s.accordionTrigger}
          aria-controls={accordionPanelId}
          id={accordionId}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className={s.accordionTitle}>
            {title}
            <span className={s.accordionIcon}></span>
          </span>
        </button>
      </h3>
      <div
        id={accordionPanelId}
        role="region"
        aria-labelledby={accordionId}
        className={s.accordionPanel}
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}
