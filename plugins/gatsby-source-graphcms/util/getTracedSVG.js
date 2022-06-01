"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTracedSVG = getTracedSVG;

var _path = require("path");

var _gatsbyCoreUtils = require("gatsby-core-utils");

var _constants = require("./constants");

async function getTracedSVG({
  url,
  internal,
  filename,
  cache
}) {
  try {
    const {
      traceSVG
    } = require(`gatsby-plugin-sharp`);

    const filePath = await (0, _gatsbyCoreUtils.fetchRemoteFile)({
      url,
      cache
    });
    const extension = (0, _path.extname)(filePath);
    const image = await traceSVG({
      file: {
        internal,
        name: filename,
        extension,
        absolutePath: filePath
      },
      args: {
        toFormat: ``
      },
      fileArgs: {}
    });
    return image;
  } catch (err) {
    console.error(`[${_constants.PLUGIN_NAME}] In order to use the traced svg placeholder, you need to install gatsby-plugin-sharp`);
  }
}
//# sourceMappingURL=getTracedSVG.js.map