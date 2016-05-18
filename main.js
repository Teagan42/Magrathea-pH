var config = require('./config.json');
var GPIO = require('onoff').Gpio,
    ph_up = new GPIO(config.valves.ph_up),
    ph_down = new GPIO(config.valves.ph_down);
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var serialPort = new SerialPort("/dev/" + config.ph_probe.device, {
  baudrate: config.ph_probe.baud,
  parser: serialport.parsers.readline('\n');
});

port.on('data', function (data) {
  console.log('Data: ' + data);
});

