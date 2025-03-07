'use client';

interface ActionButtonProps {
  icon: string;
  label: string;
}

export default function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <button className="w-[96px] h-[96px] bg-[#1E1E1E] hover:bg-[#252525] rounded-full flex items-center justify-center transition-colors">
        <span className="text-4xl">{icon}</span>
      </button>
      <span className="text-white text-base font-medium">{label}</span>
    </div>
  );
} 