import React from "react";

import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { MenuVertical, Info } from "neetoicons";
import { Typography, Dropdown, Label, Tag, Avatar } from "neetoui";
import PropTypes from "prop-types";

dayjs.extend(relativeTime);

const List = ({
  setShowEditNotePane,
  setSelectedNote,
  setShowDeleteAlert,
  notes = [],
}) => {
  const handleDelete = note => {
    setSelectedNote(note);
    setShowDeleteAlert(true);
  };

  const handleEdit = note => {
    setSelectedNote(note);
    setShowEditNotePane(true);
  };

  return (
    <>
      <div className="notes-table-height w-full">
        {notes.map(note => (
          <div key={note.id} className="m-4 border p-2">
            <div className="flex justify-between">
              <Typography style="h4">{note.title}</Typography>
              <Dropdown buttonStyle="text" icon={MenuVertical}>
                <li onClick={() => handleEdit(note)}>Edit</li>
                <li onClick={() => handleDelete(note)}>Delete</li>
              </Dropdown>
            </div>
            <Typography style="body2" weight="light">
              {note.description}
            </Typography>
            <div className="my-2 w-full border"></div>
            <div className="flex justify-between">
              <Tag label="Getting Started" />
              <div className="flex">
                <Info className="m-1 h-4 w-4" />
                <Label>Created {dayjs(note.created_at).fromNow()}</Label>
                <Avatar
                  user={{ name: "Yedhin Kizhakkethara" }}
                  className="mx-2"
                  size="small"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

List.propTypes = {
  setShowEditNotePane: PropTypes.func,
  setSelectedNote: PropTypes.func,
  setShowDeleteAlert: PropTypes.func,
  notes: PropTypes.array,
};

export default List;
