'use client';

interface ActionButtonProps {
  icon: string;
  label: string;
}

export default function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <button className="w-[96px] h-[96px] bg-[#1E1E1E] hover:bg-[#252525] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95">
        <span className="text-5xl">{icon}</span>
      </button>
      <span className="text-gray-400 text-base">{label}</span>
    </div>
  );
} 