export default function appendToEachArrayValue(array, appendString) {
  value  = [];
  for (const idx of array) {
    value.push(appendString + idx)
  }

  return value;
}