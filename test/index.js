
/* globals should, it, describe */

'use strict';

/**
 * Dependencies
 */
var toMs = require('../');

// End dependencies

describe('to-ms', function () {
  it('should be a function', function() {
    toMs.should.be.a.Number;
  });
  describe('seconds()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.seconds('60');
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(60 * 1000);
    });
  });
  describe('second()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.second();
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(1000);
    });
  });
  describe('minute()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.minute();
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(60 * 1000);
    });
  });
  describe('minutes()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.minutes('60');
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(60 * 60 * 1000);
    });
  });
  describe('hour()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.hour();
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(60 * 60 * 1000);
    });
  });
  describe('hours()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.hours('24');
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(24 * 60 * 60 * 1000);
    });
  });
  describe('day()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.day();
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(24 * 60 * 60 * 1000);
    });
  });
  describe('days()', function () {
    var ms;
    it('should returns a number', function () {
      ms = toMs.days('7');
      ms.should.be.a.Number;
    });
    it('should returns correct ms value', function () {
      ms.should.be.equal(7 * 24 * 60 * 60 * 1000);
    });
  });
  describe('chaining', function() {
    var ms;
    it('methods should chains', function() {
      ms = toMs
        .days(2)
        .hours(12)
        .minutes(20)
        .seconds(15);
      ms.should.be.a.Number;
    });
    it('singles shoulds chains too', function() {
      ms = toMs
        .day()
        .hour()
        .minute()
        .second();
      ms.should.be.a.Number;
    });
  });
});
