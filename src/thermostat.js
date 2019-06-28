'use strict';

function Thermostat() {
   this.temp = 20;
   this.MINTEMP = 10;
   this.MAXTEMP = 32;
   this.powerSavingMode = true;
   };

Thermostat.prototype.currentTemp = function() {
  return this.temp;
  };

Thermostat.prototype.up = function() {
    this.temp ++;

  };

  Thermostat.prototype.isPowerSavingModeOn = function() {
     return this.powerSavingMode === true;
  }


  Thermostat.prototype.switchPowerSavingModeOff = function() {
      this.powerSavingMode = false;
  }

  Thermostat.prototype.switchPowerSavingModeOn = function() {
     this.powerSavingMode = true;
  }





Thermostat.prototype.down = function() {
      if (this.temp > this.MINTEMP) {
      this.temp --;
      return this.temp
      } else {
        return 'minimum temperature reached'
      }

  };
