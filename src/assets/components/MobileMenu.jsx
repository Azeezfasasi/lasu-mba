import React from 'react';
import { Drawer, ButtonToolbar, Button } from 'rsuite';
import { Link } from 'react-scroll';
import MenuIcon from '@rsuite/icons/Menu';
import morad from '../images/morad.png';

const MobileMenu = () => {
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState('right');

  const handleOpen = value => {
    setSize('xs');
    setOpen(true);
  };

  return (
    <>
      <ButtonToolbar>
        <Button size="xs" onClick={() => handleOpen('xs')}>
          <MenuIcon style={{ backgroundColor: 'transparent' }} />
        </Button>
      </ButtonToolbar>

      <Drawer
        size={size}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
        className="custom-drawer"
      >
        <Drawer.Header>
          <div>
            <img src={morad} alt="Logo" className="w-[130px] h-[50px]" />
          </div>
        </Drawer.Header>
        <Drawer.Body>
          <div className="flex flex-col items-start justify-start gap-5 relative">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
              onClick={() => setOpen(false)}
              style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
            >
              Home
            </Link>
            <Link
              to="mission"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
              onClick={() => setOpen(false)} 
              style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
            >
              Mission
            </Link>
            <Link
              to="community"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
              onClick={() => setOpen(false)}
              style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
            >
              Community
            </Link>
            <Link
              to="steps"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
              onClick={() => setOpen(false)}
              style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
            >
              Steps
            </Link>
            <Link
              to="people"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
              onClick={() => setOpen(false)}
              style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
            >
              People
            </Link>
            <Link
              to="network"
              smooth={true}
              duration={500}
              className="cursor-pointer text-[#303a42] text-left font-['InriaSans-Regular',_sans-serif] text-lg font-normal uppercase"
              onClick={() => setOpen(false)}
              style={{textDecoration: "none", color: "oklch(68.1% 0.162 75.834)"}}
            >
              Network
            </Link>
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default MobileMenu;