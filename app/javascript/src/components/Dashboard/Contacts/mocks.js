let contacts = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    createdAt: "Feb 9, 2021",
  },
  {
    id: 2,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    createdAt: "Feb 9,2021",
  },
  {
    id: 3,
    name: "Ronald Richards",
    role: "Owner",
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
