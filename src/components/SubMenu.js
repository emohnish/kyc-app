import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #666666;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px 9px 0px;
  list-style: none;
  text-decoration: none;
  font-size: 13px;
  border: 1px 1px 0px 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    background: #666666a6;
    cursor: pointer;
    color:#cc0000;
  }
  &:active{
    background:#666666a6
     cursor: pointer;
     color:#ffffff;
  }

`;

const SidebarLabel = styled.span`
  margin-left: 11px;
`;


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav} >
        <div>
          {item.icon}
          <SidebarLabel >{item.title}</SidebarLabel>
        </div>
       
      </SidebarLink>
    </>
  );
};

export default SubMenu;
