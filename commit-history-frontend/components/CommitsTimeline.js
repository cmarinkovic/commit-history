import { useState } from "react";
import { Timeline, Card, TextInput, Button, Spinner } from "flowbite-react";
import { CalendarIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

import DetailsAccordion from "./DetailsAccordion";

export default function CommitsTimeline() {
  const [repositoryName, setRepositoryName] = useState("");
  const [repositoryOwner, setRepositoryOwner] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-screen-md min-w-min mx-auto">
      <div className="mx-8">
        <Card>
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            <form className="grid grid-cols-12 gap-x-2">
              <span className="col-span-3">
                <TextInput
                  value={repositoryName}
                  className="font-medium"
                  placeholder="Repository name"
                  onChange={(e) => setRepositoryName(e.target.value)}
                ></TextInput>
              </span>
              <span className="text-md place-self-center">by</span>
              <span className="col-span-3">
                <TextInput
                  value={repositoryOwner}
                  className="font-medium"
                  placeholder="Repository owner"
                  onChange={(e) => setRepositoryOwner(e.target.value)}
                ></TextInput>
              </span>
              <Button type="submit" onClick={handleSubmit}>
                {isLoading ? (
                  <Spinner size="md" light={true} />
                ) : (
                  <ArrowPathIcon className="h-6 w-6" />
                )}
              </Button>
            </form>
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
