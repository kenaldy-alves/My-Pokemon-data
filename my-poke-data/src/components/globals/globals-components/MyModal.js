import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const MyModal = ({ children, open, handleModal, title }) => {

    return (
        <div style={{width:'400px', height:'400px'}}>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleModal}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModal} color="primary">
                        Voltar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MyModal;