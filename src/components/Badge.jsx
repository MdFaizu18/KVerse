const Badge = ({ children, variant = "default", className = "", ...props }) => {
    const variants = {
      default: "bg-pink-500 text-white",
      outline: "border border-pink-200 text-pink-500",
      secondary: "bg-gray-100 text-gray-700",
    }
  
    const variantStyle = variants[variant] || variants.default
  
    return (
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantStyle} ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }
  
  export default Badge
  