import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
// get multiple balances with a single request
const singleCallContractAddress = '0x068841237e0efcfbd3201f1f321fc915987d94e3'
const zeroAddress = '0x0000000000000000000000000000000000000000'
const provider = new ethers.providers.JsonRpcProvider('https://rpc.octano.dev')

const singleCallAbi = [
  'function balances(address[], address[]) view returns (uint256[])',
]
const singleCallContract = new ethers.Contract(
  singleCallContractAddress,
  singleCallAbi,
  provider
)

const ubiqPools = [
  '0x1Df625a92B4f781fd41aB99F46E60AaEeCaf37ed', // 1
  '0x2b6595ef4F7eDC1e1419e4ab75AB7D4c14Ee8fF3', // 10
  '0x24161F0d72C7944Be3EEd1160B7BA8e74367f48F', // 100
  '0x84cBF2Df2097cC59C6EE5a5F13e905B63AdA6f25', // 1000
]

export const state = () => ({
  ubiq: 0,
})

export const mutations = {
  SET_ENMAKU(state, liquidity) {
    state.ubiq = liquidity
  },
}

export const actions = {
  async fetch({ commit }) {
    const balance = await getBalances()
    commit('SET_ENMAKU', balance)
  },
}

const getBalances = async function () {
  const hexBalances = await singleCallContract.balances(ubiqPools, [
    zeroAddress,
  ])
  const decimals = new BigNumber(10).pow(18)
  let total = new BigNumber(0)
  for (const b in hexBalances) {
    const balance = new BigNumber(hexBalances[b].toString()).div(decimals)
    total = total.plus(balance)
  }
  return total
}
