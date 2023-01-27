export const parseDateResponse = (dateISO: string | number): string => {
    const date = new Date(dateISO);
    return date.toLocaleDateString('ru-RU', {day: "numeric", month: "numeric"})
}