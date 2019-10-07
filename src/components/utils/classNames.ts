export function classNames(...className: string[]): string {
  return className.join(' ').trim();
}

export function classVariants(namespace: string, variant: string) {
  const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1);
  return `${namespace}${capitalizedVariant}`;
}
