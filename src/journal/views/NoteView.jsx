import { useDispatch, useSelector } from 'react-redux';
import { ImageGallery } from '../components';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { useForm } from '../../hooks';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startDeleteNote, startUpdatingNotes, startUploadingFiles } from '../../store/journal/thunks';
import Swal from 'sweetalert2';

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    massageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef('input');

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (massageSaved.length > 0) {
      Swal.fire({
        title: 'Success!',
        text: massageSaved,
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }
  }, [massageSaved]);

  const saveNote = () => {
    dispatch(startUpdatingNotes());
  };

  const onFileInputChange = ({target}) => {
    if (target.files === 0) {
      return  
    }
    dispatch(startUploadingFiles(target.files))
  }

  const onDelete = () => {
    dispatch(startDeleteNote())
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>

        <input type="file" multiple ref={fileInputRef} onChange={onFileInputChange} style={{display:'none'}}/>
        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          disabled={isSaving}
          onClick={saveNote}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />

        <Grid container justifyContent="end">
          <Button onClick={onDelete} sx={{mt: 2}} color="error">
            <DeleteOutline />
            Borrar
          </Button>
        </Grid>
        <ImageGallery images={note.imageUrls}/>
      </Grid>
    </Grid>
  );
};
