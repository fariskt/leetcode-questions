/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  let word = title.toLowerCase().split(" ");
  let sliced = word.map((item) => {
    if(item.length >= 3){
       return item.charAt(0).toUpperCase() + item.slice(1)
    }else {
        return item
    }
  })
    return sliced.join(" ")
};