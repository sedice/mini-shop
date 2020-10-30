export function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

export function assert(condition, errmsg) {
  if (!condition) {
    throw new Error(errmsg);
  }
}

export function forEach(arg, fn, thisObj) {
  let target = arg;
  assert(typeof fn === 'function', 'fn must be a function');
  if (!isObject(target)) {
    target = [target];
  }
  if (Array.isArray(target)) {
    target.forEach((val, index) => {
      fn.call(thisObj, val, index);
    });
  } else {
    Object.keys(target).forEach((key) => {
      fn.call(thisObj, target[key], key);
    });
  }
}

export function getItem(key) {
  let ret = localStorage.getItem(key);
  try {
    ret = JSON.parse(ret);
  // eslint-disable-next-line no-empty
  } catch (err) {
  }
  return ret;
}

export function setItem(key, _val) {
  let val = _val;
  if (isObject(val)) {
    val = JSON.stringify(val);
  }
  localStorage.setItem(key, val);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}
