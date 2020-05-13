import { ethers } from 'ethers'

export const isAddress = address => {
  try {
    return ethers.utils.getAddress(address)
  } catch (error) {
    return false
  }
}