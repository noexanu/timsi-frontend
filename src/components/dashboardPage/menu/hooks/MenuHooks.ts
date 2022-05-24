import React, { useState, useEffect } from 'react';

export const useToggle = (initialState: boolean = false) => {
  const [status, setStatus] = useState(initialState);
  const toggleStatus = (state?: boolean) => (
    setStatus(typeof state === 'boolean' ? state : !status)
  );
  return [status, toggleStatus] as const;
};

export const useResize = () => {
  const [isResizing, setResizeStatus] = useState(false);
  const registerListeners = () => {
    setResizeStatus(true);
    document.addEventListener('mouseup', () => setResizeStatus(false), {
      once: true,
    });
  };
  return [isResizing, registerListeners] as const;
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const setFromEvent = (event: MouseEvent) => (
    setMousePosition({ x: event.clientX, y: event.clientY })
  );
  useEffect(() => {
    document.addEventListener('mousemove', setFromEvent);
    return () => document.removeEventListener('mousemove', setFromEvent);
  }, []);
  return mousePosition;
};

export const useHover = (hoverDelay: number = 0) => {
  const [isHovered, setHoverStatus] = useState(false);
  const registerListeners = (event: React.MouseEvent) => {
    const hoverTimeout = setTimeout(() => setHoverStatus(true), hoverDelay);
    const cancelHover = () => {
      clearTimeout(hoverTimeout);
      setHoverStatus(false);
    };
    event.currentTarget.addEventListener('mouseleave', cancelHover, {
      once: true,
    });
  };
  const cancelHover = () => setHoverStatus(false);
  return [isHovered, registerListeners, cancelHover] as const;
};

export const useMenuToggle = (
  intialActiveState: boolean = false,
  hoverDelay: number = 0,
) => {
  const [isActive, toggleActiveStatus] = useToggle(intialActiveState);
  const [isHovered, registerHoverListeners, cancelHover] = useHover(hoverDelay);
  const updateMenuState = (event?: React.MouseEvent) => {
    if (event && event.type === 'mouseenter') {
      if (!isActive) registerHoverListeners(event);
    } else {
      if (isActive) cancelHover();
      toggleActiveStatus();
    }
  };
  return [isActive, isHovered, updateMenuState] as const;
};
