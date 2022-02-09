import axios from "axios";

const fetch = () => axios.get("api/v1/notes");
const create = payload => axios.post("api/v1/notes", payload);
const update = (id, payload) => axios.put(`api/v1/notes/${id}`, payload);
const destroy = id => axios.delete(`api/v1/notes/${id}`);

const notesApi = {
  fetch,
  create,
  update,
  destroy,
};

export default notesApi;
