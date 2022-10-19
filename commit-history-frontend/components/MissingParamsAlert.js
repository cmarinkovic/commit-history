import { Alert } from "flowbite-react";

import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function MissingParamsAlert({ missingParams }) {
  return (
    <div style={{ display: missingParams.length === 0 ? "none" : "block" }}>
      <Alert color="info" rounded={true}>
        {missingParams.map((missingParam) => {
          return (
            <p
              key={missingParam}
              className="font-medium"
            >{`Indicate ${missingParam}`}</p>
          );
        })}
        <br />
        <span className="font-medium">
          And press <ArrowPathIcon className="inline h-5 w-5" />
        </span>
      </Alert>
    </div>
  );
}
