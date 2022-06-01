"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBase64DataURI = getBase64DataURI;
exports.getImageBase64 = getImageBase64;

var _gatsbyCoreUtils = require("gatsby-core-utils");

var _fs = require("fs");

function getBase64DataURI({
  imageBase64
}) {
  return `data:image/png;base64,${imageBase64}`;
}

async function getImageBase64({
  url,
  cache
}) {
  const filePath = await (0, _gatsbyCoreUtils.fetchRemoteFile)({
    url,
    cache
  });
  const buffer = (0, _fs.readFileSync)(filePath);
  return buffer.toString(`base64`);
}
//# sourceMappingURL=getImageBase64.js.map