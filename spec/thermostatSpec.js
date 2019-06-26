'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('starts at 20 degrees', function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('increases temperature with up()', function() {
    thermostat.up();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('decreases temperature with down()', function() {
    thermostat.down();
    expect(thermostat.currentTemp()).toEqual(19);
  });

});
