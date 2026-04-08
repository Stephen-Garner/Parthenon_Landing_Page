import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

// Rendered pixel size — logo.png is square so width == height
const sizes = { sm: 120, md: 150, lg: 280 };

export default function Logo({ className = "", variant = "dark", size = "md" }: LogoProps) {
  const px = sizes[size];

  return (
    <div className={`flex-shrink-0 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Parthenon Athletic Club"
        width={px}
        height={px}
        quality={90}
        priority
        // brightness-0 = pure black; invert flips to white for dark backgrounds
        className={`transition-all duration-300 ${
          variant === "light" ? "brightness-0 invert" : "brightness-0"
        }`}
      />
    </div>
  );
}
