const secrets = require('./secrets.json')
const Poloniex = require('poloniex.js')
const poloniex = new Poloniex(secrets.key, secrets.secret)

const async = require('async')

async.parallel({
  balances: poloniex.myBalances.bind(poloniex),
  ticker:   poloniex.getTicker.bind(poloniex),
}, function(err, data) {
  if (err) { throw err }

  const ticker = data.ticker
  const balances = data.balances

  let holdings = {}
  let balance = 0
  for(let symbol in balances) {
    const holding = parseFloat(balances[symbol])
    if (holding > 0) {
      balance += holding * ticker[symbol]
    }
  }

  console.log(`Holdings equal to BTC:${balance}`)
})
