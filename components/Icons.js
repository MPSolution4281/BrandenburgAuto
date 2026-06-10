export function Arrow({ diagonal = false }) {
  return (
    <svg className={diagonal ? "diagonal" : ""} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.4 3.5 10 8.1 7.9 10c1.1 2.4 3 4.3 5.4 5.4l1.9-2.1 4.7 2.6-.8 3.6c-.2.8-.9 1.4-1.8 1.4C9.6 20.9 3.1 14.4 3.1 6.7c0-.9.6-1.6 1.4-1.8l2.9-.7Z" />
    </svg>
  );
}
