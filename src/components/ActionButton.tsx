'use client';

interface ActionButtonProps {
  icon: string;
  label: string;
}

export default function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <button className="w-[72px] h-[72px] bg-[#1E1E1E] hover:bg-[#252525] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95">
        <span className="text-3xl">{icon}</span>
      </button>
      <span className="text-gray-400 text-sm">{label}</span>
    </div>
  );
} 