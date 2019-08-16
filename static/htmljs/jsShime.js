// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function(callback, thisArg) {
  
      var T, k;
  
      if (this == null) {
        throw new TypeError(' this is null or not defined');
      }
  
      // 1. Let O be the result of calling toObject() passing the
      // |this| value as the argument.
      var O = Object(this);
  
      // 2. Let lenValue be the result of calling the Get() internal
      // method of O with the argument "length".
      // 3. Let len be toUint32(lenValue).
      var len = O.length >>> 0;
  
      // 4. If isCallable(callback) is false, throw a TypeError exception. 
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function');
      }
  
      // 5. If thisArg was supplied, let T be thisArg; else let
      // T be undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }
  
      // 6. Let k be 0
      k = 0;
  
      // 7. Repeat, while k < len
      while (k < len) {
  
        var kValue;
  
        // a. Let Pk be ToString(k).
        //    This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty
        //    internal method of O with argument Pk.
        //    This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {
  
          // i. Let kValue be the result of calling the Get internal
          // method of O with argument Pk.
          kValue = O[k];
  
          // ii. Call the Call internal method of callback with T as
          // the this value and argument list containing kValue, k, and O.
          callback.call(T, kValue, k, O);
        }
        // d. Increase k by 1.
        k++;
      }
      // 8. return undefined
    };
  }

  // 实现 ECMA-262, Edition 5, 15.4.4.19
// 参考: http://es5.github.com/#x15.4.4.19
if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
  
      var T, A, k;
  
      if (this == null) {
        throw new TypeError(" this is null or not defined");
      }
  
      // 1. 将O赋值为调用map方法的数组.
      var O = Object(this);
  
      // 2.将len赋值为数组O的长度.
      var len = O.length >>> 0;
  
      // 3.如果callback不是函数,则抛出TypeError异常.
      if (Object.prototype.toString.call(callback) != "[object Function]") {
        throw new TypeError(callback + " is not a function");
      }
  
      // 4. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
      if (thisArg) {
        T = thisArg;
      }
  
      // 5. 创建新数组A,长度为原数组O长度len
      A = new Array(len);
  
      // 6. 将k赋值为0
      k = 0;
  
      // 7. 当 k < len 时,执行循环.
      while(k < len) {
  
        var kValue, mappedValue;
  
        //遍历O,k为原数组索引
        if (k in O) {
  
          //kValue为索引k对应的值.
          kValue = O[ k ];
  
          // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
          mappedValue = callback.call(T, kValue, k, O);
  
          // 返回值添加到新数组A中.
          A[ k ] = mappedValue;
        }
        // k自增1
        k++;
      }
  
      // 8. 返回新数组A
      return A;
    };      
  }

  // Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {
  
      var k;
  
      // 1. Let O be the result of calling ToObject passing
      //    the this value as the argument.
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
  
      var O = Object(this);
  
      // 2. Let lenValue be the result of calling the Get
      //    internal method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;
  
      // 4. If len is 0, return -1.
      if (len === 0) {
        return -1;
      }
  
      // 5. If argument fromIndex was passed let n be
      //    ToInteger(fromIndex); else let n be 0.
      var n = +fromIndex || 0;
  
      if (Math.abs(n) === Infinity) {
        n = 0;
      }
  
      // 6. If n >= len, return -1.
      if (n >= len) {
        return -1;
      }
  
      // 7. If n >= 0, then Let k be n.
      // 8. Else, n<0, Let k be len - abs(n).
      //    If k is less than 0, then let k be 0.
      k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  
      // 9. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the
        //    HasProperty internal method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        //    i.  Let elementK be the result of calling the Get
        //        internal method of O with the argument ToString(k).
        //   ii.  Let same be the result of applying the
        //        Strict Equality Comparison Algorithm to
        //        searchElement and elementK.
        //  iii.  If same is true, return k.
        if (k in O && O[k] === searchElement) {
          return k;
        }
        k++;
      }
      return -1;
    };
  }

  if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /* , thisArg*/)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t)
      {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t))
          res.push(val);
      }
    }

    return res;
  };
}