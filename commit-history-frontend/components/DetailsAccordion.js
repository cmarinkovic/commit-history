import { Accordion } from "flowbite-react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

import DetailsTable from "./DetailsTable";

export default function DetailsAccordion() {
  return (
    <Accordion arrowIcon={ArrowDownCircleIcon} alwaysOpen>
      <Accordion.Panel style={{ display: "none" }} />
      <Accordion.Panel>
        <Accordion.Title>Details</Accordion.Title>
        <Accordion.Content>
          <DetailsTable />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
