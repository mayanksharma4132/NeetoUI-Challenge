import React, { useState } from "react";

import { Alert } from "neetoui";

import { deleteContact } from "./mocks";

const DeleteAlert = ({
  refresh,
  onClose,
  selectedContact,
  setSelectedContact,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    try {
      setDeleting(true);
      deleteContact(selectedContact.id);
      setSelectedContact({});
      onClose();
      refresh();
    } catch (error) {
      logger.error(error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete contact?"
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
