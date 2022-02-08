import React, { useState } from "react";

import { MenuVertical, Info } from "neetoicons";
import { Typography, Dropdown, Label, Tag, Avatar } from "neetoui";
import PropTypes from "prop-types";

import { getTimeSince } from "./helpers";
import EditNotePane from "./Pane/EditNote";

const List = ({
  setShowDeleteAlert,
  setSelectedNoteIds,
  notes = [],
  fetchNotes,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const handleDelete = id => {
    setSelectedNoteIds([id]);
    setShowDeleteAlert(true);
  };

  const handleEdit = note => {
    setSelectedNote(note);
    setShowEditNote(true);
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
                <li onClick={() => handleDelete(note.id)}>Delete</li>
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
                <Label>Created {getTimeSince(note.created_at)}</Label>
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
      <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        fetchNotes={fetchNotes}
        note={selectedNote}
      />
    </>
  );
};

List.propTypes = {
  setShowDeleteAlert: PropTypes.func,
  setSelectedNoteIds: PropTypes.func,
  notes: PropTypes.array,
  fetchNotes: PropTypes.func,
};

export default List;
