/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let res= names.map((n,index)=> ({
        n,
        num: heights[index]
    }))
    res.sort((a,b)=> b.num - a.num)
    let answer = res.map((item)=> item.n)
    return answer
};