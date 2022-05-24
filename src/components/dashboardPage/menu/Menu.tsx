import React, { useEffect, useState } from 'react';
import {
  MdViewAgenda,
  MdViewColumn,
  MdCode,
  MdSailing,
  MdCloudUpload,
  MdDashboard,
  MdAddToPhotos,
  MdSettings,
} from 'react-icons/md';
import { useResize, useMenuToggle, useMousePosition } from './hooks/MenuHooks';
import {
  MenuLayout,
  MenuToggle,
  MenuToggleIcon,
  MenuResize,
  MenuContainer,
  MenuSeparator,
} from './Menu.styles';
import MenuButton from './menuButton/MenuButton';
import DropdownMenu from './dropdownMenu/DropdownMenu';

const DEFAULT_MENU_WIDTH = 300; // px
const MENU_AUTOCLOSE_WIDTH = 250; // px
const MENU_HOVER_DELAY = 300; // ms

export default function Menu() {
  const [isActive, isHovered, changeMenuState] = useMenuToggle(
    true,
    MENU_HOVER_DELAY,
  );
  const [isResizing, resizeTrigger] = useResize();
  const [menuWidth, setMenuWidth] = useState(DEFAULT_MENU_WIDTH);
  const mousePosition = useMousePosition();

  useEffect(() => {
    if (isResizing) setMenuWidth(mousePosition.x);
  });

  useEffect(() => {
    if (!isResizing && menuWidth <= MENU_AUTOCLOSE_WIDTH) {
      changeMenuState();
      setMenuWidth(DEFAULT_MENU_WIDTH);
    }
  }, [isResizing]);

  return (
    <MenuLayout
      className={isResizing ? 'resizing' : ''}
      width={isActive || isHovered ? menuWidth : 0}
      onMouseEnter={changeMenuState}
    >
      <MenuResize
        className={isActive ? 'active' : ''}
        onMouseDown={() => isActive && resizeTrigger()}
      />
      <MenuToggle
        className={isActive ? 'active' : ''}
        onMouseDown={changeMenuState}
      >
        <MenuToggleIcon />
      </MenuToggle>
      <MenuContainer>
        <DropdownMenu title="Planning">
          <MenuButton
            icon={<MdViewAgenda />}
            title="Backlog"
            className="active"
          />
          <MenuButton icon={<MdViewColumn />} title="Board" />
        </DropdownMenu>
        <DropdownMenu title="Development">
          <MenuButton icon={<MdCode />} title="Code" />
          <MenuButton icon={<MdSailing />} title="Releases" />
        </DropdownMenu>
        <DropdownMenu title="Operations">
          <MenuButton icon={<MdCloudUpload />} title="Deployments" />
        </DropdownMenu>
        <MenuSeparator />
        <MenuButton icon={<MdDashboard />} title="Project pages" />
        <MenuButton icon={<MdAddToPhotos />} title="Add shortcut" />
        <MenuButton icon={<MdSettings />} title="Project settings" />
      </MenuContainer>
    </MenuLayout>
  );
}
