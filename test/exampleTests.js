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

    describe('#reportFileSize()', function() {
        it('should get filesize as 5000 when reading 5KB file', function() {
            return fileReader.reportFileSize('public/file5KB.txt')
            .should.eventually
            .equal(5000)
            .and.be.above(3000)
            .and.be.below(6000);
        });

        it('should fail when file is not found', function() {
            return fileReader.reportFileSize('fileThatDoesntExist.txt')
            .should.be.rejected();
        });
    });


    describe('#getCapitalLetters()', function() {
        it('should obtain nothing other than caps (A-Z) from the file', function() {
            return fileReader.getCapitalLetters('public/file5KB.txt')
            .should.eventually
            .match(/^[A-Z]+$/);
        });

        it('should throw exception when file does not exist', function() {
            return fileReader.getCapitalLetters('fileThatDoesntExist.txt')
            .should.be.rejected();
        });
    });
});