export function getEmailAddress(): string {
  return process.env.NEXT_PUBLIC_EMAIL || "";
}

export function getMailtoHref(): string {
  return `mailto:${getEmailAddress()}`;
}
