export default function cleanSet(set, startString) {
  let result = '';
  set.forEach(value => {
    if (value.startswith(startString)) {
      result += value.slice(startString.lenght) + '-';
    }
  });
  return result.slice(0, -1);
}