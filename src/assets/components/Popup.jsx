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
        <Modal.Header>
          <Modal.Title><p className='font-semibold'>Welcome!</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p className='font-semibold'>Good day Incoming Manager,</p>
            <p>We are a team of professionals and members of LASU MBA. We are here to assist in providing necessary academic and social supports to all the incoming Managers.</p>
            <p>The aim of this is to support and ensure that you have hitch free process during your screening and MBA journey (which we believe can be achieved).</p>
            <br />
            <p>Please note that we will address the members appropriately once we have all new managers added to this group.</p>
            <br />
            <a target='blank' href='https://chat.whatsapp.com/DOkruJS6Epl8jqdeFZ29X5'>For further information</a>
            <br /><br />
            <p>Once again you are welcome to LASU & God bless you.</p>

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
