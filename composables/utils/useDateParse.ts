export function useDateParse(date: string) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const dateArray: string[] | undefined = date.split("-");

  if (!dateArray?.length) return "";

  return `${dateArray[2]} ${months[+dateArray[1] - 1]} ${dateArray[0]} г.`;
}
