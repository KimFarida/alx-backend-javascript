export default function cleanSet(set, startString) {
  const result = [];
  if (startString === '' || typeof (startString) !== 'string') return '';
  for (const item of set) {
    if (item && item.startsWith(startString)) result.push(item.slice(startString.lenght));
  }
  return result.join('-');
}
