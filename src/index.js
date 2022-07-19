import * as IPFS from 'ipfs-core'
import fs from 'fs'

const imagesDir = './src/images'

const files = fs.readdirSync(imagesDir)
const gateway = 'https://ipfs.io/ipfs/'
const ipfs = await IPFS.create()


for(let file of files) {
  const buffer = fs.readFileSync(`${imagesDir}/${file}`)
  const result = await ipfs.add(buffer)
  console.log(result)
  console.log(gateway+result.path)
}

