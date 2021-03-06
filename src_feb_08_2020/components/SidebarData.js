import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Account Onboarding',
    path: '/reports',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    // {
    //   title: 'Reports',
    //   path: '/reports/reports1',
    //    cName: 'sub-nav'
    // },
    // {
    //   title: 'Reports 2',
    //   path: '/reports/reports2',
    //    cName: 'sub-nav'
    // },
    // {
    //   title: 'Reports 3',
    //   path: '/reports/reports3',
    //  }
    // ]
  },
  {
    title: 'Rollng Reviews',
    path: '/products',
  },
  {
    title: 'Blotter',
    path: '/team',
    // icon: <IoIcons.IoMdPeople />
  },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,

  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Message 1',
  //       path: '/messages/message1',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Message 2',
  //       path: '/messages/message2',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  {
    title: 'Summary',
    path: '/support',
  }
];
