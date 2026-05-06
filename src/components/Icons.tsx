import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function RadioIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4.9 19.1 19.1 4.9" />
      <path d="M7 17h12" />
      <path d="M8 17v4" />
      <path d="M17 17v4" />
      <rect x="5" y="7" width="14" height="10" rx="2" />
      <path d="M8 10h.01" />
      <path d="M11 10h5" />
      <path d="M11 13h3" />
    </IconBase>
  );
}

export function HeadphonesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 14a9 9 0 0 1 18 0" />
      <path d="M5 14v4a2 2 0 0 0 2 2h1v-8H7a2 2 0 0 0-2 2Z" />
      <path d="M19 14v4a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z" />
    </IconBase>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </IconBase>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}

export function MessageCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.7 8.7 0 0 1-3.7-.8L3 21l1.8-5A8.5 8.5 0 1 1 21 11.5Z" />
    </IconBase>
  );
}

export function BadgePercentIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 2 9.8 4.4 6.6 3.8 5.7 6.9 2.7 8.1 4 11.1 2.7 14.1l3 1.2.9 3.1 3.2-.6L12 22l2.2-4.2 3.2.6.9-3.1 3-1.2-1.3-3 1.3-3-3-1.2-.9-3.1-3.2.6L12 2Z" />
      <path d="m9 15 6-6" />
      <path d="M9.5 9.5h.01" />
      <path d="M14.5 14.5h.01" />
    </IconBase>
  );
}

export function BatteryIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M21 11v2" />
      <path d="M7 11h7" />
    </IconBase>
  );
}

export function Volume2Icon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </IconBase>
  );
}

export function SignalIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 20V4" />
    </IconBase>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M10 17H5a2 2 0 0 1-2-2V6h11v11" />
      <path d="M14 9h4l3 4v2a2 2 0 0 1-2 2h-1" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="16" cy="17" r="2" />
    </IconBase>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </IconBase>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </IconBase>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
    </IconBase>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </IconBase>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20.6 13.1 13.1 20.6a2 2 0 0 1-2.8 0L3 13.3V3h10.3l7.3 7.3a2 2 0 0 1 0 2.8Z" />
      <circle cx="7.5" cy="7.5" r=".5" />
    </IconBase>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </IconBase>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </IconBase>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </IconBase>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </IconBase>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-5" />
    </IconBase>
  );
}
