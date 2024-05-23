'use client';
import React from "react";

type ICloseIconProps = {
  onClick: () => void;
  fill: string;
}

export default function CloseIcon(props: ICloseIconProps) {
  const { fill, onClick } = props;
  return (
    <svg onClick={onClick} className="cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill={fill}  xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.53566 0L0.000126243 3.53553L10.2531 13.7885L0 24.0416L3.53553 27.5772L13.7887 17.3241L24.0418 27.5772L27.5773 24.0416L17.3242 13.7885L27.5772 3.53555L24.0416 1.13845e-05L13.7887 10.253L3.53566 0Z" fill="#AFAFAF"/>
    </svg>
    
  );
};

