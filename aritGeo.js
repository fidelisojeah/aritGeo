function aritGeo(arrNums) {
  let arit = true;
  let geo = true;
  // check if array or not
  if (arrNums.length >= 1) {
    // arithmetic distance
    const aritDist = arrNums[1] - arrNums[0];
    // geometric distance
    const geoDist = arrNums[1] / arrNums[0];

    // test for arithmetic progression
    for (let i = 1; i < arrNums.length; i += 1) {
      // loop through elements
      if ((arrNums[i] - arrNums[i - 1]) !== aritDist) {
        // if (arrNums[i] === (arrNums[0] + ((i - 1) * aritDist))) //arithmetic progression formula
        arit = false;
      }
      if (arrNums[i] !== (arrNums[0] * (geoDist ** (i - 1)))) { // if a_i = a_0 * r ^ (i-1)
        geo = false;
      }
    }
    if (arit) {
      return 'Arithmetic';
    } else if (geo) {
      return 'Geometric';
    }
  } else {
    return 0;
  }
  return -1;
}
