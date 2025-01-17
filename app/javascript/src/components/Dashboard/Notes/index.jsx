import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import List from "./List";
import Menu from "./MenuBar";
import NewNotePane from "./Pane/CreateNote";
import EditNotePane from "./Pane/EditNote";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showEditNotePane, setShowEditNotePane] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredNotes = () =>
    notes.filter(note => searchTerm === "" || note.title.includes(searchTerm));

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle={() => setShowMenu(!showMenu)}
        />
        {getFilteredNotes().length ? (
          <>
            <List
              setShowEditNotePane={setShowEditNotePane}
              setSelectedNote={setSelectedNote}
              setShowDeleteAlert={setShowDeleteAlert}
              notes={getFilteredNotes()}
            />
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
        <EditNotePane
          showPane={showEditNotePane}
          setShowPane={setShowEditNotePane}
          fetchNotes={fetchNotes}
          note={selectedNote}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNote={selectedNote}
            onClose={() => setShowDeleteAlert(false)}
            refetch={fetchNotes}
            setSelectedNote={setSelectedNote}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
