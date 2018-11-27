const AppInfoParser = require('../build/index.js')
const parser = new AppInfoParser('../packages/test.ipa')
parser.parse().then(result => {
  console.log(' ----> ', result)
}).catch(e => {
  console.log('err ----> ', e)
})
