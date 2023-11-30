import { ReactNode, useId, useState } from "react";
// import "./Accordion.scss";

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
    <>
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          className="accordion-trigger"
          aria-controls={accordionPanelId}
          id={accordionId}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="accordion-title">
            {title}
            <span className="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div
        id={accordionPanelId}
        role="region"
        aria-labelledby={accordionId}
        className="accordion-panel"
        hidden={!isOpen}
      >
        {children}
      </div>
    </>
  );
}
