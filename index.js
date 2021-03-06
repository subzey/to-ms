'use strict';

module.exports = (function() {
  var number = new Number(0);
  return _extended(number);
})();

function _extended(number) {
  number._addMs        = _addMs;
  number.second      = number._addMs.bind(number, 1e3, 1);
  number.seconds     = number._addMs.bind(number, 1e3);
  number.minute      = number._addMs.bind(number, 6e4, 1);
  number.minutes     = number._addMs.bind(number, 6e4);
  number.hour        = number._addMs.bind(number, 36e5, 1);
  number.hours       = number._addMs.bind(number, 36e5);
  number.day         = number._addMs.bind(number, 864e5, 1);
  number.days        = number._addMs.bind(number, 864e5);
  return number;
}

function _addMs (multiplier, value) {
  var _value = multiplier * (value || 0);
  var number = new Number(this + _value);
  return _extended(number);
}
