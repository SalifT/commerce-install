let locations = require('./locations')

const sections = {
  locations: {
    title: 'Locations',
    description: 'Explain stuffs good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.',
    required: true,
    options: [
      {
        title: 'International',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        default: true,
      },
      {
        title: 'USA',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_US,
      },
      {
        title: 'North America',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_NA,
      },
      {
        title: 'EU',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_EU,
      },
    ],
  },
  packages: {
    title: 'Packages',
    description: 'Explain stuffs good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.',
    options: [
      {
        title: 'Base',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/base',
        default: true,
      },
      {
        title: 'Catalog',
        description: 'Do we need a description with these things?',
        composer_package: 'drupal/catalog',
        location: locations.LOCATION_EU,
      },
      {
        title: 'Events',
        description: 'Do we need a description with these things?',
        composer_package: 'drupal/events',
        location: locations.LOCATION_US,
      },
      {
        title: 'Subscriptions',
        description: '',
        composer_package: 'drupal/subs',
        location: locations.LOCATION_NA,
      },
    ],
  },
  drupalBase: {
    title: 'Base',
    description: 'Explain stuffs good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.',
    required: true,
    options: [
      {
        title: 'Drupal',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/base',
        default: true,
      },
      {
        title: 'Lightning',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/lightning',
      },
      {
        title: 'Thunder',
        description: 'Do we need a description with these things?',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/thunder',
      },
      {
        title: 'Open Social',
        description: '',
        location: locations.LOCATION_INTL,
        composer_package: 'drupal/open-social',
      },
    ],
  },
  payments: {
    title: 'Payments',
    description: 'Explain stuffs good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.',
    options: [
      {
        title: 'Paypal',
        description: 'Do we need a description with these things?',
        image_src: '/static/gfx/paylogos/paypal.png',
        sponsored: true,
        composer_package: 'drupal/commerce_paypal',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'BrainTree',
        description: 'Do we need a description with these things?',
        image_src: '/static/gfx/paylogos/braintree.png',
        sponsored: true,
        composer_package: 'drupal/commerce_braintree',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Apple Pay',
        description: 'Do we need a description with these things',
        image_src: '/static/gfx/paylogos/apple-pay.png',
        sponsored: true,
        composer_package: 'drupal/commerce_applepay',
        location: locations.LOCATION_NA,
      },
      {
        title: 'Auth.net',
        description: 'Do we need a description with these things?',
        image_src: '/static/gfx/paylogos/authorize.png',
        location: locations.LOCATION_INTL,
      },
      {
        title: 'Moneris',
        description: 'Do we need a description with these things',
        location: locations.LOCATION_NA,
      },
      {
        title: 'Pay With Chickens',
        description: 'Do we need a description with these things',
        location: locations.LOCATION_US,
      },
    ],
    multiselect: true,
  },
  content: {
    title: 'Content',
    description: 'Explain stuffs good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.',
    options: [
      {
        title: 'Migrate',
        description: 'Do we need a description with these things?',
      },
      {
        title: 'Demo Content',
        description: 'Do we need a description with these things?',
      },
      {
        title: 'Clean',
        description: 'Do we need a description with these things?',
      },
    ],
  },
  security: {
    title: 'Updates & Security',
    description: 'Explain stuffs good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.',
  },
  build: {
    title: 'Build & Install',
    description: 'Explain stuffs good... ok? commmerce is an open source Adaptive Sales Platfasily configured and integrated into the tools that drive your business today and in the future.',
  },
}

module.exports = sections
