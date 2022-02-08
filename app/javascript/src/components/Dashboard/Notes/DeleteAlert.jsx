import React, { useState } from "react";

import { Alert } from "neetoui";
import PropTypes from "prop-types";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedNoteIds,
  setSelectedNoteIds,
}) => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: selectedNoteIds });
      onClose();
      setSelectedNoteIds([]);
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
      title={`Delete ${selectedNoteIds.length > 1 ? "notes" : "note"}?`}
      isSubmitting={deleting}
    />
  );
};

DeleteAlert.propTypes = {
  refetch: PropTypes.func,
  onClose: PropTypes.func,
  selectedNoteIds: PropTypes.array,
  setSelectedNoteIds: PropTypes.func,
};

export default DeleteAlert;
