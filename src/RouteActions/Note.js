import axios from "axios";

export async function getNotes() {
	let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
	return res.data;
}

export async function getNote(idNote) {
	let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
	let note = res.data.find((n) => n.id === Number(idNote));
	return note;
}

export async function deleteNote(idNote) {
	let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
	let newNotes = res.data.filter((n) => n.id !== Number(idNote));
	console.log(newNotes);
	return newNotes;
}
