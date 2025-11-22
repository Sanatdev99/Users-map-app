import React, { useState } from 'react';

type Props = {
  name: string;
  onConfirm: (reason: string) => Promise<void>;
  onCancel: () => void;
};

export default function ConfirmDeleteModal({ name, onConfirm, onCancel }: Props) {
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const go = async () => {
	if (!reason.trim()) return;
	setLoading(true);
	await onConfirm(reason);
	setLoading(false);
  };

  return (
	<div>
	  <p>
		Delete <strong>{name}</strong>?
	  </p>
	  <textarea
		className='w-full border rounded-md p-2 mt-2'
		value={reason}
		onChange={e => setReason(e.target.value)}
		placeholder='Reason (required)'
	  />
	  <div className='flex justify-end gap-2 mt-3'>
		<button onClick={onCancel} className='border px-3 py-1 rounded-md'>
		  Cancel
		</button>
		<button
		  onClick={go}
		  disabled={!reason.trim() || loading}
		  className='bg-red-600 text-white px-3 py-1 rounded-md'
		>
		  {loading ? 'Deleting...' : 'Delete'}
		</button>
	  </div>
	</div>
  );
}