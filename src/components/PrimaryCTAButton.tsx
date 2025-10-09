const PrimaryCTAButton = ({ label, callback }: { label: string; callback: () => void }) => {
  return (
    <button
      className="bg-darkblue w-fit rounded-4xl px-6 py-3 text-xl font-semibold text-white drop-shadow-2xl hover:cursor-pointer hover:brightness-125"
      onClick={callback}
      style={{ viewTransitionName: 'PrimaryCTAButton' }}
    >
      {label}
    </button>
  );
};

export default PrimaryCTAButton;
