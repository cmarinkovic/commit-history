import { Alert } from "flowbite-react";

export default function ErrorAlert({ errorMessage }) {
  return (
    <div style={{ display: errorMessage ? "block" : "none" }}>
      <Alert color="failure" rounded={true}>
        <span className="font-medium">{errorMessage}</span>
      </Alert>
    </div>
  );
}
