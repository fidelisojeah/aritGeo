module.exports = {

  aritGeo: (arrNums) => {
    if (Array.isArray(arrNums)) {
      if (!arrNums.some(isNaN)) {
        // arithmetic distance
        const aritDist = arrNums[1] - arrNums[0];
        // geometric distance
        const geoDist = arrNums[1] / arrNums[0];
        let arit = true;
        let geo = true;
        for (let i = 1; i < arrNums.length; i += 1) {
          // checking for arithmetric progression
          if ((arrNums[i] - arrNums[i - 1]) !== aritDist) {
            arit = false;
          }
          // checking for geometric progression
          if ((arrNums[i] / arrNums[i - 1]) !== geoDist) {
            geo = false;
          }
        }
        if (arit) {
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
    return -1;
  },
};
/* let arit = true;
    let geo = true;
    // check if array or not
    if (arrNums.length >= 1) {
      
      

      // test for arithmetic progression
      for (let i = 1; i < arrNums.length; i += 3) {
        // loop through elements
        // if ((arrNums[i] - arrNums[i - 1]) !== aritDist) {
        if (((arrNums[i] - arrNums[i - 1]) !== aritDist) ||
          (arrNums[i + 1] - arrNums[i]) !== aritDist) {
          // if (arrNums[i] === (arrNums[0] + ((i - 1) * aritDist))) //arithmetic progression formula
          arit = false;
        }
        if (arrNums[i] / arrNums[i - 1] !== geoDist ||
          arrNums[i + 1] / arrNums[i] !== geoDist) {
          geo = false;
        }
      }
      if (arit) {
        return 'Arithmetric';
      } else if (geo) {
        return 'Geometric';
      }
    } else {
      return 0;
    }
    return -1;
  }*/
