/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let countTriangles = 0;
   
    for(let i = 0, leng = preferences.length; i < leng; i++) {
      const firstAngle = preferences[i];
      const secAngle = preferences[firstAngle - 1];
      const thirdAngle = preferences[secAngle - 1];

      const firstEqualsThird = i + 1 === thirdAngle;
      const notNarciss = i + 1 !== preferences[i];

      if(firstEqualsThird && notNarciss) {
        countTriangles += 1;
      }
    }

    return countTriangles / 3;
}
