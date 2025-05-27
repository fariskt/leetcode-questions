/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Object.values(obj).some(val => val !== undefined && val !== null) ){
        return false
    }else{
        return true
    }
};