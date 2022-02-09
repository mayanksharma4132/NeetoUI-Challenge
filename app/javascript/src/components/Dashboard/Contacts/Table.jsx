import React from "react";

import { MenuVertical } from "neetoicons";
import { Table as NeetoTable, Avatar, Typography, Dropdown } from "neetoui";

const Table = ({ setShowDeleteAlert, setSelectedContact, rowData }) => {
  const handleDelete = contact => {
    setSelectedContact(contact);
    setShowDeleteAlert(true);
  };

  const columnData = [
    {
      dataIndex: "name",
      key: "name",
      title: "name & role",
      render: (text, row) => (
        <div className="flex">
          <Avatar
            className="m-2"
            user={{
              name: row.name,
            }}
          />
          <div className="m-2 my-4">
            <Typography style="h5">{row.name}</Typography>
            <Typography style="body3">{row.role}</Typography>
          </div>
        </div>
      ),
    },
    {
      dataIndex: "email",
      key: "email",
      title: "email",
    },
    {
      dataIndex: "createdAt",
      key: "createdAt",
      title: "created at",
    },
    {
      dataIndex: "action",
      key: "action",
      title: "action",
      render: (text, row) => (
        <Dropdown icon={MenuVertical} buttonStyle="text">
          <li>Edit</li>
          <li onClick={() => handleDelete(row)}>Delete</li>
        </Dropdown>
      ),
    },
  ];

  return (
    <>
      <NeetoTable columnData={columnData} rowData={rowData} />
    </>
  );
};

export default Table;
