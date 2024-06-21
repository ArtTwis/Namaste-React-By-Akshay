import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logoImg from './media/resturentlogo.png';

const Title = () => (
  <div id='title_div'>
    <img src={logoImg} alt='logo' id='logoImg' />
    <h1 id='title' key='title'>
      Food Villa
    </h1>
  </div>
);

// Config Driven UI
const ResturantList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '44614',
      name: 'Harishankar Veg Restro',
      uuid: '49184c57-131e-44e7-848c-5554fab6b815',
      city: '12',
      area: 'Shanti Path',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'bhrvsquves5iopgp38bd',
      cuisines: [
        'North Indian',
        'South Indian',
        'Chinese',
        'Italian',
        'Continental',
        'Pizzas',
        'Chaat',
        'Thalis',
        'Jain',
        'Snacks',
        'Desserts',
        'Fast Food',
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: '26 MINS',
      lastMileTravel: 1.2000000476837158,
      slugs: {
        restaurant: 'harishankar-veg-restro-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address: '222, Ram Gali 1, Raja Park, Jaipur',
      locality: 'Raja Park',
      parentId: 4864,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5709223~p=1~eid=00000185-aeff-7b84-3613-e87800e40143',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '44614',
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.2000000476837158,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.0',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '58238',
      name: 'Victorian Bakery',
      uuid: '735f1453-608f-47db-8c8e-5979867da4a3',
      city: '12',
      area: 'Sindhi Colony',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'a39ciucrlhzrcmfjouak',
      cuisines: ['Desserts'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: 'victorian-bakery-jawahar-nagar-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address:
        '71, Shanti Path, Sector 7, Jawahar Nagar, Jaipur, Rajasthan 302004',
      locality: 'Sindhi camp',
      parentId: 223011,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '30% off',
        shortDescriptionList: [
          {
            meta: '30% off | Use JUMBO',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '30% off up to ₹150 on orders above ₹479 | Use code JUMBO',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '30% OFF',
        shortDescriptionList: [
          {
            meta: 'Use JUMBO',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '30% off up to ₹150 on orders above ₹479 | Use code JUMBO',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '58238',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.9',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '59297',
      name: 'Shankar Samosa',
      uuid: '7d2f7527-7c1d-4006-9e6a-d829f0614fd8',
      city: '12',
      area: 'Tilak Nagar',
      totalRatingsString: '500+ ratings',
      cloudinaryImageId: 'd8pqyjprjyp6whgjgzo0',
      cuisines: ['Snacks'],
      tags: [],
      costForTwo: 8000,
      costForTwoString: '₹80 FOR TWO',
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: '25 MINS',
      lastMileTravel: 1.5,
      slugs: {
        restaurant: 'shankar-samosa-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address:
        '110111, Street 1, Near Vedic Kanya PG College, Gurunanak Pura, Raja Park, Jaipur',
      locality: 'Raja Park',
      parentId: 181774,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: 'FLAT75 off',
        shortDescriptionList: [
          {
            meta: 'FLAT75 off | Use SNACKSBINGE',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'FLAT75 off | Use SNACKSBINGE',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '₹75 OFF',
        shortDescriptionList: [
          {
            meta: 'Use SNACKSBINGE',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'FLAT75 off | Use SNACKSBINGE',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '59297',
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.4',
      totalRatings: 500,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '216674',
      name: 'Burger King',
      uuid: '1fbb8e24-ca16-4b6f-9f02-a1374ecf9290',
      city: '12',
      area: 'Adarsh Nagar',
      totalRatingsString: '500+ ratings',
      cloudinaryImageId: 'yveley3h73fhlm4ktydn',
      cuisines: ['Burgers', 'American'],
      tags: [],
      costForTwo: 35000,
      costForTwoString: '₹350 FOR TWO',
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: '26 MINS',
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: 'burger-king-pink-square-mall-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address:
        'G-12,13,14, Plot No 1/2, Pink Square Mall, Govind marg, Saket colony,  Adarsh Nagar, Jaipur, Rajasthan 302004',
      locality: 'Pink Square Mall',
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code STEALDEAL',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5728808~p=4~eid=00000185-aeff-7b84-3613-e87900e40476',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '216674',
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.1',
      totalRatings: 500,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '476810',
      name: "Pizza Baker's",
      uuid: 'c86969da-ea5d-42fd-a00c-0a5112269286',
      city: '12',
      area: 'Gali No03',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'hg5ltpylkr1b6kbvdxrg',
      cuisines: ['Pizzas', 'Pastas', 'Fast Food'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: '27 MINS',
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "pizza-baker's-raja-park-raja-park",
        city: 'jaipur',
      },
      cityState: '12',
      address:
        'SHOP NO.-430 GALI NO.-03 RAJAPARK SCHEME, JAIPUR RAJSTHAN - 302004',
      locality: 'Raja Park',
      parentId: 239269,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '476810',
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.9',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '447098',
      name: 'Burger Farm',
      uuid: 'e587ff07-d322-4564-bb34-41139aab7954',
      city: '12',
      area: 'Raja Park',
      totalRatingsString: '500+ ratings',
      cloudinaryImageId: 'oiu5ftyjduynpgpd1zao',
      cuisines: ['Snacks', 'American', 'Beverages', 'Continental'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: '25 MINS',
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: 'burger-farm-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address:
        'PLOT NO. 9 TILAK NAGAR GROUNDFLOOR SHOP 23, Jaipur, Jaipur I,Rajasthan, 302004',
      locality: 'Raja Park',
      parentId: 4660,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.7 kms',
      hasSurge: false,
      sla: {
        restaurantId: '447098',
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 500,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '620278',
      name: 'Aho Punjab By Terra Food Co.',
      uuid: 'cc49d809-c5a1-42d8-a980-fc00baa48aaf',
      city: '12',
      area: 'Ram Gali No 1',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'cea347108fc8148835ecf779c0be2994',
      cuisines: [
        'Punjabi',
        'Thalis',
        'Biryani',
        'North Indian',
        'Mughlai',
        'Desserts',
        'Beverages',
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: '23 MINS',
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: 'aho-punjab-by-terra-food-co.-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address: '213, ram gali no 1, raja park, Jaipur, Jaipur, , Rajasthan,',
      locality: 'Raja Park',
      parentId: 368424,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5658740~p=7~eid=00000185-aeff-7b84-3613-e87a00e4075e',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '620278',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.3',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '107916',
      name: 'Rominus Pizza And Burger',
      uuid: '6692709c-216a-4c04-9520-879d3d4faa62',
      city: '12',
      area: 'Raja Park',
      totalRatingsString: '500+ ratings',
      cloudinaryImageId: 'v78ugqeupwivpuwzn6ad',
      cuisines: [
        'Pizzas',
        'Italian-American',
        'American',
        'Barbecue',
        'Snacks',
        'Combo',
        'Italian',
        'Pastas',
        'Grill',
        'Sweets',
        'Desserts',
        'Beverages',
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: '30 MINS',
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: 'rominus-pizza-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address: 'PLOT NO 281 A GURUNANAKPURA RAJPARK JAIPUR RAJ 302004',
      locality: 'Gurunanakpura Rajpark',
      parentId: 8387,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.7 kms',
      hasSurge: false,
      sla: {
        restaurantId: '107916',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 500,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '59951',
      name: 'Hanuman Dhaba',
      uuid: '2ef61c8e-f18f-43f9-9506-42162fa82236',
      city: '12',
      area: 'Gali No 1',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'qjnhn3fdgg7yra0y7skp',
      cuisines: [
        'North Indian',
        'Biryani',
        'Thalis',
        'Mughlai',
        'Snacks',
        'Kebabs',
        'Afghani',
        'Tandoor',
        'Indian',
        'Grill',
        'Hyderabadi',
        'Lucknowi',
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: '₹400 FOR TWO',
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: '20 MINS',
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: 'hanuman-dhaba-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address: '72-76 Gali No 1, Raja Park, Jaipur\t',
      locality: 'Raja Park',
      parentId: 93305,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '10% off',
        shortDescriptionList: [
          {
            meta: '10% off | Use PARTY',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '10% off | Use code PARTY',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '10% OFF',
        shortDescriptionList: [
          {
            meta: 'Use PARTY',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '10% off | Use code PARTY',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '59951',
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.3',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '47615',
      name: 'Subway',
      uuid: '573a5b96-a17f-4d5d-9aba-579f408bbf6d',
      city: '12',
      area: 'Raja Park',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'gz54n5md8tpqwionzhxz',
      cuisines: [
        'Fast Food',
        'Healthy Food',
        'Salads',
        'Desserts',
        'Beverages',
        'Snacks',
        'Continental',
        'Italian',
        'Italian-American',
        'American',
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: '23 MINS',
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: 'subway-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address: '283-B, Gali 5, Raja Park, Jaipur',
      locality: 'Gali 5',
      parentId: 2,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '20% off',
        shortDescriptionList: [
          {
            meta: '20% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '20% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '20% off up to ₹50 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5729450~p=10~eid=00000185-aeff-7b84-3613-e87b00e40a73',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.2 kms',
      hasSurge: false,
      sla: {
        restaurantId: '47615',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.1',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '410679',
      name: 'GrillandGrillers',
      uuid: 'f3e2718a-ec76-4970-a826-618dbece63fb',
      city: '12',
      area: 'Jawahar nagar',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'sphxwos8sawzakyq3h4r',
      cuisines: ['Indian', 'Fast Food', 'Snacks', 'Beverages'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 38,
      minDeliveryTime: 38,
      maxDeliveryTime: 38,
      slaString: '38 MINS',
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: 'grillandgrillers-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address:
        '4/150 Jawahar Nagar, Jaipur 303004 Near MPS school Opposite to Prakash Kirana Store.',
      locality: 'Near Mps School',
      parentId: 246389,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: 'Free delight',
        shortDescriptionList: [
          {
            meta: 'Free delight on orders above ₹499',
            discountType: 'Freebie',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'Free delight on orders above ₹499',
            discountType: 'Freebie',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '',
        shortDescriptionList: [
          {
            meta: 'Free delight',
            discountType: 'Freebie',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'Free delight on orders above ₹499',
            discountType: 'Freebie',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '410679',
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '53717',
      name: 'Punjabi Amritsari Kulche',
      uuid: '11dec7e4-a9e1-46ee-bc34-6489cab25443',
      city: '12',
      area: 'Raja Park',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: 'rj63v5rkrxtefbmnpvnw',
      cuisines: ['North Indian'],
      tags: [],
      costForTwo: 10000,
      costForTwoString: '₹100 FOR TWO',
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: '23 MINS',
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: 'punjabi-amritsari-kulche-panchwati-circle-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address: 'House No- 165, Ram Gali No- 3, Near Suraj Maidan, Rajapark',
      locality: 'Panchwati Circle',
      parentId: 162105,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹100 | Use code WELCOMEBACK',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '53717',
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '44359',
      name: 'Sethi Bar-Be-Que-Panchwati Circle',
      uuid: 'fb643d22-30b9-4334-b20f-c608141f1029',
      city: '12',
      area: 'Raja Park',
      totalRatingsString: '500+ ratings',
      cloudinaryImageId: 'ypcc8quio98rj9xxwekh',
      cuisines: ['North Indian', 'Afghani', 'Mughlai'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: '26 MINS',
      lastMileTravel: 1.5,
      slugs: {
        restaurant: 'sethi-bar-be-que-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address:
        'Shop 11-12, Puniya Complex, Panchwati Circle, Near Hotel Ramada, Raja Park, Jaipur',
      locality: 'Panchwati Circle',
      parentId: 180073,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5714163~p=13~eid=00000185-aeff-7b84-3613-e87c00e40d51',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '44359',
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '4.0',
      totalRatings: 500,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '452275',
      name: 'Balmeet Kitchen',
      uuid: 'c9a4c841-2168-43e6-8dd2-cde84d0214a6',
      city: '12',
      area: 'Raja Park',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'v2xnqwe2gpepqqx3vecs',
      cuisines: ['North Indian', 'Thalis', 'Snacks', 'Combo'],
      tags: [],
      costForTwo: 25000,
      costForTwoString: '₹250 FOR TWO',
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: '30 MINS',
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: 'balmeet-kitchen-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address:
        '4/549, Sector No. 4, Jawahar Nagar, Jaipur, Jaipur, Jaipur, Jaipur- 1, Rajasthan',
      locality: 'Jawahar Nagar',
      parentId: 271941,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '452275',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '640053',
      name: 'OTG (On The Go)',
      uuid: 'd414fc08-9ecf-46e1-8a0b-95d2af500423',
      city: '12',
      area: 'Raja Park',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'kbuoqjwn3ea3fgcnvbz3',
      cuisines: ['Snacks', 'Burgers', 'Pizzas'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: '30 MINS',
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: 'otg-(on-the-go)-raja-park-raja-park',
        city: 'jaipur',
      },
      cityState: '12',
      address:
        'Shop No.5, House No. 7 JHA 1, Ground Floor, Opp. M. P. S School, Jawahar Nagar, Jaipur, Jaipur, Rajasthan',
      locality: 'Jawahar Nagar',
      parentId: 152961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: 'NEW',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '640053',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: true,
    },
    subtype: 'basic',
  },
];

const CardComponent = ({ restaurant }) => {
  return (
    <div className='card'>
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          restaurant.data?.cloudinaryImageId
        }
      />
      <h3>{restaurant.data?.name}</h3>
      <h4>{restaurant.data?.cuisines.join(', ')}</h4>
      <h5>{restaurant.data?.lastMileTravelString} minute</h5>
    </div>
  );
};

const CardComponent2 = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className='card card2'>
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(', ')}</h4>
      <h5>{lastMileTravelString} minute</h5>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className='Body'>
      <div className='resturantList'>
        <CardComponent restaurant={ResturantList[0]} />
        <CardComponent restaurant={ResturantList[1]} />
        <CardComponent restaurant={ResturantList[2]} />
        <CardComponent restaurant={ResturantList[3]} />
        <CardComponent restaurant={ResturantList[4]} />
        <CardComponent restaurant={ResturantList[5]} />
        <CardComponent restaurant={ResturantList[6]} />
        <CardComponent restaurant={ResturantList[7]} />
        <CardComponent restaurant={ResturantList[8]} />
        <CardComponent restaurant={ResturantList[9]} />
        <CardComponent restaurant={ResturantList[10]} />
        <CardComponent restaurant={ResturantList[11]} />
        <CardComponent restaurant={ResturantList[12]} />
        <CardComponent restaurant={ResturantList[13]} />
        <CardComponent restaurant={ResturantList[14]} />
      </div>
    </div>
  );
};

const Body2Component = () => {
  return (
    <div className='Body'>
      <div className='resturantList'>
        {ResturantList.map((restro) => {
          return <CardComponent2 key={restro.data.uuid} {...restro.data} />;
        })}
      </div>
    </div>
  );
};

const FooterComponent = () => {
  return <div className='Footer'>Footer</div>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <>
        <HeaderComponent />
        <BodyComponent />
        <Body2Component />
        <FooterComponent />
      </>
    </React.Fragment>
  );
};

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
