'use strict';

function Thermostat() {
   this.temp = 20;

   }

Thermostat.prototype.currentTemp = function() {
  return this.temp;
  };

Thermostat.prototype.up = function() {
    this.temp += 1;

  }

Thermostat.prototype.down = function() {
      // this.temp -= 1;
      if (this.temp > 10) {
      this.temp -= 1;
      return this.temp
      } else {
        return 'minimum temperature reached'
      }

  }
