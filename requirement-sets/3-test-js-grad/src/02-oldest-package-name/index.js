/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", return
*  the "name" of the package that has the oldest "date" value

*/

const axios = require('axios');

async function oldestPackageName() {
  const res = await axios.get(
    'https://api.npms.io/v2/search/suggestions?q=react'
  );

  const packages = res.data.map(
    ({ package: { date } }) => (date = Date.parse(date))
  );

  const oldestDate = Math.min(...packages);
  const oldestPackage = res.data.filter(
    ({ package: { date } }) => Date.parse(date) === oldestDate
  );

  const result = oldestPackage[0].package.name;
  return result;
}

module.exports = oldestPackageName;
