export function count(counterEl: HTMLElement) {
    counterEl.innerHTML = `${(+counterEl.innerHTML) + 1}`;
}
