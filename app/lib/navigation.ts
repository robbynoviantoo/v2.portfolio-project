export function navigateWithTransition(to: string, label?: string) {
  window.dispatchEvent(new CustomEvent("start-page-transition", { detail: { to, label } }));
}