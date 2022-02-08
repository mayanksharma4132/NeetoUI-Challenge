import React, { useState } from "react";

import { Alert } from "neetoui";
import PropTypes from "prop-types";

import notesApi from "apis/notes";

const DeleteAlert = ({ refetch, onClose, selectedNote, setSelectedNote }) => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: [selectedNote.id] });
      onClose();
      setSelectedNote({});
      refetch();
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
      title="Delete note?"
      isSubmitting={deleting}
    />
  );
};

DeleteAlert.propTypes = {
  refetch: PropTypes.func,
  onClose: PropTypes.func,
  selectedNote: PropTypes.object,
  setSelectedNote: PropTypes.func,
};

export default DeleteAlert;
