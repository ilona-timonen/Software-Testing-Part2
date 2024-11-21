module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",  // Käytetään Babelia ESM-syntaksin muuntamiseen
  },
};