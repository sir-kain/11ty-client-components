const EleventyFetch = require("@11ty/eleventy-fetch");

async function getVariants() {
  const url = "https://api.clever-cloud.com/v2/products/instances";
  return EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json", // we’ll parse JSON for you
  });
}

module.exports = async function () {
  let variants = await getVariants();
  return variants;
};
