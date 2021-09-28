const { getClient } = require('./client')
const { callback } = require('./util')

async function createNodeContract (args) {
  const { a: url, m: mnemonic, json } = args
  const client = await getClient(url, mnemonic)

  const { n: nodeID, d: data, h: hash, p: publicIPs } = args

  let fnCallback = callback
  if (json) {
    fnCallback = JSONcallback
  }

  return client.createNodeContract(nodeID, data, hash, publicIPs, fnCallback)
}

async function updateNodeContract (args) {
  const { a: url, m: mnemonic, id, data, hash } = args
  const client = await getClient(url, mnemonic)

  return client.updateNodeContract(id, data, hash, callback)
}

async function createNameContract (args) {
  const { a: url, m: mnemonic, json, name } = args
  const client = await getClient(url, mnemonic)

  let fnCallback = callback
  if (json) {
    fnCallback = JSONcallback
  }

  return client.createNameContract(name, fnCallback)
}

async function cancelContract (args) {
  const { a: url, m: mnemonic, id } = args
  const client = await getClient(url, mnemonic)

  return client.cancelContract(id, callback)
}

async function getContract (args) {
  const { a: url, m: mnemonic, id } = args
  const client = await getClient(url, mnemonic)

  const contract = await client.getContractByID(id, callback)
  console.log(contract)
  process.exit(0)
}

module.exports = {
  createNodeContract,
  createNameContract,
  updateNodeContract,
  cancelContract,
  getContract
}

function JSONcallback (res) {
  if (res instanceof Error) {
    console.log(res)
    process.exit(1)
  }
  const { events = [], status } = res

  if (status.isFinalized) {
    // Loop through Vec<EventRecord> to display all events
    events.forEach(({ phase, event: { data, method, section } }) => {
      if (section === 'system' && method === 'ExtrinsicFailed') {
        console.log('Failed')
        process.exit(1)
      } else if (section === 'smartContractModule' && method === 'ContractCreated') {
        console.log(data.toJSON()[0])
        process.exit(0)
      }
    })
  }
}
