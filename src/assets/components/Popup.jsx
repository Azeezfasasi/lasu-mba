import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';

const Popup = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Auto open modal on page load
  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        {/* <Modal.Header>
          <Modal.Title><p className='font-semibold'>Welcome!</p></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className='text-justify'>
            <p className='font-semibold text-justify'>Dear Future Leaders,</p>
            <p>Welcome to the Lagos State University MBA program!</p>
            <p>We are a team of professionals and members of LASU MBA. We are here to assist in providing necessary academic and social supports to all the incoming Managers. Our mission is to provide you with the academic and social support needed to ensure a smooth and successful start to your MBA journey.</p>
            <p>From your screening process to settling in, we are here to assist you every step of the way and help make your experience as seamless as possible.</p>
            <br />
            <p>Once again, welcome to LASU. We wish you a rewarding journey ahead.</p>
            <br />

            <p>Warm regards,</p>
            <p className='italic'>Morad</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup
