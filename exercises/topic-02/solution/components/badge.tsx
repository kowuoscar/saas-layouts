interface BadgeProps {
  type?: "success" | "error" | "warning";
  status: string;
}

const variantStyles = {
  success: "bg-green-50 text-green-700 ring-green-600/20",
  error: "bg-red-50 text-red-700 ring-red-600/20",
  warning: "bg-yellow-50 text-yellow-700 ring-yellow-600/20",
};

function Badge({ type = "success", status }: Readonly<BadgeProps>) {
  return (
    <span
      className={`inline-flex items-center rounded-full text-xs font-medium px-2 py-1 ring-1 ring-inset ${variantStyles[type]}`}
    >
      {status}
    </span>
  );
}

export default Badge;
