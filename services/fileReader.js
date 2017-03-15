var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

module.exports.reportFileSize = function(filename) {
    return fs.statAsync(filename)
    .then(function(stats) {
        return stats.size;
    });
}
