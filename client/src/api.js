const { ApiPromise, WsProvider } = require('@polkadot/api')

async function getApiClient () {
  const wsProvider = new WsProvider('ws://localhost:9944')
  return ApiPromise.create({
    provider: wsProvider,
    types: {
      Farm: {
        id: 'u64',
        name: 'Vec<u8>',
        entity_id: 'u64',
        twin_id: 'u64',
        pricing_policy_id: 'u64',
        certification_type: 'CertificationType',
        country_id: 'u64',
        city_id: 'u64'
      },
      Entity: {
        id: 'u64',
        name: 'Vec<u8>',
        country_id: 'u64',
        city_id: 'u64'
      },
      Twin: {
        id: 'u64',
        pubkey: 'Vec<u8>',
        entity_id: 'u64'
      },
      Node: {
        id: 'u64',
        farm_id: 'u64',
        twin_id: 'u64',
        resources: 'Resources',
        location: 'Location',
        country_id: 'u64',
        city_id: 'u64'
      },
      Location: {
        longitude: 'Vec<u8>',
        latitude: 'Vec<u8>'
      },
      Resources: {
        hru: 'u64',
        sru: 'u64',
        cru: 'u64',
        mru: 'u64'
      },
      CertificationType: {
        _enum: ['None', 'Silver', 'Gold']
      },
      PricingPolicy: {
        id: 'u64',
        name: 'Vec<u8>',
        currency: 'Vec<u8>',
        su: 'u64',
        cu: 'u64',
        nu: 'u64'
      },
      VolumeType: {
        disk_type: 'u8',
        size: 'u64'
      },
      // override custom
      Address: 'AccountId',
      LookupSource: 'AccountId',
      BalanceOf: 'Balance',
      Public: '[u8;32]'
    }
  })
}

module.exports = { getApiClient }