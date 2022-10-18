import { Accordion } from "flowbite-react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

export default function DetailsAccordion() {
  return (
    <Accordion arrowIcon={ArrowDownCircleIcon} alwaysOpen>
      <Accordion.Panel style={{ display: "none" }} />
      <Accordion.Panel>
        <Accordion.Title>Details</Accordion.Title>
        <Accordion.Content>(Table)</Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
