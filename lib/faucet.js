import { ethers } from 'ethers'

export const sendFunds = async (to, amount = '1.0', network='goerli') => {
  const privateKey = `0x${process.env.PRIVATE_KEY}`
  const provider = new ethers.providers.InfuraProvider(network)
  // const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545')
  const wallet = new ethers.Wallet(privateKey, provider)
  const transaction = {
    to,
    value: ethers.utils.parseEther(amount)
  };
  // Send the transaction
  const pendingTx = await wallet.sendTransaction(transaction)
  console.log('pending tx', pendingTx)
  return pendingTx.hash
} 