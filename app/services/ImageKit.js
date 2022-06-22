var ImageKit = require('imagekit')
require('dotenv').config()

// const imageKitConfig = {
//   publicKey: process.env.IMAGEKITPUBLIC,
//   privateKey: process.env.IMAGEKITPRIVATE,
//   urlEndpoint: process.env.IMAGEKITURL,
// };

var imageKitConfig = new ImageKit({
  publicKey: process.env.IMAGEKITPUBLIC,
  privateKey: process.env.IMAGEKITPRIVATE,
  urlEndpoint: process.env.IMAGEKITURL,
})

module.exports = imageKitConfig
