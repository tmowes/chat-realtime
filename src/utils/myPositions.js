// /* eslint-disable radar/cognitive-complexity */
// function generateTrade(stockQuant, stockPrice, action) {
//   return {
//     shares: stockQuant,
//     price: stockPrice,
//     action,
//   }
// }

// function generateFifo(securities, actions, quantity, price) {
//   const portfolio = new Map()

//   // console.log({ security })

//   // const mapReturn = securities.map((security, i) => {
//   //   const ticker = security
//   //   const action = actions[i].toString().toUpperCase()

//   //   return { ticker, action }
//   // })

//   // for (let i = 0; i < securities.length; i++) {
//   const mapReturn = securities.map((security, i) => {
//     // const ticker = securities[i].toString()
//     const ticker = security
//     const action = actions[i].toString().toUpperCase()
//     const stockQuant = Number(quantity[i])
//     const stockPrice = Number(price[i])
//     const activeTrades = []

//     const trade = generateTrade(stockQuant, stockPrice, action)

//     // console.log({ trade })
//     // console.log({ action })

//     if (action === 'COMPRA') {
//       activeTrades = portfolio.get(ticker)
//       // console.log({ activeTrades })

//       if (activeTrades == null) {
//         // portfolio.set(ticker, [trade])
//       } else {
//         activeTrades.push(trade)
//       }
//     }

//     if (action === 'VENDA') {
//       activeTrades = portfolio.get(ticker)

//       // console.log('(action === VENDA)')
//       // console.log({ activeTrades })

//       const precision = 2

//       if (activeTrades != null) {
//         let sharesToSell = Number(Number(trade.shares).toFixed(precision))
//         while (sharesToSell > 0) {
//           sharesToSell = Number(Number(sharesToSell).toFixed(precision))

//           if (activeTrades.length > 0) {
//             const itemToSell = activeTrades[0]
//             itemToSell.shares = Number(
//               Number(itemToSell.shares).toFixed(precision)
//             )

//             if (itemToSell.shares === sharesToSell) {
//               sharesToSell = 0
//               activeTrades.splice(0, 1)
//             } else if (itemToSell.shares < sharesToSell) {
//               sharesToSell -= itemToSell.shares
//               activeTrades.splice(0, 1)
//             } else {
//               itemToSell.shares -= sharesToSell
//               sharesToSell = 0
//             }
//           }
//         }

//         if (activeTrades.length === 0) {
//           portfolio.delete(ticker)
//         }
//       }
//     }
//   })
//   console.log(mapReturn)

//   // return mapReturn

//   return portfolio
// }

// function myPositions(security, actions, quantity, price) {
//   // function myPositions(TRADE_HISTORY!B3:B99, actions, quantity, price) {
//   const portfolio = generateFifo(security, actions, quantity, price)
//   const returnArray = []

//   portfolio.forEach((value, key) => {
//     let shares = 0
//     let totalCost = 0
//     let avgPrice = 0

//     value.map(trade => {
//       shares += trade.shares
//       totalCost += trade.shares * trade.price
//     })
//     avgPrice = totalCost / shares
//     returnArray.push([key, shares, avgPrice])
//   })
//   return returnArray
// }

// const initialSecurity = [
//   'CASH',
//   'JBSS3',
//   'ENBR3',
//   'JBSS3',
//   'BRKM5',
//   'COGN3',
//   'SBSP3',
//   'GRND3',
//   'JBSS3',
//   'BRKM5',
//   'ENBR3',
//   'BRKM5',
//   'MULT3',
//   'SBSP3',
//   'MRVE3',
// ]
// const initialActions = [
//   'DEPOSITO',
//   'COMPRA',
//   'COMPRA',
//   'VENDA',
//   'COMPRA',
//   'COMPRA',
//   'COMPRA',
//   'COMPRA',
//   'VENDA',
//   'VENDA',
//   'VENDA',
//   'VENDA',
//   'VENDA',
//   'VENDA',
//   'COMPRA',
// ]
// const initialQuantity = [
//   '1',
//   '200',
//   '300',
//   '100',
//   '100',
//   '1000',
//   '200',
//   '500',
//   '100',
//   '50',
//   '300',
//   '50',
//   '200',
//   '100',
//   '200',
// ]
// const initialPrice = [
//   '20000.00',
//   '27.11',
//   '19.40',
//   '28.91',
//   '39.33',
//   '4.12',
//   '41.85',
//   '8.26',
//   '31.25',
//   '43.55',
//   '19.65',
//   '44.27',
//   '23.38',
//   '42.97',
//   '18.60',
// ]

// export const myResult = myPositions(
//   initialSecurity,
//   initialActions,
//   initialQuantity,
//   initialPrice
// )
// // const result = myPositions(
// //  TRADE_HISTORY!B3:B99,
// //   initialActions,
// //   initialQuantity,
// //   initialPrice
// // )

// // console.log({ myResult })
