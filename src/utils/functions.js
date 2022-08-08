import 'dayjs/locale/pt-br';

export default function renderFullDate(weekday, date) {
    weekday = weekday.split("-")[0];
    return `${weekday[0].toUpperCase()+weekday.substring(1)}, ${date}`;
}