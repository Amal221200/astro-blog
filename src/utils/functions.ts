export function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',

    }

    const dateFormat = new Intl.DateTimeFormat('en-US', options);

    return dateFormat.format(date);
}

export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`