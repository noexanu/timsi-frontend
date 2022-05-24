import React from 'react';
import { useToggle } from '../hooks/MenuHooks';
import {
  DropdownMenuContainer,
  DropdownMenuHeaderContainer,
  DropdownMenuToggleIcon,
  DropdownMenuContentContainer,
} from './DropdownMenu.styles';

function DropdownMenu({
  title,
  children,
}: {
  title: string,
  children: React.ReactChild | React.ReactChild[];
}) {
  const [isActive, toggleActiveStatus] = useToggle();

  return (
    <DropdownMenuContainer>
      <DropdownMenuHeaderContainer>
        <DropdownMenuToggleIcon
          className={isActive ? 'active' : ''}
          onClick={() => toggleActiveStatus()}
        />
        {title}
      </DropdownMenuHeaderContainer>
      <DropdownMenuContentContainer
        className={isActive ? 'active' : ''}
      >
        {children}
      </DropdownMenuContentContainer>
    </DropdownMenuContainer>
  );
}

export default DropdownMenu;
