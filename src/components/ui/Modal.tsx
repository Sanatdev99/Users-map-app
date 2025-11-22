import React, { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  title: ReactNode;
};

export default function Modal({ children, onClose, title }: ModalProps) {
  return (
	<div className='fixed inset-0 bg-black/40 flex items-center justify-center z-40'>
	  <div className='bg-white rounded-lg shadow-xl p-5 max-w-lg w-full'>
		<div className='flex justify-between items-center mb-4'>
		  <h3 className='text-lg font-semibold'>{title}</h3>
		  <button onClick={onClose} className='text-gray-500 hover:text-gray-800'>✕</button>
		</div>
		{children}
	  </div>
	</div>
  );
}