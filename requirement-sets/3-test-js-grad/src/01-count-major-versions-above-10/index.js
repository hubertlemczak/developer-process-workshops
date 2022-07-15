/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", count
*  the number of packages that have a MAJOR semver version
*  greater than 10.x.x

*/

const axios = require('axios');

const countMajorVersionsAbove10 = async () => {
  const res = await axios.get(
    'https://api.npms.io/v2/search/suggestions?q=react'
  );
  const number = await res.data.filter(
    ({ package: { version } }) =>
      version.substring(0, version.indexOf('.')) >= 10
  ).length;
  return number;
};

module.exports = countMajorVersionsAbove10;
