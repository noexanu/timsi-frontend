import React from 'react';
import {
  MenuButtonLayout,
  MenuButtonIconContainer,
} from './MenuButton.styles';

interface MenuButtonProps {
  title: string,
  icon?: React.ReactChild,
  className?: string,
}

export default function MenuButton({
  icon,
  title,
  className,
}: MenuButtonProps) {
  return (
    <MenuButtonLayout className={className}>
      {icon && (
      <MenuButtonIconContainer>
        {icon}
      </MenuButtonIconContainer>
      )}
      {title}
    </MenuButtonLayout>
  );
}
