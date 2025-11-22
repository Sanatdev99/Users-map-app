import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'default' | 'primary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = 'default',
  ...rest
}: ButtonProps) {
  const base = 'px-3 py-1 rounded-md border';
  const s: Record<ButtonVariant, string> = {
	default: 'bg-white border-gray-200',
	primary: 'bg-brand-500 text-white border-brand-500',
	danger: 'bg-red-600 text-white border-red-600',
  };
  return (
	<button {...rest} className={`${base} ${s[variant]}`}>
	  {children}
	</button>
  );
}