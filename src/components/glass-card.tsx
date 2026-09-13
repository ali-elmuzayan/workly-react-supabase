import type { HTMLAttributes } from "react";

export type GlassCardProps = HTMLAttributes<HTMLDivElement>;

const GlassCard = ({ className = "", ...props }: GlassCardProps) => {
  return <div className={`glass-card ${className}`} {...props} />;
};

export default GlassCard;
