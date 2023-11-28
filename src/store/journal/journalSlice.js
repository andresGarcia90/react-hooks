import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    counter: 10,
    isSaving: false,
    massageSaved: '',
    active: null,
    notes: [],
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.massageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes= action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.massageSaved = '';
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map(note => 
         note.id === action.payload.id 
          ? action.payload 
          : note
      )
      state.isSaving = false;
      state.massageSaved = `${action.payload.title}, actualizada`
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
      state.active = null;
    },
    cleanNotes: (state) => {
      state.active = null;
      state.counter = 10;
      state.isSaving = false;
      state.massageSaved = '';
      state.notes = [];
    }
  },
});

export const {
  increment,
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
  cleanNotes
} = journalSlice.actions;
