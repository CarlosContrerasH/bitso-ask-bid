const BitsoClient = require('bitso-client');

const bitso = new BitsoClient({
  key:      "KEY",
  secret:   "SECRET"
})

bitso.ticker({
  params: {
    book: 'btc_mxn'
  },
  success:  data=>console.log('data', data),
  error:    data=>console.log('error', data)
})