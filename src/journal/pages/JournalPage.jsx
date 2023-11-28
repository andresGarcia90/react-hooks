import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active: note } = useSelector(state => state.journal);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {
        (!!note) 
        ? <NoteView />
        : <NothingSelectedView />
      }
      
      {/* <Typography variant='h1'>JournalPage</Typography>
      <MailOutline></MailOutline> */}
      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.7 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
        disabled={isSaving}
      >
        <AddOutlined sx={{ fontSize: 30 }}></AddOutlined>
      </IconButton>
    </JournalLayout>
  );
};
