import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { auth, journal } = getState();
    const { uid } = auth;
    const newNote = {
      title: '',
      body: '',
      imageUrls: [],
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { auth, journal } = getState();
    const { uid } = auth;
    if (!uid) throw new Error('Usuario no encontrado');
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startUpdatingNotes = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { auth } = getState();
    const { uid } = auth;
    const { active: note } = getState().journal;
    const newNoteToFB = { ...note };
    delete newNoteToFB.id;

    const updateNoteFB = doc(firebaseDB, uid, 'journal/notes', note.id);
    const setDocResp = await setDoc(updateNoteFB, newNoteToFB, { merge: true });
    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }
    const photoUrls = await Promise.all(fileUploadPromises);
    dispatch(setPhotosToActiveNote(photoUrls));
  };
};

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const { uid } = auth;
    const { active: note } = getState().journal;
    const docRef = doc(firebaseDB, uid, 'journal/notes', note.id);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(note.id));
  }
};