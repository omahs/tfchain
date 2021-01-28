const yargs = require('yargs')
const { exit } = require('yargs')
const {
  createEntity,
  updateEntity,
  getEntity,
  deleteEntity,
  getTwin,
  createTwin,
  deleteTwin,
  createFarm,
  getFarm,
  deleteFarm,
  addTwinEntity,
  removeTwinEntity,
  createNode,
  getNode,
  deleteNode,
  sign,
  getPrice
} = require('./src/contracts')

const argv = yargs
  .command('createEntity', 'Create a an entity', {
    name: {
      description: 'Name of the entity',
      alias: 'n',
      type: 'string'
    },
    country_id: {
      description: 'Id of the country',
      alias: 'c',
      type: 'number'
    },
    city_id: {
      description: 'Id of the city',
      alias: 't',
      type: 'number'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('updateEntity', 'Update a an entity', {
    name: {
      description: 'Name of the entity',
      alias: 'n',
      type: 'string'
    },
    country_id: {
      description: 'Id of the country',
      alias: 'c',
      type: 'number'
    },
    city_id: {
      description: 'Id of the city',
      alias: 't',
      type: 'number'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('getEntity', 'Get a entity by ID', {
    id: {
      description: 'entity ID',
      alias: 'id',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('createTwin', 'Create a twin', {
    peerID: {
      description: 'peer ID',
      alias: 'id',
      type: 'string'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('getTwin', 'Get a twin by ID', {
    id: {
      description: 'twin ID',
      alias: 'id',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('addTwinEntity', 'Add an entity to a twin', {
    signature: {
      description: 'Signature of the entity id + the twin id',
      alias: 'sig',
      type: 'string'
    },
    twin_id: {
      description: 'Id of the twin',
      alias: 'twin',
      type: 'number'
    },
    entity_id: {
      description: 'Id of the entity',
      alias: 'entity',
      type: 'number'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('deleteTwinEntity', 'Delete twin entity by id', {
    twin_id: {
      description: 'Id of the twin',
      alias: 'twin',
      type: 'number'
    },
    id: {
      description: 'entity ID',
      alias: 'id',
      type: 'number'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('deleteTwin', 'Delete your twin', {
    twin_id: {
      description: 'Id of the twin',
      alias: 'twin',
      type: 'number'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('createFarm', 'Create a Farm', {
    name: {
      description: 'Name of the farm',
      alias: 'n',
      type: 'string'
    },
    entityID: {
      description: 'id the entity',
      alias: 'entityID',
      type: 'number'
    },
    twinID: {
      description: 'Id of twin',
      alias: 'twinID',
      type: 'number'
    },
    pricingPolicyID: {
      description: 'Id of pricing policy',
      alias: 'policyID',
      type: 'number'
    },
    certificationType: {
      description: 'Certification type (none, silver, gold)',
      alias: 'cert',
      type: 'string'
    },
    city_id: {
      description: 'Id of the city',
      alias: 'cityID',
      type: 'number'
    },
    country_id: {
      description: 'Id of the country',
      alias: 'countryID',
      type: 'number'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('deleteFarm', 'Delete a farm by id', {
    id: {
      description: 'farm ID',
      alias: 'id',
      type: 'string'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('createNode', 'Create a node', {
    farmID: {
      description: 'farm ID',
      alias: 'farm',
      type: 'number'
    },
    twinID: {
      description: 'twin ID',
      alias: 'twin',
      type: 'number'
    },
    city_id: {
      description: 'Id of the city',
      alias: 'cityID',
      type: 'number'
    },
    country_id: {
      description: 'Id of the country',
      alias: 'countryID',
      type: 'number'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('getNode', 'Get a node by ID', {
    id: {
      description: 'node ID',
      alias: 'id',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('delete node', 'Delete a node by id', {
    id: {
      description: 'node ID',
      alias: 'id',
      type: 'string'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('sign', 'Sign an entity - twin id', {
    entityID: {
      description: 'entity ID',
      alias: 'entityid',
      type: 'number'
    },
    twinID: {
      description: 'twin ID',
      alias: 'twinid',
      type: 'number'
    },
    mnemonic: {
      description: 'Mnemonic to sign with',
      alias: 'm',
      type: 'string'
    },
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .command('getPrice', 'Get TFT price', {
    apiUrl: {
      description: 'Url of the api',
      alias: 'a',
      type: 'string'
    }
  })
  .help()
  .alias('help', 'h')
  .argv

if (argv._.includes('createEntity')) {
  // if (!argv.n || !argv.c || !argv.t) {
  //   console.log(argv)
  //   console.log('Bad Params')
  //   exit(1)
  // }

  createEntity(argv.n, argv.c, argv.t, argv.m, argv.a, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('updateEntity')) {
  // if (!argv.n || !argv.c || !argv.t) {
  //   console.log(argv)
  //   console.log('Bad Params')
  //   exit(1)
  // }

  updateEntity(argv.n, argv.c, argv.t, argv.m, argv.a, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('getEntity')) {
  if (!argv.id) {
    console.log('Bad Params')
    exit(1)
  }

  getEntity(argv.id, argv.a)
    .then(entity => {
      console.log('\nentity: ')
      console.log(entity)
      exit(0)
    })
    .catch(err => {
      console.log(err)
      exit(1)
    })
}
if (argv._.includes('deleteEntity')) {
  deleteEntity(argv.m, argv.a)
    .then(() => exit(0))
    .catch(err => {
      console.log(err)
      exit(1)
    })
}
if (argv._.includes('createTwin')) {
  createTwin(argv.peerID, argv.m, argv.a, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('addTwinEntity')) {
  addTwinEntity(argv.twin, argv.entity, argv.sig, argv.m, argv.a, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('deleteTwinEntity')) {
  removeTwinEntity(argv.twin, argv.entity, argv.m, argv.a, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('getTwin')) {
  if (!argv.id) {
    console.log('Bad Params')
    exit(1)
  }

  getTwin(argv.id, argv.a)
    .then(contract => {
      console.log('\n twin: ')
      console.log(contract)
      exit(0)
    })
    .catch(err => {
      console.log(err)
      exit(1)
    })
}
if (argv._.includes('deleteTwin')) {
  deleteTwin(argv.twin, argv.m, argv.a, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('createFarm')) {
  // if (!argv.n || !argv.c || !argv.t) {
  //   console.log(argv)
  //   console.log('Bad Params')
  //   exit(1)
  // }

  createFarm(argv.name, argv.entityID, argv.twinID, argv.policyID, argv.cert, argv.cityID, argv.countryID, argv.m, argv.a, (res) => {
    if (res instanceof Error) {
      console.log(res)
      exit(1)
    }
    const { events = [], status } = res
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  })
}
if (argv._.includes('getFarm')) {
  getFarm(argv.id, argv.a)
    .then(farm => {
      console.log('\n farm: ')
      console.log(farm)
      exit(0)
    })
    .catch(err => {
      console.log(err)
      exit(1)
    })
}
if (argv._.includes('deleteFarm')) {
  if (!argv.id) {
    console.log('Bad Params')
    exit(1)
  }

  deleteFarm(argv.id, argv.m, argv.a, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('createNode')) {
  createNode(argv.farmID, argv.twinID, argv.cityID, argv.countryID, argv.m, argv.a, (res) => {
    if (res instanceof Error) {
      console.log(res)
      exit(1)
    }

    const { events = [], status } = res
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('getNode')) {
  getNode(argv.id, argv.a)
    .then(node => {
      console.log('\n node: ')
      console.log(node)
      exit(0)
    })
    .catch(err => {
      console.log(err)
      exit(1)
    })
}
if (argv._.includes('deleteNode')) {
  if (!argv.id) {
    console.log('Bad Params')
    exit(1)
  }

  deleteNode(argv.id, argv.m, argv.a, ({ events = [], status }) => {
    console.log(`Current status is ${status.type}`)

    if (status.isFinalized) {
      console.log(`Transaction included at blockHash ${status.asFinalized}`)

      // Loop through Vec<EventRecord> to display all events
      events.forEach(({ phase, event: { data, method, section } }) => {
        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`)
      })
      exit(1)
    }
  }).catch(err => {
    console.log(err)
    exit(1)
  })
}
if (argv._.includes('sign')) {
  sign(argv.entityID, argv.twinID, argv.m, argv.a)
    .then(message => {
      console.log('\n message: ')
      console.log(message)
      exit(0)
    })
    .catch(err => {
      console.log(err)
      exit(1)
    })
}
if (argv._.includes('getPrice')) {
  getPrice(argv.a)
    .then(price => {
      console.log('\n price: ')
      console.log(price)
      exit(0)
    })
    .catch(err => {
      console.log(err)
      exit(1)
    })
}