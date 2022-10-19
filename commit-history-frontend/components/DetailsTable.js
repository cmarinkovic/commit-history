import { Table } from "flowbite-react";

export default function DetailsTable({ item }) {
  return (
    <Table hoverable={true}>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            SHA
          </Table.Cell>
          <Table.Cell>{item.sha}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Node ID
          </Table.Cell>
          <Table.Cell>{item.node_id}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Exact date
          </Table.Cell>
          <Table.Cell>{item.commit.author.date}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
