import React from "react";
import Table from "react-bootstrap/Table";
import { FormattedMessage } from "react-intl";

const Series = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <FormattedMessage id="Name" />
          </th>
          <th>
            <FormattedMessage id="Channel" />
          </th>
          <th>
            <FormattedMessage id="Description" />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.series.map((serie, index) => {
          return (
            <tr key={serie.id}>
              <td>{serie.id}</td>
              <td>{serie.name}</td>
              <td>{serie.channel}</td>
              <td>{serie.description}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Series;
