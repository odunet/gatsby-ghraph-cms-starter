"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportPanic = reportPanic;

var _constants = require("./constants");

function reportPanic(id, message, error, reporter) {
  return reporter.panic({
    context: {
      id,
      sourceMessage: `[${_constants.PLUGIN_NAME}]: ${message} \n\n ${new Error(error)}`
    }
  });
}
//# sourceMappingURL=reportPanic.js.map