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
});
  // it('has reset function that makes temperature 20')
  //   thermostat.down()
  //   thermostat.reset()
  //   expect(thermostat.temp).toEqual(20)
  // });

  // it('if power saving mode is off max temp of 32 degrees', function() {
  //   thermostat.powerSaveOff()
  //   expect(thermostat.MAXTEMP).toEqual()
  // })
