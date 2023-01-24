export default function appendToEachArrayValue(array, appendString) {
  array  = [];
  for (const idx of array) {
    array.push(appendString + idx)
  }
  
  return array;
}