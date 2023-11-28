import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import { reduceString } from '../../helpers';
import { setActiveNote } from '../../store/journal/journalSlice';
import { Grid, ListItem, ListItemButton, ListItemText } from '@mui/material';

export const SideBarItem = ({ note }) => {
  const { id, title, body } = note;
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.journal);
  const newTitle = useMemo(() => reduceString(title), [title]);

  const selectItem = () => {
    const newActiveNote = notes.find((note) => note.id == id);
    dispatch(setActiveNote(newActiveNote));
  };

  return (
    <ListItem key={note.id} onClick={selectItem}>
      <ListItemButton>
        <TurnedInNot />
        <Grid container>
          <ListItemText primary={newTitle}></ListItemText>
          <ListItemText secondary={body}></ListItemText>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
