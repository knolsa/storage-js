'use strict';

const index = require('../lib');
const assert = require('assert');

describe('test', function () {
    it('should work', function () {
        assert.equal('Hello Dumitru', index.hello('Dumitru'));
    });
});
