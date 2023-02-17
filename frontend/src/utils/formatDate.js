export function formatDate(dateStr) {
  const day = dateStr.substring(8, 10);
  const month = dateStr.substring(5, 7);
  const year = dateStr.substring(0, 4);
  const time = dateStr.substring(11, 16);
  return `${day}-${month}-${year} ${time}`;
}