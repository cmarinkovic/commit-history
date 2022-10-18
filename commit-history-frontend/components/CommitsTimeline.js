import { Timeline, Card } from "flowbite-react";
import { CalendarIcon } from "@heroicons/react/24/solid";

import DetailsAccordion from "./DetailsAccordion";

export default function CommitsTimeline() {
  return (
    <div className="max-w-screen-md min-w-min mx-auto">
      <div className="mx-8">
        <Card>
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            <span className="font-medium ">demo-repo</span> by{" "}
            <span className="font-medium ">demo-user</span>
          </h5>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point icon={CalendarIcon} />
              <Timeline.Content>
                <Timeline.Time>Date</Timeline.Time>
                <Timeline.Title>
                  <p className="font-medium">Commit title</p>
                  <p className="font-normal text-base">Author</p>
                </Timeline.Title>
                <Timeline.Body>Commit description.</Timeline.Body>
                <DetailsAccordion />
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
