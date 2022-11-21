import axios from "axios";

export async function getNotes() {
	let res = await axios.get("http://localhost:5000/api/notes/", {
		params: {
			userId: process.env.REACT_APP_USERID,
		},
	});
	return res.data;
}

export async function saveNote({ title, body }) {
	await axios.post(process.env.REACT_APP_RESAPIURI, {
		userId: process.env.REACT_APP_USERID,
		title,
		body,
	});
}

export async function getNote(idNote) {
	let res = await axios.get(`http://localhost:5000/api/notes/${idNote}`);
	let note = res.data;
	return note;
}

export async function deleteNote(idNote) {
	await axios.delete(`http://localhost:5000/api/notes/${idNote}`);
}
