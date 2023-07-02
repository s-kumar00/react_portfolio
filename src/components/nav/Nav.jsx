import React from 'react'
import './Nav.css'
import CottageIcon from '@mui/icons-material/Cottage';
import PersonIcon from '@mui/icons-material/Person';
// import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import CollectionsIcon from '@mui/icons-material/Collections';
// import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import {AiOutlineMessage} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className={({isActive}) => isActive? "active": undefined}>Home<CottageIcon/></NavLink>
      <NavLink to="/about" className={({isActive}) => isActive? "active": undefined}>About<PersonIcon/></NavLink>
      <NavLink to="/portfolio" className={({isActive}) => isActive? "active": undefined}>Project<CollectionsIcon/></NavLink>
      {/* <NavLink to="/service" className={({isActive}) => isActive? "active": undefined}>Service< MiscellaneousServicesIcon/></NavLink> */}
      {/* <NavLink to="/trainers" className={({isActive}) => isActive? "active": undefined}><SportsMartialArtsIcon/></NavLink> */}
      <NavLink to="/contact" className={({isActive}) => isActive? "active": undefined}>Contact<AiOutlineMessage/></NavLink>
    </nav>
  )
}

export default Nav
