/**
 * 
 * @author Chien.Pham <chien.pham@spiraledge.com>
 * @version 1
 */

/**
 * ================================================================ 
 */
  

/**
 * Function testing
 * @constructor // function is constructor function
 * @param {string} var1 - test 1
 * @param {string} var2 - test 2
 */
function foo(var1, var2) {
    
}

/**
 * @deprecated since version 0
 */
function foo1() {
    
}

/**
 * @constant
 * @default
 */
const PI = 3.14;

// description without @description (@desc)
/**
 * hi -> this is desc of func
 */
function foo2(params) {
    
}

// description without @description (@desc)
/**
 * hi -> this is desc of func
 * @param {Int16Array} params - desc
 */
 function foo2(params) {
    
}

// description without @description (@desc)
/**
 * @param {Int32List} params
 * @description hi
 */
 function foo2(params) {
    
}

// return func
/**
 * @return {number}
 */
function foo3() {
    return 1;
}