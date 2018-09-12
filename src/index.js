/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let k;
    let k_2;
    let k_3;
    let countTriangles = 0;
    const trianglesArr = [];
    for(let n = 0; n < preferences.length; n++) {
      k = preferences[n];
      k_2 = preferences[k - 1];
      k_3 = preferences[k_2 - 1];
      if(n + 1 === k_3 && !(~trianglesArr.indexOf(k)) && !(~trianglesArr.indexOf(k_2)) && !(~trianglesArr.indexOf(k_3)) && k !== k_2 && k !== k_3 && k_2 !== k_3 ) {
        trianglesArr.push(k, k_2, k_3);
        countTriangles += 1;
      }
    }
    return countTriangles;
}
