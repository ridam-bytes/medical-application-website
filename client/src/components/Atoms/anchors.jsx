import React, { ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';

const sizeMap = {
  small: '2xl:text-base text-sm',
  base: 'xl:text-base text-sm',
  large: ' text-base md:text-lg',
  xl: ' text-base md:text-xl',
  xxl: ' text-xl xl:text-2xl',
  '3xl': ' text-xl md:text-2xl xl:text-3xl',
};

const colorMap = {
  dark: 'text-black hover:text-primary',
  light: 'text-white',
};

const TextNavAnchor = ({
  text,
  target,
  href,
  color = 'dark',
  size = 'base',
  className,
  ...rest
}) => {
  const sizeClass = sizeMap[size];
  const colorClass = colorMap[color];
  return (
    <NavLink
      target={target}
      to={href}
      {...rest}
    className={ navData =>  (navData.isActive ?"text-green":"text-black" )+ " outline-none focus-visible:outline-none focus-visible:underline underline-offset-4 hover:text-green transition-colors duration-150 ease-in-out"}
    >
     {text}
    </NavLink>
  );
};

function TextAnchor({
  text,
  target,
  href,
  color = 'dark',
  size = 'base',
  className,
  ...rest
}) {
  const sizeClass = sizeMap[size]
  const colorClass = colorMap[color]
  return (
    <Link
      target={target}
      to={href}
      {...rest}
      className={`${sizeClass} ${colorClass} ${className} text-opacity-70 hover:text-opacity-100 focus:outline-none 
                  focus:underline decoration-from-font underline-offset-4 focus:text-opacity-100 transition-all`}
    >
      {text}
    </Link>
  )
}




const Anchor = ({ href, children, className = '' }) => {
  return (
    <Link className={className} to={href}>
      {' '}
      {children}
    </Link>
  );
};

export {  TextNavAnchor, Anchor ,TextAnchor  }