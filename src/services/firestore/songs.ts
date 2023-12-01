import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import db from "./connection";

async function addSong(
  title: string,
  author: string,
  coverSrc: string,
  songSrc: string,
  addSongOk: Function,
  addSongError: Function
) {
  try {
    const newSong = {
      title,
      author,
      coverSrc,
      songSrc,
    };
    const docRef = await addDoc(collection(db, "songs"), newSong);
    addSongOk({ id: docRef.id, ...newSong });
  } catch (e) {
    addSongError(e);
  }
}

async function getSongs() {
  try {
    const querySnapshot = await getDocs(collection(db, "songs"));
    const songs: Array<any> = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return songs;
  } catch (error) {
    return [];
  }
}

async function deleteSong(
  songId: string,
  deletedOk: Function,
  deleteError: Function
) {
  try {
    await deleteDoc(doc(db, "songs", songId));
    deletedOk();
  } catch (error) {
    deleteError();
  }
}

async function updateSong(
  id: string,
  title: string,
  author: string,
  coverSrc: string,
  songSrc: string,
  updateSongOk: Function,
  updateSongError: Function
) {
  try {
    const songRef = doc(db, "songs", id);
    const updatedSong = {
      title,
      author,
      coverSrc,
      songSrc,
    };
    await updateDoc(songRef, updatedSong);
    updateSongOk({ id, ...updatedSong });
  } catch (e) {
    updateSongError(e);
  }
}

export { addSong, getSongs, deleteSong, updateSong };
