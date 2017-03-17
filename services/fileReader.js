var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

module.exports.reportFileSize = function(filename) {
    return fs.statAsync(filename)
    .then(function(stats) {
        return stats.size;
    });
};

module.exports.getCapitalLetters = function(filename) {
    return new Promise(function(resolve, reject) {
        var readStream = fs.createReadStream(filename);

        var caps = "";

        readStream.on('data', function(chunk) {
            var matches = chunk.toString().match(/[A-Z]+/g);
            for (var i = 0; i < matches.length; i++) {
                caps += matches[i];
            }
        });

        readStream.on('end', function() {
            resolve(caps);
        });

        readStream.on('error', function(err) {
            reject(err);
        });
    });
};
