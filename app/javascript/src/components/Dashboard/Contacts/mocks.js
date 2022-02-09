let contacts = [
  {
    id: 1,
    firstName: "Ronald",
    lastName: "Richards",
    role: {
      label: "Owner",
      value: "Owner",
    },
    email: "albert@borer.com",
    createdAt: "Feb 9, 2021",
  },
  {
    id: 2,
    firstName: "Ronald",
    lastName: "Richards",
    role: {
      label: "Owner",
      value: "Owner",
    },
    email: "albert@borer.com",
    createdAt: "Feb 9,2021",
  },
  {
    id: 3,
    firstName: "Ronald",
    lastName: "Richards",
    role: {
      label: "Owner",
      value: "Owner",
    },
    email: "albert@borer.com",
    createdAt: "Feb 9,2021",
  },
];

export const fetchContacts = () => {
  return contacts;
};

export const deleteContact = id => {
  contacts = contacts.filter(contact => contact.id !== id);
};

export const createContact = contact => {
  contacts.push(contact);
};

export const updateContact = (id, editContact) => {
  contacts = contacts.map(contact => {
    if (contact.id === id) {
      return editContact;
    }

    return contact;
  });
};
