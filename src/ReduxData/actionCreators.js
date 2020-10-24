function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

const SELECTED_IMAGE = 'SELECTED_IMAGE'
const SELECTED_MARKET_DATA = 'SELECTED_MARKET_DATA'
const SELECTED_MARKET = 'SELECTED_MARKET'

export const updateSelectedImage = makeActionCreator(SELECTED_IMAGE, 'payload')
export const updateSelectedMarket = makeActionCreator(SELECTED_MARKET, 'payload')
export const updateSelectedMarketData = makeActionCreator(SELECTED_MARKET_DATA, 'payload')