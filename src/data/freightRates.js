/**
 * ============================================================
 * PAGHMAN FREIGHT CALCULATOR - RATE CONFIGURATION
 * ============================================================
 *
 * IMPORTANT:
 * The rates below are DEMO rates only.
 *
 * Replace them with Paghman's actual rates after the client
 * provides/approves the pricing structure.
 *
 * The React calculator reads its prices from this file.
 * Therefore, you do NOT need to modify the calculator UI
 * when prices change.
 * ============================================================
 */


/*
|--------------------------------------------------------------------------
| Shipment Types
|--------------------------------------------------------------------------
|
| unit:
|   kg  -> price is calculated according to weight
|   cbm -> price is calculated according to volume
|
*/

export const shipmentTypes = [
  {
    value: "air",
    label: "Air Freight",
    unit: "kg",
    unitLabel: "per kg",
  },

  {
    value: "sea",
    label: "Sea Freight",
    unit: "cbm",
    unitLabel: "per CBM",
  },

  {
    value: "land",
    label: "Land Transport",
    unit: "kg",
    unitLabel: "per kg",
  },
];


/*
|--------------------------------------------------------------------------
| Countries
|--------------------------------------------------------------------------
|
| Ye list bhi easily change ki ja sakti hai.
|
*/

export const countries = [
  {
    value: "uae",
    label: "United Arab Emirates",
  },

  {
    value: "pakistan",
    label: "Pakistan",
  },

  {
    value: "india",
    label: "India",
  },

  {
    value: "afghanistan",
    label: "Afghanistan",
  },

  {
    value: "tanzania",
    label: "Tanzania",
  },
];


/*
|--------------------------------------------------------------------------
| Freight Rates
|--------------------------------------------------------------------------
|
| Structure:
|
| shipment type
|     ↓
| origin
|     ↓
| destination
|     ↓
| price
|
| Example:
|
| air
|   uae
|      pakistan
|         rate: 4
|
| Means:
| $4 per KG
|
| These are DEMO numbers.
|--------------------------------------------------------------------------
*/

export const freightRates = {

  air: {

    uae: {
      pakistan: {
        rate: 4,
        currency: "USD",
      },

      india: {
        rate: 4.5,
        currency: "USD",
      },

      afghanistan: {
        rate: 5,
        currency: "USD",
      },
    },

    india: {
      pakistan: {
        rate: 4,
        currency: "USD",
      },
    },
  },


  sea: {

    uae: {
      pakistan: {
        rate: 250,
        currency: "USD",
      },

      india: {
        rate: 280,
        currency: "USD",
      },

      afghanistan: {
        rate: 320,
        currency: "USD",
      },
    },

    india: {
      pakistan: {
        rate: 230,
        currency: "USD",
      },
    },
  },


  land: {

    uae: {
      pakistan: {
        rate: 2,
        currency: "USD",
      },

      afghanistan: {
        rate: 2.5,
        currency: "USD",
      },
    },

    pakistan: {
      afghanistan: {
        rate: 1.5,
        currency: "USD",
      },
    },
  },
};


/*
|--------------------------------------------------------------------------
| Additional Charges
|--------------------------------------------------------------------------
|
| Agar future mein Paghman kahe ke:
|
| Documentation = $30
| Handling = $50
|
| to yahan values change/add ki ja sakti hain.
|
| Filhaal demo ke liye 0 rakhe gaye hain.
|--------------------------------------------------------------------------
*/

export const additionalCharges = {
  documentation: 0,
  handling: 0,
};


/*
|--------------------------------------------------------------------------
| Calculator Settings
|--------------------------------------------------------------------------
*/

export const calculatorSettings = {

  minimumWeight: 1,

  minimumVolume: 0.1,

  decimalPlaces: 2,

};