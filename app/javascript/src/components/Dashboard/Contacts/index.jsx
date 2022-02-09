import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import { fetchContacts } from "./mocks";
import CreateContactPane from "./Pane/CreateContact";
import EditContactPane from "./Pane/EditContact";
import Table from "./Table";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showEditContactPane, setShowEditContactPane] = useState(false);

  useEffect(() => fetchContact());

  const fetchContact = () => {
    try {
      setLoading(true);
      const data = fetchContacts();
      setContacts(data);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredContacts = () =>
    contacts.filter(
      contact => searchTerm === "" || contact.name.includes(searchTerm)
    );

  if (loading) return <PageLoader />;

  return (
    <div className="flex w-11/12">
      <MenuBar showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          actionBlock={
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add New Contact"
              icon={Plus}
            />
          }
          menuBarToggle={() => setShowMenu(!showMenu)}
        />
        {getFilteredContacts().length > 0 ? (
          <>
            <Table
              setShowDeleteAlert={setShowDeleteAlert}
              setSelectedContact={setSelectedContact}
              setShowEditContactPane={setShowEditContactPane}
              rowData={getFilteredContacts()}
            />
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any contacts!"
            subtitle="Add your contacts to send customized emails to them."
          />
        )}
        <CreateContactPane
          fetchContacts={fetchContact}
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
        <EditContactPane
          fetchContacts={fetchContact}
          showPane={showEditContactPane}
          setShowPane={setShowEditContactPane}
          contact={selectedContact}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refresh={fetchContact}
            onClose={() => setShowDeleteAlert(false)}
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        )}
      </Container>
    </div>
  );
};

export default Contacts;
