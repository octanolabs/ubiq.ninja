import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
// get multiple balances with a single request

const providerPolygon = new ethers.providers.JsonRpcProvider('https://rpc-mainnet.maticvigil.com')
const wubqAddress = '0xb1c5c9b97b35592777091cd34ffff141ae866abd'

const wubqAbi = [
  'function totalSupply() view returns (uint256)',
]

const polygonContract = new ethers.Contract(
  wubqAddress,
  wubqAbi,
  providerPolygon
)

export const state = () => ({
  polygon: new BigNumber(0),
})

export const mutations = {
  SET_POLYGON(state, liquidity) {
    state.polygon = liquidity
  },
}

export const actions = {
  async fetch({ commit }) {
    const balance = await getBalances()
    commit('SET_POLYGON', balance)
  },
}

const getBalances = async function () {
  const hexBalance = await polygonContract.totalSupply()
  const decimals = new BigNumber(10).pow(18)
  let total = new BigNumber(hexBalance.toString()).div(decimals)
  return total
}
