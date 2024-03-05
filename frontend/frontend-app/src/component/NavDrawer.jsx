// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { Link } from 'react-router-dom';
// import Logoutbtn from './Logoutbtn'; // Assuming Logoutbtn is correctly imported

// export default function NavDrawer() {
//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const options = [
//     { text: 'Home', path: '/' }, // Adjust paths as needed
//     { text: 'Dashboard', path: '/dashboard' },
//     { text: 'Order', path: '/order' },
//     { text: 'Wishlist', path: '/wishlist' },
//     { text: 'Cart', path: '/cart' },
//     { text: 'Contact Us', path: '/contact' },
//     { text: 'About Us', path: '/about' },
//   ];

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {options.map((option) => (
//           <ListItem key={option.text} disablePadding>
//             <Link to={option.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
//               <ListItemButton>
//                 <ListItemIcon> 
//                   {/* <Icon>{option.icon}</Icon>  */}
//                 </ListItemIcon>
//                 <ListItemText primary={option.text} />
//               </ListItemButton>
//             </Link>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         <ListItem disablePadding>
//           <ListItemButton component="div">
//             <Logoutbtn />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon for the hamburger button
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import Logoutbtn from './Logoutbtn'; // Assuming Logoutbtn is correctly imported

export default function NavDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const options = [
    { text: 'Home', path: '/' }, // Adjust paths as needed
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Order', path: '/order' },
    { text: 'Wishlist', path: '/wishlist' },
    { text: 'Cart', path: '/cart' },
    { text: 'Contact Us', path: '/contact' },
    { text: 'About Us', path: '/about' },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {options.map((option) => (
          <ListItem key={option.text} disablePadding>
            <Link to={option.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemButton>
                <ListItemIcon>
                  {/* Optional icon logic (optional) */}
                  {/* <Icon>{option.icon}</Icon> */}
                </ListItemIcon>
                <ListItemText primary={option.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component="div">
            <Logoutbtn />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('left', true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left" // Use 'left' anchor for the hamburger button
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}













// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import {Link} from 'react-router-dom'
// import Logoutbtn from './Logoutbtn'

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     left: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };
//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//       {['Home', 'Dashboard', 'Order', 'Wishlist', 'Cart', 'Contact Us', 'About us'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             {text === 'Home' ? (
//               <Link to="/Home" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </Link>
//             ) : (
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             )}
//           </ListItem>
//         ))}
//       </List>
//       <Divider/>
//       <List>
//       {/* Directly include the LogoutBtn here */}
//       <ListItem disablePadding>
//         <ListItemButton component="div">
//           <Logoutbtn />
//         </ListItemButton>
//       </ListItem>
//     </List>
//       {/* <List>
//         {[<Logoutbtn/>].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </Box>
//   );

//   return (
//     <div>
//       {['left'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }