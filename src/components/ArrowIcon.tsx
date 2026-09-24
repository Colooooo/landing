type ArrowIconProps = {
  direction?: "up-right" | "down";
  className?: string;
};

export default function ArrowIcon({
  direction = "up-right",
  className,
}: ArrowIconProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "down" ? (
        <path d="M12 4v15m0 0-6-6m6 6 6-6" />
      ) : (
        <path d="M5 19 19 5M8 5h11v11" />
      )}
    </svg>
  );
}
