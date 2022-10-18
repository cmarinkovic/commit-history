import { Table } from "flowbite-react";

export default function DetailsTable() {
  return (
    <Table hoverable={true}>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Author
          </Table.Cell>
          <Table.Cell>demo-user</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Email
          </Table.Cell>
          <Table.Cell>demo-user-email</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
