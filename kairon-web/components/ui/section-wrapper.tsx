interface SectionWrapperProps {
  variant?: "dark" | "light" | "gradient";
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const variantStyles = {
  dark: "bg-kairon-black",
  light: "bg-kairon-light text-kairon-dark",
  gradient: "bg-gradient-to-b from-kairon-dark to-kairon-navy",
};

export default function SectionWrapper({
  variant = "dark",
  className = "",
  children,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 lg:py-32 ${variantStyles[variant]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
