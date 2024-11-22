module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest", 
  },
  collectCoverage: true, 
  coverageDirectory: "coverage", 
  coverageReporters: ["lcov", "text"], 
};