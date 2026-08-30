import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl, trackConversion } from "@/lib/whatsapp";

type Props = {
  packageName: string;
  label: string;
  analyticsId: string;
  className?: string;
  size?: "md" | "lg";
  fullWidth?: boolean;
};

export function WhatsAppButton({
  packageName,
  label,
  analyticsId,
  className,
  size = "md",
  fullWidth,
}: Props) {
  return (
    <a
      href={buildWhatsAppUrl(packageName)}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-id={analyticsId}
      aria-label={`${label} por WhatsApp`}
      onClick={() => trackConversion(analyticsId, { package: packageName })}
      className={cn(
        "btn-whatsapp inline-flex items-center justify-center gap-2.5 rounded-[14px] font-body font-bold tracking-[0.01em]",
        size === "lg" ? "h-[60px] px-8 text-[17px]" : "h-[54px] px-[22px] text-base",
        fullWidth ? "w-full" : "w-full sm:w-auto",
        className,
      )}
    >
      <MessageCircle size={21} strokeWidth={1.75} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
