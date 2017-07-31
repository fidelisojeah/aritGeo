module.exports = {

  aritGeo: (arrNums) => {
    if (Array.isArray(arrNums)) {
      if (!arrNums.some(isNaN)) {
        // variable declaration
        // arithmetic distance
        const aritDist = arrNums[1] - arrNums[0];
        // geometric distance
        const geoDist = arrNums[1] / arrNums[0];
        let arit = true;
        let geo = true;
        for (let i = 1; i < arrNums.length; i += 1) { // loop through all elements
          if ((arrNums[i] - arrNums[i - 1]) !== aritDist) {
            // checking for nonarithmetric progression
            arit = false;
          }
          if ((arrNums[i] / arrNums[i - 1]) !== geoDist) {
            // checking for non geometric progression
            geo = false;
          }
        }
        if (arit) {
          // if arit has not been changed to false by virtue of non arithmetric progression
          return 'Arithmetric';
        } else if (geo) {
          return 'Geometric';
        }
      } else {
        return 'undefined';
      }
    } else {
      return 0;
    }
    return -1; // default value (signifies lack of Progression and errors)
  },
};
