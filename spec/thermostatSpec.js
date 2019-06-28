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

  it('has a minimum temperature of 10 degrees', function() {
    thermostat.temp = 10
    expect(thermostat.down()).toEqual('minimum temperature reached')
  })

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has a max temp of 25 degrees', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('has max temp is 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(32);
    });
  });

});
  // it('has reset function that makes temperature 20')
  //   thermostat.down()
  //   thermostat.reset()
  //   expect(thermostat.temp).toEqual(20)
  // });
