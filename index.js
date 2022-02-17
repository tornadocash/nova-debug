const readline = require("readline");
const { Keypair } = require('tornado-pool/src/keypair')
const Utxo = require('tornado-pool/src/utxo')

const events = [
  '0x6746e827da1af19c569ea392c1045b80c6c41a426197cbb3e6dafad9a5070c90ae0bf3d1ff1c0e84e832d8a309365db3e9f0be034e205835c54f52e7274af5c22e0b64c3e04d5bbcddaafa1f5af2fde9133e2aa98a5f91f9c4558b72399a155f4f531bf2c7998b3586a7cc0a196898881438938b1364a3e3615b263d6f2cc9fea7bbdd743b195b0885e48e47bd8bb8df8cdfa4be0ca21fca192d66d3',
  '0x97af4547c21ca810c32ec8b7f4973b8b9e23a1ce077e1df57890c1307ca27b74c9075899a4c02b5c81e67828d123da8dcb07c6a6b19f7570bc42e288c143dfbf7b52c5061c0b68476607f836dad7c71498e9a941d9bb7681c5d4a76cd1d73e3d924a9abe12cf424071bb2e5f3e07a1b410c947c99ccfa33e350a105ccec1b5ba28dd6faaf9590256554fde1bd172a311c1a1b638b5e692885558a830',
  '0xc8903665e4201913f85e73433d3dcb020a8f5d5f77d442d09671cb155d697df8429aab8739b94e77c12cbee57b32d853066caa41d9c0c103d5947ae52758b5d5d84407a8f926986d4a1a3bb111172566e03419daae196d286338c6d15ff43a8839e39e07d7db4acc03255b2cd5c9e5dc7a3289873b2a67f0c526c97741d9bf8fe553886045dead6f7b5090abb36b8ff3dd51d0a2e231b6d06933df16',
  '0x2e9c367e4fb4de8297f88f9bbbd5e008dbf519fb77074b30e11ce00a60f0d58a2e8e35ab3205fe7a319ded437bf24673e86ae571379ac4203bcafbc48f4c2c191574b36ce04398b3a40545efc2273ff1ee110b1cda53299742c3d75bd59a86244267a10aece2d3b37a29a198d6aeaae06656e68168e6f150e116060da0dea3696b06cc802cf6fdb1671b126505671c07f143b2da2463f6f9930cc5a8',
]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your private key: ", function (answer) {
  const keypair = new Keypair(answer)
  console.log('Address:', keypair.address())

  for (const event of events) {
    try {
      const utxo = Utxo.decrypt(keypair, event)
      console.log('Decrypted:', utxo.amount)
    } catch (e) {
      console.log('Failed to decrypt utxo', event)
    }
  }
  process.exit(0)
})

