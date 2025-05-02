"use client"

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-pink-500 text-white hover:bg-pink-600 shadow",
    outline: "border border-pink-200 bg-white hover:bg-pink-50 text-gray-700",
    ghost: "hover:bg-gray-100 text-gray-700",
    link: "text-pink-500 underline-offset-4 hover:underline p-0 h-auto",
  }

  const sizes = {
    default: "h-10 py-2 px-4 rounded-md",
    sm: "h-8 px-3 rounded-md text-sm",
    lg: "h-12 px-6 rounded-md text-lg",
    icon: "h-10 w-10 rounded-full p-0",
  }

  const variantStyle = variants[variant] || variants.default
  const sizeStyle = sizes[size] || sizes.default

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
