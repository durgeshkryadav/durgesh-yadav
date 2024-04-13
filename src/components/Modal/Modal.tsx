import { Height } from "@mui/icons-material";
import { Box, Button, Typography, colors } from "@mui/material";
import Modal from "@mui/material/Modal";

interface IModalComponentProps {
  isOpen: boolean;
  handleClose: () => void;
  notes: string;
  isSolution?: boolean;
}
const ModalComponent = ({
  isOpen,
  handleClose,
  notes,
  isSolution,
}: IModalComponentProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    Height: "auto",
    bgcolor: "#1c1b23",
    border: "2px solid #1c1b23",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography
            onClick={handleClose}
            sx={{
              backgroundColor: "1c1b23",
              cursor: "pointer",
              paddingBottom: "6px",
            }}
            id='modal-modal-title'
            variant='h6'
            component='h2'>
            Close Modal
          </Typography>
          {isSolution ? (
            <div className='bg-gray-800 rounded-lg p-6 overflow-auto max-h-96'>
              <pre className='text-white whitespace-pre-wrap'>
                {notes}
              </pre>
            </div>
          ) : (
            <Typography id='modal-modal-description'>{notes}</Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
