let hasDiscountCode = true;

function processOrder() {
  if (hasDiscountCode) {
    console.log("Discount applied to food order");
    hasDiscountCode = false;
  } else {
    console.log("No discount applied");
  }
}

processOrder();
processOrder();
