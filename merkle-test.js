const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')

const leaves = [
    '0x742d35Cc6634C05329253a844Bc454e4438f44e', 
    '0x1D1479C185d32EB90533a08b36B3CfA5F84A0E6', 
    '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    '0x4b6f5a3dfc911e992c3d8f38c6bb9d1563b5e9a5',
    '0x165CD37b4C644C2921454429E7F9358d18A45e14'].map(x => SHA256(x))
const tree = new MerkleTree(leaves, SHA256)
const root = tree.getRoot().toString('hex')
const leaf = SHA256('0x742d35Cc6634C05329253a844Bc454e4438f44e')
const leaf2 = SHA256('0x742d35Cc6634C05329253a844Bc454e4438f44v')
const proof = tree.getProof(leaf)
const proof2 = tree.getProof(leaf2)
console.log("leaf 1 verification: ", tree.verify(proof, leaf, root)) // true
console.log("leaf 2 verification:", tree.verify(proof2, leaf2, root)) // false