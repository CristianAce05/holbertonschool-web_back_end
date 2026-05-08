export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString || startString === '') {
    return '';
  }
  
  const result = [];
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  
  return result.join('-');
}
