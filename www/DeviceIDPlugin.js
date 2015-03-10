var exec = require('cordova/exec');

var DeviceIDPlugin = {
    getDeviceID: function(successCallback) {
        exec(successCallback, false, 'DeviceIDPlugin', 'getDeviceID', []);
    },
    getUDID: function(successCallback) {
        exec(successCallback, false, 'DeviceIDPlugin', 'getUniqueIdentifier', []);
    }
};

module.exports = DeviceIDPlugin;
