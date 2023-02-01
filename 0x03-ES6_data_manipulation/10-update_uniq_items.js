export default function updateUniqueItems(map) {
  if (!map || !(map instanceof Map)) throw new Error('Cannot process');
  for (const [key, value] of map) if (value === 1) map.set(value, 100);
  return map;
}