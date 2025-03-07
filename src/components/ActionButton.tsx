'use client';

interface ActionButtonProps {
  icon: string;
  label: string;
}

export default function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </button>
      <span className="text-white text-sm">{label}</span>
    </div>
  );
} 