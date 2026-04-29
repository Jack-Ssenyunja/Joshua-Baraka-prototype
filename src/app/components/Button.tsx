interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'disabled';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  fullWidth = false
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl transition-all duration-200';

  const variants = {
    primary: 'bg-[#C22026] text-white',
    secondary: 'bg-transparent border-2 border-[#C22026] text-[#C22026]',
    disabled: 'bg-gray-700 text-gray-500 cursor-not-allowed',
  };

  return (
    <button
      onClick={onClick}
      disabled={variant === 'disabled'}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
