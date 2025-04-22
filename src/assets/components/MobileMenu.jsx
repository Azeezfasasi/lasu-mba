import React from 'react';
import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
import MenuIcon from '@rsuite/icons/Menu';

const RadioLabel = ({ children }) => <label style={{ padding: 7 }}>{children}</label>;

const MobileMenu = () => {
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState('right');

  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  return (
    <>
      <ButtonToolbar>
        <Button size="xs" onClick={() => handleOpen('xs')}>
          <MenuIcon style={{backgroundColor: "transparent"}}/>
        </Button>
      </ButtonToolbar>

      <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph rows={8} />
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default MobileMenu;