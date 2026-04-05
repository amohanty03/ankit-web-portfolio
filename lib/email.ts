export function getEmailAddress(): string {
  return (process.env.NEXT_PUBLIC_EMAIL ?? "").trim();
}

export function getMailtoHref(): string {
  const email = getEmailAddress();
  return email ? `mailto:${email}` : "mailto:";
}
