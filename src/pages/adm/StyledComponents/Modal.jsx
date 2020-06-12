import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RedeTextField from '../../../components/RedeTextField/RedeTextField';
import RedeButton from '../../../components/RedeButton/RedeButton';

const Modal = ({
  open,
  handleClose,
  editFunction,
  mentoriaTitle,
  onChange,
}) => (
  <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edição de Mentoria</DialogTitle>
      <DialogContent>
        <DialogContentText>Insira o novo título da mentoria.</DialogContentText>
        <RedeTextField
          tipo="text"
          descricao="Título da mentoria"
          valor={mentoriaTitle || ''}
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions>
        <RedeButton
          descricao="Cancelar"
          onClick={handleClose}
          color="primary"
        />
        <RedeButton
          descricao="Aprovar"
          onClick={editFunction}
          color="primary"
        />
      </DialogActions>
    </Dialog>
  </div>
);

export default Modal;
