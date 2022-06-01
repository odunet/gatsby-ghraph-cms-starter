"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageDominantColor = getImageDominantColor;

var _gatsbyCoreUtils = require("gatsby-core-utils");

var _constants = require("./constants");

async function getImageDominantColor({
  url,
  cache
}) {
  try {
    const {
      getDominantColor
    } = require(`gatsby-plugin-sharp`);

    const filePath = await (0, _gatsbyCoreUtils.fetchRemoteFile)({
      url,
      cache
    });
    const backgroundColor = await getDominantColor(filePath);
    return backgroundColor;
  } catch {
    console.error(`[${_constants.PLUGIN_NAME}] In order to use the dominant color placeholder, you need to install gatsby-plugin-sharp`);
    return `rgba(0, 0, 0, 0.5)`;
  }
}
//# sourceMappingURL=getDominantColor.js.map