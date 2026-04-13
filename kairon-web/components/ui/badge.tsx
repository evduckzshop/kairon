type BadgeVariant = "industry" | "status" | "metric";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  industry: "bg-kairon-teal/20 text-kairon-teal border-kairon-teal/30",
  status: "bg-kairon-success/20 text-kairon-success border-kairon-success/30",
  metric: "bg-kairon-red/20 text-kairon-red border-kairon-red/30",
};

export default function Badge({
  variant = "industry",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
