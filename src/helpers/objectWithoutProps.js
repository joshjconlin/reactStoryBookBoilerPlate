export default function (obj, keys) {
  const target = {};

  let filteredKeys = keys;

  if (typeof filteredKeys === 'function') {
    filteredKeys = Object.keys(keys.propTypes);
  }

  Object.keys(obj).forEach((key) => {
    if (filteredKeys.indexOf(key) < 0 && Object.prototype.hasOwnProperty.call(obj, key)) {
      target[key] = obj[key];
    }
  });

  return target;
}
