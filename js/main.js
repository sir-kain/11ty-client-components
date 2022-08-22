function $(selector) {
  return document.querySelector(selector);
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function getVariants() {
  let variants = [];
  try {
    const response = await fetch(
      "https://api.clever-cloud.com/v2/products/instances"
    );
    if (!response.ok) {
      throw response;
    }
    variants = await response.json();
  } catch (error) {
    console.error("getVariants =>", error);
  }
  return variants;
}

// window.addEventListener("DOMContentLoaded", async () => {
//   const variants = await getVariants();
//   const $ul = $("#variants");
//   variants.forEach(({ variant, flavors }) => {
//     const $li = createNode("li");
//     const $ccVariant = createNode("cc-variant");
//     $ccVariant.variant = variant;
//     $ccVariant.flavors = flavors;
//     append($li, $ccVariant);
//     append($ul, $li);
//   });
// });

window.addEventListener("variantSelected", (e) => {
  const $ul = $("#flavors");
  $ul.innerHTML = "";
  const { variant, flavors } = e.detail;
  flavors.forEach((flavor) => {
    const $isLand = createNode("is-land");
    const $li = createNode("li");
    const $ccFlavor = createNode("cc-flavor");
    $ccFlavor.variant = variant;
    $ccFlavor.flavor = flavor;
    $isLand.setAttribute("import", "./js/flavor.js");
    append($li, $ccFlavor);
    append($isLand, $li);
    append($ul, $isLand);
  });
});

window.addEventListener("flavorSelected", (e) => {
  const $ul = $("#cart");
  const { variant, flavor } = e.detail;
  const $isLand = createNode("is-land");
  const $li = createNode("li");
  const $ccCart = createNode("cc-cart");
  $ccCart.variant = variant;
  $ccCart.flavor = flavor;
  $isLand.setAttribute("import", "./js/cart.js");
  append($li, $ccCart);
  append($isLand, $li);
  append($ul, $isLand);
});

window.addEventListener("updateCounter", async (e) => {
  const $counter = $("cc-counter");
  let { price, action } = e.detail;
  $counter.price = price;
  $counter.action = action;
});
