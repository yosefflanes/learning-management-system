export const Button = ({
  title,
  size = "sm",
  variant = "primary",
  className,
}) => {
  const sizeButton = {
    sm: "w-24 h-10 px-4",
    md: "w-41 h-10 px-2",
  };

  const variantButton = {
    primary: "bg-button text-white",
    secondary: "bg-[#E8EBF2] text-primary hover:bg-gray-300",
  };

  return (
    <button
      className={`rounded-xl transition cursor-pointer ${sizeButton[size]} ${variantButton[variant]} ${className}`}
    >
      {title}
    </button>
  );
};
