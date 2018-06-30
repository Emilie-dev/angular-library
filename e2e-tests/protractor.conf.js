//jshint strict: false
exports.config = {

  allScriptsTimeout: 22000,
  ignoreUncaughtExceptions: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 70000
  }

};
