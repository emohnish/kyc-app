import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #666666;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 160px;
  display: table;
  justify-content: center;
  position: absolute;
  top: 140px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  margin-top:-59px;
  margin-left:6px;
`;

const SidebarWrap = {
  width: "auto",
  background:"#ffffff",
  font:"13px",
  color:"white",
};


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        {/* <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav> */}
        <SidebarNav sidebar={sidebar}>
          <div className="SidebarWrap">
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </SidebarNav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Sidebar;
