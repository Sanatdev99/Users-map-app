import React from 'react';

type ToastProps = {
  message: string;
  type?: 'info' | 'success' | 'error';
};

export default function Toast({ message, type = 'info' }: ToastProps) {
  const base = 'px-3 py-2 rounded-md font-semibold text-2xl';
  const bg =
	type === 'success'
	  ? 'bg-green-100 text-green-700'
	  : type === 'error'
	  ? 'bg-red-100 text-red-700'
	  : 'bg-blue-100 text-blue-700';
  return <div className={`${base} ${bg}`}>{message}</div>;
}