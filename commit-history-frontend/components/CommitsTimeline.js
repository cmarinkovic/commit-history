import { useState, useMemo } from "react";
import { Timeline, Card, TextInput, Button, Spinner } from "flowbite-react";
import axios from "axios";

import { CalendarIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

import DetailsAccordion from "./DetailsAccordion";
import MissingParamsAlert from "./MissingParamsAlert";
import ErrorAlert from "./ErrorAlert";
import Skeleton from "./Skeleton";

// TODO: Divide component to improve maintainability.
export default function CommitsTimeline() {
  const [commitsData, setCommitsData] = useState();
  const [owner, setOwner] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [personalToken, setPersonalToken] = useState("");
  const [repositoryName, setRepositoryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const missingParams = useMemo(() => {
    const missingParams = [];

    if (personalToken.length === 0) missingParams.push("Personal Access Token");
    if (repositoryName.length === 0) missingParams.push("repository");

    return missingParams;
  }, [personalToken, repositoryName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (missingParams.length > 0) return;

    setCommitsData(null);
    authenticate(postRepository(getCommits));
  };

  const authenticate = (callback) => {
    setErrorMessage("");
    setIsLoading(true);
    return axios
      .post(process.env.BASE_URL + "/commits/auth", {
        personalToken: personalToken,
      })
      .then((response) => {
        if (response.data.owner) {
          setOwner(response.data.owner);
        }
        callback();
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const postRepository = (callback) => {
    setErrorMessage("");
    setIsLoading(true);
    return axios
      .post(process.env.BASE_URL + "/commits/repository", {
        repository: repositoryName,
      })
      .then((response) => {
        callback();
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const getCommits = () => {
    setErrorMessage("");
    setIsLoading(true);
    return axios
      .get(process.env.BASE_URL + "/commits")
      .then((response) => {
        setCommitsData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="max-w-screen-md min-w-min mx-auto">
      <div className="mx-8">
        <Card>
          <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">
            <form className="grid grid-rows-2 gap-y-2 gap-x-6 mb-4">
              <div className="grid grid-cols-12">
                <div className="col-span-8">
                  <TextInput
                    value={personalToken}
                    className="font-medium"
                    placeholder="Personal Access Token"
                    onChange={(e) => setPersonalToken(e.target.value)}
                  ></TextInput>
                </div>
                <div className="text-lg font-medium self-center col-span-4 mx-4">
                  {owner && <div>{owner}</div>}
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-8">
                  <TextInput
                    value={repositoryName}
                    className="font-medium"
                    placeholder="Repository name"
                    onChange={(e) => setRepositoryName(e.target.value)}
                  ></TextInput>
                </div>
                <div className=" self-center col-span-2 mx-4">
                  <Button
                    type="submit"
                    disabled={missingParams.length > 0}
                    onClick={handleSubmit}
                  >
                    {isLoading ? (
                      <Spinner size="md" light={true} />
                    ) : (
                      <ArrowPathIcon className="h-6 w-6" />
                    )}
                  </Button>
                </div>
              </div>
            </form>
            <MissingParamsAlert missingParams={missingParams} />
            {errorMessage && <ErrorAlert errorMessage={errorMessage} />}
          </h5>
          {isLoading ? (
            <Skeleton />
          ) : (
            commitsData && (
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
            )
          )}
        </Card>
      </div>
    </div>
  );
}
