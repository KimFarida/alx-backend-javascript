export default function appendToEachArrayValue(array, appendString) {
  let value = [];
  for (const idx of array) {
    array += appendString + value
    
  }

  return array;
}
