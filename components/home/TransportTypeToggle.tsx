'use client'

interface TransportTypeToggleProps {
    selected: 'open' | 'enclosed'
    onChange: (type: 'open' | 'enclosed') => void
}

export default function TransportTypeToggle({ selected, onChange }: TransportTypeToggleProps) {
    return (
        <div className="flex gap-4 mt-4">
            <button
                type="button"
                onClick={() => onChange('open')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                    selected === 'open'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
            >
                Open Transport
            </button>
            <button
                type="button"
                onClick={() => onChange('enclosed')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                    selected === 'enclosed'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
            >
                Enclosed Transport
            </button>
        </div>
    )
}
