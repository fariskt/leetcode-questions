/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let todate = new Date(date)
   const year = todate.getFullYear().toString(2);
   const month = (todate.getMonth()+1).toString(2)
   const day = todate.getDate().toString(2)
   return `${year}-${month}-${day}`
};