import { Toast } from 'vant';
import { assert } from './utils';

function defualtWarnFn(message = '') {
  Toast({
    message,
    position: 'top',
  });
}

/**
 * 规范化rules
 * @param {Array} rules
 */
function normalizeRules(userRules) {
  return userRules.map((rule) => {
    if (typeof rule === 'function') {
      return {
        validator: rule,
      };
    }
    assert(typeof rule.validator === 'function', 'rule.validator must be a function');
    return rule;
  });
}

/**
 * 校验工具,用来校验规则
 * @param {Function | Object} userRules RuleObj:{name:string,validator:function}
 * @param {Function} warnFn
 * @return (name:string)=> boolean 校验函数,传 name 只校验 name 对应的rule, 不传校验所有
 */
export default function createValidator(userRules = [], _warnFn) {
  let warnFn = _warnFn;
  if (typeof warnFn !== 'function') {
    warnFn = defualtWarnFn;
  }
  const rules = normalizeRules(userRules);
  return (name) => {
    let matchedRules = [];
    if (name) {
      matchedRules = rules.filter((rule) => rule.name === name);
      assert(matchedRules.length > 0, `can not found rules named ${name}`);
    } else {
      matchedRules = rules;
    }

    if (matchedRules.length === 0) {
      return true;
    }
    let isOk;
    let msg;
    for (let i = 0, l = matchedRules.length; i < l; i += 1) {
      [isOk, msg] = matchedRules[i].validator();
      if (!isOk) {
        warnFn(msg);
        return false;
      }
    }
    return true;
  };
}
