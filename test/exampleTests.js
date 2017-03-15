var assert = require('assert');
var should = require('should');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when value is not present', function() {
            assert.equal(-1, [1, 2, 4].indexOf(3));
        });
    });
});


describe('services/fileReader', function() {

    var fileReader = require('app/services/fileReader');

    describe('#read()', function() {
        it('should get filesize as 5000 when reading 5KB file', function() {
            return fileReader.reportFileSize('public/file5KB.txt')
            .should.eventually.
            equal(5000)
            .and.be.above(3000)
            .and.be.below(6000);
        });
    });
});
