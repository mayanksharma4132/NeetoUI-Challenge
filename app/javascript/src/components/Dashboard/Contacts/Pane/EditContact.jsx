import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

export default function EditContactPane({
  fetchContacts,
  showPane,
  setShowPane,
  contact,
}) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Contact
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        refetch={fetchContacts}
        contact={contact}
        isEdit={true}
      />
    </Pane>
  );
}
