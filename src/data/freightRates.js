export const shipmentTypes = [
  {
    value: "sea",
    label: "Sea Transport",
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
    value: "china",
    label: "China",
  },

  {
    value: "afghanistan",
    label: "Afghanistan",
  },

  {
    value: "iran",
    label: "Iran",
  },
];

export const freightRates = {

  sea: {

    uae: {
      pakistan: {
        rate: 250,
        currency: "AED",
      },

      iran: {
        rate: 280,
        currency: "AED",
      },

      afghanistan: {
        rate: 320,
        currency: "AED",
      },
    },

    china: {
      pakistan: {
        rate: 230,
        currency: "AED",
      },
    },
  },

  land: {

    uae: {
      pakistan: {
        rate: 2,
        currency: "AED",
      },

      afghanistan: {
        rate: 2.5,
        currency: "AED",
      },
    },

    pakistan: {
      afghanistan: {
        rate: 1.5,
        currency: "AED",
      },
    },
  },
};

export const additionalCharges = {
  documentation: 0,
  handling: 0,
};

export const calculatorSettings = {
  minimumWeight: 1,
  minimumVolume: 0.1,
  decimalPlaces: 2,
};